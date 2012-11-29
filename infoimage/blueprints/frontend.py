#coding=utf-8

from flask import Blueprint,flash,g,session,render_template,redirect,url_for,request
from jinja2.ext import do
import oauth2 as oauth
import urlparse

frontend = Blueprint('frontend',__name__)

@frontend.route('/',methods=['POST','GET'])
def index():
    error = None
    if request.method == 'POST':
        userInfo = g.db.query_db("select * from users where username=?",
                            [request.form['username']],one=True)
        if not userInfo:
            error = "Invalid username or password"
        elif request.form["password"] != str(userInfo["password"]):
            error = "Invalid username or password"
        else:
            lkd = g.db.query_db('select * from LinkedInToken where username=?',
                    [request.form['username']],one=True)
            if lkd:
                session['token'] = oauth.Token(key=lkd['Token'],
                                secret=lkd['Token_Secret'])
            session["login"] = userInfo
    return render_template('index.html',error=error)

@frontend.route('/regisit',methods=['POST','GET'])
def regisit():
    error = None
    if request.method == 'POST':
        namenuniq = g.db.query_db("select * from users where username=?",
                                [request.form['username']],one=True)
        if namenuniq:
            error = "Such username has been registed"
            return render_template("regisit.html",error=error)

        emailnuniq = g.db.query_db("select * from users where email=?",
                                [request.form['email']],one=True)
        if emailnuniq:
            error = "Such email has been registed"
            return render_template("regisit.html",error=error)
        try:
            nickname = request.form["nickname"]
            if not request.form["nickname"]:
                nickname = request.form["username"]
            g.db.execute("insert into users(username,nickname,email,password) values(?,?,?,?)",
                    [request.form['username'],nickname,
                     request.form['email'],request.form['password']])
            g.db.commit()
        except:
            error = "Something error"
            return render_template("regisit.html",error=error)
        session['login'] = g.db.query_db("select * from users where username=?",[request.form['username']],one=True)
        return redirect(url_for('.index'))
    return render_template('regisit.html')

consumer_key = 'w93p787h6jhu'
consumer_secret = 'S3nwPcbbzLBmNeXx'
request_token_url = 'https://api.linkedin.com/uas/oauth/requestToken?scope=r_fullprofile+r_emailaddress'
access_token_url = 'https://api.linkedin.com/uas/oauth/accessToken'
authorize_url = 'https://www.linkedin.com/uas/oauth/authenticate'
consumer = oauth.Consumer(consumer_key, consumer_secret)
@frontend.route('/RegisitFromLinkedIn', methods=['POST','GET'])
def RegisitFromLinkedIn():
    if request.method == 'POST':
        error = None
        PIN = request.form['pin']
        session['token'].set_verifier(PIN)
        client = oauth.Client(consumer, session['token'])
        resp, content = client.request(access_token_url, 'POST')
        access_token = dict(urlparse.parse_qsl(content))
        if not access_token.has_key('oauth_token'):
            error = 'We received the wrong PIN, please try again..'
            print error
            return redirect(url_for('.RegisitFromLinkedIn'))
        token = oauth.Token(key=access_token['oauth_token'],
                            secret=access_token['oauth_token_secret'])
        session['token'] = token
        #session['client'] = oauth.Client(consumer, token)
        client = oauth.Client(consumer, session['token'])
        resp,email = client.request('http://api.linkedin.com/v1/people/~/email-address?format=json')
        namenuniq = g.db.query_db("select * from users where username=?",
                                [request.form['username']],one=True)
        if namenuniq:
            error = "Such username has been registed"
            print error
            return redirect(url_for('.RegisitFromLinkedIn'))
        try:
            #resp,email = session['client'].request('http://api.linkedin.com/v1/people/~/email-address?format=json')
            resp,email = client.request('http://api.linkedin.com/v1/people/~/email-address?format=json')
#session ?
            nickname = request.form["username"]
            email = email.replace('\"','')
            print email+' '+nickname
            print request.form['username']+' '+request.form['password']
            g.db.execute("insert into users (username,nickname,email,password) values(?,?,?,?)",
                    [request.form['username'],nickname,
                     email,request.form['password']])
   #         g.db.commit()
            g.db.execute('insert into LinkedInToken (username,Token, Token_Secret) values(?,?,?)',
                    [request.form['username'],
                        access_token['oauth_token'],access_token['oauth_token_secret']])
            g.db.commit()
        except:
            error = "Something error"
            print error
            return redirect(url_for('.RegisitFromLinkedIn'))
        session['login'] = g.db.query_db("select * from users where username=?",[request.form['username']],one=True)
        print '.index'
        return redirect(url_for(".index"))
    client = oauth.Client(consumer)
    resp, content = client.request(request_token_url, 'POST')
    request_token = dict(urlparse.parse_qsl(content))
    request_url = "%s?oauth_token=%s" % (authorize_url, request_token['oauth_token'])
    session['token'] = oauth.Token(request_token['oauth_token'], request_token['oauth_token_secret'])
    return render_template("RegisitFromLinkedIn.html",request_url = request_url)


@frontend.route('/logout')
def logout():
    session.pop("login",None)
    return redirect(url_for(".index"))

@frontend.route('/member/')
@frontend.route('/member/<username>/') #<username>  ?
def getUser(username):
    resumes = g.db.query_db("select * from resumes where username=?",[username])
    isself = 'login' in session and str(session['login']["username"])==str(username)
    return render_template("showMember.html",resumes=resumes,isself=isself)

@frontend.route('/deleteReseme')
@frontend.route('/deleteResume/<username>/<resumeNum>')
def deleteResume(username,resumeNum):
    self = False
    if "login" in session:
        num = resumeNum.isalnum() and int(resumeNum) or -1
        g.db.execute("delete from resumes where id = ? and username = ?",[num,session["login"]["username"]])
        g.db.commit()
    return redirect(url_for(".getUser",username=username))

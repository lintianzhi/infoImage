#coding=utf-8

from flask import Blueprint,flash,g,session,render_template,redirect,url_for,request
from jinja2.ext import do

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
			g.db.execute("insert into users values(?,?,?,?)",
					[request.form['username'],nickname,
					 request.form['email'],request.form['password']])
			g.db.commit()
		except:
			error = "Something error"
			return render_template("regisit.html",error=error)
		session['login'] = g.db.query_db("select * from users where username=?",[request.form['username']],one=True)
		return redirect(url_for('.index'))
	return render_template('regisit.html')

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

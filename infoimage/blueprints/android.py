#coding=utf-8
from flask import Blueprint,render_template, request, jsonify, g
import simplejson
from func import *

android = Blueprint("android",__name__)

@android.route('/')
def index():
    return 'android'

@android.route('/login/')
#@android.route('/login/<username>/')

@android.route('/login/<username>/<password>')
def login(username,password):
    #loginfo = request.args.get('loginfo',type=str)
    #print loginfo
    #loginfo = simplejson.loads(loginfo)
    #username = loginfo['username']
    #password = loginfo['password']
    userInfo = checklogin(username,password)
    if not userInfo:
        return "Invalid username or password"
    oriresumes = g.db.query_db('select * from OriResumes where username = ?',[username])
    print oriresumes
    ids = [ori['id'] for ori in oriresumes]
    rst = simplejson.dumps(ids)
    return rst
    return jsonify(result=rst)

@android.route('/getresume/')

@android.route('/getresume/<rsid>')
def getresume(rsid):
    rs = g.db.query_db('select * from OriResumes where id = ?', [int(rsid)], one=True)
    if not rs:
        return 'error'
    return rs['inresume']


@android.route('/pushresume/<resumestr>')
def pushresume(resumestr):
    rs = simplejson.loads(resumestr)
    username = rs['username']
    print username
    try:
        g.db.execute('insert into OriResumes (username, inresume) values(?,?)', [username,resumestr])
        g.db.commit()
    except:
        return 'error'
    return 'right'

@android.route('/update/<resumestr>')
def update(resumestr):
    try:
        rs = simplejson.loads(resumestr)
        ID = rs['id']
        oldrs = g.db.query_db('select * from OriResumes where id=?',
                                [ID],one=True)
        if not oldrs:
            return 'error'
        username = rs['username']
        g.db.execute('delete from OriResumes where id=?',[ID])
        g.db.execute('insert into OriResumes (id,username, inresume) values(?,?,?)', [ID,username,resumestr])
        g.db.commit()
        return 'right'
    except:
        return 'error'

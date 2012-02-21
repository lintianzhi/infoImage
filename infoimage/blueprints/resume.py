#coding=utf-8
from flask import Blueprint,render_template,abort,request,jsonify,session,g
from jinja2 import TemplateNotFound
#from infoimage.translate import Translate
from translate import Translate

resume = Blueprint("resume",__name__)

@resume.route('/')
def getInfo():
	return render_template('resume1.html')

@resume.route('/getTranslatedResume')
def getTranslatedResume():  #change to ajax
	inInfo = request.args.get("inInfo",type=str)
	outInfo = Translate(inInfo)
	outInfo.tr1()
	if 'login' in session:
		g.db.execute("insert into resumes (username,outresume) values(?,?)",
				[session["login"]["username"],outInfo.tojson()])
		g.db.commit()
	return jsonify(result=outInfo.tojson())
		
@resume.route('/getTranslatedResume1')
def getTranslatedResume1():  #change to ajax
	inInfo = request.args.get("inInfo",type=str)
	outInfo = Translate(inInfo)
	outInfo.tr1()
	return jsonify(result=outInfo.tojson())

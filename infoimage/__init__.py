#coding=utf-8

from flask import Flask,g,request,render_template
from blueprints import resume,frontend
from db import DB
from jinja2.ext import do
from jinja2 import Environment

bps = (
		(frontend,''),
		(resume,"/resume"),
		)

app = Flask(__name__)
app.config.from_pyfile("config.cfg")

jinja_env = Environment(extensions=['jinja2.ext.do'])
app.jinja_env.extensions.update(Environment(extensions=['jinja2.ext.do']).extensions)

#register blueprints	
for bp,url_prefix in bps:
	app.register_blueprint(bp,url_prefix=url_prefix)

@app.before_request
def before_request():
	if not hasattr(g,"db"):
		g.db = DB()
	g.db.connect_db()
@app.teardown_request
def teardown_request(exception):
	if hasattr(g,'db'):
		g.db.close()

@app.route("/test/")
def test():
	return render_template("test.html")
if __name__=="__main__":
	app.run()



from infoimage import app
from infoimage.db import DB
import sys

def parseArgv():
	if sys.argv[1] == "init":
		DB().init_db()

if __name__=='__main__':
	if len(sys.argv)>1:
		parseArgv()
	else:
		app.run(host='0.0.0.0',port=8080)

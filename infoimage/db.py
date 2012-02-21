#coding=utf-8
from sqlite3 import dbapi2 as sqlite3
from contextlib import closing


class DB:
	def connect_db(self):
		self.db = sqlite3.connect("infoimage/tmp/infoimage.db")
		return self.db
#change to static method	
	def init_db(self):
		with closing(self.connect_db()) as db:
#			with app.open_resource(app.config['DBRESOURCE']) as f:
			from flask import Flask
			with Flask(__name__).open_resource("tmp/db.sql") as f:
				db.cursor().executescript(f.read())
			db.commit()
	def query_db(self,query,args=(),one=False):
		cur = self.db.execute(query,args)
		rv = [dict((cur.description[idx][0],value)
					for idx,value in enumerate(row))
					for row in cur.fetchall()]
		return (rv[0] if rv else None) if one else rv

	def execute(self,excstr,args=()):
		self.db.execute(excstr,args)
		
	def commit(self):
		self.db.commit()

	def close(self):
		self.db.close()
if __name__=='__main__':
	DB().init_db()

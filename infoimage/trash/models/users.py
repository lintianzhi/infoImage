#coding=utf-8
from infoimage.extensions import db

class User(db.Model):
	__tablename__ = "users"

	id = db.Column(db.Integer,primary_key=True)
	username = db.Column(db.String(20),unique=True)
	nickname = db.Column(db.String(20))
	email = db.Column(db.String(100),unique=True,nullable=False)
	password = db.Column(db.String(80),nullable=False)

	def __init__(self,username,email,password,nickname=None):
		self.username = username
		self.email = email
		self.password = password
		if nickname is None:
			self.nickname = username
		else 
			self.nickname = nickname

	def __repr__(self):
		return "<%s>" % self
	

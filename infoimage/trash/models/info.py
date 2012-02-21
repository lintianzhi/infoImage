#coding=utf-8

from infoimage.extensions import db
from infoimage.models.users import User

class BaseInfo(db.model):
	__tabliname__ = 'baseinfos'

	id=db.Column(db.Integer,primary_key=True)
	user_id = db.Column(db.Integer,
						db.ForeignKey(User.id,ondelete='CASCADE'),
						nullable=False)
	starttime = db.Column(db.Double,nullable=False)
	endtime = db.Column(db.Double,nullable=False)
#是要转成字符串存还是分开存还是转成字符串分开存还是不存呢

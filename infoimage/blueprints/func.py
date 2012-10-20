#coding=utf-8
from flask import g

def checklogin(username,password):
    userInfo = g.db.query_db("select * from users where username=?",
            [username],one=True)
    if not userInfo:
        return False
    elif password != str(userInfo["password"]):
        return False
    return userInfo

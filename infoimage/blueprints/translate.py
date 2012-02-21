#coding=utf-8
from random import randint
import simplejson


def getColor():
	return randint(0,256),randint(0,256),randint(0,256)
class Translate:
	def __init__(self,info=None):
		try:
			self.info = simplejson.loads(info)
#		except JSONDecodeError,e:
#			print e
		except Exception,e:
			print e
	def tojson(self):
		return simplejson.dumps(self.out)
	def getAxis(self):
		axis = {}
		try:
			starttime = self.info["fundamental"]["starttime"]
			self.starttime = starttime
			endtime = self.info["fundamental"]["endtime"]
			axis["starttime"] = starttime
			axis["xn"] = 0
			axis["xp"] = endtime - starttime + 1
			axis["yn"] = 10
			axis["yp"] = 10
		except Exception,e:
			print e
		return axis
	def parseTime(self,time):
		year = time/100 - self.starttime
		month = time%100/12.0
		return round(year+month,2)

	def getLines(self):
		lines = []
		describes = [] #!!
		try:
			i = 0  #to change the location of text everytime
			for study in self.info["studys"]:
				line = {}
				xAxis = []
				yAxis = []
				for evaluate in study["evaluates"]:
					xAxis.append(self.parseTime(evaluate["time"]))
					yAxis.append(evaluate["score"])
				line["x"] = xAxis
				line["y"] = yAxis
				line["color"] = getColor()
				lines.append(line)

				locate = i%len(study["evaluates"])
				i += 1
				text = {}
				text["x"] = xAxis[locate]
				text["y"] = yAxis[locate]
				text["text"] = study["skillname"]
				describes.append(text)
		except Exception,e:
			print e
		finally:
			return lines,describes
	
	def getHistograms(self):
		histograms = []
		describes = []
		try:
			for work in self.info["works"]:
				histogram = {}
				histogram["x1"] = self.parseTime(work["begintime"])
				histogram["x2"] = self.parseTime(work["endtime"])
				histogram["y"] = -1*work["score"]
				histogram["color"] = getColor()
				
				histograms.append(histogram)
				
				text = {}
				text["x"] = histogram["x1"]
				text["y"] = histogram["y"]
				text["text"] = work["position"]+","+work["company"]
				describes.append(text)
		except Exception,e:
			print e
		finally:
			return histograms,describes
					
	def tr1(self):
		self.out = {}
		self.out["axis"] = self.getAxis()
		self.out["lines"],lineDescribes = self.getLines()
		self.out["histograms"],hisDescribes = self.getHistograms()
		self.out["describes"] = lineDescribes+hisDescribes
if __name__ == "__main__":
	a = "{\"fundamental\":{\"starttime\":2010,\"endtime\":2015},\"studys\":[{\"skillname\":\"c\",\"begintime\":201006,\"evaluates\":[{\"time\":201010,\"score\":3},{\"time\":201012,\"score\":4}]},{\"skillname\":\"java\",\"begintime\":201006,\"evaluates\":[{\"time\":201110,\"score\":3},{\"time\":201112,\"score\":4}]}],\"works\":[{\"company\":\"Microsoft\",\"position\":\"typewriter\",\"begintime\":201010,\"endtime\":201102,\"score\":2},{\"company\":\"Microsoft\",\"position\":\"programer\",\"begintime\":201110,\"endtime\":201205,\"score\":2}]}"
	tr = Translate(a)
	tr.tr1()
	print tr.tojson()

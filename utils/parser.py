+import csv

def open():
    with open('skyscraper.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    return reader


def getInfo(year):
    reader = open()
    dict = {}
    for row in reader:
        if row[8] <= year && row[8] > 0:
            l = {'city':row[5], 'height':row[16], "latitude":row[23], "longitude":row[25], "name":row[29]}
            if not row[8] in dict.keys:
                dict[row[8]] = [];
            dict[row[8]].append(l)




            
"""
def getHeight():
    reader = open()
    for row in reader:
        

def getName():
    reader = open()
    for row in reader:

def getLocation():
    reader = open()
    for row in reader:

def getUsage():
    reader = open()
    for row in reader:

"""

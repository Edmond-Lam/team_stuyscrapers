import csv

def open():
    with open('skyscraper.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    return reader


def getInfo():
    reader = open()
    for row in reader:
        


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

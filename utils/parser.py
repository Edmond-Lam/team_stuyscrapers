import csv
import json


def getInfo(file):
    dic = {}
    with open(file, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            year = row['completed.year']
            if year != 0:
                year = str(year)
                if year not in dic.keys():
                    dic[year] = []
                building = {}
                building['name'] = row['name']
                building['height'] = row['height']
                building['material'] = row['material']
                building['location'] = [row['latitude'], row['longitude']]
                building['city'] = row['city']
                purpose = []
                if row['telecommunications']:
                    purpose.append('telecommunications')
                if row['residential']:
                    purpose.append('residential')
                if row['office']:
                    purpose.append('office')
                building['purpose'] = purpose
                dic[year].append(building)
    return dic

def makeJson(fileIn, fileOut):
    with open(fileOut, 'w') as fo:
        data = getInfo(fileIn)
        json.dump(data, fo)

makeJson('../data/skyscrapers.csv', '../data/skyscrapers.json')

            
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

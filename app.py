from flask import Flask, render_template, session, redirect, url_for, request
from utils import accounts, initTables, docs, infohttps://github.com/Edmond-Lam/team_stuyscrapers.git

app = Flask(__name__)

@app.route("/", methods = ['GET', 'POST'])
def login():
    return render_template('home.html')

@app.route("/map", methods = ['GET', 'POST'])
def makeMap():
    return render_template('map.html') # needs fxns for parsed data

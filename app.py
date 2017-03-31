from flask import Flask, render_template, session, redirect, url_for, request
from utils import parser

app = Flask(__name__)

@app.route("/", methods = ['GET', 'POST'])
def login():
    return render_template('home.html')

@app.route("/map", methods = ['GET', 'POST'])
def makeMap():
    return render_template('map.html') # needs fxns for parsed data

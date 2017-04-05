from flask import Flask, render_template, session, redirect, url_for, request, jsonify
from utils import parser
import json

app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template('home.html')

@app.route('/map/')
def map():
    return render_template('map.html')


if __name__ == "__main__":
    app.debug = True
    app.run()

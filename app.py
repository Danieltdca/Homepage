from flask import Flask, render_template, request, redirect, session, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_session import Session

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("layout.html")

@app.route("/bio")
def my_bio():
    return render_template("my_bio.html")

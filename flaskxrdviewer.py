from flask import Flask, render_template, url_for, request, redirect, make_response, jsonify
import numpy as np
import plotly
import plotly.graph_objs as go
import json
import os
import pandas as pd
import datetime

from xrddata import XRDData


ALLOWED_EXTENSIONS = set(['txt', 'dat'])
UPLOAD_DIRECTORY = 'static/uploads'

app = Flask(__name__)

xrd_data = XRDData()

@app.route("/")
# @app.route("/home")
def home():
    xrd_JSON_plotly = xrd_data.JSON_plotly()
    return render_template('home.html', xrd_dicts=xrd_data.xrd_dicts, plot_data=xrd_JSON_plotly)

def allowed_file(filename):
    # eg. filemane = 'hoge.txt'
    # eg. '.' in filename -> True
    # eg. filename.rsplit('.', 1) -> ['hoge', 'txt']
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route("/adddata", methods=["POST"])
def adddata():
    keys = []
    for key in request.files:
        keys.append(key)
    addNum = 0
    for key in keys:
        file = request.files[key]
        if file and allowed_file(file.filename):
            filename = file.filename
            filepath = os.path.join(UPLOAD_DIRECTORY, filename)

            # temporarilly save the file
            file.save(filepath)

            # load data as numpy array
            data = np.loadtxt(filepath)

            # remove the temporarilly saved file
            os.remove(filepath)

            x = data[:,0]
            y = data[:,1]
            time_posted = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')

            # add data to xrd_data
            xrd_data.add_data(filename, x, y, time_posted)
            addNum += 1

    # make json for plotly
    response = xrd_data.JSON_plotly_last(addNum)
    response = jsonify(response)
    response.status_code = 200

    return response

@app.route("/release", methods=["POST"])
def releasedata():
    xrd_data.release_all_data()
    return redirect(url_for('home'))


    
if __name__ == '__main__':
    app.run(debug=True)

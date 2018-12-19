from flask import Flask, render_template, url_for, request, redirect, make_response, jsonify
import numpy as np
import plotly
import plotly.graph_objs as go
import json
import os
import pandas as pd
import datetime
import io

from xrddata import XRDData


ALLOWED_EXTENSIONS = set(['txt', 'dat'])

app = Flask(__name__)

xrd_data = XRDData()

@app.route("/")
def home():
    json_plotly = xrd_data.json_plotly()
    return render_template('home.html', xrd_dicts=xrd_data.xrd_dicts, plot_data=json_plotly)

def allowed_file(filename):
    '''
    扱うファイルが*.txtもしくは*.dat（ALLOWED_EXTENSIONSにある拡張子のファイル）ならTrueを返す
    Arguments:
        filename {str} -- 対象となるファイル名
    
    Returns:
        boolean -- ALLOWED_EXTENSIONSにある拡張子のファイルならTrue，それ以外ならFalse
    '''
    # eg. filemane = 'hoge.txt'
    # eg. '.' in filename -> True
    # eg. filename.rsplit('.', 1) -> ['hoge', 'txt']
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route("/adddata", methods=["POST"])
def add_data():
    '''
    xrd_dataオブジェクトのxrd_dictsにデータを追加し，
    追加した辞書をplotlyオブジェクトに変換，さらにはそれをjson形式にダンプしたものを
    レスポンスとして返す

    Returns:
        flask.wrappers.Response -- 返すレスポンス
        　　　　　　　　　　　　　　　　jsonレスポンスには'application/json'というcontent-typeのヘッダーが必要だが，
        　　　　　　　　　　　　　　　　このflask.wrappers.Responseオブジェクトはjsonにそれをくっつけてくれている
        　　　　　　　　　　　　　　　　（だから普通にjson.dumpでダンプしただけのjson文字列をresponseにしてもうまくいかない）
    '''

    keys = []
    for key in request.files:
        keys.append(key)
    add_num = 0
    for key in keys:
        file = request.files[key]
        if file and allowed_file(file.filename):
            # read xrd data
            xrd_dict = read_data_from(file) # {'filename':filename, 'x': x, 'y': y, 'time_posted': time_posted}

            # add data to xrd_data
            xrd_data.add_data(**xrd_dict)
            add_num += 1

    # make json for plotly
    response = xrd_data.json_plotly_last(add_num)
    response = jsonify(response) # jsonifyによりflask.wrappers.Responseオブジェクトを作成

    return response

def read_data_from(file):
    '''
    フロントサイドからajaxにより送られてきたFileStorageオブジェクトから
    データを読みこみ，xrd_dictとして返す
    Arguments:
        file {FileStorage} -- ファイルの情報がはいったオブジェクト
    
    Returns:
        dict -- filename, x, y, time_postedが入った辞書
    '''
    filename = file.filename

    # load data as numpy array
    data_temp = io.TextIOWrapper(file.stream._file)
    data = np.array(data_temp.read().strip().split(), float).reshape(-1, 2)

    x = data[:,0]
    y = data[:,1]
    time_posted = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')

    return {'filename': filename, 'x': x, 'y': y, 'time_posted': time_posted}

@app.route("/release", methods=["POST"])
def release_data():
    '''
    xrd_dictsを初期化する

    Returns:
        str -- home()へのurl(='/'）を返す
    '''
    xrd_data.release_all_data()
    return redirect(url_for('home'))


    
if __name__ == '__main__':
    app.run(debug=True)

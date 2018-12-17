import numpy as np
import plotly
import plotly.graph_objs as go
import json

class XRDData():
    '''
    XRDデータの所持，追加，変更を司るclass
    '''

    def __init__(self):
        self.xrd_dicts = [] # xrdデータ
        self.DEFAULT_LINE_COLOR_LIST = [ # プロットの色のリスト
            # 0 ~ 9 
            '#1f77b4',  # muted blue
            '#ff7f0e',  # safety orange
            '#2ca02c',  # cooked asparagus green
            '#d62728',  # brick red
            '#9467bd',  # muted purple
            '#8c564b',  # chestnut brown
            '#e377c2',  # raspberry yogurt pink
            '#7f7f7f',  # middle gray
            '#bcbd22',  # curry yellow-green
            '#17becf'   # blue-teal
        ]
    def add_data(self, filename, x, y, time_posted):
        '''
        プロットのデータを新たにxrd_dictsに追加

        Arguments:
            filename {str} -- ファイル名
            x {np.ndarray} -- xの値のnumpy配列
            y {np.ndarray} -- yの値のnumpy配列
            time_posted {str} -- データが追加された時刻
        '''

        id = len(self.xrd_dicts) + 1
        new_dict = {
            'id': id,
            'name': filename,
            'data': np.array([x, y]),
            'time_posted': time_posted
        }
        self.xrd_dicts.append(new_dict)
    
    def convert_python_dict_to_plotly_obj(self, pdict, iColor):
        '''
        pythonの辞書（1つ）を，plotlyの使うオブジェクト（1つ）に変換
        Arguments:
            pdict {dict} -- プロットのデータが入ったpythonの辞書
            iColor {int} -- プロットの色を決めるインデックス
        
        Returns:
            plotly.graph_objs._scatter.Scatter -- plotlyでプロットするために使う，データを記述したオブジェクト
        '''

        plotly_obj = go.Scatter(
                x = pdict['data'][0,:],
                y = pdict['data'][1,:],
                mode = 'lines',
                name = pdict['name'],
                line = {
                    'color' : self.DEFAULT_LINE_COLOR_LIST[iColor%10]
                },
                customdata = [
                    {'max_y': np.max(pdict['data'][1,:])} # 規格化するときに使うyの最大値
                ]
            )
        return plotly_obj

    def convert_xrd_dicts_to_plotly_objs(self, xrd_dicts):
        '''
        プロット用のデータが入ったpython dictが入った配列を，
        plotlyで使う用のオブジェクトに変換
        Arguments:
            xrd_dicts {dict} -- plotlyオブジェクトに変換したいpythonの辞書の配列
        
        Returns:
            list of plotly.graph_objs._scatter.Scatter -- plotlyオブジェクトの配列
        '''

        plotly_objs = []
        iColor = 0
        for xrd_dict in xrd_dicts:
            plotly_obj = self.convert_python_dict_to_plotly_obj(xrd_dict, iColor)
            plotly_objs.append(plotly_obj)
            iColor += 1
        return plotly_objs

    def json_plotly(self, xrd_dicts=None):
        '''
        プロット用のデータが入ったpythonの辞書(が複数入った配列)を，
        plotly.jsで使う用の，json(文字列)に変換
        - 引数xrd_dictsがある場合は，そのxrd_dictsをjson(文字列)に変換
        - 引数がない場合は，インスタンス変数xrd_dictsをすべてjson(文字列)に変換

        Keyword Arguments:
            xrd_dicts {array of dict} -- json(文字列)に変換したいpythonの辞書の配列(default: {None})
        
        Returns:
            str -- xrd_dictsをjson形式(文字列)としたもの
        '''

        if xrd_dicts is None: # インスタンス変数xrd_dictsをすべてjson形式に
            plotly_obj = self.convert_xrd_dicts_to_plotly_objs(self.xrd_dicts) # まずはpython dict -> obj for plotly
        else: # 指定したxrd_dicts（dictが入った配列）をjson形式に
            plotly_obj = self.convert_xrd_dicts_to_plotly_objs(xrd_dicts) #まずはpython dict -> obj for plotly

        # plotly objをjson形式にダンプ
        graphJSON = json.dumps(plotly_obj, cls=plotly.utils.PlotlyJSONEncoder)

        return graphJSON

    def convert_python_dicts_to_plotly_objs_last(self, last_num):
        '''
        self.xrd_dicts配列のうち，後ろからlast_numこの配列を抽出し，
        それらをplotly用のオブジェクトに変換したのち，配列returnListとして返す。

        Returns:
            list of plotly.graph_objs._scatter.Scatter -- plotlyオブジェクトの配列
        '''

        plotly_objs = []
        # 例えば，self.xrd_dicts配列の要素数が10で，後ろからlastnum = 3つの要素(index = 7, 8, 9)について抽出する場合
        xrd_dicts_focused = self.xrd_dicts[len(self.xrd_dicts)-last_num:] # index = 10 - 3 = 7から最後（index = 9）まで抽出
        iColor = len(self.xrd_dicts) - last_num # iColorはself.xrd_dictsのindexなので，抽出した最初の要素のiColor = 10 - 3 = 7
        for xrd_dict in xrd_dicts_focused:
            plotly_obj = self.convert_python_dict_to_plotly_obj(xrd_dict, iColor)
            plotly_objs.append(plotly_obj)
            iColor += 1
        
        return plotly_objs
    
    def json_plotly_last(self, last_num):
        '''
        self.xrd_dicts配列のうち，後ろからlast_num個の配列を抽出し，
        それらをplotly用のオブジェクトに変換したのち(self.convert_python_dicts_to_plotly_objs_lastメソッド)，
        返ってきた配列をさらにJSON形式にdumpしてgraphJSONとして返す。
        
        Arguments:
            last_num {int} -- self.xrd_dicts配列のうち後ろからlast_num個の配列をjson形式にdumpする
        
        Returns:
            str -- python dictの配列をjson形式に変換したもの
        '''

        plotly_objs = self.convert_python_dicts_to_plotly_objs_last(last_num)
        graphJSON = json.dumps(plotly_objs, cls=plotly.utils.PlotlyJSONEncoder)
        return graphJSON
    
    def release_all_data(self):
        '''
        self.xrd_dictsの中身をすべて削除（初期化）する
        '''

        self.xrd_dicts = []
    
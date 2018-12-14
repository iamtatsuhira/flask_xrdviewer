import numpy as np
import plotly
import plotly.graph_objs as go
import json

class XRDData():
    def __init__(self):
        self.xrd_dicts = []
        self.DEFAULT_LINE_COLOR_LIST = [ # 0 ~ 9
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
        id = len(self.xrd_dicts) + 1
        new_dict = {
            'id': id,
            'name': filename,
            'data': np.array([x, y]),
            'time_posted': time_posted
        }
        self.xrd_dicts.append(new_dict)
    
    def python_dict_to_plotly_dict(self, pdict, iColor):
        plotly_dict = go.Scatter(
                x = pdict['data'][0,:],
                y = pdict['data'][1,:],
                mode = 'lines',
                name = pdict['name'],
                line = {
                    'color' : self.DEFAULT_LINE_COLOR_LIST[iColor%10]
                },
                customdata = [
                    {'max_y': np.max(pdict['data'][1,:])}
                ]
            )
        return plotly_dict

    def dicts_plotly(self, xrd_dicts):
        xrd_dicts_plotly = []
        iColor = 0
        for xrd_dict in xrd_dicts:
            xrd_dict_plotly = self.python_dict_to_plotly_dict(xrd_dict, iColor)
            xrd_dicts_plotly.append(xrd_dict_plotly)
            iColor += 1
        return xrd_dicts_plotly

    def JSON_plotly(self, xrd_dicts=None):
        if xrd_dicts is None:
            xrd_dicts_plotly = self.dicts_plotly(self.xrd_dicts)
        else:
            xrd_dicts_plotly = self.dicts_plotly(xrd_dicts)
        graphJSON = json.dumps(xrd_dicts_plotly, cls=plotly.utils.PlotlyJSONEncoder)
        return graphJSON

    def dicts_plotly_last(self, lastnum):
        '''
        self.xrd_dicts配列のうち，後ろからlastnumこの配列を抽出し，
        それらをplotly用のオブジェクトに変換したのち，配列returnListとして返す。
        '''

        returnList = []
        # 例えば，self.xrd_dicts配列の要素数が10で，後ろからlastnum = 3つの要素(index = 7, 8, 9)について抽出する場合
        xrd_dicts_focused = self.xrd_dicts[len(self.xrd_dicts)-lastnum:] # index = 10 - 3 = 7から最後（index = 9）まで抽出
        iColor = len(self.xrd_dicts) - lastnum # iColorはself.xrd_dictsのindexなので，抽出した最初の要素のiColor = 10 - 3 = 7
        for xrd_dict in xrd_dicts_focused:
            xrd_dict_plotly = self.python_dict_to_plotly_dict(xrd_dict, iColor)
            returnList.append(xrd_dict_plotly)
            iColor += 1
        
        return returnList
    
    def JSON_plotly_last(self, lastnum):
        '''
        self.xrd_dicts配列のうち，後ろからlastnumこの配列を抽出し，
        それらをplotly用のオブジェクトに変換したのち(self.dicts_plotly_lastメソッド)，
        返ってきた配列をさらにJSON形式にdumpしてgraphJSONとして返す。
        '''
        xrd_dicts_plotly = self.dicts_plotly_last(lastnum)
        graphJSON = json.dumps(xrd_dicts_plotly, cls=plotly.utils.PlotlyJSONEncoder)
        return graphJSON
    
    def release_all_data(self):
        self.xrd_dicts = []
    
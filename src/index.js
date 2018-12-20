import 'bootstrap'
import './index.scss'
import './draganddrop'
import './xrd-data-list-button'
import reloadGraph from './plot'
import {setLegend} from './legend-line.js'


reloadGraph() //こいつのなかの通信を非同期でやると
setLegend() //情報が読まれる前にsetLegend()が走るのでキチンとlegendが表示されないから注意

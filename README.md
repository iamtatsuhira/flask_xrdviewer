## JavaScriptライブラリのインストール
`Node.js`をインストールし`npm`（パッケージマネージャー）が使える状態にしておくこと。
* [(Qiita) MacにNode.jsをインストール](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)
* [(Qiita) Windows版 Node.js環境構築方法まとめ](https://qiita.com/maecho/items/ae71da38c88418b806ff)


`package.json`がある状態で，

```sh
$ npm install
```
これで`package.json`の内容にしたがって必要なパッケージが`node_modules/`にインストールされる。

## JavaScript，CSSファイルのバンドル
`webpack`により，`src/`以下にある各種JavaScript，CSSファイルや，必要な外部ライブラリ（`bootstrap`，`plotly.js`など）を一つのJavaScript，CSSファイルにまとめる。

```sh
$ ./node_modules/.bin/webpack
```
もしくは
```sh
$ npm run build
```
これにより`public/static/`に`js/`，`css/`ディレクトリができ，それらの中に`main.js`，`main.css`が生成される。
（このへんのルールは`webpack.config.js`にかかれている）


## Python仮想環境の構築
```sh
$ python3 -m venv myenv
```

## Python仮想環境をactivate
```sh
$ source ./myenv/bin/activate
```
**注意**: 使っているシェルが`bash`でなく`csh`や`fish`ならちょっとかわる。
```csh
$ source ./myenv/bin/activate.csh
```
```fish
$ source ./myenv/bin/activate.fish
```

## Pythonで必要なパッケージのインストール
`requirements.txt`がある状態で
```sh
$ pip install -r requirements.txt
$ pip list
...
...
```

## webサーバーの立ち上げ
```sh
$ python flaskxrdviewer.py
```

## ブラウザで確認
ブラウザで`localhost:5000`にアクセス

## 注意
* XRD Data Listのチェックボックスいらってもグラフ消えたり出たりしない場合は`command + shift + R`でブラウザをキャッシュを無視してリロード

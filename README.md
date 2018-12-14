## 仮想環境の構築
```sh
$ python3 -m venv myenv
```

## 仮想環境をactivate
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

## パッケージのインストール
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
# vigilant-robot
[repo](https://github.com/apple502j/vigilant-robot)・[戻る](../index.html)

カスタマイズ可能なMediaWiki Botフレームワーク+Bot例。

## 使用法
1. `_secret.py`に`USERNAME`と`PASSWORD`を書く。`__init__.py`の7行目もいじる。
2. Botのファイルを作る。「引数botをとる、runメソッドつきクラス」を1つおく。
3. `__init__.py`でクラスを読み込む(例参照)
4. `py __init__.py`

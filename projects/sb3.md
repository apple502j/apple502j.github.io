# sb3
[repo](https://github.com/apple502j/sb3)・[戻る](./index.html)

.sb3ファイルをパースする(sb3 parses SB3)。**Python 3.6+ 必須**

## 使用例
```py
import sb3
project, assets = sb3.open_sb3("my_game.sb3")
print(f"ステージのスクリプト数: {len(project.targets[0].block_info.scripts())}スクリプト")
print(f"User Agent:{project.meta.user_agent}")
```

## インストール
`pip3 install sb3`

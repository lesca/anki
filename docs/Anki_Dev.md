如果想批量生成一些牌组，可以使用自动化脚本来协助。这里写了一个“敲键背词”的模板供参考。需要注意的是，本仓库中的模板可能随时更新，但是此目录中的示例代码未必及时更新。


# Anki 开发文档

- Anki 项目

  - [Anki Github](https://github.com/ankitects/anki)

- [Anki 插件开发](https://addon-docs.ankiweb.net/)

  - [Debug](https://addon-docs.ankiweb.net/debugging.html)

    - If you set the env var `QTWEBENGINE_REMOTE_DEBUGGING` to `8080` prior to starting Anki, you can surf to http://localhost:8080 in Chrome to debug the visible webpages.

    - `Ctrl+Shift+;` - Open debug console, press `CTRL + ENTER` to run commands.

  - [Hooks](https://addon-docs.ankiweb.net/monkey-patching.html)

    ```python
    from anki.hooks import wrap
    from aqt.editor import Editor
    
    def mySetupButtons(self, _old):
        <before code>
        ret = _old(self)
        <after code>
        return ret
    
    Editor.setupButtons = wrap(Editor.setupButtons, mySetupButtons, "around")
    ```

- AnkiDroid

  - [Javascript Inspection](https://github.com/ankidroid/Anki-Android/wiki/Development-Guide#html-javascript-inspection)

  - [Anki Cavas](https://github.com/pigoz/anki-canvas)

  - Eruda Console

    ```javascript
    <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>
    ```
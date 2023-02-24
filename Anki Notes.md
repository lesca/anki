# 用户文档摘要

- [Get Started](https://docs.ankiweb.net/getting-started.html)

- [Cloze 填空](https://docs.ankiweb.net/editing.html#cloze-deletion)

  - Multiple: {{c2::Canberra}} was founded in {{c1::1913}}.

  - Hint: {{c1::Canberra::city}} was founded in 1913.

  - [填空输入](https://docs.ankiweb.net/templates/fields.html#checking-your-answer):  卡片正面、背面必须都包含 `{{type:cloze:Text}}`，示例如下：

    ```
    {{cloze:Text}}
    {{type:cloze:Text}}
    {{Extra}} 
    ```

- [Field](https://docs.ankiweb.net/templates/fields.html)

  - {{MyField}} - 代表字段名称，区分大小写

  - {{**hint**:MyField}} - This will show a link labeled “show hint”; when you click it, the content of the field will be displayed on the card. (If MyField is empty, nothing will be shown.)

  - Built-in fields:

    - {{FrontSide}} - The content of the front template

    - {{Tags}} - The note's tags

    - {{Type}} - The type of note

    - {{Deck}} - The card's deck

    - {{Subdeck}} - The card's subdeck

    - {{Card}} - The type of card

  - [Field in URL](https://docs.ankiweb.net/templates/fields.html#html-stripping)

    - `<a href="http://example.com/search?q={{text:Expression}}">check in dictionary</a>`

  - [Field for media](https://docs.ankiweb.net/templates/fields.html#media--latex)

    - Image: `<img src="{{Expression}}.jpg">`

    - Sound: `[sound:{{Word}}]`

    - LaTex: `[latex]{{Field 1}}[/latex]`

- [TTS](https://docs.ankiweb.net/templates/fields.html#text-to-speech)

  - This feature requires Anki 2.1.20, or AnkiMobile 2.0.56. AnkiDroid does not currently support this method.

- [卡片生成](https://docs.ankiweb.net/templates/generation.html)

  - Rules:

    - Anki will **not** create cards <u>with empty front sides</u>.

    - Because of the way that card generation works, it is not possible to manually delete individual cards, as they would just end up being recreated the next time the note was edited.

  - [条件生成](https://docs.ankiweb.net/templates/generation.html#conditional-replacement)

    - `{{#FieldName}}{{Front}}{{/FieldName}}` - **如果存在**字段 `FieldName` 则生成卡片

    - `{{^FieldName}}{{Front}}{{/FieldName}}` - **如果不存在**字段 `FieldName` 则生成卡片

    - 示例 - 如果存在 Tags 则显示（生成卡片）：

      ```
      {{#Tags}}
          Tags: {{Tags}}
      {{/Tags}}
      ```

- [Files](https://docs.ankiweb.net/files.html)

  - 配置文件位置： `%APPDATA%\Anki2`

  - 媒体文件位置： `%APPDATA%\Anki2\{USER}\collection.media`

  - [Media](https://docs.ankiweb.net/media.html)

    - If you need a static image or sound on every card, name it with **a leading \_** (e.g., \_dog.jpg) to tell Anki to **ignore it when checking for media**.

# 开发文档摘要

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
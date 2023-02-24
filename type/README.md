# Anki 敲键背词模板

- 建议结合 [auto rate typed answer](https://ankiweb.net/shared/info/1836029849)  (1836029849) 插件使用

  - 插件推荐配置（修改后重启Anki生效)：

    ```json
    {
        "accept_multiple_answers_for_these_notetypes": {},
        "easy if shorter than": 2,
        "good if shorter than": 5.5,
        "hard if shorter than": 12,
        "hard interval for cards with 2 or 3 buttons means again": false,
        "ignore case when comparing": true,
        "on mismatch ignore user rating, always rate as again/1 (2.1.20+ only)": false,
        "on mistake set focus on again": true,
        "show tooltip for confirmation": false
    }
    ```
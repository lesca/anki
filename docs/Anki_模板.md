# 了解 Anki 模版

作为新手，当你想开始创建自己的模版，你需要了解一些基本的模版概念。这篇文档就是很好的开始。

## 模版
- 当你打开一个 **apkg** 文件时会导入单词和这些单词对应的模版。
- 模版中定义了单词的基本属性，如单词、发音、释义等，这些属性也叫做字段（Fields）。

```
Note Types (笔记模版)：卡片的字段信息
|
|- Card Type (卡片模版) ：卡片的正反面信息
   |
   |- Card Type 1 （例如：正面英文，反面中文）
   |- Card Type 2 （例如：正面中文、反面英文）
```

> [!TIP]
> 如上面的例子，如果一个笔记模版拥有多个卡片模版，并且它们的数据源是相同的，那么这类卡片也叫做 [Siblings](https://docs.ankiweb.net/studying.html#siblings-and-burying)。

*图：Anki模板示例*

- 打开路径：Anki - 工具 - 管理笔记类型

_英文界面：Note Types_

![](/res/note_types.png)

_中文界面：笔记模版_

![](/res/note_types_cn.png)



## 卡片模版 (Card Types)

**笔记模版 (Note Type)** 中定义了卡片所需的字段，例如单词、释义、例句等。要将这些字段展示出来，就需要使用**卡片模版 (Card Type)**。

*图：Anki 卡片模板*
![](/res/anki_card.png)


下图以“问答题”模板为例，浏览视图中：

* 笔：笔记模板 (Note) 视图 - 有 1 条记录（有一条Note）

* 卡：卡片模板 (Card) 视图 - 有 2 条记录（因为这条Note包含了两个Card Type)

![](/res/anki_browse_note.png)

![](/res/anki_browse_card.png)

## 进一步了解模版

好了。到了这里，你已经掌握了关于Anki模版的基本概念。如果想进一步，可以去阅读官方文档啦！

* [进阶：Anki 卡片模版 - 字段替换](https://open-spaced-repetition.github.io/anki-manual-zh-CN/templates/fields.html)
* [进阶：Anki 卡片模版 - 卡片生成](https://open-spaced-repetition.github.io/anki-manual-zh-CN/templates/generation.html)
* [进阶：Anki 卡片模版 - 样式与 HTML](https://open-spaced-repetition.github.io/anki-manual-zh-CN/templates/styling.html)
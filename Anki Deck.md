本文基于 Anki 官方文档及 Scheduler V2 测试验证及撰写。
最后修订时的 Anki 版本为：

```
版本2.1.60 (76d88073)
Python 3.9.15 Qt 6.4.2 PyQt 6.4.0
```

# 基本知识

## Deck 牌组

Anki中的牌组`Deck`作为笔记`Note`的容器，可以嵌套，可以设置复习计划。

* 笔记`Note`的类型`Note Type`也叫做[模板](Anki%20%E6%A8%A1%E6%9D%BF.md)或者[模板类型](Anki%20%E6%A8%A1%E6%9D%BF.md)，是一个东西。

* 笔记`Note`在现实中可以理解为一张一张的复习卡片。

* **误区**：Anki 中 卡片`Card` 在客户端中有时候指[模板](Anki%20%E6%A8%A1%E6%9D%BF.md)，在文档中有时候指（用于复习的正反面）卡牌，这里很容易产生误区，需要根据上下文区分。

*图：Anki 笔记模板*

* 点开 **卡片** 实际上是打开 **模板** 编辑界面。

  ![](pics/note_types_cn.png)

## Scheduler

* 用于编排新卡牌的学习计划、旧卡牌的复习计划。

* 进入 Anki - 工具 - 设置 - 复习 选项卡查看

  * 如果没有勾选 V3，则是 V2 版本。

  * 本文档基于 V2 版本测试验证。

*图：查看Anki Scheduler 版本 (截图基于 Anki V2.1.60)*

![Anki Scheduler Version](pics/scheduler_settings.png)

# 牌组的常用技巧

## 牌组的嵌套

- 示例： `Deck A::Subdeck B`

  ```
  - Deck A (Preset 1)
  - Deck A::Subdeck B (Preset 2)
      - Card B1
      - Card B2
  ```

- 牌组选项的[优先级](https://docs.ankiweb.net/deck-options.html#subdecks)：当 Anki 显示一张卡牌时，它会检查这张卡牌所属的子牌组，并使用子牌组的设置。

- 牌组的`每日限制` [Daily Limits](https://docs.ankiweb.net/deck-options.html#daily-limits) 与所选择的 `Scheduer` 版本有关，以 V2 版本为例：

  - 新卡牌：使用 Parent 牌组的设置，在上例中为 *Deck A*

  - 复习卡牌：使用当前选择的牌组的设置，忽略 Parent 和 Child 牌组的设置。

- 操作方法：

  1. 重命名 deck

  2. 拖动 deck 到另一个 deck 中

## 牌组的排序

- 按文件名排序

- 可以通过数字作为开头，进行手动排序

# 卡牌的三个基本状态

Anki 卡牌有三个基本状态：

> New -> Learning -> Review

这些状态可以从卡牌复习界面看到。

*图：Anki 卡牌的基本状态*

![](pics/anki_notes_lifecycle.png)

不同的卡牌状态对应不同的设置。由于卡牌属于某个牌组，要修改卡牌设置，也就是修改`牌组设置`，点开牌组名称最右侧的齿轮 - 选择”选项“即可查看、修改牌组设置。

下面开始介绍不同状态的卡牌相关的设置。

## 新卡牌的设置

![](pics/anki_deck_options_new_cards.png)

* [Learning Steps](https://docs.ankiweb.net/deck-options.html#learning-steps)：牌组选项中 `Learning Steps` (学习阶段) 设置**新卡片**要学习多少次。

  * 默认的`1m 10m`就是学习两次，第一次是1分钟后；第二次是10分钟后。

  * 如果 `Learning Steps` 设置成 `1m 10m 1d` 就需要学习3次，第一次是1分钟后；第二次是10分钟后；第三次是1天后。

  * 完成一次学习，就进入`Learning`阶段；所有学习都完成后，进入`Review`阶段。

  * 默认情况下，Anki 允许提前 `20分钟` 学习（及复习）卡片（设置-复习-提前学习的上限）。这就是为什么 **10分钟后** 才需要学习的卡片可以马上学习的原因。

* [「毕业」卡片再现间隔](https://docs.ankiweb.net/deck-options.html#learning-steps) `Graduating Interval`：

  * 其中的“毕业”实际上是指完成了`Learning Steps`进入`Review`阶段，而不是指永久熟练地记住了卡牌。

  * 在`Learning Steps`进入最后一步时，若选择`Good`所对应的下次复习时间。

  * 默认为1天。

* [「简单」卡片再现间隔](https://docs.ankiweb.net/deck-options.html#easy-interval) `Easy Interval`：

  * 跳过`Learning Steps`直接进入`Review`阶段

  * 默认为 4天。若修改设置，建议大于`Graduating Interval`。

## `Review` 阶段的卡牌设置

新版本Anki的[高级设置](https://docs.ankiweb.net/deck-options.html#advanced)主要作用于`Review`阶段的卡牌，早期版本也叫做“Review Settings”。

![](pics/anki_deck_options_andvanced.png)

* [初始简易度](https://docs.ankiweb.net/deck-options.html#starting-ease) `Starting Ease`：当卡牌从`Learning`阶段进入`Review`阶段后，初始的`简易度`(`Ease`)，默认为2.5，即250%。

* [「简单」复习间隔乘数](https://docs.ankiweb.net/deck-options.html#easy-bonus) `Easy Bonus`：`Review`阶段，`Easy`所对应的乘数，默认为1.3。

* [全局间隔乘数](https://docs.ankiweb.net/deck-options.html#interval-modifier) `Interval Modifier`：`Review`阶段，作用域全局的乘数，默认为1，即没有作用。其意义在于可以调节`Retention`（保留率，即牌组中最终记住的卡片占所有卡片的百分比），具体理念可以参考官方说明。

* [「困难」复习间隔乘数](https://docs.ankiweb.net/deck-options.html#hard-interval) `Hard Interval`：`Review`阶段，`Hard`所对应的乘数，默认为1.2。

* [「重来」复习间隔乘数](https://docs.ankiweb.net/deck-options.html#new-interval) `New Interval`：`Review`阶段，`Again`所对应的乘数，默认为0，即从头开始（从`Learning Steps`第一步开始）。

> **Information**
> 有关乘数的作用及复习间隔`Interval`的**计算公式**，请参考 [Anki Interval](Anki%20Interval.md) 一文。

## 卡牌不同状态的按键行为

知道以上设置后，就容易理解在学习不同状态的卡牌时，`Again`, `Hard`, `Good`, `Easy `这些按键的行为了。

* **New**: 新建的卡片，尚未进入`Learning Steps`。

  * 特征：在卡片浏览器中，`到期`(`Due`)、`间隔`(`Interval`)和`简易度`(`Ease`)都为`新卡片`。

  * 在卡片浏览器中，可以重置卡片的学习状态： “选择卡片 - 右击 - 遗忘” 。

* **Learning**: 正在进行 `Learning Steps` 的卡片。

  * 特征：在卡片浏览器中，`到期`(`Due`)有具体日期，`间隔`(`Interval`)为`学习中`，`简易度`(`Ease`)为0%。

  * 卡牌按键的作用：

    * Again -> 重新从`Learning Steps`的第一步开始，默认为 1min。

    * Hard -> 停留在当前`Learning Step`，间隔为`Good`的数值乘以0.6。

    * Good -> **继续**`Learning Steps`的下一步，默认为 10min。

    * Easy  -> 直接进入`Review`阶段。默认为4天。设置方式：“牌组选项 - 新卡片 - 「简单」卡片再现间隔 `Easy Interval`”。

* **Review**: 完成所有 `Learning Steps` 的卡片会进入`Review`阶段。

  * 特征：在卡片浏览器中，`到期`(`Due`)有具体日期，`间隔`(`Interval`)有具体天数，`简易度`(`Ease`)为非0值（默认250%）。

    * 刚从`Learning`进入`Review`的卡片，`间隔`默认为 1。设置方式：“牌组选项 - 新卡片 - 「毕业」卡片再现间隔 `Graduating Interval`”。

    * 刚从`Learning`进入`Review`的卡片，`简易度`默认为 250%。设置方式：“牌组选项 - 高级 - 初始简易度 `Starting Ease`”。

  * 卡牌按键的说明：

    * `Again` -> 重新从`Learning Steps`的第一步开始，默认为 1min。

    * `Hard`, `Good`, `Easy` 的计算方法，请参考 [Anki Interval 的计算](Anki%20Interval.md)

# 其他卡牌状态

整理中。。。

* [**Lapses**](https://docs.ankiweb.net/deck-options.html#lapses) (遗忘)

  * When you forget a review card, it is said to have 'lapsed', and the card must be relearnt. The **default behaviour** for lapsed reviews is to reset the interval to 1 (i.e. make it due tomorrow), and put it in the learning queue for a refresher in 10 minutes. This behaviour can be customized with the options listed below.

  * **Relearning Steps**

    * The same as 'learning steps', but for forgotten reviews.

    * When you fail a card (press `Again`), the card enters the **relearning phase**, and before it becomes a **review card** again, you will have to pass all the relearning steps — or, alternatively, press `Easy` on the card.

    * If you leave the steps blank, the card will skip relearning, and will be assigned a new review delay.

  * **Minimum Interval**

    * Specifies a minimum number of days a card should wait after it finishes relearning. The **default** is **one day**, meaning once relearning is finished, it will be shown again the **next day**.

  * **Leeches** 记忆难点

    * 参考：[Leeches](https://docs.ankiweb.net/leeches.html)

* **Burying** (搁置)

  * 参考：[siblings-and-burying](https://docs.ankiweb.net/studying.html#siblings-and-burying)

* [Reviewing Ahead](https://docs.ankiweb.net/filtered-decks.html#reviewing-ahead)

* [Due Reviews](https://docs.ankiweb.net/filtered-decks.html#due-reviews)

## 参考

* [Deck Options](https://docs.ankiweb.net/deck-options.html)

* [Filtered Decks](https://docs.ankiweb.net/filtered-decks.html)

* [Scheduler v2](https://faqs.ankiweb.net/the-anki-2.1-scheduler.html)

* [Scheduler v3](https://faqs.ankiweb.net/the-2021-scheduler.html)
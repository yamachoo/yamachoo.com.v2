---
layout: '@layouts/PostLayout.astro'
title: 'Hello World'
createdAt: '2020/07/04'
updatedAt: '2020/07/10'
description: 'Hello World!'
visual: 'sample.png'
---

## Block Elements

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6

## Block 段落

段落 1

段落 2

## Br 改行

改行の前に半角スペース` `を 2 つ記述します。

hoge
fuga
piyo

## Blockquotes 引用

> 引用
> 引用
>
> > 多重引用

## Code コード

```c
print 'hoge'
```

### インラインコード

これは `インラインコード`です。

## pre 整形済みテキスト

    class Hoge
        def hoge
            print 'hoge'
        end
    end

## Hr 水平線

hoge

---

hoge

---

## Lists

## Ul 箇条書きリスト

- リスト 1
  - リスト 1_1
    - リスト 1_1-1
    - リスト 1_1-2
  - リスト 1_2
- リスト 2
- リスト 3

## Ol 番号付きリスト

1. 番号付きリスト 1
   1. 番号付きリスト 1-1
   1. 番号付きリスト 1-2
1. 番号付きリスト 2
1. 番号付きリスト 3

## Span Elements

## Link リンク

[Google](https://www.google.co.jp/)

### 外部参照リンク

[yahoo]: http://www.yahoo.co.jp

[Yahoo を見る][yahoo]

## 強調

### em

これは _イタリック_ です
これは _イタリック_ です

### strong

これは **ボールド** です
これは **ボールド** です

### em + strong

これは **_イタリック＆ボールド_** です
これは **_イタリック＆ボールド_** です

## Images 画像

![サンプル](./hello-world/sample.png)

## Table 表

| HTML | CSS | JavaScript | PHP | RUby | Python |
| :--: | :-: | :--------: | :-: | :--: | :----: |
| TD1  | TD3 |    TD5     | TD7 | TD9  |  TD11  |
| TD2  | TD4 |    TD6     | TD8 | TD10 |  TD12  |

| 左揃え | 中央揃え | 右揃え |
| :----- | :------: | -----: |
| 1      |    2     |      3 |
| 4      |    5     |      6 |

```js:example-file.js
alert('how cool is this!');

alert('how cool is this!');
alert('how cool is this!');

alert('how cool is this!');
```

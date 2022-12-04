---
layout: '@layouts/PostLayout.astro'
title: 'Hello World'
createdAt: '2020/07/04'
updatedAt: '2020/07/10'
description: 'Hello World!'
visual: 'sample.png'
---

## Block Elements

## 見出し2

### 見出し3

#### 見出し4

##### 見出し5

###### 見出し6

## Block段落

段落1

段落2

## Br改行

改行の前に半角スペース` `を2つ記述します。

hoge  
fuga  
piyo

## Blockquotes引用

> 引用
> 引用
>
> > 多重引用

## Codeコード

```c
print 'hoge'
```

### インラインコード

これは `インラインコード`です。

## pre整形済みテキスト

    class Hoge
        def hoge
            print 'hoge'
        end
    end

## Hr水平線

hoge

---

hoge

---

## Lists

## Ul箇条書きリスト

- リスト1
  - リスト1_1
    - リスト1_1-1
    - リスト1_1-2
  - リスト1_2
- リスト2
- リスト3

## Ol番号付きリスト

1. 番号付きリスト1
   1. 番号付きリスト1-1
   1. 番号付きリスト1-2
1. 番号付きリスト2
1. 番号付きリスト3

## Span Elements

## Linkリンク

[Google](https://www.google.co.jp/)

### 外部参照リンク

[yahoo]: http://www.yahoo.co.jp

[Yahooを見る][yahoo]

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

## Images画像

![サンプル](./hello-world/sample.png)

## Table表

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

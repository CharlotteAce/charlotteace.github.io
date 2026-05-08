---
layout: ../../layouts/Md2Blog.astro
title: 'すいかもんゲーム(β)'
pubDate: "2024-01-06"
updateDate: "2025-02-02"
description: 'β版(試作版)です。'
pageUrl: '/contents/suikamongam'
contentsUrl: 'https://note.com/units_si/n/ndcf8b8aa4c2f'
contentsNum: 202401060001
medium: 'note'
image:
    url: ''
    alt: ''
width:
    four: 'c'
    three: 'e'
    two: 'c'
tags: ['制作物','プログラミング']
---
<style type="text/css">
    .iframe-wrapper {
    aspect-ratio: 16/9;
    /* height: min(540px,54vw);*/
    width: min(960px,100%);
    position: relative;
    margin: auto;
    overflow: hidden;
    }

    .iframe-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 1080px;
    width: 1920px;
    }
</style>
## 現在の開発状況

&emsp;サウンドを実装しました！BGMはまだですが、落下時と合体時に音が流れます。

## 現在発見されている不具合

&emsp;以下に記載されていないバグを発見された方は[国際単位系のTwitter](https://x.com/Units_SI)または[バグ報告フォーム](https://forms.gle/MqcLqNZi4CXQt2898)までご連絡ください。

- すいかもんの顔が微妙。
- 耳の当たり判定がない。
    - 仕様です。真球の当たり判定なので本家同様結構転がります。

## [フルスクリーン版はこちら](https://charlotteace.github.io/contents/suikamongamefull)<br><small>（スマホの方はこちらを推奨）</small>
<p></p>
<div class="iframe-wrapper">
    <iframe id="suikamongame" src="../../games/suikamongame/index.html" scrolling="no" frameborder="0"></iframe>
</div>
<script is:inline src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script is:inline src="../../games/suikamongame/default.js"></script>

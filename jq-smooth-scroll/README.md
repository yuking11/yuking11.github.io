# jq-smooth-scroll
jQueryによるスムーズスクロール。タブ切り替えやアコーディオンとのバッティングなし。

## Usage

一般的なアンカーリンクにdata-scroll属性を追加（\<a href="#hoge" data-scroll>hoge\</a>）することでスムーズスクロール付きアンカーリンクとなります。

ページトップへスクロールさせる場合は href="#page_top" としてください。
その際、bodyなどに#page_topを入れる必要はありません。

``` html
<!-- #mainにスムーズスクロール -->
<a href="#main" data-scroll>メインコンテンツ</a>

<!-- ここにスクロール -->
<div id="main">メインコンテンツ</div>


<!-- ページトップにスムーズスクロール -->
<a href="#page_top" data-scroll>ページトップへ</a>


<!-- 通常アンカー、スムーズスクロールなし -->
<a href="#anchor">アンカーリンク</a>
```

## オプション

data-scrollに数値を入れることで、スクロール位置の調整ができます。


``` html
<!-- #subから15px手前にスムーズスクロール -->
<a href="#sub" data-scroll="15">サブコンテンツ</a>

<!-- ここから15px手前にスクロール -->
<div id="sub">サブコンテンツ</div>
```

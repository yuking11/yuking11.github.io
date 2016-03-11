# jq-tabs
jQueryによるタブ切り替え。アコーディオンにもできる。レスポンシブ対応。


## Demo

http://yuking11.github.io/jq-tabs/


## Usage

### Tab

``` html
<div data-tab>
  <ul>
    <li><a href="#tab01" data-tab-label="true">タブ01</a></li>
    <li><a href="#tab02" data-tab-label>タブ02</a></li>
    <li><a href="#tab03" data-tab-label>タブ03</a></li>
  </ul>
  <div id="tab01" data-tab-content="true">コンテンツ01</div>
  <div id="tab02" data-tab-content>コンテンツ02</div>
  <div id="tab03" data-tab-content>コンテンツ03</div>
</div>
```

- デフォルトでアクティブにしておきたいタブ、表示させておきたいコンテンツの属性値を true にしてください
- htmlタグ、構造については data-tab 内であればどのような形でも動作します

### Accordion

html構造を変えればアコーディオンにすることもできます。

``` html
<div data-tab>
  <div><a href="#acc01" data-tab-label>アコーディオン01</a></div>
  <div id="acc01" data-tab-content>コンテンツ01</div>
  <div><a href="#acc02" data-tab-label>アコーディオン02</a></div>
  <div id="acc02" data-tab-content>コンテンツ02</div>
  <div><a href="#acc03" data-tab-label>アコーディオン03</a></div>
  <div id="acc03" data-tab-content>コンテンツ03</div>
</div>
```

### Option

#### Animation & Speed

\<div data-tab> に属性を加えることでアニメーションやスピードを調整できます。

``` html
<!-- アニメーション：フェード　スピード：1sec -->
<div data-tab data-tab-effect="fade" data-tab-speed="1000">

<!-- アニメーション：スライド　スピード：.3sec -->
<div data-tab data-tab-effect="slide" data-tab-speed="300">
```

- アニメーションは fade、slide の2種類です。
- デフォルトはアニメーションなし、スピード.5secです。

#### Tab Images

\<div data-tab="image"> にすることで、タブを画像にできます。

``` html
<div data-tab="image">
  <ul>
    <li><a href="#tab01" data-tab-label="true"><img src="img/tab01.png" alt="タブ01"></a></li>
    <li><a href="#tab02" data-tab-label><img src="img/tab02.png" alt="タブ02"></a></li>
    <li><a href="#tab03" data-tab-label><img src="img/tab03.png" alt="タブ03"></a></li>
  </ul>
  <div id="tab01" data-tab-content="true">コンテンツ01</div>
  <div id="tab02" data-tab-content>コンテンツ02</div>
  <div id="tab03" data-tab-content>コンテンツ03</div>
</div>
```

- hover/active用画像（hoge_on.png）を用意してください。

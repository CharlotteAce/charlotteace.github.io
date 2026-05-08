---
layout: ../../layouts/Md2Blog.astro
title: 'カゲフミ！シリーズ'
pubDate: "2025-08-24"
updateDate: "2025-10-27"
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
<LayoutBlog pageTitle={pageTitle} pageUrl={pageUrl} pubDate={pubDate} updateDate={updateDate} description={description} tags={tags}>

	<p>
		&emsp;アニメ・ゲーム『ウマ娘 プリティーダービー』の聖地巡礼に最適な情報誌、『カゲフミ！』シリーズについてのご紹介です。多数の現地写真を元にウマ娘に登場したモデル地、いわゆる「聖地」をまとめて掲載しました。地図ページも充実しており、本書を持っての現地探訪も容易です。ウマ娘「聖地巡礼」の際には、是非本書『カゲフミ！』シリーズをお持ちください。<br>
		<small>（注：本書は著者しのはら恵による二次創作・自費出版・個人出版（同人誌）であり、出版に際しては『ウマ娘 プリティーダービー』及びCygames Inc.と一切の関係がありません。本書については<a href="https://charlotteace.github.io/profile">しのはら恵</a>にお問い合わせいただき、Cygames Inc.や誌面掲載施設に対するご連絡はおやめください。）</small>
	</p>
	<style>
		.offset {
			margin: 0;
			padding: 0;
			margin-top: -10rem;
			padding-top: 10rem;
		}
		.offset h2 {
			padding: 0.25rem;
		}
		.v3 {
			color: #e60012;
			background-color: #edc300;
		}
		.v2 {
			color: #fff;
			background-color: #002b69;
		}
		.v1 {
			color: #fff;
			background-color: #0081cc;
		}
		.contents_container{
			display: flex;
            justify-content: start;
            align-items: start;
		}
		.cover{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 250px;
			min-width: 250px;
			margin: 4rem 4rem 0 0;
			padding-top: 0.6rem;
			
		}
		.cover img{
			width: 100%;
			height: auto;
			border: 0.2rem solid var(--charlotteace-deep);
		}
		.booth_logo{
			height: 3rem;
			padding-top:0;
			margin-bottom:-0.4rem;
			width: auto;
		}
		.buy + .buy{
			margin: 0;
		}
		@media screen and (max-width: 768px){
			.contents_container{display: block;}
			.cover{
				min-width: none;
				width: 100%;
				max-width: 250px;
				margin: 4rem auto 0;
			}
			.buy{
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
			}
		}
	</style>
	<div class="offset" id="v3">
		<h2 class="v3">vol.3　2025年8月号</h2>
	</div>
	<div class="contents_container">
		<div class="cover">
			<Image src={v3} alt="『カゲフミ！　vol. 3』の表紙。" />
		</div>
		<div>
			<h3>特集・怪物の足跡</h3>
			<p>&emsp;笠松競馬場を中心とした笠松町・岐阜県・中京地域のウマ娘聖地を特集。金華山、ショッピングモールの他、アニメ1期等に登場した中京競馬場まで余すところなく紹介。</p>
			<h3>他連載</h3>
			<p>&emsp;①聖地探訪記「シャーロットエースが征く」は著者しのはら恵による金華山登頂記を掲載。②地理考察「土地論考」は消滅聖地特集。普段の連載よりページ数を拡大し、ウマ娘に登場した「聖地」のうち、消滅したものやその危機にあるものを紹介する。</p>
			<p>&emsp;A4判・フルカラー・20p。</p>
			<h3 class="buy"><a href="https://charlotteace.booth.pm/items/7265858" target="_blank" rel="noopener noreferrer"><Image class="booth_logo" src={boothLogo} alt="booth"/>で購入</a></h3>
			<h3 class="buy"><a href="https://ndlsearch.ndl.go.jp/books/R100000002-I034252881" target="_blank" rel="noopener noreferrer">国立国会図書館で閲覧</a></h3>
		</div>
	</div>

	<div class="offset" id="v2">
		<h2 class="v2">vol.2　2025年3月号</h2>
	</div>
	<div class="contents_container">
		<div class="cover">
			<Image src={v2} alt="『カゲフミ！　vol. 2』の表紙。" />
		</div>
		<div>
			<h3>特集・パリに花咲け</h3>
			<p>&emsp;凱旋門賞に登場するフランス・パリの街と競馬場の姿を、多数の現地写真と共に紹介。パリロンシャン競馬場の他、エルコンドルパサー号がG1を勝利したサンクルー競馬場についても掲載。フランス式馬券の買い方や語彙集なども充実し、この1冊があれば凱旋門賞観戦も簡単に！</p>
			<h3>特集・概念小物と暮らそう！</h3>
			<p>&emsp;知っている人だけに伝わる、キャラクターモチーフグッズ「概念小物」。決してキャラクターの顔の入ったグッズを持つだけではない、新しい推し活を提案し、グッズ自作のヒントを提供する。</p>
			<h3>他連載</h3>
			<p>&emsp;①聖地探訪記「シャーロットエースが征く」は武蔵野線沿線に集中する関東の競馬場と見どころを一挙紹介。②地理考察「土地論考」は育成シナリオ「L'Arc」編でのトレーニング場所について考察。</p>
			<p>&emsp;A4判・フルカラー・24p。</p>
			<h3 class="buy"><a href="https://charlotteace.booth.pm/items/6754931" target="_blank" rel="noopener noreferrer"><Image class="booth_logo" src={boothLogo} alt="booth"/>で購入</a></h3>
			<h3 class="buy"><a href="https://ndlsearch.ndl.go.jp/books/R100000002-I034036141" target="_blank" rel="noopener noreferrer">国立国会図書館で閲覧</a></h3>
		</div>
	</div>
	
	<div class="offset" id="v1">
		<h2 class="v1">vol.1　2024年8月号</h2>
	</div>
	<div class="contents_container">
		<div class="cover">
			<Image src={v1} alt="『カゲフミ！　vol. 1』の表紙。" />
		</div>
		<div>
			<h3>特集・府中に生きる。</h3>
			<p>&emsp;ウマ娘の各コンテンツで登場した東京競馬場や府中の街を紹介。映画『新時代の扉』再現のウォークラリーコースも付属。あの名場面と同じカットも多数掲載。</p>
			<h3>特集・ウマ娘の食卓</h3>
			<p>&emsp;アニメやゲームなど、ウマ娘たちは大好きなニンジン料理をおいしそうに頬張る。そんなニンジン料理を再現すべく、レシピコーナーを掲載。GIプレートやニンジンオッチャホイもあなたの家のキッチンで。</p>
			<h3>他連載</h3>
			<p>&emsp;①聖地探訪記「シャーロットエースが征く」は著者しのはら恵による『Season 3』9話房総旅行再現記を掲載。②地理考察「土地論考」は、はっきりとは描かれないトレセン学園の場所について、作中の鳥観図や現地の風景などから考察。</p>
			<p>&emsp;A4判・フルカラー・24p。</p>
			<h3 class="buy"><a href="https://charlotteace.booth.pm/items/5999336" target="_blank" rel="noopener noreferrer"><Image class="booth_logo" src={boothLogo} alt="booth"/>で購入</a></h3>
			<h3 class="buy"><a href="https://ndlsearch.ndl.go.jp/books/R100000002-I033666073" target="_blank" rel="noopener noreferrer">国立国会図書館で閲覧</a></h3>
		</div>
	</div>
</BaseLayout>
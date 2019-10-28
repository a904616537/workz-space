<template>
	<div class="testimonials">
		<div class="inner">
			<v-item v-for="(item,index) in list" :key="index" :data="item"/>
		</div>
		<v-menu />
	</div>
</template>

<script>
	import Item from './item';
	export default {
		data() {
			return {
				list : [{
					logo : '../static/imgs/image001.jpg',
					zh : {
						text    : '在新加坡，Workzspace.com能够提供同行业中最及时、最高效的服务。他们帮助我的公司挑选合适的办公室，我们的合作非常愉快。未来如果要增加办公地点，我还会选择他们。',
						address : '新加坡',
						company : 'Northern Star集团',
						people  : 'Geno Ong'
					},
					en : {
						text    : '在新加坡，Workzspace.com能够提供同行业中最及时、最高效的服务。他们帮助我的公司挑选合适的办公室，我们的合作非常愉快。未来如果要增加办公地点，我还会选择他们。',
						address : '新加坡',
						company : 'Northern Star集团',
						people  : 'Geno Ong'
					}
				},{
					logo : '../static/imgs/image002.jpg',
					zh : {
						text    : "めまぐるしく状況が変わるインド<バンガロール＞の不動産市場で、当社の希望にあった事務所を一緒に探していただき、本当に感謝しております。GAOがいらっしゃられなければ、こんなにスムーズに事務所が決まらなかったと断言できます。日本での真摯なサポートは本当にありがたかったです。本当に感謝の気持ちをすべて言葉で表すことはできません。ありがとうございました。",
						address : '日本',
						company : '精练公司',
						people  : 'Keisuke Takama'
					},
					en : {
						text    : "めまぐるしく状況が変わるインド<バンガロール＞の不動産市場で、当社の希望にあった事務所を一緒に探していただき、本当に感謝しております。GAOがいらっしゃられなければ、こんなにスムーズに事務所が決まらなかったと断言できます。日本での真摯なサポートは本当にありがたかったです。本当に感謝の気持ちをすべて言葉で表すことはできません。ありがとうございました。",
						address : '日本',
						company : '精练公司',
						people  : 'Keisuke Takama'
					}
				},{
					logo : '../static/imgs/image003.png',
					zh : {
						text    : "2011年7月，思碧睿决定搬到一个新的办公室。自2008年以来，公司的顾问人数持续增长，原来在樟宜的办公室已经不够用了。我们需要一个灵活的解决方案，因此我们找到了Workzspace.com。他们的服务超出预期。他们根据我们的标准，为我们挑选了多个办公地点。现场参观井井有条并且非常个性化。他很会把握时机：每次我需要他的时候，总会接到他的电话。最后，我们找到了个理想的办公室：地理位置优越，专业，氛围也完全符合我们要求。感谢Workzspace.com让我们轻松找到了一个完美的办公室。",
						address : '新加坡',
						company : '思碧睿',
						people  : 'Jasper Doornbos'
					},
					en : {
						text    : "2011年7月，思碧睿决定搬到一个新的办公室。自2008年以来，公司的顾问人数持续增长，原来在樟宜的办公室已经不够用了。我们需要一个灵活的解决方案，因此我们找到了Workzspace.com。他们的服务超出预期。他们根据我们的标准，为我们挑选了多个办公地点。现场参观井井有条并且非常个性化。他很会把握时机：每次我需要他的时候，总会接到他的电话。最后，我们找到了个理想的办公室：地理位置优越，专业，氛围也完全符合我们要求。感谢Workzspace.com让我们轻松找到了一个完美的办公室。",
						address : '新加坡',
						company : '思碧睿',
						people  : 'Jasper Doornbos'
					}
				},{
					logo : '../static/imgs/image004.jpg',
					zh : {
						text    : `Workzspace.com帮助我们找到了一个合适的办公空间，让GlobalSign能够于2012年5月在印度开展销售业务。\n 即使时间紧迫，他们还是顺利地安排了现场参观，与商务中心协商条款和条件。 我们高度赞赏Kinoshita-san的努力。`,
						address : '日本',
						company : 'GlobalSign',
						people  : 'Reiji Oishi'
					},
					en : {
						text    : `Workzspace.com帮助我们找到了一个合适的办公空间，让GlobalSign能够于2012年5月在印度开展销售业务。\n即使时间紧迫，他们还是顺利地安排了现场参观，与商务中心协商条款和条件。 我们高度赞赏Kinoshita-san的努力。`,
						address : '日本',
						company : 'GlobalSign',
						people  : 'Reiji Oishi'
					}
				},{
					logo : '../static/imgs/image005.png',
					zh : {
						text    : `我想为你们推荐一个积极进取、周到和不断进步的服务提供商：Workzspace.com。 Workzspace.com从不急于完成一笔交易。最令我印象深刻的是，敲定办公室的整个过程全部由他们的团队负责。他们能够解答我的任何问题。办公室安顿好后，团队还会致电我们，以确保完美，这一进加强了我们之间的合作关系。`,
						address : '新加坡',
						company : 'KC Page',
						people  : 'Kelvin Chiang'
					},
					en : {
						text    : `我想为你们推荐一个积极进取、周到和不断进步的服务提供商：Workzspace.com。 Workzspace.com从不急于完成一笔交易。最令我印象深刻的是，敲定办公室的整个过程全部由他们的团队负责。他们能够解答我的任何问题。办公室安顿好后，团队还会致电我们，以确保完美，这一进加强了我们之间的合作关系。`,
						address : '新加坡',
						company : 'KC Page',
						people  : 'Kelvin Chiang'
					}
				},{
					logo : '../static/imgs/image006.jpg',
					zh : {
						text    : `インド・チェンナイに販売会社を設立するに際して、 Workzspace.com の木下様に　現地のサービスオフィスを数件ご紹介頂きました。 実地検分のための現地訪問時のアレンジや契約条件の折衝に 関して、貸主側との交渉に当たって頂き、大変助かりました。 有難うございました。紹介頂いたオフィスも環境が整っており大変満足しております。`,
						address : '印度',
						company : 'NTN',
						people  : 'Kiyotaka Takeda'
					},
					en : {
						text    : `インド・チェンナイに販売会社を設立するに際して、 Workzspace.com の木下様に　現地のサービスオフィスを数件ご紹介頂きました。 実地検分のための現地訪問時のアレンジや契約条件の折衝に 関して、貸主側との交渉に当たって頂き、大変助かりました。 有難うございました。紹介頂いたオフィスも環境が整っており大変満足しております。`,
						address : '印度',
						company : 'NTN',
						people  : 'Kiyotaka Takeda'
					}
				},{
					logo : '../static/imgs/image007.jpg',
					zh : {
						text    : `2011年8月，我们一直在日本东京寻找办公室，然后我听说了Workzspace.com。在不到一个月的时间，我们找到了一间理想的办公室  –  位置优越且在我们的预算之内。而且，我没有亲自到日本，一次也没有。Kinoshita san帮我处理好了一切。衷心感谢日本Workzspace.com的工作人员给我的帮助！`,
						address : '东京',
						company : 'Wasabi rabbit (AY digital)',
						people  : 'Sarita'
					},
					en : {
						text    : `2011年8月，我们一直在日本东京寻找办公室，然后我听说了Workzspace.com。在不到一个月的时间，我们找到了一间理想的办公室  –  位置优越且在我们的预算之内。而且，我没有亲自到日本，一次也没有。Kinoshita san帮我处理好了一切。衷心感谢日本Workzspace.com的工作人员给我的帮助！`,
						address : '东京',
						company : 'Wasabi rabbit (AY digital)',
						people  : 'Sarita'
					}
				},{
					logo : '../static/imgs/image008.jpg',
					zh : {
						text    : `当时我们正在寻找新的办公空间，我们在谷歌上发现了Workzspace.com。 Workzspace.com帮助我们在中央商务区找到了一间服务式办公室，极其高效。Adrian Lam非常耐心地倾听我们的需求，他对服务式办公室行业非常熟悉。租约到期后，我一定会再次使用Workzspace.com！`,
						address : '新加坡',
						company : 'Market Source',
						people  : '办事处经理'
					},
					en : {
						text    : `当时我们正在寻找新的办公空间，我们在谷歌上发现了Workzspace.com。 Workzspace.com帮助我们在中央商务区找到了一间服务式办公室，极其高效。Adrian Lam非常耐心地倾听我们的需求，他对服务式办公室行业非常熟悉。租约到期后，我一定会再次使用Workzspace.com！`,
						address : '新加坡',
						company : 'Market Source',
						people  : '办事处经理'
					}
				},{
					logo : '../static/imgs/image009.jpg',
					zh : {
						text    : `Workzspace.com的效率让我们惊讶。如果没有他们的帮助，我们不可能如此顺利地在新加坡建立分支机构。`,
						address : '香港',
						company : 'GR 翻译公司',
						people  : 'Fiona So'
					},
					en : {
						text    : `Workzspace.com的效率让我们惊讶。如果没有他们的帮助，我们不可能如此顺利地在新加坡建立分支机构。`,
						address : '香港',
						company : 'GR 翻译公司',
						people  : 'Fiona So'
					}
				},{
					logo : null,
					zh : {
						text    : `我们刚刚搬进新加坡的新办公室，我们非常开心。Workzspace.com的服务和新的服务式办公室都让我们非常满意。如果没有Adrian Lam的帮助，Pemberton Stewart不可能如此轻松地找到理想的办公空间。Adrian非常热心，能根据我们的需求和预算提供最好的建议。我们向您强烈推荐Workzspace.com！`,
						address : '新加坡',
						company : 'Pemberton Stewart',
						people  : 'Mina Chui'
					},
					en : {
						text    : `我们刚刚搬进新加坡的新办公室，我们非常开心。Workzspace.com的服务和新的服务式办公室都让我们非常满意。如果没有Adrian Lam的帮助，Pemberton Stewart不可能如此轻松地找到理想的办公空间。Adrian非常热心，能根据我们的需求和预算提供最好的建议。我们向您强烈推荐Workzspace.com！`,
						address : '新加坡',
						company : 'Pemberton Stewart',
						people  : 'Mina Chui'
					}
				},{
					logo : '../static/imgs/image010.png',
					zh : {
						text    : `我们是一家总部设在香港的咨询公司，我们帮助我们的海外客户在香港成立贸易公司。通过这样一个新成立的公司，我们的客户可以享受较低的企业所得税率和银行服务费，而且能更轻松地进入中国市场…… \n2011年初，我们决定拓展我们在日本的业务，因此我们在东京成立了分公司。我们接触过很多其他的企业服务公司，但始终未能得到满意的服务。2011年7月，我们找到了Workzspace.com，他们为我们提供了许多有益的建议，不仅帮助我们在东京成立了办事处，还指导我们如何在日本拓展业务。 \n我们非常欣赏他们的服务，我们期待在未来与他们开展更多的合作。`,
						address : '东京',
						company : 'Meridian合作伙伴',
						people  : 'May Chen'
					},
					en : {
						text    : `我们是一家总部设在香港的咨询公司，我们帮助我们的海外客户在香港成立贸易公司。通过这样一个新成立的公司，我们的客户可以享受较低的企业所得税率和银行服务费，而且能更轻松地进入中国市场…… \n2011年初，我们决定拓展我们在日本的业务，因此我们在东京成立了分公司。我们接触过很多其他的企业服务公司，但始终未能得到满意的服务。2011年7月，我们找到了Workzspace.com，他们为我们提供了许多有益的建议，不仅帮助我们在东京成立了办事处，还指导我们如何在日本拓展业务。 \n我们非常欣赏他们的服务，我们期待在未来与他们开展更多的合作。`,
						address : '东京',
						company : 'Meridian合作伙伴',
						people  : 'May Chen'
					}
				},{
					logo : '../static/imgs/image011.png',
					zh : {
						text    : `我们在网页上搜索到了Workzspace.com，在填写了一份非常简单的需求表格后，没过几分钟，我们就接到了他们的电话，确认我的需求。半个工作日的时间里，我就收到了来自未来业主的6个预约，他们都非常了解我的需求。他们为我们提供了一份简短的选择名单和周到的服务，在我准备好之前从不过度推销或急于达成交易。我会毫不犹豫地推荐Workzspace.com！`,
						address : '新加坡',
						company : 'Martek Marine',
						people  : 'Simon Whitaker'
					},
					en : {
						text    : `我们在网页上搜索到了Workzspace.com，在填写了一份非常简单的需求表格后，没过几分钟，我们就接到了他们的电话，确认我的需求。半个工作日的时间里，我就收到了来自未来业主的6个预约，他们都非常了解我的需求。他们为我们提供了一份简短的选择名单和周到的服务，在我准备好之前从不过度推销或急于达成交易。我会毫不犹豫地推荐Workzspace.com！`,
						address : '新加坡',
						company : 'Martek Marine',
						people  : 'Simon Whitaker'
					}
				},{
					logo : '../static/imgs/image012.png',
					zh : {
						text    : `当时我正在为AQ Services （香港）寻找一间服务式办公室，Adrian和Workzspace.com给了我宝贵的帮助。他们不仅帮我省了筛选和联系不同供应商的麻烦，还为我提供宝贵的意见，帮助我选择地点，让我可以为公司找到符合我们发展战略的最理想的办公室。我向你们推荐Adrian和Workzspace.com，他们会为您节省时间和金钱，最重要的是，和他们合作非常愉快。`,
						address : '香港',
						company : 'AQ Services',
						people  : 'Christophe Guillot'
					},
					en : {
						text    : `当时我正在为AQ Services （香港）寻找一间服务式办公室，Adrian和Workzspace.com给了我宝贵的帮助。他们不仅帮我省了筛选和联系不同供应商的麻烦，还为我提供宝贵的意见，帮助我选择地点，让我可以为公司找到符合我们发展战略的最理想的办公室。我向你们推荐Adrian和Workzspace.com，他们会为您节省时间和金钱，最重要的是，和他们合作非常愉快。`,
						address : '香港',
						company : 'AQ Services',
						people  : 'Christophe Guillot'
					}
				},{
					logo : '../static/imgs/image013.png',
					zh : {
						text    : `一年前，我们需要启动一项新的业务，当时非常繁忙，有许多事情要考虑，包括同时在两个城市寻找符合我们特定需求的办公室。Workzspace.com的团队帮助我们轻松完成了这项任务。在了解了我们的需求之后，他们为我们找到了几个完全符合我们期望的地点，并为我们安排会面和参观。仅仅用了几个星期的时间，我们就找到了理想的办公室，这令我们非常惊喜。现在已经过去一年了，我们在不断成长，并且能够将时间集中用于我们的核心业务。我会毫不犹豫地向其他初创公司推荐Workzspace.com – 他们将帮助您轻松找到满意的办公室。`,
						address : '悉尼',
						company : 'Koji',
						people  : 'Mike Cassidy'
					},
					en : {
						text    : `一年前，我们需要启动一项新的业务，当时非常繁忙，有许多事情要考虑，包括同时在两个城市寻找符合我们特定需求的办公室。Workzspace.com的团队帮助我们轻松完成了这项任务。在了解了我们的需求之后，他们为我们找到了几个完全符合我们期望的地点，并为我们安排会面和参观。仅仅用了几个星期的时间，我们就找到了理想的办公室，这令我们非常惊喜。现在已经过去一年了，我们在不断成长，并且能够将时间集中用于我们的核心业务。我会毫不犹豫地向其他初创公司推荐Workzspace.com – 他们将帮助您轻松找到满意的办公室。`,
						address : '悉尼',
						company : 'Koji',
						people  : 'Mike Cassidy'
					}
				},{
					logo : '../static/imgs/image014.png',
					zh : {
						text    : `当时我正在新加坡和香港设立办事处，我遇到了Adrian Lam和Workzspace.com。Adrian的做法简单而坦诚 – 为他的客户提供最好的建议和解决方案。Workzspace.com给我看了许多本地办公室供应商的报价，并向我介绍当前的市场趋势。他们为我提供有关办公空间、价格、地点、供应商的文化和习惯，以及电信服务等必要的信息。Workzspace.com也可帮助您解决办公场所以外的问题。总地来说，他们平易近人，充满活力，而且非常专业。`,
						address : '英国，香港，新加坡',
						company : 'Funds Partnership',
						people  : 'Damian Bitowt'
					},
					en : {
						text    : `当时我正在新加坡和香港设立办事处，我遇到了Adrian Lam和Workzspace.com。Adrian的做法简单而坦诚 – 为他的客户提供最好的建议和解决方案。Workzspace.com给我看了许多本地办公室供应商的报价，并向我介绍当前的市场趋势。他们为我提供有关办公空间、价格、地点、供应商的文化和习惯，以及电信服务等必要的信息。Workzspace.com也可帮助您解决办公场所以外的问题。总地来说，他们平易近人，充满活力，而且非常专业。`,
						address : '英国，香港，新加坡',
						company : 'Funds Partnership',
						people  : 'Damian Bitowt'
					}
				},{
					logo : '../static/imgs/image015.jpg',
					zh : {
						text    : `経営コンサルティング会社である弊社は海外進出のご支援で現法設立に携わる機会が多数あり常日頃から登記の際の優良物件を探す必要があります。 国内唯一ともいえるアジア進出時の現地オフィスの専門コンサルティング会社であるＧＡＯさんにはこれまでに１２社のオフィス探しを８ケ国にわたってご支援頂きました。 \nよくありがちな自社にメリットのある物件ではなくクライアントの要望に合わせた物件をあらゆるルートから広く探索し、客観的評価とアドバイスを添えて万全の事前コーディネイトしていただけるので現地内見に無駄な時間を全く必要とせず意中の候補が見つかることが弊社がＧＡＯさんに委託する最大のメリットです。 また、未だかつて現地でのトラブルはありません。\n 日本駐在の木下さんの真摯な対応をクライアントの皆さんも高く評価されています。`,
						address : '东京',
						company : 'FunaiSoken',
						people  : 'Takayuki Tawara'
					},
					en : {
						text    : `経営コンサルティング会社である弊社は海外進出のご支援で現法設立に携わる機会が多数あり常日頃から登記の際の優良物件を探す必要があります。 国内唯一ともいえるアジア進出時の現地オフィスの専門コンサルティング会社であるＧＡＯさんにはこれまでに１２社のオフィス探しを８ケ国にわたってご支援頂きました。 \nよくありがちな自社にメリットのある物件ではなくクライアントの要望に合わせた物件をあらゆるルートから広く探索し、客観的評価とアドバイスを添えて万全の事前コーディネイトしていただけるので現地内見に無駄な時間を全く必要とせず意中の候補が見つかることが弊社がＧＡＯさんに委託する最大のメリットです。 また、未だかつて現地でのトラブルはありません。\n 日本駐在の木下さんの真摯な対応をクライアントの皆さんも高く評価されています。`,
						address : '东京',
						company : 'FunaiSoken',
						people  : 'Takayuki Tawara'
					}
				},{
					logo : '../static/imgs/image016.png',
					zh : {
						text    : `我想要在新加坡设立Double Helix咨询公司亚太地区办事处。相比我找过的几家供应商，Adrian在听了我的需求之后，愿意付出额外的努力为我搜索和推荐最佳选择。我要向所有新到新加坡的企业强烈推荐他的服务！`,
						address : '新加坡',
						company : 'Double Helix',
						people  : 'Tan Seng Chuen'
					},
					en : {
						text    : `我想要在新加坡设立Double Helix咨询公司亚太地区办事处。相比我找过的几家供应商，Adrian在听了我的需求之后，愿意付出额外的努力为我搜索和推荐最佳选择。我要向所有新到新加坡的企业强烈推荐他的服务！`,
						address : '新加坡',
						company : 'Double Helix',
						people  : 'Tan Seng Chuen'
					}
				},{
					logo : null,
					zh : {
						text    : `我们想在新加坡开设一个办事处，然后我们发现了Workzspace.com。该公司帮助我们筛选出了几个地点和供应商，为我们省去了很多麻烦和时间。我们享受到的服务快速又高效，他们善解人意，从不强行推。他们给我们的印象是，他们只是想帮助我们找到合适的办公室。他们给我们的建议恰到好处。Workzspace.com为我们推荐的所有办公室品质都很高，并且精确地符合我们的需求，随便选一个都很理想。总之，他们的服务非常棒，我强烈推荐！`,
						address : '新加坡',
						company : '国际招聘公司',
						people  : '总经理'
					},
					en : {
						text    : `我们想在新加坡开设一个办事处，然后我们发现了Workzspace.com。该公司帮助我们筛选出了几个地点和供应商，为我们省去了很多麻烦和时间。我们享受到的服务快速又高效，他们善解人意，从不强行推。他们给我们的印象是，他们只是想帮助我们找到合适的办公室。他们给我们的建议恰到好处。Workzspace.com为我们推荐的所有办公室品质都很高，并且精确地符合我们的需求，随便选一个都很理想。总之，他们的服务非常棒，我强烈推荐！`,
						address : '新加坡',
						company : '国际招聘公司',
						people  : '总经理'
					}
				},{
					logo : '../static/imgs/image017.png',
					zh : {
						text    : `我想对Workzspace.com的Adrian Lam真诚地说一声‘谢谢’。今年早些时候，我的办公区发生了火灾，有人因此丧生，于是警方介入。这是一座只有4层楼高的大楼，所有租户都不允许再回去。当时我正在经营自己的公司，我需要安顿我的员工，因此我必须尽快找到新的办公室，以兑现我给客户的SLA承诺。我不知道如何寻找临时办公室，幸运的是，我从网上找到了Adrian的联系方式。我记得那是一个周末，Adrian让我惊喜，他在接下来的那个周一，就让我与多家服务式办公室供应商取得了联系。Workzspace.com的工作人员乐于助人，后续跟进也非常贴心，这是一家名副其实的服务导向型公司。我会向所有寻找办公室的人强烈推荐Workzspace.com！`,
						address : '新加坡',
						company : 'Demand Gen Solutions',
						people  : 'Sharon Blythe'
					},
					en : {
						text    : `我想对Workzspace.com的Adrian Lam真诚地说一声‘谢谢’。今年早些时候，我的办公区发生了火灾，有人因此丧生，于是警方介入。这是一座只有4层楼高的大楼，所有租户都不允许再回去。当时我正在经营自己的公司，我需要安顿我的员工，因此我必须尽快找到新的办公室，以兑现我给客户的SLA承诺。我不知道如何寻找临时办公室，幸运的是，我从网上找到了Adrian的联系方式。我记得那是一个周末，Adrian让我惊喜，他在接下来的那个周一，就让我与多家服务式办公室供应商取得了联系。Workzspace.com的工作人员乐于助人，后续跟进也非常贴心，这是一家名副其实的服务导向型公司。我会向所有寻找办公室的人强烈推荐Workzspace.com！`,
						address : '新加坡',
						company : 'Demand Gen Solutions',
						people  : 'Sharon Blythe'
					}
				},{
					logo : '../static/imgs/image018.png',
					zh : {
						text    : `我最近刚刚通过Workzspace.com找到了新的办公室，我必须称赞Adrian的效率和服务。从初步询问到签约，整个过程顺利得令人难以置信。Workzspace.com不辞辛苦，确保我的要求得到满足！接下来我们会继续在亚洲扩张，我很乐意再次使用该公司的服务，并向新加坡和整个亚太地区的其他人推荐他们！`,
						address : '新加坡',
						company : 'Barrington James',
						people  : 'Harriet Roberts'
					},
					en : {
						text    : `我最近刚刚通过Workzspace.com找到了新的办公室，我必须称赞Adrian的效率和服务。从初步询问到签约，整个过程顺利得令人难以置信。Workzspace.com不辞辛苦，确保我的要求得到满足！接下来我们会继续在亚洲扩张，我很乐意再次使用该公司的服务，并向新加坡和整个亚太地区的其他人推荐他们！`,
						address : '新加坡',
						company : 'Barrington James',
						people  : 'Harriet Roberts'
					}
				},{
					logo : null,
					zh : {
						text    : `シンガポールのオフィスの借り換えを検討している時にWorkzspace.comを利用しました。複数のサービス・オフィスの見積もり、訪問ツアーのアレンジなど迅速な対応は非常に役立ちました。またサービス・オフィスの事情に通じているため、貸主側との交渉の間に立ってくれ、話が円滑に進みました。借主側では手数料がかからないサービスなので利用価値は高いと思いました。`,
						address : '东京',
						company : '日系ヘッジ・ファンド（在シンガポール）',
						people  : 'Hitoshi Sakaguchi'
					},
					en : {
						text    : `シンガポールのオフィスの借り換えを検討している時にWorkzspace.comを利用しました。複数のサービス・オフィスの見積もり、訪問ツアーのアレンジなど迅速な対応は非常に役立ちました。またサービス・オフィスの事情に通じているため、貸主側との交渉の間に立ってくれ、話が円滑に進みました。借主側では手数料がかからないサービスなので利用価値は高いと思いました。`,
						address : '东京',
						company : '日系ヘッジ・ファンド（在シンガポール）',
						people  : 'Hitoshi Sakaguchi'
					}
				},{
					logo : '../static/imgs/image019.png',
					zh : {
						text    : `Adrian Lam和Workzspace.com帮了我的大忙，当时我们正在为我们香港和东京的未来代表处挑选服务提供商。Workzspace.com帮助我们对比各个公司的价格、能力和条款，让我们直接联系我们选定的供应商。整个过程非常高效，并且没有花费一分钱。`,
						address : '新加坡',
						company : 'Focus Partners LLP',
						people  : 'Jean-Philippe (JP) Odunlami'
					},
					en : {
						text    : `Adrian Lam和Workzspace.com帮了我的大忙，当时我们正在为我们香港和东京的未来代表处挑选服务提供商。Workzspace.com帮助我们对比各个公司的价格、能力和条款，让我们直接联系我们选定的供应商。整个过程非常高效，并且没有花费一分钱。`,
						address : '新加坡',
						company : 'Focus Partners LLP',
						people  : 'Jean-Philippe (JP) Odunlami'
					}
				}]
			}
		},
		components : {
			'v-item' : Item
		},
	}
</script>

<style lang="scss">
	.testimonials {
		position         : absolute;
		left             : 0;
		right            : 0;
		// background-color : #f4f4f4;
		text-align       : left;
		.inner {
			padding       : 20px 10px;
			margin-bottom : 60px;
		}
		.card {
			box-shadow    : 0 5px 10px rgba(0,0,0,.1);
			margin-bottom : 20px;
			.text-style {
				padding   : 10px 30px 5px;
				font-size : 12px;
			}
			hr {
				background-color : #E4E7ED;
				height           : 1px;
				border           : none;
				margin: {
					left  : 20px;
					right : 20px;
				}
			}
			.bottom {
				display   : flex;
				font-size : 14px;
				padding: {
					top    : 5px;
					bottom : 10px;
					left   : 20px;
					right  : 20px;
				}
			
				.img-style {
					width         : 120px;
					height        : 40px;
					margin-right  : 14px;
					background-size: contain;
					background-repeat: no-repeat;
					background-position: center;
					&.logo{
						border        : 1px solid #EBEEF5;
						border-radius : 10px;
					}
				}
				.tips {
					font-size : 12px;
					color     : #C5CCD0;
				}
			}
		}
	}
</style>
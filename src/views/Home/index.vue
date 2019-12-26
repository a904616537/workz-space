<template>
	<div class="home">

		<div class="bannerview">
			<carousel :per-page="1" :mouse-drag="true" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="5000" :loop="true">
				<slide v-for="(item, index) in banners" :key="index">
					<div class="banner" :style="'background-image: url('+item+')'"></div>
				</slide>
			</carousel>
			<div class="nav">
				<div class="row">
					<div class="logo">
						<el-avatar style="background:#000;" :size="40" src="/static/imgs/logo.png"></el-avatar>
					</div>
					<!-- <el-autocomplete
					class="searchinput"
					placeholder="Search Area"
					prefix-icon="el-icon-search"
					popper-class="popper-class"
					@focus="blur"
					:clearable="true"
					:fetch-suggestions="querySearch"
					@select="handleSelect"
					:select-when-unmatched="true"
					v-model="input">
					</el-autocomplete> -->
					<el-select
					class="searchinput"
					popper-class="popper-class"
					v-model="input" placeholder="" :clearable="true">
						
						<template slot="prefix">
							<div class="seach-class">
								<i class="el-icon-search"></i>
							</div>
						</template>
						<el-option
						v-for="item in restaurants"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
		</div>
		<iscroll-view class="scroll-view">

			<div v-for="(item, index) in listData" :key="index" >
				<v-item :data="item" :index="index"/>
				<div v-if="index == 2" class="link">
					<p>{{$t('time')}}<el-button type="primary" size="mini" round @click="$router.push({path : 'contact'})" style="margin-left: 1em;">{{$t('search')}}</el-button></p>
				</div>
			</div>
		</iscroll-view>

		<div v-if="loading">
			<p>{{$t('loading')}}</p>
		</div>
		
	</div>
</template>

<script>
	import Vue         from 'vue';
	import {workspace,workspace_recommend} from '../../api';
	import Item        from './item';
	import { mapState, mapActions } from 'vuex'
	import i18n from '../../i18n';
	import shareMixin from '../../util/share';

	export default{
		name : 'home',
		data() {
			return {
				selectValue  : '',
				input        : '',
				lock         : false,
				page         : 0,
				loading      : false
			}
		},
		components : {
			'v-item' : Item
		},
		mixins: [shareMixin],
		computed : mapState({
			workspaces : state => state.workzspace.workzs,
			banners : function() {
				return [
					`../static/imgs/banner_1_${i18n.locale}.jpg`,
					`../static/imgs/banner_2_${i18n.locale}.jpg`,
					`../static/imgs/banner_3_${i18n.locale}.jpg`
				]
			},
			restaurants : function() {
				return [{
					label : this.$t('area.all'),
					value : ''
				},{
					label : this.$t('area.huangpu'),
					value : '黄浦区'
				},{
					label : this.$t('area.xuhui'),
					value : '徐汇区'
				},{
					label : this.$t('area.changning'),
					value : '长宁区'
				},{
					label : this.$t('area.jingan'),
					value : '静安区'
				},{
					label : this.$t('area.putuo'),
					value : '普陀区'
				},{
					label : this.$t('area.hongkou'),
					value : '虹口区'
				},{
					label : this.$t('area.yangpu'),
					value : '杨浦区'
				},{
					label : this.$t('area.minhang'),
					value : '闵行区'
				},{
					label : this.$t('area.baoshan'),
					value : '宝山区'
				},{
					label : this.$t('area.jiading'),
					value : '嘉定区'
				},{
					label : this.$t('area.pudong'),
					value : '浦东新区'
				},{
					label : this.$t('area.jinshan'),
					value : '金山区'
				},{
					label : this.$t('area.songjiang'),
					value : '松江区'
				},{
					label : this.$t('area.qingpu'),
					value : '青浦区'
				},{
					label : this.$t('area.fengxian'),
					value : '奉贤区'
				},{
					label : this.$t('area.chongming'),
					value : '崇明区'
				}]
			},
			locale : function() {
				return i18n.locale;
			},
			listData : function () {
				if(this.input == '') {
					return this.workspaces;
				} else {
					return this.workspaces.filter(v => v.area == this.input || v.address_zh.includes(this.input) || v.address_en.includes(this.input));
				}
			},
			workspacesIds() {
				return this.workspaces.map(v => v._id);
			}
		}),
		methods: {
			querySearch(queryString, cb) {
				let restaurants = this.restaurants;
				let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
					return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			handleSelect(item) {
				this.selectValue = item.value;
			},
        	getData(page = 0) {
        		this.lock = true;
        		this.loading = true;
        		workspace({count : page, ids : this.workspacesIds})
        		.then(workspace => {
        			this.$store.dispatch('workzspace/pushWorkz', workspace)
        			const comments = workspace.filter(v => v.comments.length > 0);
        			// this.$store.dispatch('workzspace/pushWorkz', comments)
        			if(workspace.length === 0) {
        				console.log('没有了')
        				this.lock = true;
        			} else this.lock = false;
        		})
        		.catch(err => {
        			console.log('err', err);
        		})
        		.finally(() => {
        			this.loading = false;
        		})
        	},

	    	getRecommend() {
				workspace_recommend()
				.then(workspace => {
        			this.$store.dispatch('workzspace/setWorkz', workspace)
        			this.getData();
        		})
        		.catch(err => {
        			console.log('err', err);
        		})
			},
        	blur() {
        	},
        	onSwitch() {
        		i18n.locale = 'zh';
        	},
        	scroll(event) {
				if(this.lock) return;
				var eleScrolling;
				if(eleScrolling = event.target.scrollingElement){
					const bottomwindow = eleScrolling.scrollTop + window.innerHeight >= eleScrolling.offsetHeight - 5;
					if (bottomwindow) {
						this.page++;
						this.getData(this.page);
					}
				}
			}

		},
		beforeMount() {
			this.getRecommend();
		},
		mounted() {
			window.addEventListener('scroll', this.scroll)
		}
	}
</script>

<style lang="scss">
	.img-style{
		.img-item{
			width               : 32px;
			height              : 32px;
			background-color    : #f4f4f4;
			background-position : center;
			background-size     : cover;
			border-radius       : 20px;
			border              : 3px solid #fff;
			float               : right;
			margin-left         : -17px;
		}
	}
	.video-js .vjs-tech{
		z-index: 0;
	}
	.vjs-custom-skin > .video-js {
		width: 100%;
	}
	.video-js .vjs-big-play-button {
		top: auto !important;
		bottom : 40% !important;
		left: 40% !important;
	}
	.vjs-poster, .vjs-poster img {
	    background-position: center !important;
	    background-size: cover !important;
	}
	.searchinput {
		flex : 1;
	}
</style>

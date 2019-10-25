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
		<div v-for="(item, index) in listData" :key="index" >
			<v-item :data="item" :index="index"/>
			<div v-if="index == 2" class="link">
				<p>没有时间嘛？<el-button type="text" @click="$router.push({path : 'contact'})">立即查询</el-button></p>
			</div>
		</div>
		
	</div>
</template>

<script>
	import Vue         from 'vue';
	import {workspace} from '../../api';
	import Item        from './item';
	import { mapState, mapActions } from 'vuex'
	import i18n from '../../i18n';
	export default{
		name : 'home',
		data() {
			console.log('banners', i18n.locale)
			const banners = [
				`../static/imgs/banner_1_${i18n.locale}.jpg`,
				`../static/imgs/banner_2_${i18n.locale}.jpg`,
				`../static/imgs/banner_3_${i18n.locale}.jpg`
			]

			return {
				selectValue : '',
				banners : banners,
				input : '',
				restaurants : [{
					label : 'All',
					value : ''
				},{
					label : '黄浦区',
					value : '黄浦区'
				},{
					label : '徐汇区',
					value : '徐汇区'
				},{
					label : '长宁区',
					value : '长宁区'
				},{
					label : '静安区',
					value : '静安区'
				},{
					label : '普陀区',
					value : '普陀区'
				},{
					label : '虹口区',
					value : '虹口区'
				},{
					label : '杨浦区',
					value : '杨浦区'
				},{
					label : '闵行区',
					value : '闵行区'
				},{
					label : '宝山区',
					value : '宝山区'
				},{
					label : '嘉定区',
					value : '嘉定区'
				},{
					label : '浦东新区',
					value : '浦东新区'
				},{
					label : '金山区',
					value : '金山区'
				},{
					label : '松江区',
					value : '松江区'
				},{
					label : '青浦区',
					value : '青浦区'
				},{
					label : '奉贤区',
					value : '奉贤区'
				},{
					label : '崇明县',
					value : '崇明县'
				}]
			}
		},
		components : {
			'v-item' : Item
		},
		computed : mapState({
			workspaces : state => state.workzspace.workzs,
			listData : function () {
				if(this.input == '') {
					return this.workspaces;
				} else {
					return this.workspaces.filter(v => v.area == this.input || v.address_zh.includes(this.input) || v.address_en.includes(this.input));
				}
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
        	getData() {
        		workspace()
        		.then(workspace => {
        			this.$store.dispatch('workzspace/setWorkz', workspace)
        		})
        		.catch(err => {
        			console.log('err', err);
        		})
        	},
        	blur() {
        	},
        	onSwitch() {
        		i18n.locale = 'zh';
        	}
		},
		beforeMount() {
			this.getData();
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

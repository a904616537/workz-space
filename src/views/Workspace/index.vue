<template>
	<div class="workspace">
		<div class="card">
			<div class="card-title">
				<div class="card-logo">
					<div class="logo-style" :style="'background-image: url('+logo+')'"></div>
				</div>
				<div class="card-infor">
					<div class="infor-title">{{data.name}}</div>
					<div><i class="el-icon-location icon-style"></i>{{data.address_en}}</div>
				</div>
			</div>
			<carousel :per-page="1" :mouse-drag="true" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="5000" :loop="true">
				<slide v-for="(item, index) in data.photos" :key="index">
					<div class="card-img img" :style="'background-image: url('+item+')'"></div>
				</slide>
			</carousel>
		</div>
		<div class="card">
			<div class="card-content">
				<div class="icon-box">
					<div>
						<i class="el-icon-star-off icon-style" :class="{active : isPraise, ['el-icon-star-on'] : isPraise}" @click="praise"></i>
						<i class="el-icon-position icon-style"></i>
					</div>
					<div class="ribbon red"></div>
				</div>
			</div>

			<baidu-map class="map"  :zoom="15" center="上海市">
				<bm-local-search v-show="false" :keyword="data.address_zh||'东方明珠'" :auto-viewport="true" :location="data.area||'黄浦区'"></bm-local-search>
  			</baidu-map>
			<div class="card-content desc">
				<h3>Description</h3>
				<p>
					{{data.desc_en}}
				</p>
			</div>
		</div>
		
		<div class="card">
			<div class="card-content">

				<div v-for="(item, index) in data.pricing" :key="index" class="item">
					<h2>{{item.name}}</h2>
					<div class="flag">
						<span>Starting at</span>
						<div class="ribbont" :class="{red : index%2==1}">
							<div class="content">
								<label>{{item.price}}</label>RMB/month per person
							</div>
							<div class="triangle"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-content">
				<h3>Reviews</h3>
				<div class="dialog" style="margin-bottom: 20px;">
					<div class="head-img" style="background-image: url('../static/imgs/user.jpg')"></div>
					<el-input v-model="input" placeholder="Write Your Comment"></el-input>
					<span @click="submit">Post</span>
				</div>

				<div v-for="(item, index) in data.comments" class="reviews">
					<div class="avatar" :style="'background-image: url('+item.avatar+')'"></div>
					<div class="content">
						<h4>{{item.name}}</h4>
						<p>
							{{item.text}}
						</p>
					</div>
				</div>

				<div class="views"><strong>View all {{commentCount}} Comments</strong></div>
			</div>
		</div>
		

	</div>
</template>

<script>
	import Vue                           from 'vue';
	import {mapState}                    from 'vuex';
	import {getWorkspace, submitComment} from '../../api';

	export default{
		name : 'home',
		data() {
			return {
				input : '',
				data : {
					photos : [],
					provider : {
						avatar : ''
					},
					address_zh : '',
					area : ''
				}
			}
		},
		components : {
		},
		computed : mapState({
            user : state => state.user.user,
			commentCount : function() {
				if(!this.data.comments) return 0;
				return this.data.comments.length
			},
			img : function () {
				if (this.data.photos.length > 0) {
					return this.data.photos[0];
				}else return '../static/imgs/house.jpg';
			},
			logo : function() {
				if (this.data.provider && this.data.provider.avatar == '') {
					return '../static/imgs/logo.jpg';
				}else return this.data.provider.avatar
			},
			isPraise : function() {
				if(!this.user._id) return false;
				if(!this.data.praises) return false;
				const praise = this.data.praises.find(v => v.user._id == this.user._id);
				if(praise) return true;
				return false;
			},
		}),
		methods: {
        	getData(_id) {
        		getWorkspace({_id})
        		.then(workspace => {
        			console.log('workspace', workspace)
        			this.data = workspace
        		})
        		.catch(err => {
        			console.log('err', err);
        		})
        	},
        	
        	submit() {
				const model = {
					_id : this.data._id,
					comment : {
						name   : 'Anonymous',
						avatar : 'http://store.workspace.h-fish.vip/static/imgs/user.jpg',
						text   : this.input
					}
				};
				submitComment(model)
				.then(result => {
					console.log('result', result);
					this.input = '';
					if(!this.data.comments) this.data.comments = [];
					this.data.comments.push(model.comment)
				})
				.catch(err => {})
			},
			praise() {
				if(!this.user._id) return;
				const model = {
					_id : this.data._id,
					user : this.user._id,
				};

                this.$store.dispatch('workzspace/praise', model)
                .then(result => {
                	this.getData(this.data._id);
                })
                .catch(err => {})
			},
		},
		beforeMount() {
			const _id = this.$route.query._id;
			if(_id) {
				this.getData(_id);
			} else this.$router.go(-1)
			
		}
	}
</script>

<style lang="scss">
.workspace {

}
</style>

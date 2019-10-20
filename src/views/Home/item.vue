<template>
	<div class="card">
		<div class="card-title" @click="toWorkspace">
			<div class="card-logo" :class="{vip : data.recommend}">
				<div class="logo-style" :style="'background-image: url('+logo+')'"></div>
			</div>
			<div class="card-infor">
				<div class="infor-title">{{data.name}}</div>
				<div class="tworow">
					<p><i class="el-icon-location icon-style"></i>{{`${data.area||''}${data.address_en}`}}</p>
					<span v-if="data.recommend">Premium Workspaces</span>
				</div>
			</div>
		</div>
		<div :id="`parent${index}`" class="card-img" :class="{img : !data.video}" :style="'background-image: url('+img+')'">
			<video-player
				v-if="data.video && showVideo"
				class="vjs-custom-skin"
				ref="videoPlayer"
				:options="playerOptions"
				:playsinline="true"
				@error="onPlayerLoadeddata($event)" 
				customEventName="changed">
				
          	</video-player>
          	<div v-else @click="toWorkspace" style="height: 100%;width: 100%;"></div>
          	<!-- 轮播图数量 -->
          	<span v-if="!data.video" class="img-number">1 / 1</span>
		</div>
		<div class="card-content">
			<div class="icon-box">
				<div>
					<i class="el-icon-star-off icon-style" :class="{active : isPraise, ['el-icon-star-on'] : isPraise}" @click="praise"></i>
					<i class="el-icon-chat-line-round icon-style" @click="toWorkspace"></i>
					<i class="el-icon-position icon-style"></i>
				</div>
				<div class="ribbon" :class="{red : isWishlist}" @click="wishlist"></div>
			</div>
			<div class="comment-style" @click="toWorkspace">
				<p>{{data.desc_en}}</p>
				<span class="more-style"><strong>More...</strong></span>
			</div>
			
			<div v-if="praiseCount > 0" class="focus">
				<div class="img-style">
					<div v-for="(item, index) in data.praises" :key="index" class="img-item" :style="'background-image: url('+item.user.headimgurl+')'"></div>
				</div>
				<div class="text-style">liked by <strong>{{lastPraise.user.nickname}}</strong> and <strong>{{praiseCount}}</strong> others.</div>
			</div>
			<!-- <div class="dialog">
				<div class="head-img" :style="'background-image: url('+comment_img+')'"></div>
				<el-input v-model="input" placeholder="Write Your Comment"></el-input>
				<span @click="submit">Post</span>
			</div> -->
			<div class="comment" v-if="commentCount>0">
				<div v-for="(item, index) in data.comments" :key="index" style="margin-bottom: 10px;">
					<div class="comment-title">
						<span class="title-style"><strong>{{item.name}}</strong></span>
						<span>{{fromNow(item.createTime)}}</span>
					</div>
					<div class="comment-style" @click="toWorkspace">{{item.text}}<span class="more-style"><strong>More...</strong></span>
					</div>
				</div>
				<div class="views" @click="toWorkspace"><strong>View all {{commentCount}} Comments</strong></div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import {mapState} from 'vuex';
import {submitComment, submitPraise, submitWishlist} from '../../api';
	export default{
		name : 'home-item',
		data() {
			return {
				input : '',
				showVideo : true
			}
		},
		props : {
			index : 0,
			data : {
				type    : Object,
				default : () => ({
					photos : []
				})
			}
		},
		computed : mapState({
            user : state => state.user.user,
            commentCount : function() {
				if(!this.data.comments) return 0;
				return this.data.comments.length
			},
			isWishlist : function() {
				if(!this.user._id) return false;
				if(!this.data.wishlist) return false;

				const bo = this.data.wishlist.find(v => v.user == this.user._id);
				if(bo) return true;
				return false;
			},
			isPraise : function() {
				if(!this.user._id) return false;
				if(!this.data.praises) return false;
				const praise = this.data.praises.find(v => v.user._id == this.user._id);
				if(praise) return true;
				return false;
			},
			praiseCount : function() {
				if(!this.data.praises)return 0;
				return this.data.praises.length
			},
			lastPraise : function() {
				const praise = this.data.praises.pop();
				// console.log('last', praise)
				this.data.praises.push(praise);
				return praise;
			},
			player : function() {
				console.log('this.player', this.$refs.videoPlayer.player)
				return this.$refs.videoPlayer.player
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
			comment_img : function() {
				if (this.user._id) {
					return this.user.headimgurl;
				}else return '../static/imgs/user.jpg';
			},
			playerOptions: function() {
				return {
					height: '340',
					autoplay: false,
					aspectRatio : '16:9',
					sources: [{
						type: 'video/mp4',
						src: this.data.video,
						// type: 'video/x-flv',
      //       			src: 'http://fms.cntv.lxdns.com/live/flv/channel96.flv'
					}],
					language: 'zh-CN',
					poster: this.img
				}
			}
        }),
		methods: {
			onPlayerLoadeddata(e) {
				this.showVideo = false
			},
			fromNow(date) {
				return moment(date).fromNow();
			},
			toWorkspace() {
        		this.$router.push({ path: 'workspace', query : {_id : this.data._id}})
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
                })
                .catch(err => {})
			},
			wishlist() {
				if(!this.user._id) return;
				const model = {
					_id : this.data._id,
					user : this.user._id,
				};

                this.$store.dispatch('workzspace/wishlist', model)
                .then(result => {
                })
                .catch(err => {})
			},
			handleScroll () {
				console.log(window.scrollY)
			}
		},
		beforeMount() {
			var div = document.getElementById(`parent${this.index}`);
			this.$nextTick(function () {
				console.log('div', div)
			})
			if(div) {
				var reactObj = div.getBoundingClientRect();
				console.log(reactObj);
			}
		},
		mounted () {
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>


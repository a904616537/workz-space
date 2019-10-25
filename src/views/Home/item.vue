<template>
	<div class="card">
		<div class="card-title" @click="toWorkspace">
			<div class="card-logo" :class="{vip : data.recommend}">
				<div class="logo-style" :style="'background-image: url('+logo+')'"></div>
			</div>
			<div class="card-infor">
				<div class="infor-title">{{data.name}}</div>
				<div class="tworow">
					<p><i class="el-icon-location icon-style"></i>{{`${data.area||''} ${data[`address_${locale}`]}${data[`addresses_${locale}`]||''}`}}</p>
					<span v-if="data.recommend">{{$t('premium')}}</span>
				</div>
			</div>
		</div>
		<div  class="card-img" :class="{img : !data.video}" :style="'background-image: url('+img+')'">
			<video-player
				:id="`parent${index}`" 
				v-if="data.video && showVideo"
				class="vjs-custom-skin"
				:ref="`videoPlayer${index}`"
				:options="playerOptions"
				:playsinline="true"
				@error="onPlayerLoadeddata($event)" 
				customEventName="changed">
				
          	</video-player>
          	<div v-else @click="toWorkspace">
          		<carousel
				:per-page="1"
				:mouse-drag="true"
				:paginationEnabled="false"
				:autoplay="true"
				:autoplayTimeout="5000"
				:loop="true"
				v-model="slideValue">
					<slide v-for="(item, index) in data.photos" :key="index">
						<div class="card-img img" :style="'background-image: url('+item+')'">
							<!--  照片数量显示  -->
							<span class="img-number">{{slideValue + 1}} / {{data.photos.length}}</span> 
						</div>
					</slide>
				</carousel>
          	</div>
		</div>
		<div class="card-content">
			<div class="icon-box">
				<div>
					<i class="el-icon-star-off icon-style" :class="{active : isPraise, ['el-icon-star-on'] : isPraise}" @click="praise"></i>
					<i class="el-icon-chat-line-round icon-style" @click="toWorkspace"></i>
					<i class="el-icon-position icon-style" @click="toWorkspace"></i>
				</div>
				<div class="ribbon" :class="{red : isWishlist}" @click="wishlist"></div>
			</div>
			<div class="comment-style" @click="toWorkspace">
				<p>{{data[`desc_${locale}`]}}</p>
				<span class="more-style"><strong>{{$t('more')}}</strong></span>
			</div>
			
			<div v-if="praiseCount > 0" class="focus">
				<div class="img-style">
					<div v-for="(item, index) in data.praises" :key="index" class="img-item" :style="'background-image: url('+item.user.headimgurl+')'"></div>
				</div>
				<div class="text-style">liked by <strong>{{lastPraise.user.nickname}}</strong> {{$t('and')}} <strong>{{praiseCount}}</strong> {{$t('others')}} </div>
			</div>
			<!-- <div class="dialog">
				<div class="head-img" :style="'background-image: url('+comment_img+')'"></div>
				<el-input v-model="input" placeholder="Write Your Comment"></el-input>
				<span @click="submit">Post</span>
			</div> -->
			<div class="comment" v-if="commentCount>0">
				<div v-for="(item, index) in commentList" :key="index" style="margin-bottom: 10px;">
					<div class="comment-title">
						<span class="title-style"><strong>{{item.name}}</strong></span>
						<span>{{fromNow(item.createTime)}}</span>
					</div>
					<div class="comment-style" @click="toWorkspace">{{item.text}}<span class="more-style"><strong>{{$t('more')}}</strong></span>
					</div>
				</div>
				<div class="views" @click="toWorkspace"><strong>{{$t('view')}} {{commentCount}} {{$t('comments')}}</strong></div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';
import I18n from '../../i18n';
import {mapState} from 'vuex';
	import {Message}  from 'element-ui';
import {submitComment, submitPraise, submitWishlist, getWishlist} from '../../api';
	export default{
		name : 'home-item',
		data() {
			return {
				play : true,
				reactObj : null,
				player : null,
				slideValue : 0,
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
            locale : function() {
            	return I18n.locale;
            },
            commentCount : function() {
				if(!this.data.comments) return 0;
				return this.data.comments.length
			},
			commentList : function() {
				if(this.commentCount > 0) return [];
				return this.data.slice(0, 3);
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
				const option = {
					height      : '340',
					autoplay    : false,
					muted       : true,
					aspectRatio : '16:9',
					preload: 'metadata',
					sources     : [{
						type: 'video/mp4',
						src: this.data.video,
						// type: 'video/x-flv',
					}],
					language: 'zh-CN',
					notSupportedMessage: this.$t('videoErro'), //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true  //全屏按钮
					}
				}
				if(Vue.config.isWechat) {
					option.poster = this.img;
				}
				return option
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
			praise() {
				if(!this.user._id) {
					Message({
						message : '请先关注并登录 WorkzSpace',
						type    : 'error',
						onClose : () => {
							window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
						}
					})
					return;
				}
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
				if(!this.user._id) {
					Message({
						message : '请先关注并登录 WorkzSpace',
						type    : 'error',
						onClose : () => {
							window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
						}
					})
					return;
				}
				const model = {
					_id  : this.data._id,
					user : this.user._id,
				};

                this.$store.dispatch('workzspace/wishlist', model)
                .then(result => {
                	this.getUserWish();
                })
                .catch(err => {})
			},
			getUserWish() {
	    		getWishlist({user_id : this.user._id})
	    		.then(data => {
	    			this.workzs = data;
	    			this.$store.dispatch('workzspace/setUserCount', this.workzs)
	    		})
	    		.catch(err => {
	    			console.log('err', err);
	    		})
	    	},
			handleScroll () {
				this.$nextTick(() => {
					const div = document.getElementById(`parent${this.index}`);
					if(div){
						this.reactObj = div.getBoundingClientRect();
					}
					if(this.$refs[`videoPlayer${this.index}`]) {
						this.player = this.$refs[`videoPlayer${this.index}`].player;
					}
					if(this.player && this.reactObj) {
						if(this.play && this.reactObj.y < 240 && this.reactObj.y > 0) {
							this.play = false
							console.log('加载资源, 开始播放', this.index)
							this.player.play();
							
						} else if(!this.play && ((this.reactObj.y * -1) > 240 || this.reactObj.y > window.innerHeight - this.reactObj.height)){
							this.play = true
							console.log('暂停播放', this.index)
							this.player.pause();
						}	
					}
				})
			}
		},
		beforeMount () {
			if(!Vue.config.isWechat) {
				window.addEventListener('scroll', this.handleScroll, true);
			}
		},
		destroyed() {
			if(!Vue.config.isWechat) {
				window.removeEventListener('scroll', this.handleScroll);
			}
		}
	}
</script>


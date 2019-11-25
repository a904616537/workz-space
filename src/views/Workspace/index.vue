<template>
	<div class="workspace">

		<el-dialog :visible.sync="dialogTableVisible" :modal="false" :show-close="false" width="80%">
			<template slot="title">
				<p style="text-align: center;">{{$t('warning')}}</p>
				<p style="text-align: center;">{{$t('contact')}}</p>
			</template>
			<div style="text-align: center;">
				<img class="qr-img" src="/static/imgs/qrcode_wechat.jpg"/>
			</div>
		</el-dialog>

		<div class="card">
			<div class="card-title">
				<div class="card-logo">
					<div class="logo-style" :style="'background-image: url('+logo+')'"></div>
				</div>
				<div class="card-infor">
					<div class="infor-title">{{data.name}}</div>
					<div><i class="el-icon-location icon-style"></i>{{`${data.area||''}`}} {{data[`address_${locale}`]}}{{data[`addresses_${locale}`]||''}}</div>
				</div>
			</div>
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
		<div class="card">
			<div class="card-content">
				<div class="icon-box">
					<div>
						<i class="el-icon-star-off icon-style" :class="{active : isPraise, ['el-icon-star-on'] : isPraise}" @click="praise"></i>
						<i class="el-icon-position icon-style" @click="onShare"></i>
					</div>
					<div class="ribbon" :class="{red : isWishlist}" @click="wishlist"></div>
				</div>
				<div v-if="praiseCount > 0" class="focus">
					<div class="img-style">
						<div v-for="(item, index) in data.praises" :key="index" class="img-item" :style="'background-image: url('+item.user.headimgurl+')'"></div>
					</div>
					<div class="text-style">liked by <strong>{{lastPraise.user.nickname}}</strong> {{$t('and')}} <strong>{{praiseCount}}</strong> {{$t('others')}} </div>
				</div>
			</div>
			
			<baidu-map class="map"  :zoom="15" center="上海市">
				<bm-local-search v-show="false" :keyword="data.address_zh||'东方明珠'" :auto-viewport="true" :location="data.area||'黄浦区'"></bm-local-search>
  			</baidu-map>
			<div class="card-content desc">
				<h3>{{$t('desc')}}</h3>
				<p>
					{{data[`desc_${locale}`]}}
				</p>
			</div>
		</div>
		
		<div class="card">
			<div class="card-content">

				<div v-for="(item, index) in data.pricing" :key="index" class="item">
					<h3>{{item.name}}</h3>
					<div class="flag">
						<span>{{$t('start')}}</span>
						<div class="ribbont" :class="{red : index%2==1}">
							<div class="content">
								<label>{{item.price}}</label>
								<span>{{$t('price')}}</span>
							</div>
							<div class="triangle"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-content">
				<el-button type="primary" size="mini" round @click="$router.push({path : 'contact'})" style="background-color: #00aeef;">{{$t('button.contact')}}</el-button>
			</div>
		</div>
		<div class="card">
			<div class="card-content">
				<h3>Reviews</h3>
				<div class="dialog" style="margin-bottom: 20px;">
					<div class="head-img" :style="'background-image: url('+this.user.headimgurl+')'"></div>
					<el-input v-model="input" placeholder="Write Your Comment"></el-input>
					<span @click="submit">{{$t('post')}}</span>
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

				<div class="views"><strong>{{$t('view')}} {{commentCount}} {{$t('comments')}}</strong></div>
			</div>
		</div>
		
		<!-- post评论后弹出对话框 -->
		<el-dialog
		  	:visible.sync="dialogVisible"
		  	width="80%"
		  	:before-close="handleClose">
		  	<span>Thanks for you review! Once your opinion has been reviewed it will be posted.<br/> 感谢您的评论！ 审核您的意见后，它将被发布。</span><br/>
		    <el-button type="primary" @click="dialogVisible = false" style="margin-top: 20px;">{{$t('button.enter')}}</el-button>
		</el-dialog>
		<el-dialog
			:show-close="false"
		  	:visible.sync="dialogShare"
		  	width="80%"
		  	:before-close="handleClose">
		  	<span>Please click the button in the top right corner of WeChat to share.<br/> 请点击微信右上角的按钮分享哦。</span><br/>
		    <el-button type="primary" @click="dialogShare = false" style="margin-top: 20px;">{{$t('button.enter')}}</el-button>
		</el-dialog>
	</div>
</template>

<script>
	import Vue                           from 'vue';
	import {mapState}                    from 'vuex';
	import {getWorkspace, submitComment, getWishlist} from '../../api';
	import I18n from '../../i18n';
	import { Message } from 'element-ui';

	export default{
		name : 'workspace',
		data() {
			return {
				dialogTableVisible : false,
				slideValue         : 0,
				input              : '',
				dialogShare        : false,
				dialogVisible      : false,
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
            locale : function() {
            	return I18n.locale;
            },
            isWishlist : function() {
				if(!this.user._id) return false;
				if(!this.data.wishlist) return false;

				const bo = this.data.wishlist.find(v => v.user == this.user._id);
				if(bo) return true;
				return false;
			},
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
			disabled : function() {
        		if(this.input.trim() == '') return true;
        		else return false;
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
		}),
		methods: {
			onShare() {
				this.dialogShare = true;
			},
			onSlide(item) {
				console.log('slide item', item)
			},
        	getData(_id) {
        		getWorkspace({_id})
        		.then(workspace => {
        			this.data = workspace
        			console.log('getWorkspace', workspace)
        			wx.updateAppMessageShareData({
						title   : workspace.name, // 分享标题
						desc    : workspace.desc_en, // 分享描述
						link    : `http://wechat.workzspace.cn?workspace=${workspace._id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl  : workspace.provider&&workspace.provider.avatar || 'http://wechat.workzspace.cn/static/imgs/Workz_Space_logo.png', // 分享图标
						type    : 'link', // 分享类型,music、video或link，不填默认为link
						success : () => {
					    	console.log('分享给朋友成功')
						},
						cancel(res) {
							// alert('取消分享'+JSON.stringify(res))
						},
						fail(res) {
							// alert('分享失败'+JSON.stringify(res))
						}
					});
					wx.updateTimelineShareData({
						title   : workspace.name, // 分享标题
						desc    : workspace.desc_en, // 分享描述
						link    : `http://wechat.workzspace.cn?workspace=${workspace._id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl  : workspace.provider&&workspace.provider.avatar || 'http://wechat.workzspace.cn/static/imgs/Workz_Space_logo.png', // 分享图标
						success : () => {
						},
						cancel(res) {
							// alert('取消分享'+JSON.stringify(res))
						},
						fail(res) {
							// alert('分享失败'+JSON.stringify(res))
						}
					})


        		})
        		.catch(err => {
        			console.log('err', err);
        		})
        	},
        	submit() {
        		if(this.disabled) {
        			return;
        		}
        		if(!this.user._id) {
        			this.dialogTableVisible = true;
					return;
				}
				const model = {
					_id : this.data._id,
					comment : {
						name   : this.user.name,
						avatar : this.user.headimgurl,
						text   : this.input
					}
				};
				submitComment(model)
				.then(result => {
					this.input = '';
					if(!this.data.comments) this.data.comments = [];
					this.data.comments.push(model.comment)
					this.dialogVisible = true;
					Message.success()
				})
				.catch(err => {})
			},
			wishlist() {
				if(!this.user._id) {
					this.dialogTableVisible = true;
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
	    			this.getData(this.data._id);
	    		})
	    		.catch(err => {
	    			console.log('err', err);
	    		})
	    	},
			praise() {
				if(!this.user._id) {
					this.dialogTableVisible = true;
					return;
				}
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
			handleClose(done) {
				done();
		    }
		},
		mounted() {
		},
		beforeMount() {
			const _id = this.$route.query._id;
			if(_id) {
				this.getData(_id);
			} else this.$router.go(-1)
		}
	}
</script>

<style lang="scss" scoped>
.workspace {
	.btn-style {
		background-color : #00aeef;
		color            : #fff;
		border-radius    : 15px;
		box-shadow       : 0 0 5px rgba(197,204,208,0.3);
		padding          : 0 50px;
		display          : inline-block;
		line-height      : 40px;
		font-weight      : bold;
		margin           : 0 0 10px;
	}
	.focus{
		margin      : 10px 0;
		position    : relative;
		display     : flex;
		align-items : center;
		font-size : 14px;
		.text-style{
		}
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
	}
}
</style>

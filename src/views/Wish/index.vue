<template>
	<div class="wish-page">
		<div class="inner">
			<div class="card">
				<div class="card-title">
					<div class="card-logo">
						<div class="logo-style" :style="'background-image: url('+user.headimgurl+')'"></div>
					</div>
					<div class="card-infor">
						<div class="infor-title" @click="toProfile">{{name}}<span class="span-style">{{$t('edit')}}</span></div>
						<!-- <div class="tips">Tay Ping Hui is a Singaporean actor and director. In 2014,Tay made his directorial debut with the basketball film Meeting the Glant.</div> -->
						<div class="desc"><img src="/static/imgs/company.png" class="desc-icon" />{{company}}</div>
						<div class="desc"><img src="/static/imgs/phone.png" class="desc-icon" />{{phone}}</div>
						<div class="desc"><img src="/static/imgs/email.png" class="desc-icon" />{{email}}</div>
					</div>
				</div>
			</div>
			<v-item  v-for="(item, index) in workzs" :key="index" :index="index" :data="item" @onRemove="() => onRemove(item, index)"/>

		</div>
		<div class="footer" v-if="workzs.length>0">
			<div>
				<el-button class="submit" @click="submitWishlist">{{$t('button.subWish')}}</el-button>
			</div>
		</div>

		<!-- 信息提交后弹出框 -->
		<el-dialog
		  	:visible.sync="dialogVisible"
		  	width="80%">
		  	<div v-if="!this.validation">
		  		<span>你的个人信息不完整，请先完善<br/>Please fill in all required info first and submit again<br/></span>
				<el-button type="primary" @click="dialogVisible = false" style="margin-top: 20px;">{{$t('button.enter')}}</el-button>
			</div>
			<div v-else>
				<span>愿望清单已成功提交。我们会尽快与您联系！<br/>Wishlist successfully submitted. We'll be in touch with you shortly!<br/></span>
				<el-button type="primary" @click="dialogVisible = false" style="margin-top: 20px;">{{$t('button.enter')}}</el-button>
			</div>
		</el-dialog>


	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { Message } from 'element-ui';
	import Item from './item';
	import {getWishlist, postWishlist, deleteWishlist} from '../../api';
	export default {
		data() {
			return {
				workzs : [],
				dialogVisible: false
			}
		},
		components: {
			'v-item' : Item,
		},
		computed : mapState({
			user   : state => state.user.user,
			name : function () {
				if(this.user.name && this.user.name.first && this.user.name.last) {
					return `${this.user.name.first} ${this.user.name.last}`
				} else return this.user.nickname
			},
			email : function() {
				if(this.user.email) return this.user.email;
				else return 'no email'
			},
			company : function() {
				if(this.user.company) return this.user.company;
				else return 'no company name'
			},
			phone : function() {
				let arr = []
				if(!this.user) return '';
				const phone = this.user.phone;
				if(phone && phone.length > 10) {
					arr = [phone.substr(0,3), phone.substr(3,4), phone.substr(7,4)];
					return `+ ${arr.join(' ')}`
				} else return 'no phone';
			},
			validation : function() {
				if(!this.user) return false;
				if(this.user.phone == '') return false;
				if(this.user.email == '') return false;
				if(this.user.company == '') return false;
				if(!this.user.first_name || !this.user.last_name) return false;
				return true;
			}
        }),
		methods: {
			toProfile() {
	    		this.$router.push({path : '/profile'})
	    	},
	    	onRemove(item, index) {
	    		this.workzs.splice(index, 1);
	    		console.log('data', item)
	    		deleteWishlist({_id : item._id, wishlist : item.wishlist._id})
	    		.then(result => {
	    			console.log('移除')
	    			this.$store.dispatch('workzspace/setUserCount', this.workzs)
	    		})
	    		.catch(err => console.log(err))
	    	},
	    	getData() {
	    		getWishlist({user_id : this.user._id})
	    		.then(data => {
	    			this.workzs = data;
	    			this.$store.dispatch('workzspace/setUserCount', this.workzs)
	    		})
	    		.catch(err => {
	    			console.log('err', err);
	    		})
	    	},
	    	submitWishlist() {
	    		if(!this.validation) {
	    			this.dialogVisible = true
	    			return;
	    		}
	    		const model = {
					user      : this.user._id,
					phone     : this.user.phone,
					email     : this.user.email,
					company   : this.user.company,
					name      : {
						first : this.user.first_name,
						last : this.user.last_name
					},
					number    : this.user.number,
					address    : this.user.address,
					budget     : this.user.budget,
					other      : this.user.other,
					workspace : this.workzs.map(v => v._id)
	    		}
	    		postWishlist(model)
	    		.then(result => {
	    			this.dialogVisible = true
	    			this.workzs = [];
	    		})
	    		.catch(err => {
	    			console.log('提交失败')
	    		})
	    	}
		},
		beforeMount() {
			this.getData();
		}
	}
</script>
<style lang="scss" scoped>

@import "../../assets/base.scss";
.submit {
	background-color : $main-color;
	color            : $font-white;
	border-radius    : 15px;
	box-shadow       : 0 0 5px rgba(197,204,208,0.3);
}

</style>

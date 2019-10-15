<template>
	<div class="wish-page">
		<div class="inner">
			<div class="card">
				<div class="card-title">
					<div class="card-logo">
						<div class="logo-style" :style="'background-image: url('+user.headimgurl+')'"></div>
					</div>
					<div class="card-infor">
						<div class="infor-title" @click="toProfile">{{name}}<span class="span-style">Edit</span></div>
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
				<el-button class="submit" @click="submitWishlist">Submit Wishlist</el-button>
			</div>
		</div>
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
				workzs : []
			}
		},
		components: {
			'v-item' : Item,
		},
		computed : mapState({
			user   : state => state.user.user,
			name : function () {
				if(this.user.name) {
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
				if(!this.user.name) return false;
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
	    		.then(result => console.log('移除'))
	    		.catch(err => console.log(err))
	    	},
	    	getData() {
	    		getWishlist({user_id : this.user._id})
	    		.then(data => {
	    			// console.log('data', data)
	    			this.workzs = data;
	    		})
	    		.catch(err => {
	    			console.log('err', err);
	    		})
	    	},
	    	submitWishlist() {
	    		if(!this.validation) {
	    			Message.error('您的信息不完整，请先完善！');
	    			return;
	    		}
	    		const model = {
					user      : this.user._id,
					phone     : this.user.phone,
					email     : this.user.email,
					company   : this.user.company,
					name      : this.user.name,
					number    : this.user.number,
					workspace : this.workzs.map(v => v._id)
	    		}
	    		postWishlist(model)
	    		.then(result => {
	    			Message.success('已经提交您的心愿单，请等待管理员联系！')
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

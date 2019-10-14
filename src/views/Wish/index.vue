<template>
	<div class="wish-page">
		<div class="inner">
			<div class="card">
				<div class="card-title">
					<div class="card-logo">
						<div class="logo-style" :style="'background-image: url('+user.headimgurl+')'"></div>
					</div>
					<div class="card-infor">
						<div class="infor-title" @click="toProfile">Tay Ping Hui<span class="span-style">Edit</span></div>
						<div class="tips">Tay Ping Hui is a Singaporean actor and director. In 2014,Tay made his directorial debut with the basketball film Meeting the Glant.</div>
						<div class="desc"><img src="/static/imgs/company.png" class="desc-icon" />Telco Tech</div>
						<div class="desc"><img src="/static/imgs/phone.png" class="desc-icon" />+65 8564 5698</div>
						<div class="desc"><img src="/static/imgs/email.png" class="desc-icon" />tayping01@hotmail.com</div>
					</div>
				</div>
			</div>
			<v-item  v-for="(item, index) in workzs" :key="index" :data="item"/>

		</div>
		<div class="footer">
			<div>
				<el-button class="submit">Submit Wishlist</el-button>
			</div>
		</div>
		<v-menu />
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Item from './item';
	export default {
		data() {
			return {
			}
		},
		components: {
			'v-item' : Item,
		},
		computed : mapState({
			user   : state => state.user.user,
			workzs : state => state.workzspace.workzs
        }),
		methods: {
			toProfile() {
	    		this.$router.push({path : '/profile'})
	    	}
		},
		
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

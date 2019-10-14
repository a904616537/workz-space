<template>
	<div class="profile">
		<div class="inner">
			<div class="header" style="background-image: url('../static/imgs/headerbg.jpg');">
				<vue-particles
				color="#dedede"
				:particleOpacity="0.7"
				:particlesNumber="200"
				shapeType="circle"
				:particleSize="4"
				linesColor="#dedede"
				:linesWidth="1"
				:lineLinked="true"
				:lineOpacity="0.3"
				:linesDistance="150"
				:moveSpeed="2"
				:hoverEffect="true"
				hoverMode="grab"
				:clickEffect="false"
				clickMode="push"
				></vue-particles>
				<v-upload :img="data.headimgurl" :onSuccess="onSuccess"/>
			</div>
			<hr class="hr-style" />
			<div class="form-box">
				<div class="item">
					<img src="/static/imgs/profile.png" class="icon-style" />
					<el-input v-model="data.first_name" placeholder="First Name"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/profile.png" class="icon-style default-icon" />
					<el-input v-model="data.last_name" placeholder="Last Name"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/company.png" class="icon-style" />
					<el-input v-model="data.company" placeholder="Company Name"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/phone.png" class="icon-style" />
					<el-input v-model="data.phone" placeholder="Contact Number"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/email.png" class="icon-style" />
					<el-input v-model="data.email" placeholder="Email"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/users.png" class="icon-style" />
					<el-input type="number" v-model="data.number" placeholder="Number of Seats Required"></el-input>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="btn-style" @click="goBack"><i class="el-icon-arrow-left"></i></div>
			<el-button class="public-btn">Update Info</el-button>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Upload from './upload';
	export default {
		name : 'profile',
		data() {
			return {
				data : {
					headimgurl     : '../static/imgs/user.jpg',
					first_name : '',
					last_name  : '',
					company    : '',
					phone      : '',
					email      : '',
					number     : '',
				}
			}
		},
		computed : mapState({
            user : state => state.user.user,
        }),
		components: {
			'v-upload' : Upload,
		},
		methods: {
			onSuccess(url) {
				this.data.headimgurl = url;
			},
			goBack() {
				this.$router.go(-1)
			}
		},
		beforeMount() {
			console.log('this.user', this.user)
			this.data = this.user
		}
	}
</script>

<style lang="scss">

</style>
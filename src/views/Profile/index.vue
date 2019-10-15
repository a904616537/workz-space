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
					<el-input v-model="data.name.first" placeholder="First Name"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/profile.png" class="icon-style default-icon" />
					<el-input v-model="data.name.last" placeholder="Last Name"></el-input>
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
			<el-button class="public-btn" @click="onSubmit">Update Info</el-button>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Upload from './upload';
	import {updateuser} from '../../api';
	import { Message } from 'element-ui';
	export default {
		name : 'profile',
		data() {
			return {
				data : {
					headimgurl     : '../static/imgs/user.jpg',
					name : {
						first : '',
						last  : '',
					},
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
			},
			onSubmit() {
				const model = Object.assign({
					name : {
						first : this.data.first_name,
						last  : this.data.last_name,
					},
					headimgurl     : this.data.headimgurl,
					company    : this.data.company,
					phone      : this.data.phone,
					email      : this.data.email,
					number     : this.number,
				}, this.user);
				updateuser(model)
				.then(result => {
					// this.$store.dispatch('user/edit', result)
					Message.success('success!')
				})
				.catch(err => {
					Message.error('edit error!')
				})
			}
		},
		beforeMount() {
			if(this.user._id) {
				this.data =Object.assign({},this.user)
			}
		}
	}
</script>

<style lang="scss">

</style>
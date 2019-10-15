<template>
	<div class="contact-page profile">
		<div class="box">
			<div class="card">
				<div class="title"><strong>More Questions?<br/>Please<span> Contact Us!</span></strong></div>
				<div class="form-box">
					<div class="item">
						<img src="/static/imgs/profile.png" class="icon-style" />
						<el-input v-model="name.first" placeholder="First Name"></el-input>
					</div>
					<div class="item">
						<img src="/static/imgs/profile.png" class="icon-style default-icon" />
						<el-input v-model="name.last" placeholder="Last Name"></el-input>
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
				<div class="send-btn" @click="sendEmail">Send</div>
			</div>
		</div>
		<p><strong>OR</strong></p>
		<div class="box">
			<div class="card">
				<p class="title"><strong>Scan the WeChat QR code below and<br/>chat with us directly</strong></p>
				<img class="qr-img" />
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import {Message, Loading} from 'element-ui';
	import {contactEmail} from '../../api';
	export default {
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
            name : function () {
            	if(this.user.name) return this.user.name;
            	else return {first : '', last : ''}
            }
        }),
        methods: {
			sendEmail() {
				let loadingInstance = Loading.service({
					lock: true,
					text: '邮件发送中',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'});
				contactEmail(this.data)
				.then(data => {
					Message.success('邮件发送成功！')
					this.$nextTick(() => {
						loadingInstance.close();
					});
				})
				.catch(err => {
					Message.error('邮件发送失败！')
				})
			}
		},
		beforeMount() {
			if(this.user._id) {
				this.data = this.user
			}
		}
	}
</script>

<style lang="scss">

</style>
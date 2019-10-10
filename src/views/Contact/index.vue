<template>
	<div class="contact-page profile">
		<div class="box">
			<div class="card">
				<div class="title"><strong>More Questions?<br/>Please<span> Contact Us!</span></strong></div>
				<div class="form-box">
					<div class="item">
						<img src="/static/imgs/profile.png" class="icon-style" />
						<el-input v-model="input" placeholder="First Name"></el-input>
					</div>
					<div class="item">
						<img src="/static/imgs/profile.png" class="icon-style default-icon" />
						<el-input v-model="input" placeholder="Last Name"></el-input>
					</div>
					<div class="item">
						<img src="/static/imgs/company.png" class="icon-style" />
						<el-input v-model="input" placeholder="Company Name"></el-input>
					</div>
					<div class="item">
						<img src="/static/imgs/phone.png" class="icon-style" />
						<el-input v-model="input" placeholder="Contact Number"></el-input>
					</div>
					<div class="item">
						<img src="/static/imgs/email.png" class="icon-style" />
						<el-input v-model="input" placeholder="Email"></el-input>
					</div>
					<div class="item">
						<img src="/static/imgs/users.png" class="icon-style" />
						<el-input v-model="input" placeholder="Number of Seats Required"></el-input>
					</div>
				</div>
				<div class="send-btn">Send</div>
			</div>
		</div>
		<p><strong>OR</strong></p>
		<div class="box">
			<div class="card">
				<p class="title"><strong>Scan the WeChat QR code below and<br/>chat with us directly</strong></p>
				<img class="qr-img" />
			</div>
		</div>
		<v-menu />
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.contact-page {
		position         : absolute;
		left             : 0;
		right            : 0;
		height           : 100%;
		background-color : #f4f4f4;
		.box {
			margin: 10px;
			.title {
				padding: 14px 0 0;
				span {
					color: #00aeef;
				}
			}
			.send-btn {
				background-color : #00aeef;
				color            : #fff;
				border-radius    : 15px;
				box-shadow       : 0 0 5px rgba(197,204,208,0.3);
				padding          : 0 50px;
				display          : inline-block;
				line-height      : 40px;
				font-weight      : bold;
				margin           : -14px 0 14px;
			}
			.qr-img {
				width: 100px;
				height: 100px;
				background-color: #f4f4f4;
				margin-bottom: 20px;
			}
		}
	}
</style>
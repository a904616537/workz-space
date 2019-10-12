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

</style>
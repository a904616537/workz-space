<template>
	<div class="profile">
		<div class="inner">
			<div class="header">
				<div class="headImg"></div>
				<img src="/static/imgs/edit.png" class="edit-icon" />
			</div>
			<hr class="hr-style" />
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
		</div>
		<div class="footer">
			<div class="btn-style"><i class="el-icon-arrow-left"></i></div>
			<div class="public-btn">Update Info</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'profile',
		data() {
			return {
				input : ''
			}
		}
	}
</script>

<style lang="scss">

</style>
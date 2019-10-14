<template>
	<div class="follow">
		<div class="inner">
			<div class="card">
				<div class="logo" style="background-image: url(../static/imgs/Workz_Space_logo.png)">
					
				</div>
				<div class="content">
					<p>To continue using<br/><a target="_blank" href="https://www.baidu.com" class="link-style">Workzspace.com</a>,<br/>please scan or long-press and<br/>extract our WeChat QR code below</p>
				</div>
				<img class="qr-style"/>
				<p>We look forward to connecting with you!</p>
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

<style lang="scss" scoped>
	.logo {
		width: 150px;
		height: 50px;
		margin : 0 auto;
		background-repeat: no-repeat;
		background-position : center;
		background-size     : cover;
	}
</style>
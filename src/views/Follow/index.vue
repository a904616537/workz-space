<template>
	<div class="follow">
		<div class="inner">
			<div class="card">
				<div class="logo" style="background-image: url(../static/imgs/Workz_Space_logo.png)">
					
				</div>
				<div class="content">
					<p>{{$t('continue')}}<br/><a target="_blank" href="https://www.baidu.com" class="link-style">Workzspace.com</a>,<br/>{{$t('code.one')}}<br/>{{$t('code.two')}}</p>
				</div>
				<img class="qr-style"/>
				<p>{{$t('forward')}}</p>
			</div>
		</div>
		<v-menu />
	</div>
</template>

<script>
	import shareMixin from '../../util/share';
	export default {
		data() {
			return {

			}
		},
		mixins: [shareMixin],
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
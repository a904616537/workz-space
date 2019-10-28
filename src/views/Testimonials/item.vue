<template>
	<div class="card">
		<div class="text-style">
			{{item.text}}
			<img src="/static/imgs/left_quotes.png" class="icon-style left" />
			<img src="/static/imgs/right_quotes.png" class="icon-style right" />
		</div>
		<hr />
		<div class="bottom">
			<div class="img"><div class="img-style" :class="{logo : !data.logo}" :style="'background-image: url('+data.logo+')'" /></div>
			<div class="infor">
				<div class="title"><strong>{{item.company}}</strong><i>({{item.people}})</i></div>
				<div class="tips"><i class="el-icon-location icon-style"></i> <span class="tips-text">{{item.address}}</span></div>
			</div>
		</div>
	</div>

</template>

<script>
	import i18n from '../../i18n';
	export default {
		data() {
			return {
			}
		},
		props : {
			data : {
				type    : Object,
				default : () => ({})
			}
		},
		computed : {
			item : function() {
				return this.data[i18n.locale];
			}
		}
	}
</script>

<style lang="scss" scoped>
.text-style {
	position: relative;
}
.icons {
	width: 30px;
	height: 30px;
}
.tips {
	.tips-text {
		margin-left: 15px;
	}
}
.icon-style {
	position: absolute;
	width: 30px;
	height: 30px;
	&.left {
		top : -10px;
		left: 0;
	}
	&.right {
		bottom: -20px;
		right: 0;
	}
}
</style>
<template>
	<div class="testimonials">
		<div class="inner">

			<v-item v-for="(item,index) in list" :key="index" />
		</div>
		<v-menu />
	</div>
</template>

<script>
	import Item from './item';
	export default {
		data() {
			return {
				list : [0,0,0]
			}
		},
		components : {
			'v-item' : Item
		},
	}
</script>

<style lang="scss">
	.testimonials {
		position         : absolute;
		left             : 0;
		right            : 0;
		// background-color : #f4f4f4;
		text-align       : left;
		.inner {
			padding       : 20px 10px;
			margin-bottom : 60px;
		}
		.card {
			box-shadow    : 0 5px 10px rgba(0,0,0,.1);
			margin-bottom : 20px;
			.text-style {
				padding   : 10px 30px 5px;
				font-size : 12px;
			}
			hr {
				background-color : #E4E7ED;
				height           : 1px;
				border           : none;
				margin: {
					left  : 20px;
					right : 20px;
				}
			}
			.bottom {
				display   : flex;
				font-size : 14px;
				padding: {
					top    : 5px;
					bottom : 10px;
					left   : 20px;
					right  : 20px;
				}
			
				.img-style {
					width         : 120px;
					height        : 40px;
					border        : 1px solid #EBEEF5;
					border-radius : 10px;
					margin-right  : 14px;
				}
				.tips {
					font-size : 12px;
					color     : #C5CCD0;
				}
			}
		}
	}
</style>
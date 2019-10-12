<template>
	<div class="testimonials">
		<div class="inner">
			<div class="card">
				<div class="text-style">
					Wprkzspace.com supported us to find a right office space that Global-Sign to start up the sales in India, May 2012.<br/>
					Even it was a right scheduling, they have smoothlyarranged site visit planning and dealt with the business venter for better terms & conditions.<br/> We highly appreciate for Kinoshita-san's effort.
				</div>
				<hr />
				<div class="bottom">
					<div class="img"><img class="img-style"></div>
					<div class="infor">
						<div class="title"><strong>Global-Sign</strong><i>(Reiji Oishi)</i></div>
						<div class="tips"><i class="el-icon-location icon-style"></i> Japan</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="text-style">
					Wprkzspace.com supported us to find a right office space that Global-Sign to start up the sales in India, May 2012.<br/>
					Even it was a right scheduling, they have smoothlyarranged site visit planning and dealt with the business venter for better terms & conditions.<br/> We highly appreciate for Kinoshita-san's effort.
				</div>
				<hr />
				<div class="bottom">
					<div class="img"><img class="img-style"></div>
					<div class="infor">
						<div class="title"><strong>Global-Sign</strong><i>(Reiji Oishi)</i></div>
						<div class="tips"><i class="el-icon-location icon-style"></i> Japan</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="text-style">
					Wprkzspace.com supported us to find a right office space that Global-Sign to start up the sales in India, May 2012.<br/>
					Even it was a right scheduling, they have smoothlyarranged site visit planning and dealt with the business venter for better terms & conditions.<br/> We highly appreciate for Kinoshita-san's effort.
				</div>
				<hr />
				<div class="bottom">
					<div class="img"><img class="img-style"></div>
					<div class="infor">
						<div class="title"><strong>Global-Sign</strong><i>(Reiji Oishi)</i></div>
						<div class="tips"><i class="el-icon-location icon-style"></i> Japan</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="text-style">
					Wprkzspace.com supported us to find a right office space that Global-Sign to start up the sales in India, May 2012.<br/>
					Even it was a right scheduling, they have smoothlyarranged site visit planning and dealt with the business venter for better terms & conditions.<br/> We highly appreciate for Kinoshita-san's effort.
				</div>
				<hr />
				<div class="bottom">
					<div class="img"><img class="img-style"></div>
					<div class="infor">
						<div class="title"><strong>Global-Sign</strong><i>(Reiji Oishi)</i></div>
						<div class="tips"><i class="el-icon-location icon-style"></i> Japan</div>
					</div>
				</div>
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
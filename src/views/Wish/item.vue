<template>
	<div class="card">
		<div class="card-title">
			<div class="card-logo">
				<div class="logo-style" :style="'background-image: url('+img+')'"></div>
			</div>
			<div class="card-infor">
				<div class="infor-title">{{data.name}}</div>
				<div class="desc"><i class="el-icon-location icon-style"></i>{{data.address_en}}</div>
			</div>
			<i class="el-icon-circle-close del-icon"></i>
		</div>
	</div>

</template>

<script>
import moment from 'moment';
import {submitComment} from '../../api';
	export default{
		name : 'wish-item',
		data() {
			return {
			}
		},
		props : {
			data : {
				type    : Object,
				default : () => ({
					photos : []
				})
			}
		},
		computed : {
			img : function () {
				if (this.data.photos.length > 0) {
					return this.data.photos[0];
				}else return '../static/imgs/house.jpg';
			},
		},
		methods: {
			fromNow(date) {
				return moment(date).fromNow();
			},
		},
		beforeMount() {
		}
	}
</script>


<template>
	<el-upload
		ref="uploadavatar"
		:action="url"
		:on-success="handleSuccess"
		:multiple="false"
		:show-file-list="false">
		<div class="headImg" :style="'background-image: url('+img+')'"></div>
		<img src="/static/imgs/edit.png" class="edit-icon" />
	</el-upload>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {
				url : 'http://127.0.0.1:8481/upload'
			}
		},
		props: {
			img : {
				type    : String,
				default : ''
			},
			onSuccess: {
				type    : Function,
				default : () => {}
			},
		},
		methods: {
		    handleSuccess(response,file,fileList) {
		    	this.onSuccess(file.response.msg)
		    }
		}
	}
</script>
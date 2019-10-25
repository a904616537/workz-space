<template>
	<div class="profile">
		<div class="inner">
			<div class="header" style="background-image: url('../static/imgs/headerbg.jpg');">
				<vue-particles
				color="#dedede"
				:particleOpacity="0.7"
				:particlesNumber="200"
				shapeType="circle"
				:particleSize="4"
				linesColor="#dedede"
				:linesWidth="1"
				:lineLinked="true"
				:lineOpacity="0.3"
				:linesDistance="150"
				:moveSpeed="2"
				:hoverEffect="true"
				hoverMode="grab"
				:clickEffect="false"
				clickMode="push"
				></vue-particles>
				<v-upload :img="data.headimgurl" :onSuccess="onSuccess"/>
			</div>
			<hr class="hr-style" />
			<div class="form-box">
				<div class="item">
					<img src="/static/imgs/profile.png" class="icon-style" />
					<el-input v-model="data.first_name" :placeholder="$t('first')"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/profile.png" class="icon-style default-icon" />
					<el-input v-model="data.last_name" :placeholder="$t('last')"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/company.png" class="icon-style" />
					<el-input v-model="data.company" :placeholder="$t('company')"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/phone.png" class="icon-style" />
					<el-input v-model="data.phone" :placeholder="$t('phone')"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/email.png" class="icon-style" />
					<el-input v-model="data.email" :placeholder="$t('email')"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/users.png" class="icon-style" />
					<el-input type="number" v-model="data.number" :placeholder="$t('seats')"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/local.png" class="icon-style" />
					<el-input v-model="data.address" :placeholder="$t('preferred')"></el-input>
				</div>
				<div class="item">
					<img src="/static/imgs/money.png" class="icon-style" />
					<el-input type="number" v-model="data.budget" :placeholder="$t('budget')"></el-input>
				</div>
				<div class="item">
					<el-input type="textarea" v-model="data.other" :placeholder="$t('requirements')"></el-input>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="btn-style" @click="goBack"><i class="el-icon-arrow-left"></i></div>
			<el-button class="public-btn" @click="onSubmit">{{$t('update')}}</el-button>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Upload from './upload';
	import {updateuser} from '../../api';
	import { Message } from 'element-ui';
	export default {
		name : 'profile',
		data() {
			return {
				data : {
					headimgurl : '../static/imgs/user.jpg',
					first_name : '',
					last_name  : '',
					company    : '',
					phone      : '',
					email      : '',
					number     : '',
					address    : '',
					budget     : '',
					other      : '',
				}
			}
		},
		computed : mapState({
            user : state => state.user.user,
        }),
		components: {
			'v-upload' : Upload,
		},
		methods: {
			onSuccess(url) {
				this.data.headimgurl = url;
			},
			goBack() {
				this.$router.go(-1)
			},
			onSubmit() {
				const model = Object.assign({}, this.user, this.data);
				updateuser(model)
				.then(result => {
					this.$store.dispatch('user/edit', model)
					Message.success(this.$t('success'))
				})
				.catch(err => {
					Message.error(this.$t('error'))
				})
			}
		},
		beforeMount() {
			if(this.user._id) {
				this.data = Object.assign({},this.user)
			}
		}
	}
</script>

<style lang="scss">

</style>
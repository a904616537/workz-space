<template>
	<div class="contact-page profile">
		<div class="box">
			<div class="card">
				
				
				<div class="title" v-if="show">
					<strong>{{$t('question')}}</strong>
				</div>
				<div class="title" v-else><strong>{{$t('more_question')}}<br/>{{$t('please')}} <span>{{$t('contact')}}</span></strong></div>
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
					<div v-if="show" class="item">
						<img src="/static/imgs/users.png" class="icon-style" />
						<el-input type="number" v-model="data.number" :placeholder="$t('seats')"></el-input>
					</div>
					<div v-if="show" class="item">
						<img src="/static/imgs/local.png" class="icon-style" />
						<el-input v-model="data.address" :placeholder="$t('preferred')"></el-input>
					</div>
					<div v-if="show" class="item">
						<img src="/static/imgs/money.png" class="icon-style" />
						<el-input type="number" v-model="data.budget" :placeholder="$t('budget')"></el-input>
					</div>
					<div class="item">
						<el-input type="textarea" v-model="data.message" :placeholder="show?$t('requirements'):$t('requirements_short')"></el-input>
						<!-- <img src="/static/imgs/users.png" class="icon-style" />
						<el-input type="number" v-model="data.number" :placeholder="$t('seats')"></el-input> -->
					</div>
				</div>
				<div class="send-btn" @click="sendEmail">{{$t('send')}}</div>
			</div>
		</div>
		<p><strong>{{$t('or')}}</strong></p>
		<div class="box">
			<div class="card"  style="padding-bottom: 10px;">
				<p class="title"><strong>{{$t('wechat.one')}}<br/>{{$t('wechat.two')}}</strong></p>
				<img class="qr-img" src="/static/imgs/qrcode.png"/>
				<br />
				<span style="color: #00aeef; font-weight: bold;">{{$t('orCall')}}</span>
				<p><a href="tel:13003212488" style="color: #3E5765;">+86 130 0321 2488</a></p>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import {Message, Loading} from 'element-ui';
	import {contactEmail} from '../../api';
	export default {
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
					message    : '',
					number : '',
					budget : '',
					address : ''
				}
			}
		},

		computed : mapState({
            user : state => state.user.user,
            show : function() {
            	const query = this.$route.query.show;
            	if(query && query == 'hidden') {
            		return false;
            	} else return true;
            }
        }),
        methods: {
			sendEmail() {
				let loadingInstance = Loading.service({
					lock: true,
					text: this.$t('sendEmail'),
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'});
				contactEmail(this.data)
				.then(data => {
					Message.success(this.$t('successEmail'))
				})
				.catch(err => {
					Message.error(this.$t('erroEmail'))
				})
				.finally(err => {
					this.$nextTick(() => {
						loadingInstance.close();
					});
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
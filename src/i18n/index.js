import Vue from 'vue';
import I18n from 'vue-i18n';
import Formatter from './formatter'
import en from './en'
import zh from './zh'

console.log('i18n 加载中')
Vue.use(I18n)

const locale    = 'en'
const formatter = new Formatter({ locale })

export default new I18n({
	locale,
	formatter,
	messages : {
		'en'    : en,
		'zh' : zh
	}
})
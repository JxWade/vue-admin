import Vue from 'vue'

import BootstrapValidator from '@/components/bootstrap_validator';
import ImageCode from '@/components/image_code';

// 添加字段验证
Vue.component('BootstrapValidator', BootstrapValidator);

// 添加验证码
Vue.component('ImageCode', ImageCode);
<template>
    <div :class='["form-group", "bootstrap-validator",(validateError.has(inputName))?"has-error":""]'>
        <slot></slot>
        <div :class="[colSmOffsetClass]">
            <span v-show="validateError.has(inputName)" class="help text-danger"> {{ displayError(inputName)}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bootstrap-validator",
        props: {
            validate: null,          // 未配置则使用系统默认的错误提示
            validateError: null,     // 报错对象
            inputName: null,         // 监控的字段名
            colSmOffset: 0,          // 偏移量
        },
        computed: {
            colSmOffsetClass() {
                return "col-sm-offset-" + this.colSmOffset + ' col-sm-' + (12 - this.colSmOffset);
            }
        },
        methods: {
            /**
             * 循环遍历 找到对应的错误信息(如果未配置则显示默认的错误信息)
             * @param name
             */
            displayError(name) {

                for (let item in this.validateError.items) {
                    let item = this.validateError.items[item];

                    // 判断是否配置了messages这个参数
                    if (this.validate.messages == undefined && item.field == name) {
                        console.log(`发现自定义的bootstrap validate 中，${name} 没有定义错误信息(messages)`)

                        return item.msg;
                    }

                    // 判断是否配置了 messages 中对应的 rule 规则输出信息
                    if (item.field == name && this.validate.messages[item.rule] != undefined) {

                        return this.validate.messages[item.rule];
                    }
                    if (item.field == name) {
                        console.log(item);
                        console.log(`发现自定义的bootstrap validate 中，${name} 没有定义${item.rule}这个类型错误信息(messages)`)

                        return item.msg;
                    }
                }
            }
        }
    }
</script>
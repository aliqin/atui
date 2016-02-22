<style lang="less">
.toast {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .toast-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%);
        width: 300px;
        background-color: #f2fbff;
        border:1px solid #b3e5ff;
        border-radius:4px;
    }

    .toast-content {
        padding: 10px;
        color: #666;
        text-align: center;
        word-break: break-all;
        font-size: 14px;
    }

    &.show {
        display: block;
    }
}
</style>

<template lang="jade">
.toast(v-show="isShow")
  .toast-container
    .toast-content(v-html="content")
</template>
<script>
    module.exports = {
        name   : 'toast',
        data   : function () {
            return {
                isShow : false,
                content: ''
            }
        },
        created  : function () {
            var self = this

            //全局DAYU.toast()
            window.DAYU = window.DAYU || {};
            DAYU.toast  = function () {
                self.show.apply(self, arguments);
            };
        },
        methods: {
            show: function (text, delay) {
                var self = this;
                if (text) {
                    self.content = text;
                }
                self.isShow = true;
                window.setTimeout(function () {
                    self.isShow = false;
                }, delay || 1500);
            }
        }
    }
</script>

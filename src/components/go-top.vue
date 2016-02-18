<template lang="jade">
.go-top.iconfont(:style="{width:width,height:height,visibility:visibility}",@click="toTop",v-bind:title="tipText") &#xe605;
</template>

<style lang="less">
.go-top{
    position: fixed;
    cursor: pointer;
    bottom:40px;
    right:10px;
    width:40px;
    height:40px;
    border:1px solid #ddd;
    border-radius: 2px;
    text-align: center;
    &.iconfont{
        font-size: 28px;
    }
}

</style>

<script>
    export default {
        props: {
            width:String,
            height:String,
            tipText:{
                type:String,
                default:'返回顶部'
            }
        },
        data(){
            return {
                visibility:'hidden'
            }
        },
        methods: {
            toTop() {
                document.body.scrollTop = 0;
            }
        },
        created() {
            var self = this;
            window.addEventListener('scroll',(e)=>{
                if(document.body.scrollTop > 200) {
                    self.visibility = 'visible';
                } else {
                    self.visibility = 'hidden';
                }
            })
        }
    }
</script>

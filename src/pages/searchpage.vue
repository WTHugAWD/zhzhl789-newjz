<template>
    <div class="search">
           <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
               
                >
  <div slot="action" @click="onSearch">搜索</div>
</van-search>
     </div>
</template>
<script>
import {getSearch} from '@/api/Home'
export default {
     data(){
        return {
            value:""
        }
    },
    methods:{
        onSearch(){
            let title = this.value
            getSearch(title,1,2).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style lang="stylus">

</style>
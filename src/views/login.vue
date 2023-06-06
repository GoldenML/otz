<template>
  <div class="login">
    <img decoding="async" loading="lazy" src="http://static.runoob.com/images/demo/demo3.jpg" alt="图片文本描述" class="login-img">

    <el-form class="login-form">
      <div class="login-form__title">OTZ <div class="login-form__title-text">tfsb，tfsb，tfsb，重要的事情说三遍</div></div>
      <el-form-item>
        <el-input v-model="loginForm.username" placeholder="用户名" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" type="password" placeholder="密码" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item >

      </el-form-item>
      <div style="text-align: center">
        <el-button @click="login()" class="btn-primary" style="width: 300px;height: 40px;font-size: 16px">登 录</el-button>
      </div>
    </el-form>

  </div>

</template>
<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive} from "vue";
import {post} from "../utils/request.ts";
import { useRouter } from 'vue-router'
import {open} from "fs";

const loginForm = reactive({
  username: '',
  password: ''
})

const router = useRouter()
const login = () => {
  router.push({
    name: 'console'
  })
}
onBeforeMount(() => {

})
onMounted(() => {

})
onBeforeUnmount(() => {

})
onUnmounted(() => {

})
onBeforeUpdate(() => {

})
onUpdated(() => {

})

const props = defineProps<{
  list: number[]
}>()

defineEmits<{
  (e: 'on-click'):void
}>()
const open = () => {

}
// 向父组件暴露属性及方法
defineExpose({
  name: '',
  open
})
</script>

<style lang="scss"  scoped>
.login{
  padding: 0;
  margin: 0;
  .login-img{
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  &-form{
    position: absolute;
    top: 30%;
    right: 10%;
    &__title{
      font-size: 26px;margin-bottom: 30px;
      &-text{
        display: inline-block;
        font-size: 14px
      }
    }
    .el-input input {
      color: #fff
    }
    :deep .el-input__wrapper{
      height: 34px;
      line-height: 34px;
      background-color: unset;
    }
    :deep .el-input__inner {
      color:#fff;
      height: 34px;
      line-height: 34px;
      background-color: rgba(255, 255, 255, 0) !important;
    }
    :deep(.el-input__inner::placeholder){
      color:#fff
    }
  }

}
</style>


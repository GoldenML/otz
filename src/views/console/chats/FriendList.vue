<template>
  <div style="line-height: 60px;padding: 0 10px">
    <el-input placeholder="请输入关键字" style="width: 200px;margin-right: 10px;"></el-input>
    <el-icon style="vertical-align: middle"><Plus /></el-icon>
  </div>
  <div class="friend__item" :class="{'friend__item--active': active === index}" v-for="(item, index) in list" :key="index" @click="setActive(item, index)">
   {{item.name}}
  </div>
</template>
<script setup lang="ts">
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import {Plus} from "@element-plus/icons-vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()
const active = route.params.id ? ref(route.params.id - 1) : ref(-1)
const setActive = (item, val) => {
  active.value = val
  router.push(`/console/chats/${item.id}`)
}
const list = reactive([
  {name: '杨辉', id: 1},
  {name: '杨晨', id: 2},
])
</script>
<style lang="scss" scoped>
.friend__item{
  background-color: #eceaea;
  line-height: 50px;
  height: 50px;
  text-align: center;
  padding: 0;
  cursor: pointer;
  font-size: 14px;
  &--active{
    background-color: #babebe;
  }
}
</style>

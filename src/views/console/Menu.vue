<template>
  <el-menu :default-active="parentPath" class="menu" router>
    <el-menu-item index="/console/chats"><el-icon><ChatLineRound /></el-icon></el-menu-item>
    <el-menu-item index="/console/contacts"><el-icon><UserFilled /></el-icon></el-menu-item>
    <el-menu-item index="/console/settings" class="bottom-item">
      <el-icon><Tools /></el-icon>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">

import {ChatLineRound, Tools, UserFilled} from "@element-plus/icons-vue";
import {nextTick, onBeforeMount, onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
const router = useRouter()
const route = useRoute()
const parentPath = ref(route.matched[1].path)
</script>
<style lang="scss" scoped>
.menu{
  height: 100%;
  .el-menu-item.is-active{
    background-color: #60afcc;
    color:#fff
  }
}
.bottom-item {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}

</style>

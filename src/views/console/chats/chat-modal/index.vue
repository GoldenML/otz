<template>
  <div>
    <div class="chat-message"></div>
    <div class="emoji-picker">
      <button v-for="emoji in emojis" :key="emoji" @click="addEmoji(emoji)">
        {{ emoji }}
      </button>
    </div>
    <div class="chat-input">
      <el-input v-model="message" type="textarea"></el-input>
    </div>
  </div>
</template>
<script setup lang="ts">
import {reactive, ref} from "vue";

const message = ref('')
const emojis = reactive(['😊', '😄', '😃', '😉', '😍', '😎', '😂', '😘', '😋', '😆', '😁'])
const addEmoji = (emoji) => {
  message.value += emoji
}
</script>
<style lang="scss" scoped>
.chat-message{
  height: calc(100vh - 300px)
}
.chat-input{
  min-height: 100px;
}
</style>

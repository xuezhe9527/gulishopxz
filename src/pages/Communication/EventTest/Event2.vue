<template>
  <div style="background: #ccc; height: 80px;">
    <h2>Event2组件</h2>
    <button @click="$emit('click','222')">分发自定义click事件</button><br>
    <button @click="$emit('xxx','自定义的按钮')">分发自定义xxx事件</button><br>
  </div>
</template>

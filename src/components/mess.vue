<template>
  <el-button :plain="true" @click="open">打开消息提示</el-button>
  
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
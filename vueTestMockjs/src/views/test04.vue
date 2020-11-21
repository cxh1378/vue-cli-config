<!--  -->
<template>
  <div class="">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <div class="sss"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
// @import 'scss/_variables.scss';
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
$bgc-color: $green;

.sss {
  font: 100% $font-stack;
  color: $primary-color;
  background-color: $bgc-color;
  width: 200px;
  height: 200px;
}
</style>

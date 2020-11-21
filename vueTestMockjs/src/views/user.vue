<template>
  <div class="api-element">
    <div class="area">
      <el-table :data="userTableData">
        <el-table-column
          fixed
          label="日期"
          prop="date"
          width="150"
        ></el-table-column>
        <el-table-column label="姓名" prop="name" width="120"></el-table-column>
        <el-table-column
          label="省份"
          prop="province"
          width="120"
        ></el-table-column>
        <el-table-column label="市区" prop="city" width="120"></el-table-column>
        <el-table-column
          label="地址"
          prop="address"
          width="300"
        ></el-table-column>
        <el-table-column label="邮编" prop="zip" width="120"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import axios from "axios"; // 引入axios
import urls from "@/mock/urls"; // 引入实现准备好的接口请求相关配置
export default {
  name: "MockTest",
  data() {
    return {
      userTableData: [], // 定义需要的数据
    };
  },
  mounted() {
    // 数据mock、请求拦截
    axios[urls.userTableData.type](urls.userTableData.url)
      .then((response) => {
        this.userTableData = response && response.data;
        console.log(this.userTableData);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>

<template>
  <div class="ScrollList">
    <div class="head">
      <el-input placeholder="请输入内容" v-model="keyword" clearable debounce="500" @change="search"></el-input>
    </div>
    <div class="list"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: ""
    }
  },
  methods: {

    search() {
      console.log(this.keyword)
    }


  }
}
</script>
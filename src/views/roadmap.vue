<style lang="less">
.home {
  padding: 20px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0px;
    li {
      border-top: 1px solid #eee;
      padding: 15px 0;
    }
    a {
      font-size: 16px;
    }

    p {
      padding: 5px 0;
      margin: 0;
      font-size: 14px;
    }
  }
}
</style>
<template>
  <div class="pagewapper home">
    <h2>router</h2>

    <ul>
      <li v-for="(item, i) in routers" :key="i">
        <router-link :to="item.path">
          <span>{{ item.path }}</span>
          -
          <span>{{ item.meta && item.meta.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      routers: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var router = this.$router;
      var routes = router.options.routes;
      this.routers = routes;
    },
  },
};
</script>

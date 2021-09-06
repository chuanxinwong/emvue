<style lang="less">
.pagelist {
  display: flex;
  aside {
    width: 200px;
    height: 100%;
  }
  main {
    flex: 1;
    height: 100%;
  }
}
</style>
<template>
  <div class="pageview pagelist">
    <aside>
      <ScrollList />
    </aside>

    <main>
      1111
    </main>
  </div>
</template>
<script>
import ScrollList from "./ScrollList.vue";
export default {
  components: { ScrollList },
  data() {
    return {}
  },
  methods: {},
}
</script>
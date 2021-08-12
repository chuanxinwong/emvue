<style lang="less">
@import "./index.less";
</style>
<template>
  <div class="AppDivOnec" @click="click">
    <div class="AppDivOnecBox">
      <slot v-if="$scopedSlots.default"></slot>
      <div v-else class="defaultVal">{{text}}</div>
    </div>
    <div class="AppDivOnecLoading" :class="{showLoading: lock}">
      <span class="loadingAni"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 显示的文字
    text: {
      type: [String, Number],
      default: "",
    },
    // 点击执行的 函数
    handler: {
      type: [Function, null, undefined],
      default() {
        return null
      }
    }
  },
  data() {
    return {
      lock: false,   // 锁
      minDur: 500,   // 最小时间
      timer: 0,   // 启动时的时间
    }
  },
  methods: {
    click() {
      var { lock, minDur, timer, handler } = this;

      console.log("click", lock);

      if (!lock && handler) {
        if (typeof handler === "function") {
          var promise = handler();
          // 有可能 handler 有前置判断， 被提前 return 了
          if (promise instanceof Promise) {
            this.timer = Date.now();
            this.lock = true;

            promise
              .finally(() => {
                // 不够 500ms 的延迟到 500ms 在退出动画
                var now = Date.now();
                var out = minDur - (now - timer);
                out = out < 0 ? 0 : out;

                setTimeout(() => {
                  this.lock = false;
                  console.log("finally")
                }, out);
              })
          }
        }
      }
    }
  }
}
</script>

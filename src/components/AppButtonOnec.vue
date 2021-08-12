<style lang="less">
.appbutton {
  position: relative;
  background: #e73d4d;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  height: 40px;
  overflow: hidden;
  > div {
    transition-duration: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btntext {
    opacity: 1;
  }
  .loading {
    opacity: 1;
    width: 15px;
    height: 15px;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-left: 10px;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
}
</style>
<template>
  <div class="appbutton" @click="click">
    <div class="btntext">{{text}}</div>
    <div class="loading loadingAni" v-show="!flag">
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: [String, Number],
    clickHandler: {
      type: [Function, null, undefined],
      default() {
        return null
      }
    }
  },
  data() {
    return {
      flag: true,
      minTimer: 500,
      timer: 0,
    }
  },
  methods: {
    click() {
      var { flag, timer, minTimer, clickHandler } = this;
      console.log("click", flag);
      if (flag) {
        if (typeof clickHandler === "function") {
          this.flag = false;
          this.timer = Date.now();
          console.log("1111")
          clickHandler()
            .then(res => {
              console.log("1112222")
            })
            .finally(() => {
              console.log("6666")
              var now = Date.now();
              if (now - timer < minTimer) {
                setTimeout(() => {
                  this.flag = true;
                }, minTimer - (now - timer))
              } else {
                this.flag = true;
              }
            })
        }
      }
    }
  }
}
</script>

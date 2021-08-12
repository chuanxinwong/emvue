<style lang="less">
.AppSelect {
  position: relative;
  height: 36px;

  .input {
    position: relative;
    height: 100%;
    // background: #f6f8fa;
    border: 1px solid #d8dcdf;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 10px;
    font-size: 14px;
    color: #242a32;
    font-weight: bold;

    .placeholder {
      font-size: 14px;
      color: #9fa4a8;
      font-weight: normal;
    }

    label {
      flex: 1;
      text-align: left;
    }
    .tag {
    }

    .img {
      position: absolute;
      right: 15px;
      height: 10px;
      top: 50%;
      display: flex;
      align-items: center;
      margin-top: -5px;
      img {
        display: block;
        width: 6px;
      }
    }
  }

  .options {
    position: absolute;
    top: 100%;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(139, 151, 164, 0.3);
    border-radius: 4px;
    box-sizing: border-box;
    max-height: 350px;
    overflow-y: auto;
    z-index: 12000;
    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #fafafa;
      height: 50px;
      align-items: center;
      font-size: 14px;
      color: #242a32;
    }
    .disable {
      color: #8b97a4 !important;
    }

    .acitve {
      color: #e73d4d;
    }
  }

  .defaultItem {
    padding: 10px 0;
    margin: 0 10px;
    border-bottom: 1px solid #fafafa;
  }
}
</style>
<template>
  <div class="AppSelect" @click="stop">
    <div class="input" @click="toggle">
      <div class="placeholder" v-if="isEmpty">{{ placeholder }}</div>
      <div class="valuebox" v-else>
        <slot v-if="$scopedSlots.activeval" name="activeval" :val="value"></slot>
        <div v-else class="defaultVal">
          <label>{{ value.label }}</label>
          <span class="tag">{{ value.tag }}</span>
        </div>
      </div>
      <span class="img">
      </span>
    </div>
    <div class="options" v-show="open">
      <template v-for="(item, idx) in options">
        <div
          class="optionItemBox"
          :key="idx"
          :class="{acitve: item==value}"
          @click="clickItem(item, idx)"
        >
          <slot v-if="$scopedSlots.optionitem" name="optionitem" :item="item"></slot>

          <!-- 如果没有 slot ,使用默认 -->
          <div v-else class="defaultItem">
            <label>{{ item.label }}</label>
            <span class="tag">{{ item.tag }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Object, Number, String],
      default: null,
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    placeholder: {
      type: [Number, String],
      default: "请选择"
    },
  },
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    isEmpty() {
      var val = this.value;

      if (typeof val == "object") {
        var len = Object.keys(val).length;
        return !len;
      } else {
        return !!val
      }
    },
  },
  methods: {

    init() {
      document.addEventListener("click", () => {
        this.open = false;
      });
    },
    stop(e) {
      // console.log(e);
      e.stopPropagation();
    },
    toggle() {
      this.open = !this.open;
    },
    clickItem(item, i) {
      console.log(item, i);
      this.open = false;
      this.$emit("input", item);
      this.$emit("onSelect", item, i);
    },
  },
};
</script>
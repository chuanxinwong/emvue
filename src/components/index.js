import AppDivOnec from "./AppDivOnec"
import AppButtonOnec from "./AppButtonOnec.vue"
import AppSelect from "./AppSelect.vue"


const install = Vue => {
  Vue.component("AppDivOnec", AppDivOnec);
  Vue.component("AppButtonOnec", AppButtonOnec);
  Vue.component("AppSelect", AppSelect);

  console.log("222222")
}

export default install
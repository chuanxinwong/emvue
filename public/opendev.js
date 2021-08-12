; (function () {
  // 加载 debug js
  // 4指下滑超过 300px 就触发
  
  
  function load() {
    var jsurl = "./eruda.js";
    var script = document.createElement("script");
    script.src = jsurl;
    document.head.appendChild(script);

    script.onload = function () {

      if (window.eruda) {
        eruda.init();
      } else {
        setTimeout(() => {
          eruda.init();
        }, 1000)
      }
    }
  }


  var touchesStart = [];
  var touchesEnd = [];

  document.addEventListener("touchstart", function (e) {
    console.log(e)
    touchesStart = e.touches || [];
  })

  document.addEventListener("touchend", function (e) {
    console.log(e)
    touchesEnd = e.touches || [];

    console.log(touchesStart.length, touchesEnd.length)
    if (touchesStart.length == 4 && touchesEnd.length == 3) {
      console.log("----------------")
      console.log(touchesStart)
      console.log(touchesEnd)

      var flag = Array.from(touchesEnd).every((item, idx) => {
        var start = touchesStart[idx];
        console.log(item.screenY - start.screenY)
        if (item.screenY - start.screenY > 300) {
          return true
        }
      })
      console.log(flag)
      if (flag) {
        load()
      }
    }
  })



  // load();


})();
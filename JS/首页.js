//倒计时
setInterval(function timer() {
  var setTime = new Date("2021/12/01 00:00:00");
  var nowTime = new Date();
  var res = setTime.getTime() - nowTime.getTime();
  var day = parseInt(res / (60 * 60 * 24 * 1000));
  var hour = parseInt((res / (60 * 60 * 1000)) % 24);
  var min = parseInt((res / (60 * 1000)) % 60);
  var sec = parseInt((res / 1000) % 60);

  var str = "申请时间剩余" + day + "天" + hour + "时" + min + "分" + sec + "秒";

  var timer = document.getElementById("timer");

  timer.innerHTML = str;

},1000)

// 轮播图








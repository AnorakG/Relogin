//Relógio Analógico
function moveHands() {
    with (new Date()) {
      h = 30 * ((getHours() % 12) + getMinutes() / 60); 
      m = 6 * getMinutes();
      s = 6 * getSeconds(); 
      document.getElementById("seconds").style.cssText =
        "-webkit-transform:rotate(" + s + "deg);";
      document.getElementById("minutes").style.cssText =
        "-webkit-transform:rotate(" + m + "deg);";
      document.getElementById("hours").style.cssText =
        "-webkit-transform:rotate(" + h + "deg);";
  
      setTimeout(moveHands, 1000);
    }
  }
  
//Relógio Digital
window.onload = moveHands;
  setInterval(showTime, 1000);
  function showTime() {
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
    
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
    
      let currentTime = hour + ":" 
              + min + ":" + sec ;
      document.getElementById("relogio")
              .innerHTML = currentTime;
  }
showTime();

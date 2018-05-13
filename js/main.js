function start() {
  
}

function main() {

  window.water = new Audio('media/water.mp3');
  window.water.loop = true;
  fadeInAudio()
  window.gong = new Audio('media/gong.mp3');
  window.gong.loop = false;

	var btnContainer = document.getElementById("selectPeriod");
	var btns = btnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
			this.className += " active";
      clearInterval(window.x);
			start();
		});
	} 

  window.periods = 0;
  start();
}
main();

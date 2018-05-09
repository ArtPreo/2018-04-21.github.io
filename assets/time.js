function showTime(){
			var date = new Date();
			var h = date.getHours(); // nuo 0 iki 23
			var m = date.getMinutes(); // nuo 0 iki 59
			var s = date.getSeconds(); // nuo 0 iki 59
			var time = h + ":" + m + ":" +s;

			if(h == 0){
				h=12
			}
			if(h > 12){
				h=h - 12;
			}
			// if(h < 10){
			// 	h = "0"+ h;	
			// }
			// if(m < 10){
			// 	m = "0" + m;
			// }

			// if(s < 10){
			// 	s = "0" + s;
			// } ----ARBA-----

			h = (h < 10) ? "0" + h : h;
			m = (m < 10) ? "0" + m : m;
			s = (s < 10) ? "0" + s : s;

			document.getElementById("MyClockDisplay").innerText = time;
			document.getElementById("MyClockDisplay").textContent = time;

			setInterval(showTime, 1000);
		}
		
		showTime();
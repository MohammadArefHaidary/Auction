const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab =>{
	clickedTab.addEventListener('click', () =>{
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});
		clickedTab.classList.add('active');
	});
});

const ups = document.querySelectorAll('.up');

ups.forEach(clickedTab =>{
	clickedTab.addEventListener('click', () =>{
		ups.forEach(up => {
			up.classList.remove('active');
		});
		clickedTab.classList.add('active');
	});
});






	


	if (window.screen.width < 800) {

		const slider = document.querySelector('.gallery');
		let isDown = false;
		let startX;
		let scrollLeft;
		
		slider.addEventListener('mousedown', e => {
		  isDown = true;
		  slider.classList.add('active');
		  startX = e.pageX - slider.offsetLeft;
		  scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener('mouseleave', _ => {
		  isDown = false;
		  slider.classList.remove('active');
		});
		slider.addEventListener('mouseup', _ => {
		  isDown = false;
		  slider.classList.remove('active');
		});
		slider.addEventListener('mousemove', e => {
		  if (!isDown) return;
		  e.preventDefault();
		  const x = e.pageX - slider.offsetLeft;
		  const SCROLL_SPEED = 3;
		  const walk = (x - startX) * SCROLL_SPEED;
		  slider.scrollLeft = scrollLeft - walk;
		});
	
		
	}


	// timer
	function countdownTimeStart(){

		var countDownDate = new Date("Sep 25, 2025 15:00:00").getTime();
		
		// Update the count down every 1 second
		var x = setInterval(function() {
		
			// Get todays date and time
			var now = new Date().getTime();
			
			// Find the distance between now an the count down date
			var distance = countDownDate - now;
			
			// Time calculations for days, hours, minutes and seconds
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			// Output the result in an element with id="demo"
			document.getElementById("demo").innerHTML = hours + "h "
			+ minutes + "m " + seconds + "s ";
			
			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("demo").innerHTML = "EXPIRED";
			}
		});
		}


		const btn = document.getElementById('bbttnn');

btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';

  // 👇️ show div
//   const box = document.getElementById('box');
//   box.style.display = 'block';
});
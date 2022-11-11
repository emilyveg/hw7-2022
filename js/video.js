var video = document.querySelector('#player1');

// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto Play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop)

});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume * 100  + "%"
	video.play()
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});


// slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *=.9;
	console.log("Speed is " + video.playbackRate);
});


// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /=0.9;
	console.log("Speed is " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
		console.log("Video current time is " , video.currentTime)
});


// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Unmute")
		video.muted = false
		video.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		video.innerHTML = "Unmute"
	}
});

// volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is " , video.volume)
	video.volume = this.value / 100
	console.log("The current value is " , video.volume)
	console.log(document.querySelector("#volume"))
	document.querySelector("#volume").innerHTML= video.volume * 100  + "%"
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});




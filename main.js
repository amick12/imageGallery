const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//create an array of image sources
let imageSources = [
	"images/pic1.jpg",
	"images/pic2.jpg",
	"images/pic3.jpg",
	"images/pic4.jpg",
	"images/pic5.jpg"];

/* Looping through images
i <= 4 because arrays begin at 0
*/
for (let i = 0; i <= 4; i++) {
  let newImage = document.createElement('img');
    newImage.setAttribute('src', imageSources[i]);
		// for each one insert an <img> element inside the thumb-bar <div> that embeds that image in the page
      thumbBar.appendChild(newImage);
  //create onclick event on new image with event function
  newImage.onclick = function(event) {
    /* The 'target' property gets the element on which the event originally occurred
     var x = event.target : getAttribute() retrieves the attribute of a DOM element*/
    let imgSrc = event.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

/* Wiring up the Darken/Lighten button
-Create button onclick fucntion
-Create var that checks buttons current class using getAttribute --> use setAttribute to set other class onclick
*/
btn.onclick = function () {
	let btnClass = btn.getAttribute('class');

	if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(85,42,110,0.6)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

// rgba a=alpha sets opacity level

// nav functions
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }







// faq section

let answers = document.querySelectorAll(".accordion"); 
answers.forEach((event) => { 
  event.addEventListener("click", () => { 
    if (event.classList.contains("active")) { 
      event.classList.remove("active"); 
    } else { 
      event.classList.add("active"); 
    } 
  }); 
});

// js team

// IMAGE GALLERY


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}




// nav bar
function setActive(page) {
  // Get all the navigation links
  var links = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");

  // Remove the "active" class from all links
  for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
  }

  // Add the "active" class to the selected link
  document.getElementById(page).classList.add("active");
}
// section 2 image carosal
// map section
// function initMap(){
//   var options={
//     zoom:20,
//     center:{AIzaSyBUZ61A_lK8Em8_DQ6kSlGzX-SDBK1lEKg}
//   }
//   var googlemap=new google.maps.Map(document.getElementById("map"),options);
// }
// contact form
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
      document.getElementById("resultMessage").innerHTML = "Please enter Name, Email, and Message.";
      return;
  }

  if (name.length > 15) {
      document.getElementById("resultMessage").innerHTML = "Enter a valid name (less than 15 characters).";
      return;
  }

  var emailRegex = /^[a-zA-Z0-9!#\$%&'\*\+\-\/=\?\^_`{\|}~]+(\.[a-zA-Z0-9!#\$%&'\*\+\-\/=\?\^_`{\|}~]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
  if (!emailRegex.test(email)) {
      document.getElementById("resultMessage").innerHTML = "Enter a valid email address.";
      return;
  }

  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
      document.getElementById("resultMessage").innerHTML = "Enter a valid 10-digit phone number.";
      return;
  }

  if (message.length < 2 || message.length > 120) {
      document.getElementById("resultMessage").innerHTML = "Message must be between 2 and 120 characters.";
      return;
  }

  document.getElementById("resultMessage").innerHTML = "Successfully Submitted";
}
// team
const teamCarousel = document.getElementById('teamCarousel');
const bulletContainer = document.getElementById('bulletContainer');

// Create bullets dynamically based on the number of team members
for (let i = 0; i < teamCarousel.children.length; i++) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.addEventListener('click', () => showTeamMember(i));
    bulletContainer.appendChild(bullet);
}

// Display the first team member initially
showTeamMember(0);

// Function to show the selected team member
function showTeamMember(index) {
    for (let i = 0; i < teamCarousel.children.length; i++) {
        teamCarousel.children[i].style.opacity = 0.7;
    }

    teamCarousel.children[index].style.opacity = 1;
    updateBulletStyles(index);
}

// Function to update bullet styles based on the selected team member
function updateBulletStyles(index) {
    const bullets = bulletContainer.children;
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].style.backgroundColor = i === index ? '#fff' : 'transparent';
    }
}
// map
function initMap(){
  var options={
    zoom:20,
    center:{lat:9.657770,lng:80.159210}

  }
  var googlemap=new google.maps.Map(document.getElementById("map"),options);
}
// 
let zoomed = false;

function zoomInOut(image) {
    zoomed = !zoomed;

    if (zoomed) {
        image.style.transform = 'scale(1.5)';
    } else {
        image.style.transform = 'scale(1)';
    }
}
// form
function subscribe() {
  const emailInput = document.getElementById('emailInput').value;

  // Simulate loading a new page (replace with actual page URL)
  window.location.href = 'https://example.com/new-page';

  // Uncomment the line below to simulate a 404 error
  // window.location.href = 'https://example.com/non-existent-page';
}


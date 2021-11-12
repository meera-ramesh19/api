// function currentDate(start, end) {
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// }



//Start of function to clear out data from input form

function clearField() {
  document.querySelector("#random").value = ""

}

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}
//
// currentDate(new Date(2012, 0, 1), new Date());
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");


/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);



//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", preventMyDefault);
const weather = [];
function preventMyDefault(event) {
  event.preventDefault();
  getPhotos();
}

//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// document.querySelector("button").addEventListener("click", getphotos);

function getPhotos() {
  
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();

  // var dateVal =  yyyy + '-' + mm + '-' + dd;
  // console.log( dateVal);
  // document.querySelector("input").value = dateVal;
  const dateVal=document.querySelector('#picofdate').value
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=&date=" +
    dateVal;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let todayDate = data.date;
      let explain = data.explanation;
      let hdImage = data.hdurl;
      console.log(todayDate,explain,hdImage)
      const hidePics=document.querySelector(".hide");
       hidePics.style.visibility='visible'
      document.querySelector("#randomDate").innerText =`Picture of the day ${todayDate}` ;
      document.querySelector("#randomImg").src = hdImage;
      document.querySelector("#randomDesc").innerText= explain;
       clearField()
       //when code is rendered scroll to ideal location for user
   document.getElementById("randomDate").scrollIntoView()
    })
    .catch((err) => {
      console.log(`error  ${err}`);
    });
}

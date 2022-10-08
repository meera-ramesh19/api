// import Lighbox from "./lightbox/Lightbox.js";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

//Start of function to clear out data from input form

function clearField() {
  document.querySelector('#random').value = '';
}

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add('active');
    toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>";
  }
}

randomDate(new Date(2012, 0, 1), new Date());
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.item');

/* Event Listeners */
toggle.addEventListener('click', toggleMenu, false);

//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('#dateBtn').addEventListener('click', getphotos);

function getphotos() {
  const random = randomDate(new Date(1995, 6, 16), new Date());
  const randMonth = random.getMonth() + 1;
  var dateVal = random.getFullYear() + '-' + randMonth + '-' + random.getDate();
  console.log(random, dateVal);
  document.querySelector('input').value = dateVal;
  const url = 'https://api.nasa.gov/planetary/apod?api_key=&date=' + dateVal;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let todayDate = data.date;
      let explain = data.explanation;
      let hdImage = data.hdurl;
      console.log(todayDate, explain, hdImage);
      const hidePics = document.querySelector('.hide');
      hidePics.style.visibility = 'visible';
      document.querySelector(
        '#randomDate'
      ).innerText = `Random Selected Date is ${todayDate}`;
      if (!hdImage || hdImage == '') {
        document.querySelector('#randomImg').src =
          'https://placehold.jp/400x300.png';
      } else {
        document.querySelector('#randomImg').src = hdImage;
      }
      document.querySelector('#randomDesc').innerText = explain;
      clearField();
      //when code is rendered scroll to ideal location for user
      document.getElementById('randomDate').scrollIntoView();
    })
    .catch((err) => {
      console.log(`error  ${err}`);
    });
}

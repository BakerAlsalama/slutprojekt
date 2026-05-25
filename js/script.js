function openNav() {
  document.getElementById("sidenav").style.width = "50%";
  document.getElementById("overlay").style.display = "inline-block";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

function acceptCookies() {
  document.getElementById("map-holder").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62180.238298923825!2d2.359059206386798!3d48.86456526929868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sse!4v1779268426354!5m2!1sen!2sse" title="Location map" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}
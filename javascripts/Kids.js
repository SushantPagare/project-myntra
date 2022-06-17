import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
let header = document.getElementById("headerEl");
header.innerHTML = navbar();
let footerEl = document.getElementById("footerEl");
footerEl.innerHTML = footer();
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

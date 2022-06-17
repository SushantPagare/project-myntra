import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
let Home_Living_NavBar = document.getElementById("headportion");
Home_Living_NavBar.innerHTML = navbar();
let Home_Living_Footer = document.getElementById("footerEl");
Home_Living_Footer.innerHTML = footer();

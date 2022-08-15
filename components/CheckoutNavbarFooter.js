function navbar() {
  return ` <div class="header">
  <div class="logo">
  <a href="index.html"><img
      src="https://imgeng.jagran.com/images/2021/jan/Myntra-805x530-1-700x4611611985286383.jpg"
      alt="Myntra"
      height="32px"
      width="40px"
    /></a>
  </div>
  <nav>
    <ul>
      <li>
        <a id="current_step-1">BAG</a>
      </li>
      <li>----------</li>
      <li><a id="current_step-2">ADDRESS</a></li>
      <li>----------</li>
      <li>
        <a id="current_step-3">PAYMENT</a>
      </li>
    </ul>
  </nav>
  <div class="secure-logo">
    <img
      src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
      alt="sprite-secure"
      height="28px"
      width="25px"
    />
    <p>100% SECURE</p>
  </div>
</div>
<hr class="hr1" />`;
}

function footer() {
  return `    <div class="CheckoutFooter">
  <div class="CheckoutFootercontainer">
      <div class="CheckoutFooterimages">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png">
      </div>
      <div class="Help">
          <div> Need Help ? Contact Us </div>
      </div>
  </div>
</div>`;
}

export { navbar, footer };

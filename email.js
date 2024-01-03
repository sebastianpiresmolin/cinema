// Emailing functionality
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("GPSeC8rGnNOyljaGF");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // emailJS ID's
      emailjs.sendForm("service_7rijg9p", "template_bpwozvu", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

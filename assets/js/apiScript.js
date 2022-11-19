let isRecaptchaValidated = false;

function toggleRecaptchaFormMessage(type = "error", hide = false) {
  document.getElementById(`recaptcha-form-${type}`).style.display = hide
    ? "none"
    : "inherit";
}

function onRecaptchaSuccess() {
  isRecaptchaValidated = true;
}

function onRecaptchaError() {
  alert("Hello");
  toggleRecaptchaFormMessage("error");
  toggleRecaptchaFormMessage("success", true);
}

function onRecaptchaResponseExpiry() {
  alert("Hello1");

  onRecaptchaError();
}

window.onload = function () {
  const recaptchaForm = document.getElementById("recaptcha-form");
  recaptchaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // failure
    if (!isRecaptchaValidated) {
      toggleRecaptchaFormMessage("error");
      toggleRecaptchaFormMessage("success", true);
      return;
    }

    // success
    toggleRecaptchaFormMessage("error", true);
    toggleRecaptchaFormMessage("success");
  });
};


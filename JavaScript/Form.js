const myForm = document.querySelector("#myForm");
const Name = document.querySelector("#Name");
const Email = document.querySelector("#Email");
const Subject = document.querySelector("#Subject");
const Messages = document.querySelector("#Messages");
const Submit = document.querySelector("#Submit");
const Msg = document.querySelector(".msg");

Submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    Name.value.length == 0 ||
    Email.value.length == 0 ||
    Subject.value.length == 0 ||
    Messages.value.length == 0
  ) {
    console.log("False");
    Msg.innerHTML = "<h6 class='error'> Please complete the details!</h6>";

    setTimeout(() => document.querySelector(".error").remove(), 3000);
  } else {
    console.log("True");
    Msg.innerHTML = "<h6 class='submitted'> This is submitted, Thank you!<h6>";
    Msg.style.color = "white";

    setTimeout(() => document.querySelector(".submitted").remove(), 3000);
    setTimeout(() => myForm.submit(), 3000);
  }
});

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const btn = document.getElementById("btn2");
const form = document.getElementById("form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = fullName.value;
  const mail = email.value;
  const telPhone = phone.value;
  const msg = message.value;
  const randomObj = {
    fullName: name,
    email: mail,
    phone: telPhone,
    message: msg,
  };
  console.log(randomObj);

  fetch("/finish", {
    method: "POST",
    body: JSON.stringify(randomObj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // Response to clients
  alert("Thank you! I will answer you within 24 hours! 😊");

  // Reset form inputs
  fullName.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
});

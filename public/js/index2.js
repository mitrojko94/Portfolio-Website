const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btn = document.getElementById("btn2");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = fullName.value;
  const mail = email.value;
  const msg = message.value;
  const randomObj = {
    fullName: name,
    email: mail,
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
});

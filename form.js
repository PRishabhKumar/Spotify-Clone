let form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent the page from submitting form
  if (validate()) {
    window.location.href = "index.html";
  } else {
    alert("Dont try to steal my songs !!!");
  }
});

let validate = () => {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;
  console.log("Name = ", name);
  console.log("Email = ", email);
  console.log("password = ", password);
  if (name === "P Rishabh Kumar") {
    if (email === "rishabh12345@gmail.com") {
      if (password === "SaiRam@26042005") {
        return true;
      }
    }
  }
  return false;
};

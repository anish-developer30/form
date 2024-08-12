let msg = document.querySelector("#msg");
let submit = document.querySelector("#submit");
let country = document.getElementById("country");
let state = document.getElementById("state");

// ======Country names========>
const countryList = [
  "America",
  "Japan",
  "India",
  "Pakistan",
  "UK",
  "Iraq",
  "Iran",
  "China",
  "Bangladesh",
  "Nepal",
  "Bhutan",
  "Tibbet",
  "Qatar",
  "Dubai",
  "Jermany",
  "Itly",
  "Afganistan",
];

// ======state names========>
const stateList = [
  "Gujarat",
  "Rajasthan",
  "UP",
  "MP",
  "AP",
  "Maharastra",
  "Kerala",
  "Tamilnadu",
  "Hedrabad",
  "Odisa",
  "Asam",
];
// country
countryList.forEach((ele) => {
  let option = document.createElement("option");
  option.innerText = ele;
  option.value = ele;

  country.appendChild(option);
});

// state
stateList.forEach((ele) => {
  let option = document.createElement("option");
  option.innerText = ele;
  option.value = ele;

  state.appendChild(option);
});

submit.onclick = () => {
  let fullname = document.forms["myform"]["fullname"].value;
  let email = document.forms["myform"]["email"].value;
  let phone = document.forms["myform"]["phone"].value;
  let date = document.forms["myform"]["date"].value;
  let country = document.forms["myform"]["country"].value;
  let state = document.forms["myform"]["state"].value;
  let gen = document.forms["myform"]["gen"].value;
  let message = document.forms["myform"]["message"].value;
  let hobby = document.getElementById("hobby");

  // ========name==========>
  if (fullname == "") {
    msg.innerHTML = `<p class="msg">fullname is requred</p> `;
    return false;
  }
  if (!isNaN(fullname)) {
    msg.innerHTML = `<p class="msg"> fullname shoud be a character</p> `;
    return false;
  }
  // ========email==========>
  if (email == "") {
    msg.innerHTML = `<p class="msg">email is requred</p> `;
    return false;
  }
  let at = email.indexOf("@");
  let dot = email.lastIndexOf(".");

  if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
    msg.innerHTML = `<p class="msg">email address is not valid</p> `;
    return false;
  }
  // ========phone==========>
  if (phone == "") {
    msg.innerHTML = `<p class="msg">phone number is requred</p> `;
    return false;
  }
  if (isNaN(phone)) {
    msg.innerHTML = `<p class="msg"> phone number shoud be a digits</p> `;
    return false;
  }
  if (phone.length != 10) {
    msg.innerHTML = `<p class="msg"> phone number shoud be a 10  digits</p> `;
    return false;
  }
  // ==========country==========>
  if (country == "select country") {
    msg.innerHTML = `<p class="msg"> country is requred</p> `;
    return false;
  }
  // ==========state==========>
  if (state == "select state") {
    msg.innerHTML = `<p class="msg"> state is requred</p> `;
    return false;
  }
  // ==========date==========>
  if (date == "") {
    msg.innerHTML = `<p class="msg"> date is requred</p> `;
    return false;
  }
  // ========radio==========>
  if (gen == "") {
    msg.innerHTML = `<p class="msg"> gender is requred</p> `;
    return false;
  }
  // ========hobby==========>
  if (!hobby.checked) {
    msg.innerHTML = `<p class="msg"> hobby is requred</p> `;
    return false;
  }
  // =======message========>
  if (message == "") {
    msg.innerHTML = `<p class="msg"> message is requred</p> `;
    return false;
  }
};

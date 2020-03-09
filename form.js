document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  // Validation for name
  const name = document.getElementById("your_name");
  const nameRegex = /^[A-Za-z\s]+\.?$/;

  if (!nameRegex.test(name.value)) {
    document.getElementById("error1").innerHTML =
      "Name is required.";
    name.style.border = "1px solid red";
    // return false;
  } else {
    document.getElementById("error1").innerHTML = "";
    name.style.border = "1px solid green";
  }

  // Validation for age
  const age = document.getElementById("age_id");
  const ageRegex = /^[0-9]+$/;

  if (!ageRegex.test(age.value)) {
    document.getElementById("error2").innerHTML = "Age Required; in figures.";
    age.style.border = "1px solid red";
    // return false;
  } else {
    document.getElementById("error2").innerHTML = "";
    age.style.border = "1px solid green";
  }

  // Validating email.
  const email = document.getElementById("uemail");
  const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@([a-zA-Z0-9]+([a-zA-Z0-9.]*)\.)+[a-zA-Z]+$/;

  // if(email.value==""){
  //     document.getElementById("error3").innerHTML="Email required; must be valid.";
  //     email.style.border="1px solid red"
  // if(email.value==""){
  //   document.getElementById("error3").innerHTML="Email required; must be valid.";
  //   email.style.border="1px solid red"
  if (!emailRegex.test(email.value)) {
    document.getElementById("error3").innerHTML = "A valid email requried.";
    email.style.border = "1px solid red";
  } else {
    document.getElementById("error3").innerHTML = "";
    email.style.border = "1px solid green";
  }

  //Validating contact.
  const ucontact = document.getElementById("usercontact");
  const ucontactRegex = /^(([+][0-9]{3})\s)?[0][1-9]{9}$/;
  if (!ucontactRegex.test(ucontact.value)) {
    document.getElementById("error4").innerHTML =
      "Contact required.";
    ucontact.style.border = "1px solid red";
    // return false;
  } else {
    document.getElementById("error4").innerHTML = "";
    ucontact.style.border = "1px solid green";
  }

  //Validating Nationality.
  const nationality = document.getElementById("unationality");
  const nationalityRegex = /^[a-zA-Z]+$/;

  if (!nationalityRegex.test(nationality.value)) {
    document.getElementById("error6").innerHTML =
      "Required.";
    nationality.style.border = "1px solid red";

  } else {
    document.getElementById("error6").innerHTML = "";
    nationality.style.border = "1px solid green";
  }

    //Validating NIN.
    const nin = document.getElementById("unin");
    const ninRegex = /^[A-Z]{2}[0-9]{8}[A-Z]{4}$/;
  
    if (!ninRegex.test(nin.value)) {
      document.getElementById("error7").innerHTML =
        "ID NIN required.";
        nin.style.border = "1px solid red";
    // return false;
    } else {
      document.getElementById("error7").innerHTML = "";
      nin.style.border = "1px solid green";
    }

    //Validating amount.
    const amount = document.getElementById("uamount");
    const amountRegex = /^[a-zA-Z]+$/;
  
    if (!amountRegex.test(amount.value)) {
      document.getElementById("error8").innerHTML =
        "Enter amount.";
        amount.style.border = "1px solid red";
    // return false;
    } else {
      document.getElementById("error8").innerHTML = "";
      amount.style.border = "1px solid green";
    }

    //Validating return date.
    const rdate = document.getElementById("ud-of-r");
    const rdateRegex = /^[0-9]+$/;
  
    if (!rdateRegex.test(rdate.value)) {
      document.getElementById("error9").innerHTML =
        "required.";
        rdate.style.border = "1px solid red";
    return false;
    } else {
      document.getElementById("error9").innerHTML = "";
      rdate.style.border = "1px solid green";
    }


});

console.log("This is working!")

function bookingButton() {
  let name = prompt("What is your name?")
  
  if (name == null) {
    return;
  } else {
    let email = prompt("What is your email address?")
    alert("Thank you " + name + " for your interest! We will send an update soon to " + email + " when booking is open.");
  }
}


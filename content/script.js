function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("exampleFormControlInput1").value;
    // Remove the following line for textarea
    // var textarea = document.getElementById("exampleFormControlTextarea1").value;
  
    if (firstName === "" || lastName === "" || email === "") {
      alert("All fields must be filled out");
      return false;
    }
  
    // You can add more specific validation for email if needed
  
    return true;
  }
  
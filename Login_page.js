if (localStorage.getItem("loggedInUserName")) {
    window.location.href = "Home_page.html";
    }

function login() {
  const name = document.getElementById("userName").value;
  if (name.trim() !== "") {
    localStorage.setItem("loggedInUserName", name);
    window.location.href = "Home_page.html"; // go to next page
  } else {
    alert("Please enter a name, buddy!");
  }

  const selected = document.querySelector('input[name="gender"]:checked');
  if(selected){
    localStorage.setItem("loggedInUserGender",selected.value);
  }
}

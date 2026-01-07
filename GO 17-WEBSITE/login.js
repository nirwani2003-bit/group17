document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("login-message")
  if (username !== "" && password !== "") {
    message.style.color = "lime";
    message.textContent = "Login successful! Redirecting...";

  
    localStorage.setItem("loggedInUser", username);

    
    window.location.href = " home.html";  
    
  } else {
    message.style.color = "red";
    message.textContent = "Please enter both username and password!";
  }
});
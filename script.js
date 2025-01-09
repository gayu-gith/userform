function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!username || !email || !phone || !password) {
    message.textContent = "All fields are required!";
    return;
    }
    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
    message.textContent = "Enter a valid 10-digit phone number.";
    return;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
    message.textContent = "Enter a valid email address.";
    return;
    }
    
    message.style.color = "green";
    message.textContent = "Registration successful!";
    }
    
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Lấy giá trị từ trường username và password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập
    if (username === "binh@gmail.com" && password === "binh123") {
      // Chuyển hướng đến trang index.html khi đăng nhập thành công
      alert("Login successfully");
      window.location.href = "/Exercise-W7/adminDashboard/index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
  });
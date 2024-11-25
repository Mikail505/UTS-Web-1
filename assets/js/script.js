document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi login
    if (username === "admin" && password === "admin123") {
      alert("Login berhasil!");
      window.location.href = "menu.html"; // Pindah ke halaman Menu Utama
    } else {
      alert("Username atau password salah!");
    }
  });

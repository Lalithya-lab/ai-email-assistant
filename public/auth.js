// Register
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await fetch("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  alert(data.message);
  if (res.ok) window.location.href = "login.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await fetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  alert(data.message);
  if (res.ok) window.location.href = "/";
});

// Logout button (add somewhere in your topbar)
document.getElementById("logoutBtn")?.addEventListener("click", async () => {
  const res = await fetch("/auth/logout", { method: "POST" });
  const data = await res.json();
  alert(data.message);
  if (res.ok) window.location.href = "login.html";
});

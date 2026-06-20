document.getElementById("reportForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("type").value.trim();
  const description = document.getElementById("desc").value.trim();
  const btn = document.getElementById("submitBtn");
  const msg = document.getElementById("message");

  btn.disabled = true;
  btn.textContent = "Submitting...";
  msg.innerHTML = "";

  try {
    const res = await fetch("/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, type, description }),
    });

    const data = await res.json();

    if (res.ok) {
      msg.innerHTML = `<p class="success-msg">✅ ${data.message}</p>`;
      document.getElementById("reportForm").reset();
    } else {
      msg.innerHTML = `<p class="error-msg">❌ ${data.message}</p>`;
    }
  } catch (err) {
    msg.innerHTML = `<p class="error-msg">❌ Unable to connect to server. Please try again.</p>`;
  }

  btn.disabled = false;
  btn.textContent = "Submit Report";
});
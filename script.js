let clickCount = 0;
let maxClicks = 5;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");
  const counterText = document.getElementById("counter");

  // Check localStorage for previous submission
  if (localStorage.getItem("submitted") === "true") {
    form.querySelectorAll("input, button").forEach(el => el.disabled = true);
    message.innerText = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
  }

  whatsappBtn.addEventListener("click", () => {
    if (clickCount < maxClicks) {
      clickCount++;

      // ✅ WhatsApp message + link update here
      let shareMessage = `Hey Buddy, Join Tech For Girls Community 👩‍💻 Click here to register: https://sowmya584.github.io/registration-form`;

      let url = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
      window.open(url, "_blank");

      counterText.innerText = `Click count: ${clickCount}/${maxClicks}`;

      if (clickCount === maxClicks) {
        message.innerText = "✅ Sharing complete. Please continue.";
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (clickCount < maxClicks) {
      alert("⚠️ Please complete sharing on WhatsApp first!");
      return;
    }

    // Submit to Google Sheet via Apps Script – (implement fetch() here)

    message.innerText = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
    form.querySelectorAll("input, button").forEach(el => el.disabled = true);
    localStorage.setItem("submitted", "true");
  });
});

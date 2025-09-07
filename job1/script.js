function openForm() {
  document.getElementById("buyForm").style.display = "flex";
}
function closeForm() {
  document.getElementById("buyForm").style.display = "none";
}

// Handle FAQ accordion
const faqs = document.querySelectorAll(".faq-container details");
faqs.forEach((faq) => {
  faq.addEventListener("toggle", function () {
    if (this.open) {
      faqs.forEach((other) => {
        if (other !== this) other.removeAttribute("open");
      });
    }
  });
});

// Handle form submit
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("thankYouMessage").textContent =
    "Thank you for ordering, " + name + "! 🎉";
  document.getElementById("buyForm").style.display = "none";
  document.getElementById("thankYouPopup").style.display = "flex";
});

function closeThankYou() {
  document.getElementById("thankYouPopup").style.display = "none";
}

const text="Frontend Developer  ";
const speed=300;
let index=0;
function typeEffect(){
    if(index<text.length){
        document.getElementById("spa").textContent+=text.charAt(index);
        index++;
        setTimeout(typeEffect,speed);
    }
}
window.onload=typeEffect;

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // 🚫 stops Formspree page

    const response = await fetch("https://formspree.io/f/xaqqwgqe", {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      successMsg.style.display = "block";
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  });

  // Animate headings
  document.querySelectorAll("h1, h2, h3").forEach(el => {
    el.setAttribute("data-aos", "fade-up");
  });

  // Animate paragraphs & list items
  document.querySelectorAll("p, li").forEach(el => {
    el.setAttribute("data-aos", "fade-up");
  });

  // Animate images
  document.querySelectorAll("img").forEach(el => {
    el.setAttribute("data-aos", "zoom-in");
  });

  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out-cubic"
  });


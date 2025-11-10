// Floating heart animation
document.body.addEventListener("click", function(e) {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.fontSize = "24px";
  heart.style.animation = "floatUp 2s linear forwards";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);
const captions = [
  "💖 ပုံ ၁ – ပန်ဒါလေးရဲ့ ဂလေး 💖",
  "🌸 ပုံ ၂ – အမှတ်တရ လမ်းလျှောက်ခြင်း 🌸",
  "✨ ပုံ ၃ – အတူတူ ရင်ဆိုင်ခဲ့တဲ့အချိန် ✨",
  "💕 ပုံ ၄ – စိတ်မမေ့မလျော့တဲ့နေ့ 💕",
  "🌙 ပုံ ၅ – လေ့လာသင့်တဲ့အချိန် 🌙",
  "🌟 ပုံ ၆ – အဆုံးမဲ့ အမှတ်တရ 🌟"
];

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[currentIndex];
  document.getElementById("lightbox-caption").innerText = captions[currentIndex];
}

function nextImg() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
  document.getElementById("lightbox-caption").innerText = captions[currentIndex];
}

function prevImg() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
  document.getElementById("lightbox-caption").innerText = captions[currentIndex];
}
// သင့်ရဲ့ပုံတွေကို array ထဲထည့်ထားမယ်
const images = [
  "images/IMG_1.jpg",
  "images/IMG_3.jpg",
  "images/IMG_6.jpg",
  "images/IMG_20250927_091733_211.jpg"
];

// HTML ထဲမှာ swiper-wrapper ကိုခေါ်မယ်
const wrapper = document.getElementById("swiper-wrapper");

// ပုံတွေကို loop ပြပြီး slide ထည့်မယ်
images.forEach(src => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const img = document.createElement("img");
  img.src = src;

  slide.appendChild(img);
  wrapper.appendChild(slide);
});
<!-- ❤️ && 🌍 =>
// Swiper initialize
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {
      video.play();   // ပေါ်လာရင် auto play
    } else {
      video.pause();  // မပေါ်ရင် pause
    }
  });
}, { threshold: 0.5 });  // တစ်ဝက်လောက်ပေါ်မှသာ play

videos.forEach(video => {
  video.muted = true;  // autoplay အတွက် muted လိုအပ်
  observer.observe(video);
});
(let.videos for all reverse under the dragon is the west r)
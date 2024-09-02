"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});



let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => { 
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  
  
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

    
  
};

// rotateText();
setInterval(rotateText, 4000);

// script.js

// Set the conference start date and time
const conferenceStartDate = new Date("2024-12-01T09:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = conferenceStartDate - now;

  if (timeLeft >= 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");
  } else {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "<span>The conference has started!</span>";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately on page load
updateCountdown();

// Simulating participant counter (this should be replaced with a real data fetch in a live environment)
let participants = 150; // Example number of participants

// Update the participant counter
// document.getElementById("participant-counter").innerText =
//   participants.toString();







  // ===================================================================================
  // nav bar toggling
const navBarE1 = document.querySelector(".navBar");
const navLinks = document.querySelectorAll(".nav-links");
window.addEventListener("scroll", () => {debugger;

    let theme = document.getElementsByClassName('dark')
    let colorLogo = document.getElementsByClassName('logo')
    let colorNav = "white"
    let filterLogoProp="brightness(0) invert(0)"
    if (theme.length == 0){
      colorNav = "black"
      filterLogoProp = "brightness(0) invert(0)"
    }
    else{
      colorNav = "white"
      filterLogoProp = "brightness(0) invert(1)"
    }
    if (window.scrollY > 0) {
        navBarE1.classList.add("active");
        navLinks.forEach(link => {
            link.style.color = colorNav;
            // colorLogo[0].style.filter = filterLogoProp

        });
    } else {
        navBarE1.classList.remove("active");
        navLinks.forEach(link => {
            link.style.color = "white";
        });
    }
});

// responsice toggling
document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('open');
});

// counter
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count-text');

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const speed = 200; // Adjust speed here

                const updateCount = () => {
                    const current = +counter.innerText;
                    const increment = target / speed;

                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCount, 10); // Adjust timeout for smoother/faster counting
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                counterObserver.unobserve(counter); // Stop observing after the count is done
            }
        });
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

$(".carousel_outer").owlCarousel({ 
  center: true,
  items: 1,
  loop: true,
  margin: 20,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
var owl = $(".carousel_outer");
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
$(".social_carousel").owlCarousel({
  center: true,
  items: 1,
  loop: true,
  margin: 20,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }

});
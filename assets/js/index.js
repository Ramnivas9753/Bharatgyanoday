// Desktop View navbar active class
$(document).ready(function() {
  $(".navbar-nav > li > a").click(function() {
    $(".navbar-nav > li > a").removeClass("active");
    $(this).addClass("active");
  });
});
// Desktop View navbar active class End

// show password js
function showPass() {
  var passInput = $("#passInput");
  var showPassIcon = $("#showPass");
  if (passInput.attr("type") === "password") {
    showPassIcon.removeClass("fa-eye-slash").addClass("fa-eye");
    passInput.attr("type", "text");
  } else {
    showPassIcon.removeClass("fa-eye").addClass("fa-eye-slash");
    passInput.attr("type", "password");
  }
}

const formControls = document.querySelectorAll(".form-control");

// Loop through each element and add event listener
formControls.forEach((control) => {
  control.addEventListener("focus", () => {
    // Toggle class on the parent element
    control.parentElement.classList.add("bg-gradient");
  });
  control.addEventListener("blur", () => {
    // Toggle class on the parent element
    control.parentElement.classList.remove("bg-gradient");
  });
});

// our_Support
var swiper = new Swiper(".our_Support .mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    clickable: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
// our_Support End

// blog_Section
var swiper = new Swiper(".blog_Section .mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    524: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// blog_Section End

// events_Media_Section
var swiper = new Swiper(".events_Media_Section .mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    524: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// events_Media_Section End

// upload file name show js
function updateFileName(input) {
  var fileName = input.files[0].name;
  document.getElementById("signature-label").innerText = fileName;
}
// upload file name show js

  
  
  
  // Desktop View navbar active class
  $(document).ready(function () {
    $('.navbar-nav > li > a').click(function () {
        $('.navbar-nav > li > a').removeClass('active');
        $(this).addClass('active');
    });
  });
  // Desktop View navbar active class End

  
  // Associative 
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      freeMode: true,
      loop:true,
      autoplay: {
          delay: 1000,
      },
      pagination: {
          clickable: false,
      },
      breakpoints: {
  320: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  420: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
  },
  });
  // Associative End
  
  
  
  
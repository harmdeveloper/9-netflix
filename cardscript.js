const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor:true,
spaceBetween:0,


  // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
// dynamicBullets:true,
//     },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // responsiveness 
  breakpoints:{
      0:{
          slidesPreView:1
      },
      620:{
          slidesPreView:2
      },
      1024:{
          slidesPreView:3
      },
      1440: {
          slidesPerView: 4,
        },
  }
});
//   video models

$('#videoModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var videoSrc = button.data('video'); // Extract info from data-* attributes

  var modal = $(this);
  modal.find('.modal-video').attr('src', videoSrc);
});

$('#videoModal').on('hide.bs.modal', function () {
  var modal = $(this);
  modal.find('.modal-video').attr('src', '');
});



document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-button');
    const travelDirections = document.getElementById('travel-directions');

    toggleButton.addEventListener('click', function() {
      if (travelDirections.style.display === 'none') {
        travelDirections.style.display = 'block';
        toggleButton.textContent = 'Hide Travel Directions';
      } else {
        travelDirections.style.display = 'none';
        toggleButton.textContent = 'Show Travel Directions';
      }
    });
  });

  $(document).ready(function () {
    $('.photo-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});


document.getElementById('scrollToTop').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});


document.getElementById('stickyHomeButton').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
  const viewMoreLinks = document.querySelectorAll('.view-more');

  viewMoreLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const moreText = this.previousElementSibling;
          if (moreText.style.display === 'none' || moreText.style.display === '') {
              moreText.style.display = 'inline';
              this.textContent = 'View Less';
          } else {
              moreText.style.display = 'none';
              this.textContent = 'View More';
          }
      });
  });
});

function emailSend(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "lasterrenaswingchun@gmail.com",
    Password : "C9C1745CBDC19AAF44B82F1FA4463161EE7D",
    To : "kemaltarlaci1981@gmail.com",
    From : "lasterrenaswingchun@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}


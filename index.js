// For Navbar
$(document).ready(function() {

  $(window).on('scroll', function() {

    var link = $('.navbar a.dot');
    var top = $(window).scrollTop();

    $('.section').each(function() {
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass('active');
        $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

  });

});

// For Navbar Alternate
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

  section.forEach(sec => {

    let topAlt = window.scrollY;
    let offsetAlt = sec.offsetTop - 150;
    let heightAlt = sec.offsetHeight;
    let idAlt = sec.getAttribute('id');

    if (topAlt >= offsetAlt && topAlt < offsetAlt + heightAlt) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + idAlt + ']').classList.add('active');
      });
    };
  });
};

// For Animation
const typers = document.querySelectorAll(".type-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("typewriter");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

typers.forEach(typer => {
  appearOnScroll.observe(typer);
});

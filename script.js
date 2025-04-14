AOS.init({
  duration: 1200,
  once: true
});


  const mainImg = document.getElementById('mainImg');
  const zoomView = document.getElementById('zoomView');

  mainImg.addEventListener('mouseenter', () => {
    zoomView.style.display = 'block';
  });

  mainImg.addEventListener('mousemove', function (e) {
    const rect = mainImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const zoomLevel = 2;
    zoomView.style.backgroundImage = `url('${mainImg.src}')`;
    zoomView.style.backgroundPosition = `-${x * zoomLevel - zoomView.clientWidth / 2}px -${y * zoomLevel - zoomView.clientHeight / 2}px`;
    zoomView.style.backgroundSize = `${mainImg.width * zoomLevel}px ${mainImg.height * zoomLevel}px`;
  });

  mainImg.addEventListener('mouseleave', () => {
    zoomView.style.display = 'none';
  });

  function changeMainImages(thumbnailSrc) {
    // Get the main image element by its ID
    const mainImage = document.getElementById('mainImg');
  
    // Change the 'src' of the main image to match the clicked thumbnail's src
    mainImage.src = thumbnailSrc;
  }
  


function changeMainImage(el) {
  const mainDisplay = document.getElementById('mainDisplay');
  mainDisplay.src = el.src;

  document.querySelectorAll('.thumb').forEach(img => {
    img.classList.remove('active');
  });

  el.classList.add('active');
}

  const scrollContainer = document.querySelector('.vertical-thumbnails');
  const upArrow = document.querySelector('.up-arrow');
  const downArrow = document.querySelector('.down-arrow');

  upArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({ top: -100, behavior: 'smooth' });
  });

  downArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({ top: 100, behavior: 'smooth' });
  });

  document.querySelector(".buy-now").addEventListener("click", () => {
  alert("Proceeding to checkout!");
});

document.querySelector(".add-to-cart").addEventListener("click", () => {
  alert("Item added to cart!");
});

// JavaScript for FAQ Toggle
document.addEventListener('DOMContentLoaded', () => {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      content.classList.toggle('open');
    });
  });
});


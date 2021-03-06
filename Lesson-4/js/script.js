function preLoadImage(img) {
    const src = img.getAttribute("date-src")
    if(!src) {
        return
    }

    img.src = src;
}

const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 100px 0px"

};

const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

///
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
let lastmod = document.lastModified;
document.querySelector('#lastMod').textContent = lastmod;
///
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryImages = images
  .map(image => `<li class='gallery-item'><img src='${image.url}' alt='${image.alt}' class='gallery-photo'></li>`)
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryImages);

galleryContainer.style.listStyle = 'none';
galleryContainer.style.display = 'flex';
galleryContainer.style.flexWrap = 'wrap';
galleryContainer.style.flexDirection = 'column';
galleryContainer.style.gap = '20px';
galleryContainer.style.padding = '0';

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.style.maxWidth = '500px';
});

const galleryPhotos = document.querySelectorAll('.gallery-photo');
galleryPhotos.forEach(photo => {
  photo.style.maxWidth = '100%';
  photo.style.height = 'auto';
  photo.style.border = '3px solid darkgrey';
  photo.style.borderRadius = '50px';
});



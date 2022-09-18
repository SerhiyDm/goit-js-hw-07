import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const listItemsGallery = createItemGalleryMarkup(galleryItems);

function createItemGalleryMarkup(items) {
  const galleryListMarkup = items.map(item => `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a>`);
    return  galleryListMarkup.join('');
      }
  
      galleryList.innerHTML = listItemsGallery;
      galleryList.addEventListener('click', createModalShow);
      function createModalShow (e) {
e.preventDefault();
new SimpleLightbox('.gallery a',
{
  captionsData:
  'alt',
  captionDelay:
  250});
  }

console.log(galleryItems);
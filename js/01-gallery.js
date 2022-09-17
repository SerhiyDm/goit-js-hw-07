import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const listItemsGallery = createItemGalleryMarkup(galleryItems);

function createItemGalleryMarkup(items) {
  return  items.map(item => `<div
    class="gallery__item"><a
    href="${item.original}" class="gallery__link"><img
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    class="gallery__image"></a></div>`).join('');
    }

    galleryList.innerHTML = listItemsGallery;

galleryList.addEventListener('click', showModal);

  
function showModal (e) {
        e.preventDefault();
        const instance = basicLightbox.create(
          `<img src="${e.target.dataset.source}" width="1280">`
          );
          instance.show(() => {
            window.addEventListener('keydown', keyPress);
                  });
                  function keyPress (e) {
                      if(e.code === 'Escape') {
                        instance.close();
                        window.removeEventListener('keydown', keyPress);
                      }
    }
}
 console.log(galleryItems);

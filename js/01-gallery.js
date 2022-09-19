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

    galleryList.insertAdjacentHTML('afterbegin', listItemsGallery);

galleryList.addEventListener('click', showModal);

  
function showModal (e) {
 if (e.target.nodeName === 'IMG') {
        e.preventDefault();
         const instance = basicLightbox.create(
           `<img src="${e.target.dataset.source}" width="1280">`,
           {
             onShow: () =>
             window.addEventListener('keydown', keyPress),
           onClose: () =>
           window.removeEventListener('keydown', keyPress)
           });
           instance.show();
             function keyPress (e) {
               if(e.code === 'Escape') {
                 instance.close();
             }
           }
      }
}
 console.log(galleryItems);

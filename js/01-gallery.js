import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imageMarcup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", imageMarcup);

function createGalleryItems(images) {
  return images
    .map(({ original, preview, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}" target="_self" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}



function onClickImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img
      class="gallery__image"
      src="${evt.target.dataset.source}"
      alt="${evt.target.alt}"
    />`
  );
  instance.show();

  gallery.addEventListener("keydown", evt => {
    {
      if (evt.key !== "Escape") {
        return;
      }
      instance.close();
    }
  });

}

gallery.addEventListener("click", onClickImage);


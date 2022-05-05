import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

function createGalleryItems(gallery) {
    return gallery.map(item => {
        return `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a>`
    }).join('');
}

const gallery = createGalleryItems(galleryItems);
galleryRef.innerHTML = gallery;

let gallerySimplebox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});
gallerySimplebox.on('show.simplelightbox');


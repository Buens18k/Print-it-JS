/*******************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du Carousel
 *
 *
 *******************************************************************************/
import slides from "./slides.js";

const imageElement = document.querySelector(`#banner .banner-img`);
const tagLineElement = document.querySelector(`#banner p`);
const dotsDiv = document.querySelector(".dots");

let maxSlides = slides.length;
let currentSlide = 0;

// function qui met a jour l'image et le tag en fonction de l'index donner
function updateSlide(index) {
  // stock l'index
  currentSlide = index;
  // Stock la liste et son index en cours
  const slide = slides[currentSlide];
  //  MAJ image à afficher via directement la source
  imageElement.src = `./assets/images/slideshow/${slide.image}`;
  // Vérification du dot relatifs au bon slide
  console.log(`Vous avez cliqué sur le dot qui représente le ${slide.image}`);
  // Mets a jour le tagline
  tagLineElement.innerHTML = slide.tagLine;
  // console.log(`Et voici son tag:  ${tagLineElement.innerHTML}`)
}

// fonction qui créer des dot enfans d'une div dots
function createDotCaroussel(liste) {
  liste.forEach((slide) => {
    // création d'un button
    const dot = document.createElement("button");
    // avec la class "".dot"
    dot.classList.add(`dot`);
    // il sera l'enfant de la div "dots" (qui est récupêrer dans cette variable)
    dotsDiv.appendChild(dot);
  });
}

// fonction qui enleve le style à tous les éléments dot
function removeStyleDot(liste, element) {
  liste.forEach((element) => {
    // supprimer la classe .dot_selected
    element.classList.remove(`dot_selected`);
  });
}

// fonction qui ajoute un style au dot selectionner
function addStyleDot(element) {
  // ajoute la class .dot_selected
  element.classList.add(`dot_selected`);
}

createDotCaroussel(slides);

export { currentSlide, updateSlide, createDotCaroussel, removeStyleDot, addStyleDot };

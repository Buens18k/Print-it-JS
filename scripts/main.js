import slides from "./slides.js";
import {
    currentSlide,
  updateSlide,
  createDotCaroussel,
  removeStyleDot,
  addStyleDot,
} from "./carousel.js";

const dots = document.querySelectorAll(".dot");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

createDotCaroussel(slides);

dots[currentSlide].classList.add(`dot_selected`);

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    // j'efface la class a tous les dot
    removeStyleDot(dots, dot);
    // puis je place le style au dot selectionner
    addStyleDot(dot);
    // je mets à jour mon index
    updateSlide(index);
  });
});

// Ecoute évènement lors du click sur les flèches
arrowLeft.addEventListener("click", (event) => {
  console.log("fleche gauche");
  // Si au click l'index est égale à zéro
  // Et que l'index de ma Slide actuel est infèrieur à l'index de ma dernière Slide
  if (currentSlide === 0 && currentSlide < maxSlides - 1) {
    // alors tu passe à la max-slide - 1 pour retrouver le bonne index
    updateSlide(maxSlides - 1);
    console.log(
      `je suis revenu à l'index ${currentSlide} et actuellement sur le slide: ${maxSlides}`
    );
  } else {
    // je mets a jour mon index et je récupère le slide de l'index -1 pour MAJ l'image
    updateSlide(currentSlide - 1);
    console.log(`Je suis actuellement sur l'index :${currentSlide}`);
  }
  // Le dot ce mets à jour aussi
  dots.forEach((dot) => {
    // j'efface le style à tout les dots
    removeStyleDot(dots, dot);
  });
  // Et je le replace sur celui en cours d'afficher
  dots[currentSlide].classList.add(`dot_selected`);
});

arrowRight.addEventListener("click", (event) => {
  console.log("fleche droite");
  // Si l'index du slide actuel est égale à l'index de la dernière slide
  // et si l'index du slide actuel est supèrieur à zéro
  if (currentSlide === maxSlides - 1 && currentSlide > 0) {
    // je revient au début de la liste soit le 1er index
    updateSlide(0);
    console.log(`je suis revenu à l'index: ${currentSlide}`);
  } else {
    // je passe à l'index du slide suivant en MAJ image et tag
    updateSlide(currentSlide + 1);
    console.log(`je suis à l'index: ${currentSlide}`);
  }
  dots.forEach((dot) => {
    removeStyleDot(dots, dot);
  });
  dots[currentSlide].classList.add(`dot_selected`);
});

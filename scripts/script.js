const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const imageElement = document.querySelector(`#banner .banner-img`);
// console.log(imageElement);
const tagLineElement = document.querySelector(`#banner p`);
// console.log(tagLineElement);

const dotsDiv = document.querySelector(".dots");

let maxSlides = slides.length;

let currentSlide = 0;

/********************
 * Etape 3
 * Ajoutez des bullet points au slider
 * 
 ********************/
// j'appelle la fonction qui créer le dot en joignant le nom de la liste
createDotCaroussel(slides);

/********************
 * 
 * Etape 4
 * Modifiez le slide au clic sur le bouton
 * 
 */
// récupère tous les dots
const dots = document.querySelectorAll(".dot");

// j'applique le style au dot au chargement
dots[currentSlide].classList.add(`dot_selected`);
// console.log(`le slide au chargement est le ${currentSlide}`)

dots.forEach((dot, index) => {
  // quant on click sur le bouton dot
  dot.addEventListener("click", (event) => {
    // j'efface la class a tous les dot
    removeStyleDot(dots, dot);
    // puis je place le style au dot selectionner
    addStyleDot(dot);
    // je mets à jour mon index
    updateSlide(index);
  });
});
/*******************
 * Etape 2
 * Ajoutez des Event Listeners sur les flèches 
 * 
 *******************/

// Récupère les flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

/******************
 * 
 * Etape 5
 * Mettez en place le défilement infini sur le carrousel 
 * 
 */

// Ecoute évènement lors du click sur les flèches
arrowLeft.addEventListener("click", (event) => {
  // test du fonctionnement lors de l'event listeners
  console.log("fleche gauche");
  // Si au click l'index est égale à zéro
  // Et que l'index de ma Slide actuel est infèrieur à l'index de ma dernière Slide
  if (currentSlide === 0 && currentSlide < maxSlides - 1) {
    // alors tu passe à la max-slide - 1 pour retrouver le bonne index
    updateSlide(maxSlides - 1);
    // test de fonctionnement
    console.log(
      `je suis revenu à l'index ${currentSlide} et actuellement sur le slide: ${maxSlides}`
    );
  } else {
    // je mets a jour mon index et je récupère le slide de l'index -1 pour MAJ l'image
    updateSlide(currentSlide - 1);
    // test de fonctionnement
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

 /*********************
  * 
  * Fonction 
  * 
  * 
  * ******************** */
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

// Fonction qui créer des dots
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

// une fonction qui enleve le style a l'élément qui n'est pas selectionner ou
function removeStyleDot(liste, element) {
  liste.forEach((element) => {
    // supprimer la classe .dot_selected de tous les autres dots non selectionner
    element.classList.remove(`dot_selected`);
  });
}

function addStyleDot(element) {
  // ajoute la class .dot_selected au dot cliqué
  element.classList.add(`dot_selected`);
}
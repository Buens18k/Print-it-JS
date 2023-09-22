// Tableau
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

// Récupère les flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Récupère l'image
const imageElement = document.querySelector(`#banner .banner-img`);
// Récupère le paragraphe (tagline)
const tagLineElement = document.querySelector(`#banner p`);
// Récupère le container des dot
const dotsDiv = document.querySelector(".dots");

// nombres de slides
let maxSlides = slides.length;
// l'index au chargement
let currentSlide = 0;

// Appelle la fonction qui créer le dot en joignant le nom du tableau
createDotCaroussel(slides);

// récupère tous les dots
const dots = document.querySelectorAll(".dot");

// j'applique le style au dot au chargement
dots[currentSlide].classList.add(`dot_selected`);

// Pour chaque élément dans la liste
dots.forEach((dot, index) => {
  // ajout d'un écouteur d’événements à chaque élément "dot"
  dot.addEventListener("click", (event) => {
    // j'efface la class a tous les dot
    removeStyleDot(dots, dot);
    // puis je place le style au dot selectionner
    addStyleDot(dot);
    // MAJ le slide en fonction de l'index
    updateSlide(index);
    // console.log(`Vous avez cliqué sur l'index: ${index}`)
  });
});

// ajout d'un écouteur d’événements à l'élément "fleche gauche"
arrowLeft.addEventListener("click", (event) => {
  // test du fonctionnement lorsque l’événement de clic se produit
  console.log("fleche gauche");
  // condition pour tourner en boucle
  if (currentSlide === 0 && currentSlide < maxSlides - 1) {
    // MAJ image et tags
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
  // MAJ de l'index avec la valeur passez en parametre
  currentSlide = index;
  // Stock la slide correspondant à son index en cours dans la variable
  const slide = slides[currentSlide];
  //  MAJ image à afficher via directement la source
  imageElement.src = `./assets/images/slideshow/${slide.image}`;
  // Vérification du dot relatifs au bon slide
  console.log(`Vous avez cliqué sur le dot qui représente le ${slide.image}`);
  // Mets a jour le tagline
  tagLineElement.innerHTML = slide.tagLine;
  // console.log(`Et voici son tag:  ${tagLineElement.innerHTML}`)
}

// Fonction qui créer des dot pour chaque élément d’une liste
function createDotCaroussel(liste) {
  // Pour chaque élément dans la liste
  liste.forEach((slide) => {
    // création d'un button
    const dot = document.createElement("button");
    // avec la class ".dot"
    dot.classList.add(`dot`);
    // il sera l'enfant de la div "dots" (qui est récupêrer dans cette variable)
    dotsDiv.appendChild(dot);
  });
}

// une fonction qui enleve le style a l'élément qui n'est pas selectionner
function removeStyleDot(liste, element) {
  // Pour chaque élément dans la liste
  liste.forEach((element) => {
    // supprime la classe CSS appelée “dot_selected” à chaque élément de la liste
    element.classList.remove(`dot_selected`);
  });
}

// Fonction qui ajoute un style
function addStyleDot(element) {
  // ajoute la class .dot_selected à l'élément spécifié
  element.classList.add(`dot_selected`);
}

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

// Appelle la fonction qui créer le dot dynamiquement en joignant le nom du tableau
createDotCaroussel(slides);

// récupère tous les dots
const dots = document.querySelectorAll(".dot");

// j'applique le style au dot au chargement
dots[currentSlide].classList.add(`dot_selected`);

// différencie le point qui signale le slide en cours de visionnage
// Pour chaque élément dans la liste
dots.forEach((dot, index) => {
  // ajout d'un écouteur d’événements à chaque élément "dot"
  dot.addEventListener("click", (event) => {
    // Appel de la fonction qui efface la class a tous les dot
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
  // condition pour tourner en boucle infini
  if (currentSlide === 0 && currentSlide < maxSlides - 1) {
    // affiche la dernière slide du tableau
    updateSlide(maxSlides - 1);
    // test de fonctionnement
    console.log(
      `je suis revenu à l'index ${currentSlide} et actuellement sur le slide: ${maxSlides}`
    );
  } else {
    // MAJ la slide précédente
    updateSlide(currentSlide - 1);
    // test de fonctionnement
    console.log(`Je suis actuellement sur l'index :${currentSlide}`);
  }
  // MAJ dot par rapport au slide afficher
  dots.forEach((dot) => {
    // j'efface le style à tout les dots
    removeStyleDot(dots, dot);
  });
  // Ajoute le style au dot en cours d'affichage
  dots[currentSlide].classList.add(`dot_selected`);
});

arrowRight.addEventListener("click", (event) => {
  console.log("fleche droite");
  // condition pour tourner en boucle infini
  if (currentSlide === maxSlides - 1 && currentSlide > 0) {
    // affiche la première slide
    updateSlide(0);
    console.log(`je suis revenu à l'index: ${currentSlide}`);
  } else {
    // MAJ la slide suivante
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

// Fonction qui créer des dot pour chaque élément d’une liste
function createDotCaroussel(liste) {
  // Pour chaque élément dans la liste
  liste.forEach((slide) => {
    // création d'un élément "button"
    const dot = document.createElement("button");
    // ajoute à l'élément la class ".dot"
    dot.classList.add(`dot`);
    // Sera l'enfant de la div "dots" (qui est récupêrer dans cette variable)
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

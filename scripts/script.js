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

const maxSlides = slides.length;

let currentSlide = 0;

function updateSlide(index) {
  currentSlide = index;
  // Mets a jour l'image
  const slide = slides[currentSlide];
  // console.log(currentSlide);
  imageElement.src = `./assets/images/slideshow/${slide.image}`;
  console.log(`Vous avez cliqué sur le dot qui représente le ${slide.image}`);

  // Mets a jour le tagline
  tagLineElement.innerHTML = slide.tagLine;
  // console.log(`Et voici son tag:  ${tagLineElement.innerHTML}`)
}

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
// j'appelle la fonction qui créer le dot en joignant le nom de la liste
createDotCaroussel(slides);

const dots = document.querySelectorAll(".dot");

// j'applique le style au dot au chargement
dots[currentSlide].classList.add(`dot_selected`);
// console.log(`le slide au chargement est le ${currentSlide}`)

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    // supprimer la classe .dot_selected de tous les dots
    dots.forEach((otherDot) => {
      otherDot.classList.remove(`dot_selected`);
    });

    // ajoute la class .dot_selected au dot cliqué
    dot.classList.add(`dot_selected`);

    updateSlide(index);
  });
});

// Récupère les flèches
const arrow_left = document.querySelector(".arrow_left");
// console.log(arrow_left);

const arrow_right = document.querySelector(".arrow_right");
// console.log(arrow_right);

// Ecoute évènement lors du click sur les flèches
arrow_left.addEventListener("click", (event) => {
  console.log("fleche gauche");
  if (currentSlide === 0) {
    updateSlide(maxSlides -1)
  } else {
    updateSlide(currentSlide -1)
  }
  
});

arrow_right.addEventListener("click", (event) => {
  console.log("fleche droite");
  if (currentSlide === maxSlides - 1) {
    updateSlide(0)
  } else {
    updateSlide(currentSlide +1)
  }
});

// // Pour être SUR que chaque dot contient son slide relatifs à l'index
// // je récupère all dot et stock dans la variable dots
// // j'parcours chaque objet dans ma liste dots
// // Avec en paramètre
// dots.forEach((dot, index) => {
//   console.log(`Le Dot ${index + 1}:`, dots[index]);
//   console.log(
//     `Le Dot ${index + 1} contient le slide ${index + 1}:`,
//     slides[index]
//   );
// });

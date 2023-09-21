/*******************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du Carousel
 *
 *
 *******************************************************************************/

export class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0;
    this.maxSlides = this.slides.length;
    this.imageElement = document.querySelector(`#banner .banner-img`);
    this.tagLineElement = document.querySelector(`#banner p`);
    this.dotsDiv = document.querySelector(".dots");
    this.arrowLeft = document.querySelector(".arrow_left");
    this.arrowRight = document.querySelector(".arrow_right");
    this.dots = [];
  }
  init() {
    this.createDotCaroussel();
    this.majStyleDotSelected();
    this.arrow();
  }

  // fonction qui créer des dot enfans td'une div dots
  createDotCaroussel() {
    this.slides.forEach((slide) => {
      // création d'un button
      const dot = document.createElement("button");
      // avec la class "".dot"
      dot.classList.add(`dot`);
      // il sera l'enfant de la div "dots" (qui est récupêrer dans cette variable)
      this.dotsDiv.appendChild(dot);
      this.dots.push(dot);
    });
  }
  majStyleDotSelected() {
    this.dots[this.currentSlide].classList.add(`dot_selected`);
    // console.log(`le slide au chargement est le ${currentSlide}`)
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", (event) => {
        // j'efface la class a tous les dot
        removeStyleDot(dots, dot);
        // puis je place le style au dot selectionner
        addStyleDot(dot);
        // je mets à jour mon index
        updateSlide(index);
      });
    });
  }
  arrow() {
    this.arrowLeft.addEventListener("click", (event) => {
      console.log("fleche gauche");
      // Si au click l'index est égale à zéro
      // Et que l'index de ma Slide actuel est infèrieur à l'index de ma dernière Slide
      if (this.currentSlide === 0 && this.currentSlide < this.maxSlides - 1) {
        // alors tu passe à la max-slide - 1 pour retrouver le bonne index
        this.updateSlide(this.maxSlides - 1);
        console.log(
          `je suis revenu à l'index ${this.currentSlide} et actuellement sur le slide: ${this.maxSlides}`
        );
      } else {
        // je mets a jour mon index et je récupère le slide de l'index -1 pour MAJ l'image
        this.updateSlide(this.currentSlide - 1);
        console.log(`Je suis actuellement sur l'index :${this.currentSlide}`);
      }
      // Le dot ce mets à jour aussi
      this.dots.forEach((dot) => {
        // j'efface le style à tout les dots
        //removeStyleDot(this.dots, dot);
      });
      // Et je le replace sur celui en cours d'afficher
      this.dots[this.currentSlide].classList.add(`dot_selected`);
    });

    this.arrowRight.addEventListener("click", (event) => {
      console.log("fleche droite");
      // Si l'index du slide actuel est égale à l'index de la dernière slide
      // et si l'index du slide actuel est supèrieur à zéro
      if (this.currentSlide === this.maxSlides - 1 && this.currentSlide > 0) {
        // je revient au début de la liste soit le 1er index
        this.updateSlide(0);
        console.log(`je suis revenu à l'index: ${this.currentSlide}`);
      } else {
        // je passe à l'index du slide suivant en MAJ image et tag
        this.updateSlide(this.currentSlide + 1);
        console.log(`je suis à l'index: ${this.currentSlide}`);
      }
      this.dots.forEach((dot) => {
        //removeStyleDot(this.dots, dot);
      });
      this.dots[this.currentSlide].classList.add(`dot_selected`);
    });
  }
  // function qui met a jour l'image et le tag en fonction de l'index donner
  updateSlide(index) {
    // stock l'index
    this.currentSlide = index;
    // Stock la liste et son index en cours
    const slide = this.slides[this.currentSlide];
    //  MAJ image à afficher via directement la source
    this.imageElement.src = `./assets/images/slideshow/${slide.image}`;
    // Vérification du dot relatifs au bon slide
    console.log(`Vous avez cliqué sur le dot qui représente le ${slide.image}`);
    // Mets a jour le tagline
    this.tagLineElement.innerHTML = slide.tagLine;
    // console.log(`Et voici son tag:  ${tagLineElement.innerHTML}`)
  }
}

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

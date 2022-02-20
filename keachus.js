let listeCourse = document.getElementById("listeCourse");
let planning = document.getElementById("planning");
let ingredients = document.getElementById("ingredients");
let ingredientsSemaine = document.getElementById("btnSemaine");

  listeCourse.addEventListener("click", () => {
  document.getElementById('rubrique').className = "hidden"
  document.getElementById('ingredients').className = "visible"
  listeCourse.style.backgroundColor = '#212e1d95';
  planning.style.backgroundColor = '#62755B';
  
  })

  planning.addEventListener("click", () => {
    document.getElementById('rubrique').className = "visible"
    document.getElementById('ingredients').className = "hidden"
    listeCourse.style.backgroundColor = '#62755B'; //verifier si pas enlevable
    planning.style.backgroundColor = '#212e1d95'; //verifier si pas enlevable
    document.getElementById('checkbox2').className = "checkbox2"
    ingredientsSemaine.style.backgroundColor = '#62755B';
    })

    ingredientsSemaine.addEventListener("click", () => {
      document.getElementById('checkbox2').className = "checkbox"
      ingredientsSemaine.style.backgroundColor = '#3c4a36';
      })

      /*ajouter un addeventlistener pour reduire liste de course en appuyant sur lundi*/
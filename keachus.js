let listeCourse = document.getElementById("listeCourse");
let planning = document.getElementById("planning");
let ingredients = document.getElementById("ingredients");
let ingredientsSemaine = document.getElementById("btnSemaine");

  listeCourse.addEventListener("click", () => {
  document.getElementById('rubrique').className = "hidden"
  document.getElementById('ingredients').className = "visible"
  listeCourse.style.backgroundColor = '#c3f3b779';
  planning.style.backgroundColor = '#62755B';
  
  })

  planning.addEventListener("click", () => {
    document.getElementById('rubrique').className = "visible"
    document.getElementById('ingredients').className = "hidden"
    listeCourse.style.backgroundColor = '#62755B';
    planning.style.backgroundColor = '#c3f3b779';
    document.getElementById('checkbox2').className = "checkbox2"
    })

    ingredientsSemaine.addEventListener("click", () => {
      document.getElementById('checkbox2').className = "checkbox"
      })

      /*ajouter un addeventlistener pour reduire liste de course en appuyant sur lundi*/
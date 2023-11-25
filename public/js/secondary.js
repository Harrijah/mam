const makeLine = () => {
  let index = 0;
  var photo1 = document.getElementById("photo1");
  var photo2 = document.getElementById("photo2");
  var photo3 = document.getElementById("photo3");
  var photo4 = document.getElementById("photo4");
  var photo5 = document.getElementById("photo5");

  var path1 = document.querySelector("#svgPath1 path");
  var path2 = document.querySelector("#svgPath2 path");
  var path3 = document.querySelector("#svgPath3 path");
  var path4 = document.querySelector("#svgPath4 path");

  // Coordonnées du départ et de l'arrivée par rapport à mamservices
  var mamservicesRect = document
    .querySelector(".mamservices")
    .getBoundingClientRect();

  // dynamicleft = "240px";

  var photo1Rect = photo1.getBoundingClientRect();
  var photo2Rect = photo2.getBoundingClientRect();
  var photo3Rect = photo3.getBoundingClientRect();
  var photo4Rect = photo4.getBoundingClientRect();
  var photo5Rect = photo5.getBoundingClientRect();

  // *************** Path 1 start
  var startX1 = photo1Rect.left + photo1Rect.width / 2 - mamservicesRect.left;
  var startY1 = photo1Rect.top + photo1Rect.height / 2 - mamservicesRect.top;

  //  ************** Path1 end et Path 2 start

  var startX2 = photo2Rect.left + photo2Rect.width / 2 - mamservicesRect.left;
  var startY2 = photo2Rect.top + photo2Rect.height / 2 - mamservicesRect.top;

  // *************** Path 2 end et Path 3 start
  var startX3 = photo3Rect.left + photo3Rect.width / 2 - mamservicesRect.left;
  var startY3 = photo3Rect.top + photo3Rect.height / 2 - mamservicesRect.top;

  // *************** Path 3 end et Path 4 start
  var startX4 = photo4Rect.left + photo4Rect.width / 2 - mamservicesRect.left;
  var startY4 = photo4Rect.top + photo4Rect.height / 2 - mamservicesRect.top;

  // *************** Path 4 end
  var startX5 = photo5Rect.left + photo5Rect.width / 2 - mamservicesRect.left;
  var startY5 = photo5Rect.top + photo5Rect.height / 2 - mamservicesRect.top;

  console.log(startX2);

  // Mettre à jour le chemin "Path 1"
  path1.setAttribute(
    "d",
    "M" +
      startX1 +
      " " +
      startY1 +
      " Q" +
      (startX1 + startX2) / 2 +
      " " +
      (startY1 + startY2) / 2 +
      " " +
      startX2 +
      " " +
      startY2
  );
  // Mettre à jour le chemin "Path 2"
  path2.setAttribute(
    "d",
    "M" +
      startX2 +
      " " +
      startY2 +
      " Q" +
      (startX2 + startX3) / 2 +
      " " +
      (startY2 + startY3) / 2 +
      " " +
      startX3 +
      " " +
      startY3
  );
  // Mettre à jour le chemin "Path 3"
  path3.setAttribute(
    "d",
    "M" +
      startX3 +
      " " +
      startY3 +
      " Q" +
      (startX3 + startX4) / 2 +
      " " +
      (startY3 + startY4) / 2 +
      " " +
      startX4 +
      " " +
      startY4
  );
  // Mettre à jour le chemin "Path 4"
  path4.setAttribute(
    "d",
    "M" +
      startX4 +
      " " +
      startY4 +
      " Q" +
      (startX4 + startX5) / 2 +
      " " +
      (startY4 + startY5) / 2 +
      " " +
      startX5 +
      " " +
      startY5
  );
  path1.setAttribute("stroke", "#faefe3");
  path2.setAttribute("stroke", "#faefe3");
  path3.setAttribute("stroke", "#faefe3");
  path4.setAttribute("stroke", "#faefe3");


  const moveone = () => {
    if (index == 0) {
      setTimeout(() => {
        photo2.style.left = "0px";
        photo3.style.left = "0px";
        photo4.style.left = "0px";
        // makeLine();
        index = 1;
        moveone();
      }, 5000);
    } else if (index == 1) {
      setTimeout(() => {
        photo2.style.left = "-10px";
        photo3.style.left = "10px";
        photo4.style.left = "-10px";
        // makeLine();
        index = 0;
        moveone();
      }, 5000);
    }
  };
  
  moveone();
};

// Appeler la fonction au chargement de la page et en cas de redimensionnement de la fenêtre
window.onload = window.onresize = makeLine;

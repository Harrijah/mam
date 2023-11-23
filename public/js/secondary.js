const makeLine = () => {
  var photo1 = document.getElementById("photo1");
  var photo2 = document.getElementById("photo2");
  var photo3 = document.getElementById("photo3");
  var photo4 = document.getElementById("photo4");
  var photo5 = document.getElementById("photo5");

  var svgContainer = document.getElementById("svgContainer");

  var path1 = document.querySelector("#svgPath1 path");
  var path2 = document.querySelector("#svgPath2 path");
  var path3 = document.querySelector("#svgPath3 path");
  var path4 = document.querySelector("#svgPath4 path");

  // if (!photo1 || !photo2 || !svgContainer) {
  //     console.error('Éléments non trouvés. Vérifiez les ID dans le HTML.');
  //     return;
  // }

  // Coordonnées du départ et de l'arrivée par rapport à mamservices
  var mamservicesRect = document
    .querySelector(".mamservices")
    .getBoundingClientRect();

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
  svgContainer.style.zIndex = 0;
  path1.setAttribute("stroke", "#664825");
  path2.setAttribute("stroke", "#664825");
  path3.setAttribute("stroke", "#664825");
  path4.setAttribute("stroke", "#664825");
};

// Appeler la fonction au chargement de la page et en cas de redimensionnement de la fenêtre
window.onload = window.onresize = makeLine;

const animatePhoto2 = () => {
    // Obtenez une valeur aléatoire pour les nouvelles positions
    const currentX = parseFloat(document.getElementById("photo2").style.left) || 0;
    const currentY = parseFloat(document.getElementById("photo2").style.top) || 0;
  
    // Facteur de ralentissement, ajustez selon vos préférences
    const slowdownFactor = 0.5;
  
    const newX = currentX + (Math.random() - 0.5) * slowdownFactor;
    const newY = currentY + (Math.random() - 0.5) * slowdownFactor;
    
    // Mettez à jour la position de la photo2
    document.getElementById("photo2").style.left = newX + "px";
    document.getElementById("photo2").style.top = newY + "px";
  
    // Appelez la fonction makeLine pour mettre à jour le chemin SVG
    makeLine();
  
    // Planifiez la prochaine animation
    requestAnimationFrame(animatePhoto2);
  };
  
  // Appelez la fonction animatePhoto2 pour démarrer l'animation
  animatePhoto2();
  
const animatePhoto3 = () => {
    // Obtenez une valeur aléatoire pour les nouvelles positions
    const currentX3 = parseFloat(document.getElementById("photo3").style.left) || 0;
    const currentY3 = parseFloat(document.getElementById("photo3").style.top) || 0;
  
    // Facteur de ralentissement, ajustez selon vos préférences
    const slowdownFactor = 0.5;
  
    const newX3 = currentX3 + (Math.random() - 0.5) * slowdownFactor;
    const newY3 = currentY3 + (Math.random() - 0.5) * slowdownFactor;
    
    // Mettez à jour la position de la photo2
    document.getElementById("photo3").style.left = newX3 + "px";
    document.getElementById("photo3").style.top = newY3 + "px";
  
    // Appelez la fonction makeLine pour mettre à jour le chemin SVG
    makeLine();
  
    // Planifiez la prochaine animation
    requestAnimationFrame(animatePhoto3);
  };
  
  // Appelez la fonction animatePhoto2 pour démarrer l'animation
  animatePhoto3();
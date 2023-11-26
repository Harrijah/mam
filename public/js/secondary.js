

const makeLine = () => {
  
var photo1 = document.getElementById("photo1");
var photo2 = document.getElementById("photo2");
var photo3 = document.getElementById("photo3");
var photo4 = document.getElementById("photo4");
var photo5 = document.getElementById("photo5");

var path1 = document.querySelector("#svgPath1 path");
var path2 = document.querySelector("#svgPath2 path");
var path3 = document.querySelector("#svgPath3 path");
var path4 = document.querySelector("#svgPath4 path");

var mamservicesRect = document
  .querySelector(".mamservices")
  .getBoundingClientRect();

var startX1 = photo1.getBoundingClientRect().left + photo1.getBoundingClientRect().width / 2 - mamservicesRect.left;
var startY1 = photo1.getBoundingClientRect().top + photo1.getBoundingClientRect().height / 2 - mamservicesRect.top;

var startX2 = photo2.getBoundingClientRect().left + photo2.getBoundingClientRect().width / 2 - mamservicesRect.left;
var startY2 = photo2.getBoundingClientRect().top + photo2.getBoundingClientRect().height / 2 - mamservicesRect.top;

var startX3 = photo3.getBoundingClientRect().left + photo3.getBoundingClientRect().width / 2 - mamservicesRect.left;
var startY3 = photo3.getBoundingClientRect().top + photo3.getBoundingClientRect().height / 2 - mamservicesRect.top;

var startX4 = photo4.getBoundingClientRect().left + photo4.getBoundingClientRect().width / 2 - mamservicesRect.left;
var startY4 = photo4.getBoundingClientRect().top + photo4.getBoundingClientRect().height / 2 - mamservicesRect.top;

var startX5 = photo5.getBoundingClientRect().left + photo5.getBoundingClientRect().width / 2 - mamservicesRect.left;
var startY5 = photo5.getBoundingClientRect().top + photo5.getBoundingClientRect().height / 2 - mamservicesRect.top;



  photo1container.addEventListener('mouseover', (e) => {
    photo1.style.transform = `translateX(100px)`;
});
photo1container.addEventListener('mouseleave', () => {
  photo1.style.transform = '';
});
photo2container.addEventListener('mouseover', (e) => {
  photo2.style.transform = `translateX(-100px)`;
});
photo2container.addEventListener('mouseleave', () => {
  photo2.style.transform = '';
});
photo3container.addEventListener('mouseover', (e) => {
  photo3.style.transform = `translateX(100px)`;
});
photo3container.addEventListener('mouseleave', () => {
  photo3.style.transform = '';
});
photo4container.addEventListener('mouseover', (e) => {
  photo4.style.transform = `translateX(-100px)`;
});
photo4container.addEventListener('mouseleave', () => {
  photo4.style.transform = '';
});
photo5container.addEventListener('mouseover', (e) => {
  photo5.style.transform = `translateX(100px)`;
});
photo5container.addEventListener('mouseleave', () => {
  photo5.style.transform = '';
});

  // let index = 0;

  // const moveone = () => {
    // let x201 = photo2.getBoundingClientRect().left + photo2.getBoundingClientRect().width / 2 - mamservicesRect.left;
    // let x301 = photo3.getBoundingClientRect().left + photo3.getBoundingClientRect().width / 2 - mamservicesRect.left;
    // let x401 = photo4.getBoundingClientRect().left + photo4.getBoundingClientRect().width / 2 - mamservicesRect.left;

    // console.log("startX2 = "+startX2);
    // console.log("startX2 = "+startX2);

    // if (index == 0) {
    //   setTimeout(() => {
        // photo2.style.left = "0px";
        // photo3.style.left = "0px";
        // photo4.style.left = "0px";
        // index = 1;
        // Mettre à jour les chemins avec requestAnimationFrame
        // requestAnimationFrame(() => {
          // path1.setAttribute("d", `M${startX1} ${startY1} Q${(startX1 + startX2) / 2} ${(startY1 + startY2) / 2} ${startX2} ${startY2}`);
          // path2.setAttribute("d", `M${startX2} ${startY2} Q${(startX2 + startX3) / 2} ${(startY2 + startY3) / 2} ${startX3} ${startY3}`);
          // path3.setAttribute("d", `M${startX3} ${startY3} Q${(startX3 + startX4) / 2} ${(startY3 + startY4) / 2} ${startX4} ${startY4}`);
          // path4.setAttribute("d", `M${startX4} ${startY4} Q${(startX4 + startX5) / 2} ${(startY4 + startY5) / 2} ${startX5} ${startY5}`);
        // });
      //   moveone();
      // }, 5000);
    // } else if (index == 1) {
    //   setTimeout(() => {
        // photo2.style.left = "-50px";
        // photo3.style.left = "50px";
        // photo4.style.left = "-50px";
        // index = 0;
        // Mettre à jour les chemins avec requestAnimationFrame
        requestAnimationFrame(() => {
          path1.setAttribute("d", `M${startX1} ${startY1} Q${(startX1 + startX2) / 2} ${(startY1 + startY2) / 2} ${startX2} ${startY2}`);
          path2.setAttribute("d", `M${startX2} ${startY2} Q${(startX2 + startX3) / 2} ${(startY2 + startY3) / 2} ${startX3} ${startY3}`);
          path3.setAttribute("d", `M${startX3} ${startY3} Q${(startX3 + startX4) / 2} ${(startY3 + startY4) / 2} ${startX4} ${startY4}`);
          path4.setAttribute("d", `M${startX4} ${startY4} Q${(startX4 + startX5) / 2} ${(startY4 + startY5) / 2} ${startX5} ${startY5}`);
        });
    //     moveone();
    //   }, 5000);
    // }
    path1.setAttribute("stroke", "#faefe3");
    // path1.style.transition = "4s";
    path2.setAttribute("stroke", "#faefe3");
    // path2.style.transition = "4s";
    path3.setAttribute("stroke", "#faefe3");
    // path3.style.transition = "4s";
    path4.setAttribute("stroke", "#faefe3");
  // path4.style.transition = "4s";






  };

  // moveone();
// };


// Appeler la fonction au chargement de la page et en cas de redimensionnement de la fenêtre
window.onload = window.onresize = makeLine;

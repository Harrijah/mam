

const makeLine = () => {
  // let madiv = document.getElementById("textcontainer");

// console.log(textcontainer.clientHeight);
svgPath1.style.setProperty('--svgpathheighgt', (document.body.offsetHeight - window.innerHeight - textcontainer.clientHeight)+'px');
svgPath2.style.setProperty('--svgpathheighgt', (document.body.offsetHeight - window.innerHeight - textcontainer.clientHeight)+'px');
svgPath3.style.setProperty('--svgpathheighgt', (document.body.offsetHeight - window.innerHeight - textcontainer.clientHeight)+'px');
svgPath4.style.setProperty('--svgpathheighgt', (document.body.offsetHeight - window.innerHeight - textcontainer.clientHeight)+'px');
svgPath5.style.setProperty('--svgpathheighgt', (document.body.offsetHeight - window.innerHeight - textcontainer.clientHeight)+'px');

  var photo1 = document.getElementById("photo1");
  var photo2 = document.getElementById("photo2");
  var photo3 = document.getElementById("photo3");
  var photo4 = document.getElementById("photo4");
  var photo5 = document.getElementById("photo5");
  var photo6 = document.getElementById("photo6"); 

  var path1 = document.querySelector("#svgPath1 path");
  var path2 = document.querySelector("#svgPath2 path");
  var path3 = document.querySelector("#svgPath3 path");
  var path4 = document.querySelector("#svgPath4 path");
  var path5 = document.querySelector("#svgPath5 path");


  var mamservicesRect = document
    .querySelector(".mamservices")
    .getBoundingClientRect();

  var startX1 =
    photo1.getBoundingClientRect().left +
    photo1.getBoundingClientRect().width / 2 -
    mamservicesRect.left;
  var startY1 =
    photo1.getBoundingClientRect().top +
    photo1.getBoundingClientRect().height / 2 -
    mamservicesRect.top;
  var startX2 =
    photo2.getBoundingClientRect().left +
    photo2.getBoundingClientRect().width / 2 -
    mamservicesRect.left;
  var startY2 =
    photo2.getBoundingClientRect().top +
    photo2.getBoundingClientRect().height / 2 -
    mamservicesRect.top;
  var startX3 =
    photo3.getBoundingClientRect().left +
    photo3.getBoundingClientRect().width / 2 -
    mamservicesRect.left;
  var startY3 =
    photo3.getBoundingClientRect().top +
    photo3.getBoundingClientRect().height / 2 -
    mamservicesRect.top;
  var startX4 =
    photo4.getBoundingClientRect().left +
    photo4.getBoundingClientRect().width / 2 -
    mamservicesRect.left;
  var startY4 =
    photo4.getBoundingClientRect().top +
    photo4.getBoundingClientRect().height / 2 -
    mamservicesRect.top;
  var startX5 =
    photo5.getBoundingClientRect().left +
    photo5.getBoundingClientRect().width / 2 -
    mamservicesRect.left;
  var startY5 =
    photo5.getBoundingClientRect().top +
    photo5.getBoundingClientRect().height / 2 -
    mamservicesRect.top;
  var startX6 =
    photo6.getBoundingClientRect().left +
    photo6.getBoundingClientRect().width / 2 -
    mamservicesRect.left;
  var startY6 =
    photo6.getBoundingClientRect().top +
    photo6.getBoundingClientRect().height / 2 -
    mamservicesRect.top;

  // photo1container.addEventListener("mouseover", (e) => {
  //   photo1.style.transform = "translateX(50px)";
  // });
  // photo1container.addEventListener("mouseleave", () => {
  //   photo1.style.transform = "";
  // });
  // photo2container.addEventListener("mouseover", (e) => {
  //   photo2.style.transform = `translateX(-50px)`;
  // });
  // photo2container.addEventListener("mouseleave", () => {
  //   photo2.style.transform = "";
  // });
  // photo3container.addEventListener("mouseover", (e) => {
  //   photo3.style.transform = `translateX(50px)`;
  // });
  // photo3container.addEventListener("mouseleave", () => {
  //   photo3.style.transform = "";
  // });
  // photo4container.addEventListener("mouseover", (e) => {
  //   photo4.style.transform = `translateX(-50px)`;
  // });
  // photo4container.addEventListener("mouseleave", () => {
  //   photo4.style.transform = "";
  // });
  // photo5container.addEventListener("mouseover", (e) => {
  //   photo5.style.transform = `translateX(50px)`;
  // });
  // photo5container.addEventListener("mouseleave", () => {
  //   photo5.style.transform = "";
  // });

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
    path1.setAttribute(
      "d",
      `M${startX1} ${startY1} Q${(startX1 + startX2) / 2} ${
        (startY1 + startY2) / 2
      } ${startX2} ${startY2}`
    );
    path2.setAttribute(
      "d",
      `M${startX2} ${startY2} Q${(startX2 + startX3) / 2} ${
        (startY2 + startY3) / 2
      } ${startX3} ${startY3}`
    );
    path3.setAttribute(
      "d",
      `M${startX3} ${startY3} Q${(startX3 + startX4) / 2} ${
        (startY3 + startY4) / 2
      } ${startX4} ${startY4}`
    );
    path4.setAttribute(
      "d",
      `M${startX4} ${startY4} Q${(startX4 + startX5) / 2} ${
        (startY4 + startY5) / 2
      } ${startX5} ${startY5}`
    );
    path5.setAttribute(
      "d",
      `M${startX5} ${startY5} Q${(startX5 + startX6) / 2} ${
        (startY5 + startY6) / 2
      } ${startX6} ${startY6}`
    );
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
  path5.setAttribute("stroke", "#faefe3");
  // path5.setAttribute("z-index", 100);
};

// moveone();
// };

// Appeler la fonction au chargement de la page et en cas de redimensionnement de la fenêtre
window.onload = window.onresize = makeLine;

window.addEventListener("scroll", () => {
  let scrollpos02 = window.scrollY;
  let scrollValue02 =
    (scrollpos02 + window.innerHeight) / document.body.offsetHeight;
  // console.log(scrollValue02);

  if (photo1container) {
    if (scrollValue02 > 0.28 && scrollValue02 < 0.4) {
      photo1.style.transform = "translateX(5px)";
      photo1.style.setProperty(
        "--defaultpath",
        "76% 24% 90% 10% / 20% 85% 15% 80%"
      );
    } else {
      photo1.style.transform = "";
      photo1.style.setProperty("--defaultpath", "5px");
    }
  }

  if (photo2container) {
    if (scrollValue02 > 0.39 && scrollValue02 < 0.55) {
      photo2.style.transform = "translateX(-5px)";
      photo2.style.setProperty("--defaultpath", "100%");
    } else {
      photo2.style.transform = "";
      photo2.style.setProperty("--defaultpath", "5%");
    }
  }

  if (photo3container) {
    if (scrollValue02 > 0.50 && scrollValue02 < 0.61) {
      photo3.style.transform = "translateX(5px)";
      photo3.style.setProperty(
        "--defaultpath",
        "76% 24% 90% 10% / 20% 85% 15% 80%"
      );
    } else {
      photo3.style.transform = "";
      photo3.style.setProperty("--defaultpath", "5px");
    }
  }

  if (photo4container) {
    if (scrollValue02 > 0.58 && scrollValue02 < 0.65) {
      photo4.style.transform = "translateX(-5px)";
      photo4.style.setProperty("--defaultpath", "100%");
    } else {
      photo4.style.transform = "";
      photo4.style.setProperty("--defaultpath", "5%");
    }
  }

  if (photo5container) {
    if (scrollValue02 > 0.65 && scrollValue02 < 0.77) {
      photo5.style.transform = "translateX(5px)";
      photo5.style.setProperty(
        "--defaultpath",
        "76% 24% 90% 10% / 20% 85% 15% 80%"
      );
    } else {
      photo5.style.transform = "";
      photo5.style.setProperty("--defaultpath", "5px");
    }
  }
  
  if (photo6container) {
    if (scrollValue02 > 0.77 && scrollValue02 < 0.88) {
      photo6.style.transform = "translateX(-5px)";
      photo6.style.setProperty("--defaultpath", "100%");
    } else {
      photo6.style.transform = "";
      photo6.style.setProperty("--defaultpath", "5%");
    }
  }
});

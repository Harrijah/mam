let lastscroll = 0;
window.addEventListener('scroll', () => {
    let scrollpos = window.scrollY;
    let scrollValue = (scrollpos + window.innerHeight) / document.body.offsetHeight;

    // console.log(scrollpos);
    // console.log(window.scrollY);
    // console.log(scrollValue);

    if (scrollpos > 80) {
        menu.style.position = "fixed";
        menu.style.top = "-100px";
        if (lastscroll > window.scrollY) {
            menu.style.top = "0px";
        }
    lastscroll = window.scrollY;
    } else {
        menu.style.position = "relative";
        menu.style.top = 0;
    }

    // if (part1) {
    //     if (scrollValue > 0.40 && scrollValue < 0.54) {
    //         part1.style.setProperty('--defaultpath', "76% 24% 90% 10% / 20% 85% 15% 80%");
    //     } else {
    //         part1.style.setProperty('--defaultpath', "5px");
    //     }
    // }
    // if (part2) {
        
    //     if (scrollValue > 0.42 && scrollValue < 0.6) {
    //         part2.style.setProperty('--defaultscale', "1");
    //     } else {
    //         part2.style.setProperty('--defaultscale', "0");
    //     }
    // }
    
    // if (scrollValue > 0.92) {
    //     imgfooter.style.borderRadius = "76% 24% 90% 10% / 20% 85% 15% 80%";
    //     footcol01.style.setProperty('--defaultopacity', '1');
    // } else {
    //     imgfooter.style.borderRadius = "5px";
    //     footcol01.style.setProperty('--defaultopacity', '0');
    // }

});


// myform.addEventListener('change', () => {
//     if (childname && childname.value.length < 10) {
//         childnameerror.textContent = "Le nom est trop court";
//         childnameerror.classList.add('alert', 'alert-danger');
//     } else {
//         childnameerror.textContent = "";
//         childnameerror.classList.remove('alert', 'alert-danger');
//         // childnameerror.class.remove('alert-danger');
//     }
// });
 myform.addEventListener('submit', (e) => {
    let nom = childname.value;
    let age = select.value;
    let datedebutaccueil = datedebutacc.value;
    let heuresemaine = heureparsemaine.value;
    let nomdelamere = nomdemere.value;
    let teldelamere = teldemere.value;
    let maildelamere = maildemere.value;
    let profdelamere = profdemere.value;
     // validation du nom de l'enfant

    //  if (nom && age && datedebutaccueil && heuresemaine && nomdelamere && teldelamere && maildelamere && profdelamere) {
        if (nom) {
            childnameerror.textContent = "";
            childnameerror.classList.remove('alert', 'alert-danger');
        } else {
            e.preventDefault();
            childnameerror.textContent = "Veuillez renseigner le nom de l'enfant";
            childnameerror.classList.add('alert', 'alert-danger');
        }
        // validation de l'âge de l'enfant
        const ageValue = parseInt(age.value);
        if (age) {
            childageerror.textContent = "";
            childageerror.classList.remove('alert', 'alert-danger');
        } else {
            e.preventDefault();
            childageerror.textContent = "Veuillez renseigner l\âge de l'enfant";
            childageerror.classList.add('alert', 'alert-danger');
         }
         // validation de la date de début de l'accueil
        if (datedebutaccueil) {
            datedebuterror.textContent = "";
            datedebuterror.classList.remove('alert', 'alert-danger');
        } else {
            e.preventDefault();
            datedebuterror.textContent = "Veuillez renseigner la date de début de l\'accueil souhaitée";
            datedebuterror.classList.add('alert', 'alert-danger');
         }
         // validation du volume d'heures par semaine
        if (heuresemaine) {
            heuresemaineerror.textContent = "";
            heuresemaineerror.classList.remove('alert', 'alert-danger');
        } else {
            e.preventDefault();
            heuresemaineerror.textContent = "Veuillez renseigner le volume d'heure d\'accueil hebdomadaire souhaité";
            heuresemaineerror.classList.add('alert', 'alert-danger');
         }
         // validation du volume d'heures par semaine
        if (nomdelamere) {
            nomdemereerror.textContent = "";
            nomdemereerror.classList.remove('alert', 'alert-danger');
        } else {
            e.preventDefault();
            nomdemereerror.textContent = "Veuillez renseigner le nom de la mère de l'enfant.";
            nomdemereerror.classList.add('alert', 'alert-danger');
         }
         // validation du tel de la mère
        if (teldelamere) {
            teldemereerror.textContent = "";
            teldemereerror.classList.remove('alert', 'alert-danger');
        } else {
            e.preventDefault();
            teldemereerror.textContent = "Veuillez renseigner le numéro de téléphone de la mère de l'enfant.";
            teldemereerror.classList.add('alert', 'alert-danger');
         }
         // validation du mail de la mère
         if (maildelamere) {
             maildemereerror.textContent = "";
             maildemereerror.classList.remove('alert', 'alert-danger');
         } else {
             e.preventDefault();
             maildemereerror.textContent = "Veuillez renseigner l'adresse email de la mère de l'enfant.";
             maildemereerror.classList.add('alert', 'alert-danger');
          }
          // validation de la profession de la mère
         if (profdelamere) {
             profdemereerror.textContent = "";
             profdemereerror.classList.remove('alert', 'alert-danger');
         } else {
            e.preventDefault();
             profdemereerror.textContent = "Veuillez renseigner la profession de la mère de l'enfant.";
             profdemereerror.classList.add('alert', 'alert-danger');
          }    
    //  } else {
    //     e.preventDefault();
    //  }




 });




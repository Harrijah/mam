$(document.body).on('click', '#modalbutton', (e) => {
    e.preventDefault;
    mymodal.style.display = "block";
    window.onclick = (e) => {
        if (e.target == mymodal) {
            mymodal.style.display = "none";
        }
    }
});
$(document.body).on('click', '#preadmission', (e) => {
    e.preventDefault;
    mymodal.style.display = "block";
    window.onclick = (e) => {
        if (e.target == mymodal) {
            mymodal.style.display = "none";
        }
    }
});
$(document.body).on('click', '#closeme', (e) => {
    e.preventDefault;
    mymodal.style.display = "none";
});

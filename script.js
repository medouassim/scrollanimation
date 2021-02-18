var boxes = document.querySelectorAll('.content');
window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    var triggerBottom = window.innerHeight / 5 * 3.8;
    boxes.forEach(box => {
        var rec = box.getBoundingClientRect().top;
        if(rec < triggerBottom) {
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}
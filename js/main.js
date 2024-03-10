const triggers = document.querySelectorAll(".acordion__trigger");
const items = document.querySelectorAll(".acordion__item");

triggers.forEach((trigger, index) => {
    trigger.addEventListener("change", () => {
        items[index].classList.toggle("active", trigger.checked);
    });
});
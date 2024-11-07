
let soat = document.querySelector(".taym");
let haur = document.querySelector(".haur");
let mint = document.querySelector(".mint");
let sekond = document.querySelector(".sekond");
let data = document.querySelector(".data");

setInterval(() => {
    let deyt = new Date();
    haur.innerHTML = deyt.getHours().toString().padStart(2, "0");
    mint.innerHTML = deyt.getMinutes().toString().padStart(2, "0");
    sekond.innerHTML = deyt.getSeconds().toString().padStart(2, "0");

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = deyt.toLocaleDateString('uz-UZ', options);
    data.innerHTML = formattedDate;
}, 1000);

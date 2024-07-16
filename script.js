let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let containerDom = document.querySelector(".container");
let listItemDom = document.querySelector(".container .list");
let thumbnailDom = document.querySelector(".container .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};

let timeRunning = 2000;
// let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".container .list .item");
  let itemThumbnail = document.querySelectorAll(".container .thumbnail .item"); // Corrected the typo here

  if (type == "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    containerDom.classList.add("next");
  } else {
    let posiitionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[posiitionLastItem]);
    thumbnailDom.prepend(itemThumbnail[posiitionLastItem]);
    containerDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    containerDom.classList.remove("next");
    containerDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => { // Resetting the auto-advance timer
    nextDom.click();
  }, timeAutoNext);
}

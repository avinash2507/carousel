const spanEl = document.querySelectorAll("span");
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const imagecomp = document.querySelector(".image-container");
const imagesNum = document.querySelectorAll("img");
const backImage = document.querySelector("body");



let currentImage = 0;
let clickOut;


nextbtn.addEventListener("click", () => {
  currentImage++;
  clearTimeout(clickOut);
  updateImage();
});
prevbtn.addEventListener("click", () => {
  currentImage--;
  clearTimeout(clickOut);
  updateImage();
});
updateImage();
function updateImage() {
  if (currentImage > imagesNum.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imagesNum.length;
  }
  imagecomp.style.transform = `translateX(-${(currentImage -1 ) *1900}px)`;
  backImage.style.backgroundImage = `url(${imagesNum[currentImage -1 ].src})`;
  backImage.style.backgroundRepeat = "no-repeat";
  backImage.style.backgroundSize = "cover";
//   spanEl.addEventListener("click", () => {
//     console.log("Image clicked");
//     updateImage(`${imagesNum[currentImage -1 ].src}`);
//     });

  clickOut = setTimeout(() => {
    currentImage++;
    updateImage();
  }, 5000);
  
}








// let imgIndex = 1;
// function spanEl(e){
//     showImg(imgIndex);
//     showImg(imgIndex = e);
// }
// function btnEl(e){
// showImg(imgIndex += e)};
// console.log("aji haana");
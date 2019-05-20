//抓取圖片的ul
const imagesUl=document.getElementsByClassName("images-ul");

//抓取索引小圓點
const dot=document.getElementsByClassName("dot-index");

const imagesMask = document.getElementsByClassName("images-mask");

//目前顯示第幾張圖片
let indexShow = 0;

//最後一張圖片的索引值
const lastIamges = document.querySelectorAll("img").length-1;

//上一張圖片
function onPrevious() {
    /* 拔除第一張圖片，並放置在最後 */
    let fitstImage = imagesUl[0].children[0];
    imagesUl[0].removeChild(imagesUl[0].children[0]);
    imagesUl[0].append(fitstImage);

    if (indexShow === 0)
        indexShow = lastIamges;
    else
        indexShow -= 1;
    imagesChange(indexShow);
}

//下一張圖片
function onNext() {
    /* 拔除最後一張圖片，並放置在最前面 */
    let lastImage = imagesUl[0].children[lastIamges];
    imagesUl[0].removeChild(imagesUl[0].children[lastIamges]);
    imagesUl[0].insertBefore(lastImage,imagesUl[0].children[0]);
    if (indexShow === lastIamges)
        indexShow = 0;
    else
        indexShow += 1;
    imagesChange(indexShow);
}

//圖片更換
function imagesChange(index) {
    /* 將所有圖片遮罩以及原點的樣式初始化 */
    for(let i = 0 ;i < dot.length ; i++){
        dot[i].style.color = "#FFF";
        dot[i].style.listStyle = "circle";
        imagesMask[i].style.opacity = "0.4";
    }
    /* 根據目前圖片的索引位置改變原點的樣式 */
    dot[index].style.color = "#FF0";
    dot[index].style.listStyle = "disc";
    /* 消除正中間的圖片遮罩 */
    imagesMask[1].style.opacity = "0";
}
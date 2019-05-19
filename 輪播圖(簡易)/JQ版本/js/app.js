//抓取圖片的ul
const imagesUl=$(".images-ul");

//抓取索引小圓點
const dot=$(".dot-index");
//紀錄圖片的顯示位置
const positionData = [0, -800, -1600];

//目前顯示第幾張圖片
let indexShow = 0;

//最後一張圖片的索引值
const lastIamges = $("img").length-1;

//監聽dot
for(let i=0;i<dot.length;i++){
    $(dot[i]).mouseover(function(){
        indexShow=i;
        imagesChange(indexShow);
    });
}

//上一張圖片
function onPrevious() {
    if (indexShow === 0)
        indexShow = lastIamges;
    else
        indexShow -= 1;
    imagesChange(indexShow);
}

//下一張圖片
function onNext() {
    if (indexShow === lastIamges)
        indexShow = 0;
    else
        indexShow += 1;
    imagesChange(indexShow);
}

//圖片更換
function imagesChange(index) {
    $(imagesUl[0]).animate({marginLeft: positionData[index]+"px"},1000);
}
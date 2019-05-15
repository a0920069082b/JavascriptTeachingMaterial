window.onload = function () {
    console.log("JavaScript");

    const imagesChangeDom = document.querySelectorAll(".imagesChange");
    const changeShowDom = document.querySelectorAll(".changeShowDom");

    for (let i = 0; i < imagesChangeDom.length; i++) {
        imagesChangeDom[i].addEventListener("click", function () {
            const pathName = this.childNodes[0].getAttribute("src"); // 抓取目前點選圖片的檔案路徑
            document.getElementById("mainShow").setAttribute("src", pathName); // 更改主顯示相片的src路徑
        });
    }

    for (let i = 0; i < changeShowDom.length; i++) {
        changeShowDom[i].addEventListener("click", function () {
            const secondaryShow = document.getElementsByClassName("secondaryShow");
            const mainImage = document.getElementById("mainShow");
            for (let j = 0; j < secondaryShow.length; j++) {
                if (mainImage.getAttribute("src") == secondaryShow[j].getAttribute("src")) {
                    if (i == 0) {
                        if (j === 0)
                            mainImage.setAttribute("src", secondaryShow[secondaryShow.length - 1].getAttribute("src"));
                        else
                            mainImage.setAttribute("src", secondaryShow[j - 1].getAttribute("src"));
                    } else {
                        if (j == secondaryShow.length - 1)
                            mainImage.setAttribute("src", secondaryShow[0].getAttribute("src"));
                        else
                            mainImage.setAttribute("src", secondaryShow[j + 1].getAttribute("src"));
                    }
                    break;
                }
            }
        })
    }

}

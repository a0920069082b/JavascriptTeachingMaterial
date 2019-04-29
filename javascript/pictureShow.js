function imagesChange(num) {
    const pathName = document.getElementsByClassName('secondaryShow')[num].getAttribute('src'); /* 抓取目前點選圖片的檔案路徑 */
    document.getElementsByClassName('mainShow')[0].setAttribute('src', pathName); /* 更改主顯示相片的src路徑 */
}

function changeShow(num) {
    //console.log(num);
    const imagesCount = document.getElementsByClassName('secondaryShow').length;
    const mainImage = document.getElementsByClassName('mainShow')[0].getAttribute('src');
    for (let i = 0; i < imagesCount; i++) {
        if (mainImage == document.getElementsByClassName('secondaryShow')[i].getAttribute('src')) {
            if (num == 1) {
                if (i == 0) {
                    document.getElementsByClassName('mainShow')[0].setAttribute('src', document.getElementsByClassName('secondaryShow')[imagesCount - 1].getAttribute('src'));
                } else {
                    document.getElementsByClassName('mainShow')[0].setAttribute('src', document.getElementsByClassName('secondaryShow')[i - 1].getAttribute('src'));
                }
            } else {
                if (i == imagesCount - 1) {
                    document.getElementsByClassName('mainShow')[0].setAttribute('src', document.getElementsByClassName('secondaryShow')[0].getAttribute('src'));
                } else {
                    document.getElementsByClassName('mainShow')[0].setAttribute('src', document.getElementsByClassName('secondaryShow')[i + 1].getAttribute('src'));
                }
            }
        }


    }
}
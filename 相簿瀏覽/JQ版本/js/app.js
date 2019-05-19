
// 獲取所有相簿列表
const items = $('.photo-item');

// 取得主容器
const main = $('#photoMain');

// 當前主容器顯示的照片索引值
let activeIndex = 0;

// 取得相簿列表最大索引值(最後一張索引值)
const maxIndex = items.length - 1;

// 為相簿列表每一個項目建立 click 事件
for (let i = 0; i < items.length; i++) {
    // click 建立 click 事件
    $(items[i]).click(function () { onClickItem(i); });
}

// 設定主容器顯示的照片來源
function changeMain() {
    // 利用當前索引值，取得照片項目中對應的圖片
    // attr 取得元素中指定的屬性，如果有放第二個參數，則代表要設定的值
    const imgSrc = $(items[activeIndex]).attr('src');
    $(main).attr('src', imgSrc);
}

// 當點擊相簿列表的項目時觸發的事件
function onClickItem(index) {
    activeIndex = index;
    changeMain();
}

// 當點擊下一張時觸發的事件
function onNext() {
    // 如果目前已經是最後一張，則歸零索引從頭開始
    if (activeIndex == maxIndex) {
        activeIndex = 0;
    } else {
        activeIndex += 1;
    }
    changeMain();
}

// 當點擊上一張時觸發的事件
function onPrev() {
    // 如果目前已經是第一張，則從最後一張開始
    if (activeIndex == 0) {
        activeIndex = maxIndex;
    } else {
        activeIndex -= 1;
    }
    changeMain();
}
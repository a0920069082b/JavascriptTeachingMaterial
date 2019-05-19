// 抓取所有li元素 
const list = document.querySelectorAll(".menu-list");

for(let i = 0; i< list.length ;i++){

    //綁定滑鼠移過的事件
    list[i].addEventListener("mouseover",function(){
        onListShow(i);
    });

    //綁定滑鼠離開的事件
    list[i].addEventListener("mouseout",function(){
        onListhide(i);
    });
}

function onListShow(index){
    //先判斷該清單是否有子節點，如果有，則顯示子節點
    if(list[index].querySelector("div"))
        list[index].children[0].style.display="table";
}

function onListhide(index){
    //游標離開該清單，就猜子節點隱藏
    list[index].children[0].style.display="none";
}
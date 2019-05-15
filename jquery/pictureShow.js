$(document).ready(function () {
    console.log("JQuery");
    
    $(".imagesChange").click(function () {
        $("#mainShow").attr("src", $(this).children().attr("src"));
    });

    $(".changeShowDom").click(function () {
        const functionNum = $(".changeShowDom").index(this);
        const secondaryShowMaxNum = $(".secondaryShow").length - 1;

        $(".secondaryShow").each(function (index) {
            if ($("#mainShow").attr("src") == $(this).attr("src")) {
                if (functionNum == 0) {
                    if (index == 0)
                        $("#mainShow").attr("src", $(".secondaryShow:eq(" + secondaryShowMaxNum + ")").attr("src"));
                    else
                        $("#mainShow").attr("src", $(".secondaryShow:eq(" + (index - 1) + ")").attr("src"));
                } else {
                    if (index == secondaryShowMaxNum)
                        $("#mainShow").attr("src", $(".secondaryShow:eq(0)").attr("src"));
                    else
                        $("#mainShow").attr("src", $(".secondaryShow:eq(" + (index + 1) + ")").attr("src"));
                }
                return false;
            }
        });
    });

});





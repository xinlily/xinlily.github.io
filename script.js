
//  bar 顯示側邊欄
$(document).ready(function () {

    $("#showcollapse").on("click", function () {

        $("#sidebar").toggleClass("active");
        //$(".bar-btn").hide();
		$(".bar-btn").css("color", "rgba(0,0,0,0)");
		
        // 點擊bar後 bar隱藏
    })
})


//  collapse 關閉側邊欄
$(document).ready(function () {

    $("#collapse").on("click", function () {

        $("#sidebar").toggleClass("active");
        //$(".bar-btn").show();
		 $(".bar-btn").css("color", "white");
		
        // 點擊 collapse 後bar恢復顯示
    })
})
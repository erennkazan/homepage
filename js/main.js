$(".Header-switch").on("click",function(){
    if($("Header").is(".Header-filter")){
        $(".Header").removeClass("Header-filter")
    }else{
        $(".Header").addClass("menu-show")
    }
})
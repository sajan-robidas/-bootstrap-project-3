$(function() {

    $(".nav-button").click(function() {

        $(".nav-button").toggleClass("change");
    });

    /*---navber effect---*/
    $(window).scroll(function() {

        let position = $(this).scrollTop();
        
        if(position >= 145) {

            $(".nav-menu").addClass("custom-navbar");
        }else {
            $(".nav-menu").removeClass("custom-navbar"); 
        }
    });

    /*-----mission-----*/
    $(window).scroll(function() {

        let position = $(this).scrollTop();
        
        if(position >= 547) {
          
            $(".camera-img").addClass("formLeft");
            $(".mission-text").addClass("formRight")
        }else {

            $(".camera-img").removeClass("formLeft");

            $(".mission-text").removeClass("formrRght");
        }
    });
    /*---Gallery---*/
    $(".Gallery-list-item").click(function() {

        let value = $(this).attr("data-filter");

        if(value === "all") {

            $(".filter").show(300);
        }else {
               
            $(".filter").not("." + value).hide(300);
            $(".filter").filter("." + value).show(300);
        }
    });

    /*---pricing animation---*/
    $(window).scroll(function() {

        let position = $(this).scrollTop();

        if(position >= 4300) {

            $(".card-1").addClass("moveFromLeft");
            $(".card-2").addClass("moveFromBottom");
            $(".card-3").addClass("moveFromRight");
        } else {

            $(".card-1").removeClass("moveFromLeft");
            $(".card-2").removeClass("moveFromBottom");
            $(".card-3").removeClass("moveFromRight");

        }

    });
});
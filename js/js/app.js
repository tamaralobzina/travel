
$(document).ready(function() {

    // Start Header colour adjustmnet upon scroll

    $(function () {
        //caches a jQuery object containing the header element
        var header = $("header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 650) {
                header.addClass("active");
            } else {
                header.removeClass('active');
            }
        });
    });

// End Header colour adjustmnet upon scroll

// Start Search Button

    $(function(){

        var search = $('.search');
        var search_page=$('#search-box');


        search.click(function () {

            if ( search.hasClass("remove-search") ) {
                search.removeClass('remove-search');
                search_page.css('display','none');
                $(".search-click").val("");
            } else {
                search.addClass('remove-search');
                search_page.css('display','block');
                $('.search-click').focus();
            }

        });

// End Search Function

// Record the user search input


        $(".search-click").keypress(function(e){
            var key = e.which;
            if(key ==13){
                var userSearch= $(".search-click").val();
                console.log(userSearch);
                var regexp = new RegExp(/^[a-z]+$/gi);
                var match = userSearch.match(regexp);
                console.log(match);
                var matchStr = match.join("");
                console.log(matchStr);


            }
        });
// End of Record the user search input

        // Search Match Function//
// End of Search Match Function//


    })


});







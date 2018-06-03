$(function() {
    //caches a jQuery object containing the header element
    var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 650) {
            header.addClass("active");
        } else{
            header.removeClass('active');
        }
    });
});


// $('.column img').hover(function () {
//     $('.column img').addClass('grayscale');
// });
//
// // $('.column img').toggleClass('grayscale-off');

var contentHolder = [];

$(document).ready(function(){

    $('#search-box').click(function(){
        console.log("hi");
        var text= $('textarea').val();
        var item= new contentItem(text);
        contentHolder.push(item);
        console.log(item);
        showItem();
    })

})

function contentItem(text){
    this.text=text;
    this.showText = function(){
        return this.text;
    }
}

function showItem(){
    var str='';
    contentHolder.forEach(function(item){

        str += item.showText();
        console.log(str);
    });

    $('#list').html(str);

}



var content = [
    {
        id: 1,
        region: 'Eastern Europe',
        country: 'Ukraine',
        city: 'Kiev',
        article: [
            {
                title:'title1',
                text:'text1',
            }
        ],

        photo: [
            'IMG_9313.JPG',
        ]

    },

    {
        id: 2,
        region: 'Eastern Europe',
        country: 'Ukraine',
        city: 'Odessa',
        countryDescription: 'content2',
        photo: 'photoAttachedHere2',

    },

    {
        id: 3,
        region: 'Eastern Europe',
        country: 'Ukraine',
        city: 'Lviv',
        countryDescription: 'content3',
        photo: 'photoAttachedHere3',
    },

    {
        id: 4,
        region: 'Europe',
        country: 'Ukraine',
        city: 'Lviv',
        countryDescription: 'content4',
        photo: 'photoAttachedHere4',
    },

    {
        id: 5,
        region: 'Europe',
        country: 'Czech Republic',
        city: 'Prague',
        countryDescription: 'content5',
        photo: 'photoAttachedHere5',
    },

    {
        id: 6,
        region: 'Central Asia',
        country: 'Turkey',
        city: 'Istanbul',
        countryDescription: 'content6',
        photo: 'photoAttachedHere6',
    },

    {
        id: 7,
        region: 'Central Asia',
        country: 'Georgia',
        city: 'Tbilisi',
        countryDescription: 'content7',
        photo: 'photoAttachedHere7',
    },

    {
        id: 8,
        region: 'Asia',
        country: 'India',
        city: 'New Delhi',
        countryDescription: 'content8',
        photo: 'photoAttachedHere8',
    },

    {
        id: 9,
        region: 'Asia',
        country: 'India',
        city: 'Agra',
        countryDescription: 'content9',
        photo: 'photoAttachedHere9',
    },

    {
        id: 10,
        region: 'Asia',
        country: 'Indonesia',
        city: 'Bali',
        countryDescription: 'content10',
        photo: 'photoAttachedHere10',
    },
];


// Start Search Button
$(function(){
    var search = $('.search');
    var search_page=$('#search-box');
    search.click(function () {
        if ( search.hasClass("remove-search") ) {
            search.removeClass('remove-search');
            search_page.css('display','none');
        } else {
            search.addClass('remove-search');
            search_page.css('display','block');
        }
    });
})
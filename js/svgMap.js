'use strict'
 //Поступил массив кодов посещенных стран
 var codeCountries = ['ua', 'fr', 'en', 'de', 'no'];

 var colorCountry = '#404040'; // Цвет всех стран
 var focusCountry = '#FF9900'; //  Цвет подсветки стран при наведении на объекты из списка
 var selectCountry = '#ff4040'; // Цвет изначально подсвеченных стран - посещенных

 var highlightedCountries = {};

  //Объект с цветом посещенных стран (указанных в массиве codeCountries)
 codeCountries.forEach(function(item) {
     highlightedCountries[item] = selectCountry;
     console.log(highlightedCountries);
 });

 $(document).ready(function() {
     //Свойства карты, оформлены по правилам используемой библиотеки
     $('#vmap').vectorMap({
         map: 'world_en',
         backgroundColor: '#ffffff',
         borderColor: '#ffffff',
         borderWidth: 2,
         color: colorCountry,
         colors: highlightedCountries,
         hoverOpacity: 0.7,
         enableZoom: false,
         showTooltip: true,



         // //  При наведении на посещенную страну отображаем ее название - если нужно выводить где-то в другом месте
         // onLabelShow: function(event, label, code){
         //     $('.country-name').empty();
         //     $('.country-name').append(label.text());
         //
         //     var pos = $(this).offset();
         //     var pageX = event.pageX;
         //     var pageY = event.pageY;
         //     var x = pageX - pos.left + 10;
         //     var y = pageY - pos.top + 10;
         //
         //     $('.country-name').css({"display": "block", "left" : x + "px", "top" : y + "px"});
         // },

         // Клик по стране
         onRegionClick: function(event, code, region){
             alert(region+' - ' +code);
             for(var region in codeCountries){
                 location.replace(location.href + code);
             }
         }
     });

 });
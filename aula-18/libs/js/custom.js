$(function(){
    $('#roteirosesgotados_a').mouseover(function(){
        $('h3 , button').removeClass('finished_a');
        $('h3 , button').addClass('overbook_a');     
    });
});

$(function(){
    $('#roteirosesgotados_c').mouseover(function(){
        $('h3 , button').removeClass('finished_c');
        $('h3 , button').addClass('overbook_c');     
    });
});
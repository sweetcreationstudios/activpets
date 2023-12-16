//<!--    Image Fade Toggle Link-->
//"https://code.jquery.com/jquery-latest.min.js" 

//$('.centerImg').hover(function () {
//
//    $(this).find("img:last").fadeToggle();
//});

//========================

$(function () {
    $('#hoverImg').hover(function () //on over
        {
            $('#hoverImg').attr('src', '../images/apparel/chihuahua-sunglasses-tshirt.png');
        },
        function () //on out
        {
            $('#hoverImg').attr('src', '../images/apparel/chihuahua-sunglasses-crewnecksweater.png');
        })
})

//"http://code.jquery.com/jquery-1.8.2.js"
//YouTube: youtu.be/IAmSMlCUtW4?si=i6Rz2qk03ncQEjUa

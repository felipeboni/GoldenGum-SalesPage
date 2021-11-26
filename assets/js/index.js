$(function() {
    console.log('teste')

    $('.navbar-button').on('click', function() {
        $('#nav').addClass('show')
        $('body').addClass('show')
    })

    $('.nav-link').on('click', function() {
        $('.navbar-collapse').removeClass('show')
        $('body').removeClass('show')
    })

    //prepare Your data array with img urls
    var dataArray=new Array();
    dataArray[0]="assets/img/caroussel/1/1-min.jpg";
    dataArray[1]="assets/img/caroussel/1/2-min.jpg";
    dataArray[2]="assets/img/caroussel/1/3-min.jpg";

    //start with id=0 after 5 seconds
    var thisId=0;

    window.setInterval(function(){
        $('#changeImg').attr('src', dataArray[thisId]);
        thisId++; //increment data array id
        if (thisId==3) thisId=0; //repeat from start
    },3000); 
})
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
    dataArray[0]="assets/img/caroussel/after&before/1.jpg";
    dataArray[1]="assets/img/caroussel/after&before/2.jpg";
    dataArray[2]="assets/img/caroussel/after&before/3.jpg";
    dataArray[3]="assets/img/caroussel/after&before/4.jpg";
    dataArray[4]="assets/img/caroussel/after&before/5.jpg";
    dataArray[5]="assets/img/caroussel/after&before/6.jpg";
    dataArray[6]="assets/img/caroussel/after&before/7.jpg";
    dataArray[7]="assets/img/caroussel/after&before/8.jpg";
    dataArray[8]="assets/img/caroussel/after&before/9.jpg";

    //start with id=0 after 5 seconds
    var thisId=0;

    window.setInterval(function(){
        $('#imgChange').css('background-image', 'url(' + dataArray[thisId] + ')');
        thisId++; //increment data array id
        if (thisId==8) thisId=0; //repeat from start
    },5000); 
})
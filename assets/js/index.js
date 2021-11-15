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
})
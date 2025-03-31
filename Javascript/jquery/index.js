$('button').click(()=>{
    $('h1').css('color', 'purple')
    
})

$(document).keypress((e)=>{
    $('h1').text(e.key)
    
})
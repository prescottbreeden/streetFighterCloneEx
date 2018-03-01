console.log("Power Overwhelming...");
var arena = ["beach", "dojo", "forest", "matrix", "snow", "earth"]
var players = ["donny", "leo", "mikey", "raphael"]

$(document).ready(function(){

    for(var i = 0; i < arena.length; i++){
        $('.menu').append(`<button location="${arena[i]}">${arena[i]}</button>`)
    }

    $('button').on().hover(function(){
        $('.wrapper').css('background-image',`url(img/${$(this).attr("location")}.jpg`); 
    }, function(){
         $('.wrapper').css('background-image','none')
        
    })

    $('button').click(function(){
        $('.menu').html("<h1>Select Players</h1><select id='player1'></select><select id='player2'></select>");
        var playerStr = "";
        for(var i = 0; i < players.length; i++){
            playerStr += `<option value=${players[i]}>${players[i]}</option>`;
        }
        $('#player1').html(playerStr);
        $('#player2').html(playerStr);

        $('.wrapper').append('<img id ="avatar1"src="img/donny.png">')
        $('.wrapper').append('<img id ="avatar2"src="img/donny.png">')
    })

    $('.menu').on('change','#player1',function(){
        $('#avatar1').attr("src", `img/${$(this).val()}.png`);
    })

    $('.menu').on('change','#player2',function(){
        $('#avatar2').attr("src", `img/${$(this).val()}.png`);
    })
})
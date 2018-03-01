var arena = ["beach", "dojo", "forest", "matrix", "snow", "earth"]
var players = ["donny", "leo", "mikey", "raphael"]

function mainMenu(){
    $('body').html(
        `<div class='wrapper'>
            <div class='menu'>
                <h1>Select Arena</h1>
            </div>
        </div>`
    );
    for(var i = 0; i < arena.length; i++){
        $('.menu').append(`<button location="${arena[i]}">${arena[i]}</button>`)
    }
}

$(document).ready(function(){
    mainMenu();
    new Audio('img/themeMusic.mp3').play() 

    $('button').hover(function(){
        $('.wrapper').css('background-image',`url(img/${$(this).attr("location")}.jpg`); 
    }, function(){
         $('.wrapper').css('background-image','none')
    })

    $('button').click(function(){
        $('.menu').html(
            `<h1>Select Players</h1>
            <select id='player1'></select>
            <select id='player2'></select>
            <br>
            <button id='fight'>FIGHT!!</button>
            <button id='return'>Main Menu</button>`);
        var playerStr = "";
        for(var i = 0; i < players.length; i++){
            playerStr += `<option value=${players[i]}>${players[i]}</option>`;
        }
        $('#player1').html(playerStr);
        $('#player2').html(playerStr);

        $('.wrapper').append('<img id="avatar1" src="img/donny.png">') //to do: set init img to blank
        $('.wrapper').append('<img id="avatar2" src="img/donny.png">') //to do: set init img to blank
    })

    $('.menu').on('change','#player1',function(){
        $('#avatar1').attr("src", `img/${$(this).val()}.png`);
    })

    $('.menu').on('change','#player2',function(){
        $('#avatar2').attr("src", `img/${$(this).val()}.png`);
    })

    $('.menu').on('click','#fight',function(){
        alert('Insert More j$ To Continue...');
    })

    $('.menu').on('click','#return',function(){
        location.reload();
    })
})
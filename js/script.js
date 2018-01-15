
$( document ).ready(function() {
    console.log( "ready!" );

var a = $("#pscore").html()
var b = $("#cscore").html()


$("#play").click(function(){
	$("#cscore").html(y-y)
	$("#pscore").html(x-x)	
	$(".playerButton").prop('disabled',false)	
	$("#play").html("Restart Game")
})	






$(".playerButton").click(function(){
		var src = ""
		switch($(this).html()){
			case "scissors":
			src = "img/scissors.png"
			break
			case "rock":
			src = "img/rock.png"
			break
			case "paper":
			src = "img/paper.png"
		}
		$("#playerpick").attr("src", src)

		var num = (Math.floor(Math.random() * 2))
		if (num == 0) {
			$("#comppick").attr("src", "img/scissors.png")
		} else if (num==1) {
			$("#comppick").attr("src", "img/rock.png")
		} else {
			$("#comppick").attr("src", "img/paper.png")
		}

		var playerwins = "You win!"
		var compwins = "Comp wins!"
		var draw = "It's a draw!"
		var userPick = $("#playerpick").attr("src")
		var compPick = $("#comppick").attr("src")
		//x = parseInt($("#pscore").html())
		//y = parseInt($("#cscore").html())
		x = parseInt($("#pscore").html())
		y = parseInt($("#cscore").html())
		

		if (compPick == "img/scissors.png" && userPick == "img/scissors.png" ) {
			$("#result").html(draw)
		} else if (compPick == "img/paper.png" && userPick == "img/paper.png" ) {
			$("#result").html(draw)
		} else if (compPick == "img/rock.png" && userPick == "img/rock.png" ) {
			$("#result").html(draw)
		} else if (compPick == "img/rock.png" && userPick == "img/scissors.png" ) {
			$("#result").html(compwins)
			$("#cscore").html(y+=1)
		} else if (compPick == "img/scissors.png" && userPick == "img/paper.png" ) {
			$("#result").html(compwins)
			$("#cscore").html(y+=1)
		} else if (compPick == "img/paper.png" && userPick == "img/rock.png" ) {
			$("#result").html(compwins)
			$("#cscore").html(y+=1)
		} else if (compPick == "img/paper.png" && userPick == "img/scissors.png" ) {
			$("#result").html(playerwins)
			$("#pscore").html(x+=1)
		} else if (compPick == "img/rock.png" && userPick == "img/paper.png" ) {
			$("#result").html(playerwins)
			$("#pscore").html(x+=1)
		} else if (compPick == "img/scissors.png" && userPick == "img/rock.png" ) {
			$("#result").html(playerwins)
			$("#pscore").html(x+=1)
		}	

		if ($("#pscore").html() == 10 || $("#cscore").html() == 10) {
			$("#play").html("Play Again")	
			$(".playerButton").prop('disabled',true)	
		} else {
			$("#play").html("Restart Game")
		}

	})

});

	
function exercise1 (event) {

	function typeMessage ( message, velocity ) {
    	var container = document.getElementById ( "demo" ) ?
      	  document.getElementById ( "demo" ) :
      	  document.querySelector(".result1").appendChild (
       	    document.createElement ( "h3" )
        )
    	container.style = `color: magenta;`
   		var text = message.split("").forEach (function (letter, velocity) {
			setTimeout ( 
				() => {container.innerText += letter} 
			,1000 * velocity)
		})
	}

	typeMessage ( `Welcome to the hell`, 1 )

}





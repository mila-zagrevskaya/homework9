function exercise2 (event) {

    var typeMessage = ( function ( velocity ) {
        let container = document.getElementById ( "demo" ) ?
            document.getElementById ( "demo" ) :
            document.body.appendChild (
                document.createElement ( "h3" )
            )
        container.style = `color: magenta;`
        var index = 0
        return function ( message ) {
            typeof message == !String ? null : 
                index < message.length ? 
                    container.innerText += message.charAt(index) : null
        }
            
      })( 1 )

typeMessage ( `Welcome to the hell` )

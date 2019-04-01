function exercise3 (event) {

  	let changeClass = ( classname, styleString ) => ( 
   		...

		).length > 0 ? console.log ( "found" ) : 
    		document.head.appendChild ( 
    			document.createElement ( "style" )
    				).textContent = `.${classname} {${styleString}}`


    changeClass ( "second-level-menu", "background: red!important;" )
  
}

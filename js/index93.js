function exercise3 (event) {

  	let changeClass = ( classname, styleString ) =>  
    	Array.from(document.styleSheets).filter(
    		sheet => !sheet.href
  		).forEach(
    		sheet => Array.from(sheet.cssRules)
        		.filter( rule => rule.selectorText === classname
        		).forEach(
          			rule => rule.style[styleString.split(':')[0]] =  
          				styleString.split(':')[1]
        )
  	)
	changeClass ( ".top", "background: red" )

}

	current = new Date()
	d = current.getDate()
	m = Number(current.getMonth()) + 1
	y = Number(current.getYear())-100
	datey = m+"/"+d+"/"+y
	
	bCurrent = new Date(datey)
	
	function showWU(){
		
		warmUps = document.getElementsByClassName("wu")
		var i, j
		for(i =0; i<warmUps.length; i++){
			 
			 
			wuDate = new Date(warmUps[i].id)
				if (wuDate >= current){
					warmUps[i].style.display='none';
					j=i
				} 
				if (wuDate < bCurrent) {
					warmUps[i].style.opacity = .6
				}
		}
			
	}
	
	function reveal(d){
		document.getElementById(d).style.visibility='visible';
	}
	function hide(d){
		document.getElementById(d).style.visibility='hidden';
	}

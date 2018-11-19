



function CreateNumber() {
	//Create Number 1 to 75
    var x = Math.floor((Math.random() * 75) + 1);
	return x;
	
}
function CalledNumber() {
	var result = [];
	
	var usedNumber=[];
	for(i=0;i<5;i++){
		
	var crtNbr =CreateNumber();	
    var check=usedNumber.includes(crtNbr);
	// I checked to avoid being duplicated
	 if(check==false){
			result.push(crtNbr);
			usedNumber.push(crtNbr);
		}else{
			i--;
		}
      	  
	
	}
	return result;
}


function CreateBoard(){
	var matrix = [];
	var usedNumbers=[];
    //matrix 5*5
	for(var i=0; i<5; i++) {
      matrix[i] = [];
    
	  for(var j=0; j<5; j++) {
		var a=CreateNumber();
		
		var checkNum=usedNumbers.includes(a);
		
		if(checkNum==false){
			 matrix[i][j] = a;
			 usedNumbers.push(a);
			
			
		}else{
			j--;
		}
     
	   
	   
    }
	
	
}
       if(matrix[2][2]!=null){
		   matrix[2][2]="free";
	   }
     return matrix;
}
//Conditions for winnig

//Diagonal Check from left to right Diagonal
function DiagonalWin(myboard,mycall){
	

	
	var board=[];
	board=myboard;
	var calledDiag=mycall;
	var myResult=[];
	var diag=[];
	for(i=0;i<board.length;i++){
		diag.push(board[i][i]);
	
	}
	for(i=0;i<5;i++){
		for(j=0;j<5;j++){
			if(calledDiag[j]==diag[i]){
				myResult.push(calledDiag[j]);
			}
		}
	}
	//Only 4 matches in Diagonal situations because Matrix[2][2]=free
	if(myResult.length>=4){

		return 1;
	}
	return 0;
}

//Diagonal Check from right to left Diagonal
function DiagonalWin2(myboard,mycall){
	
	
	var board=[];
	board=myboard;
	var calledDiag=mycall;
	var diag2=[];
	var myResult=[];
	j=0;
	for(i=4;i<5&&i>=0;i--){
		
		diag2.push(board[j][i]);
		j=j+1;
	}
	
	
	for(i=0;i<5;i++){
		for(j=0;j<5;j++){
			if(calledDiag[j]==diag2[i]){
				myResult.push(calledDiag[j]);
			}
		}
	}
	//Only 4 matches in Diagonal situations because Matrix[2][2]=free
	if(myResult.length>=4){

		return 1;
	}
	return 0;
}


//Row Check
function RowWin(myboard,mycall){
	
		var board=[];
	    board=myboard;
		var called=mycall;
		var result2=[];	
		var brd2=board[2];
		
		  for(i=0;i<5;i++){
			for(j=0;j<5;j++){
							
			if(called[i]== board[i][j])
			{
				result2.push(called[i]);
                if(result2.length>4 && i!=2)
				{
					return 1;
				}
				else if(result2.length==4 && i==2)
				{
					return 1;
				}else
				{
					result2=[];
				}
			
		   }
		}}
		 
		 var count=0;
		 for (r=0;r<5;r++){
			 for(f=0;f<5;f++){
				 if(result2[r]==brd2[f])
				 {
					 count++;
				 }
			 }
		 }
		 if(count>=4)
		 {
			 result2.push("free");
		 }
		 
		if(result2.length==5){
			return 1;
			
		}
		
		return 0;    
}


//Column Check
function ColWin(myboard,mycall){
	
	var called2=mycall;
	
	var board2=myboard;
	var cols= [];
	var result=[];
	var j=0;
	for(i=0;i<5;i++){
		  cols.push(board2[i][j]);
		  
		  if(i==4 && j<4){
	          j++;
			  i+=-5;  
		  }
	}
	for(k=0;k<5;k++){
		for(m=0;m<5;m++){
			
			if(cols[k]==called2[m]){
				result.push(cols[k]);
			}
			
		
		}
		
		//In third column we have 1 free space
		if((result[0,1,2,3] in cols.slice(10,15) && !result.includes("free") )){
				result.push("free");
		}
		if((result[0,1,2,3] in cols.slice(10,15) )){
				return 1;
		}
		if(result.length==5){
			return 1;
	}
	
     }

	
	
	return 0;     
}

//Play Function
function Run(){
	
	//var myboard=CreateBoard();
	var mycall=[];
	mycall=CalledNumber();
	
	
	var situation="Loser ";
	
	do{
		
	var myboard=CreateBoard();
	//functions returns 1 if it wins otherwise 0
	var result1=DiagonalWin(myboard,mycall);
	var result2=DiagonalWin2(myboard,mycall);
	var result3=RowWin(myboard,mycall);
	var result4=ColWin(myboard,mycall);
	var total=result1 + result2 + result3 + result4;
	}
	while(total<1)
	if(total>=1)
	{
		situation="Winner ";
	}
	return situation + " : { " + myboard + " }" + mycall  ; 		
	
}


console.log(Run());






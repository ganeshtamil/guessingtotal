/*var row1,row2,row4 = [] ; // Rows which gets inputs from user 

row1 = userInput(row1) ;   // calling the function userInput


function userInput(row){

     var row = [] ;
     n = 5 ;

     for(var i=1; i<=n; i++){
          row.push(prompt("Enter the " + i + "number")) ;
     }

     return row ;

     }

// calculating Row of Total

var rowResult = [] ;

var resultLast = row1[row1.length-1] - 2 ;

 rowResult.push( 2, row1[0] , row1[1] , row1[2] , row1[3] , resultLast ) ;

// Get the values of 2nd row from user

row2 = userInput(row2) ;  // calling userInput function

// 3rd Row

 var row3 = [] ;

 row3.push( 9 - row2[0] , 9 - row2[1] , 9 - row2[2] , 9 - row2[3] , 9 - row2[4] ) ;


//4th Row
row4 = userInput(row4) ;

//5th Row

var row5 = [] ;

row5.push( 9-row4[0] , 9-row4[1] , 9-row4[2]  ,9-row4[3] , 9-row4[4] ) ;

*/


var row1,row2,row4 = [] ;


function userInput(row){

     var row = [] ;
     n = 5 ;

     for(var i=1; i<=n; i++){
          row.push(prompt("Enter the " + i + "number")) ;
     }

     return row ;

     }

// Row-1

document.querySelectorAll(".btn")[0].addEventListener("click", step1);

function step1(){

     
     row1 = userInput(row1) ;
     document.querySelectorAll(".btn")[0].innerHTML = row1 ;

}

// Total value

document.querySelectorAll(".btn")[5].addEventListener("click", step2);

function step2(){
     var rowResult = [] ;

     var resultLast = row1[row1.length-1] - 2 ;

     rowResult.push( 2, row1[0] , row1[1] , row1[2] , row1[3] , resultLast ) ;

     document.querySelectorAll(".btn")[5].innerHTML = rowResult ;
}

// Row-2 value

document.querySelectorAll(".btn")[1].addEventListener("click", step3);

function step3(){

    

     row2 = userInput(row2) ;

     document.querySelectorAll(".btn")[1].innerHTML = row2 ;

}

//Row-3 value

document.querySelectorAll(".btn")[2].addEventListener("click", step4);

function step4(){

     var row3 = [] ;

     row3.push( 9 - row2[0] , 9 - row2[1] , 9 - row2[2] , 9 - row2[3] , 9 - row2[4] ) ;

     document.querySelectorAll(".btn")[2].innerHTML = row3 ;

}

//Row-4 value

document.querySelectorAll(".btn")[3].addEventListener("click", step5);

function step5(){

    

     row4 = userInput(row4) ;

     document.querySelectorAll(".btn")[3].innerHTML = row4 ;

}

//Row-5 value

document.querySelectorAll(".btn")[4].addEventListener("click", step6);

function step6(){

     var row5 = [] ;

     row5.push( 9-row4[0] , 9-row4[1] , 9-row4[2]  ,9-row4[3] , 9-row4[4] ) ;

     document.querySelectorAll(".btn")[4].innerHTML = row5 ;

}

function up(){
     window.scrollTo({
          top:0,
          bahavier:"smooth"
     });
}







 


 
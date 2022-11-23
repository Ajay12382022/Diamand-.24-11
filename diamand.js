let star=""
let n=5
for(i=0;i<=5;i++) 
{
    star="";
 for(j =5;j>i;j--){
    star +=" ";
 }
    for(k=0; k<= i; k++) {
        star +="*";
    }
    for (l=1; l<= i; l++) {
        star +="*";
    }
      console.log(star);
    }



    
   
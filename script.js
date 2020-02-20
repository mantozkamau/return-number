function myFunction(){
    var str=prompt("Enter the word");
    var word=str.slice(0,str.length -1);
    var st=parseInt(str.charAt(str.length -1));
    if(isNaN(st)){return str +1  
    
    }
    
    else {
      return  word+(st+1);
    }
    
    };
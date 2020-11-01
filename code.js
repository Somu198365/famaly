var images = [
    "https://images-na.ssl-images-amazon.com/images/I/515BniafrYL._SX258_BO1,204,203,200_.jpg",
 "pagl.jpg",
 "mum mum.jpg",
 "me.jpg",
 "padu.jpg",
 "thami.jpg",
 "famaly.jpg",
  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 7)
       {
         i=0;
       }
    
      document.getElementById("album").src = images[i];
    i++;
   
  }
 

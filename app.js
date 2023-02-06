let top = 1;  // first task
while (top <= 150){
    console.log(top + "Hello world!");
    top ++;
}



for (let u = 2; u < 20; u++) // second task
{
       if (u % 2 == 0)
       {
            console.log(u);
       }
}



function lol (x){   // third task
    if(x>0)
    {
      console.log("Hello");
    }  else
    {
      console.log("olleH");
    }
  }
  lol(-1);



  const fs = require('fs')   // fourth task
 
function pop(a,b){
  let i =a*b
  let text = fs.readFileSync('txt.txt','utf8') 
  fs.writeFileSync('txt.txt',text+"Answer "+i)
}

pop(4,3)
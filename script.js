let msg=['Hello there',"I am Sasi","Designer,coder,Developer","Get started"]
const data=document.getElementById("msg");
data.innerHTML=msg[0]
let len=msg.length-1;
var i=1;
this.setInterval(()=> {
  if(i===len)
    i=0;
  i++;
  data.innerHTML=msg[i];
},500)

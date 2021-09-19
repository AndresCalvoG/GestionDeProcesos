function Funcion() {
  var i;
  var months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Octr","Nov","Dic"];
  var Days = ["dom2","lun","mar","mie","jue","vie","sab","dom"];

  var FechaI = document.getElementById("FI");
  var FechaF = document.getElementById("FF");
  var di = new Date(FechaI.value);
  var df = new Date(FechaF.value);
  var dif = df.getDate()-di.getDate();
  var cyc = dif+1;

  var Day = di.getDay();
  var sum= di.getDate()+1;
  if(Day==6){Day=-1; cyc=dif;}

   for(i=Day+1;i<=cyc;i++)
   {
   document.getElementById(Days[i]).innerHTML = sum+" / "+months[di.getMonth()]+" / "+di.getFullYear() ;
   sum++;
   }
   
}
  



let count = 0;
let prev=0;
function increment() {
  count = count + 1;

  // console.log(count);
  document.getElementById("count").textContent = count;

}


function decrement()
{
  count=count-1;
  document.getElementById("count").textContent = count;

}
function saveit() {
  alert("your increment is save upto " + count);

}  

function store() {


  // let store=count;
  let countel = document.getElementById("entryit");
  let totalel=document.getElementById("total");
  let PE = count + " - ";

  countel.textContent = countel.textContent + PE;   // use TextContentalternative(better) of innerText

   totalel.textContent=prev+count;
   prev=count+prev;

  count=0;
  document.getElementById("count").textContent = count;

}

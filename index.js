// document.getElementById("count").innerText=5;
// let myage=20;
// let humandagratio=7;

// let mydog=myage*humandagratio;
// console.log(mydog);
let count = 0;

function increment() {
  count = count + 1;

  // console.log(count);
  document.getElementById("count").innerText = count;

}



function saveit() {
  alert("your increment is save upto " + count);

}
function store()
{

  
  // let store=count;
  let PE= count+ " --> " ;
  document.getElementById("entryit").innerText=document.getElementById("entryit").innerText+PE;
}

//   let count2=0;

//   function countdown()
//   {
//     if(count2<10)
//     {
//         count2=count2+1;
//     }
//     if(count2==10)
//     {
//         //document.write;
//         alert("NOT GREATER THAN 10");

//     }

// document.getElementById("count").innerText=count2;
//   }

//   countdown();
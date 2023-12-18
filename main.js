
// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

const counter = document.querySelector(".counter");
const result = document.getElementById('num1');

let num1 = 0;


function addition() {
    num1 += 1 ;
    updateCounter();
  }

function deletion() {
    if(num1 > 0){
      num1 -= 1;
    }
    updateCounter();
  }

  function reset() {
    num1 = 0;
    updateCounter();
  }
  
  function updateCounter() {
    result.innerText = num1;
  }


  
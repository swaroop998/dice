//Тоглогчийн ээлжийг хадгалах хувьсагч
//Нэгдүгээр тоглогч 0 хоёрдугаар тоглгч 1
var activePlayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байагаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаар буусныг хадгалах хувьсагч, 1-6 гэсэн утгаыг санамсаргүйгээр үүсгэж өгнө
var dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

//Програм эхлэх
document.getElementById("score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Шоог шидэх эвент листэнэр
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 доторх санамсаргүй тоог  гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  //Зураг солих
  diceDom.src = "dice-" + diceNumber + ".png";

  //Тоглогчийн ээлжийн оноог өөрчлөх
  if (diceNumber !== 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    document.getElementById("current-" + activePlayer).textContent = "0";
    roundScore = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";
  }
});

//

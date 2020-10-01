//Тоглогчийн ээлжийг хадгалах хувьсагч
//Нэгдүгээр тоглогч 0 хоёрдугаар тоглгч 1
var activePlayer = 1;

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
window.document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
});

let display = "";
document.getElementById("btn-1").addEventListener("click", () => {
  display += document.getElementById("btn-1").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-2").addEventListener("click", () => {
  display += document.getElementById("btn-2").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-3").addEventListener("click", () => {
  display += document.getElementById("btn-3").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-4").addEventListener("click", () => {
  display += document.getElementById("btn-4").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-5").addEventListener("click", () => {
  display += document.getElementById("btn-5").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-6").addEventListener("click", () => {
  display += document.getElementById("btn-6").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-7").addEventListener("click", () => {
  display += document.getElementById("btn-7").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-8").addEventListener("click", () => {
  display += document.getElementById("btn-8").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-9").addEventListener("click", () => {
  display += document.getElementById("btn-9").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-0").addEventListener("click", () => {
  display += document.getElementById("btn-0").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-add").addEventListener("click", () => {
  display += document.getElementById("btn-add").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-Ac").addEventListener("click", () => {
  display = "";
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-minus").addEventListener("click", () => {
  display += document.getElementById("btn-minus").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-multi").addEventListener("click", () => {
  display += document.getElementById("btn-multi").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-divide").addEventListener("click", () => {
  display += document.getElementById("btn-divide").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-delete").addEventListener("click", () => {
  display = display.slice(0, display.length - 1);
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-.").addEventListener("click", () => {
  display += document.getElementById("btn-.").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-open").addEventListener("click", () => {
  display += document.getElementById("btn-(").value;
  document.getElementById("my-display").innerHTML = display;
});
document.getElementById("btn-close").addEventListener("click", () => {
  display += document.getElementById("btn-)").value;
  document.getElementById("my-display").innerHTML = display;
});
let calculate = () => {
  let result = eval(display);
  display = String(result);
  document.getElementById("my-display").innerHTML = display;
};
document.getElementById("btn-equal").addEventListener("click", () => {
  calculate();
});

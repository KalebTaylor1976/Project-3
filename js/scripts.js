const app = document.getElementById("app");
const input = document.getElementById("input");
const button = document.getElementById("button");
button.addEventListener("click", function() {
  let num = input.value;
  let list = [];
  for (let i = 0; i <= num; i++) {
    if (i.toString().includes("3")) {
      list.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      list.push("Boop!");
    } else if (i.toString().includes("1")) {
      list.push("Beep!");
    } else {
      list.push(i);
    }
  }
  app.innerHTML = list.join(", ");
});
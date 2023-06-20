var countElement = document.getElementById("count");
var count = 0;

function decreaseCount() {
  count--;
  countElement.textContent = count;
}

function resetCount() {
  count = 0;
  countElement.textContent = count;
}

function increaseCount() {
  count++;
  countElement.textContent = count;
}
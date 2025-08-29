//                  1.. Heart Icon Section :

const heartCountElement = document.getElementById("heart-count");
let heartCount = 0;
const heartBtns = document.querySelectorAll(".heart-btn");
for (let btn of heartBtns) {
  btn.addEventListener("click", function () {
    heartCount++;
    heartCountElement.innerText = heartCount;
    btn.classList.add("fa-solid", "text-red-500");
  });
}

//            2.. Call Button Section Start Here :

const coinCountEl = document.getElementById("coin-count");
let coinCount = 100;
const historyList = document.getElementById("history-list");
const callBtns = document.querySelectorAll(".call-btn");
for (let btn of callBtns) {
  btn.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে.!");
      return;
    }

    const card = btn.closest("div[data-service-name]");
    const serviceName = card.getAttribute("data-service-name");
    const serviceNumber = card.getAttribute("data-service-number");

    alert("📞" + serviceName + " " + serviceNumber);

    coinCount -= 20;
    coinCountEl.innerText = coinCount;

    // Call History Add and Exact Time

    const li = document.createElement("li");
    li.textContent = serviceName + " — " + serviceNumber;
    historyList.appendChild(li);

    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const time = now.toLocaleTimeString([], options);

    li.textContent = serviceName + " — " + serviceNumber + " (" + time + ")";
    historyList.appendChild(li);
  });
}

//                      3.. Clear HIstory :

document.getElementById("clear-history").addEventListener("click", function () {
  historyList.innerHTML = "";
});

//             4.. Challenges Part Start Here :

const copyCountEl = document.getElementById("copy-count");
let copyCount = 0;
const copyBtns = document.querySelectorAll(".copy-btn");

for (btn of copyBtns) {
  btn.addEventListener("click", function () {
    const card = btn.closest("div[data-service-name]");
    const serviceNumber = card.getAttribute("data-service-number");

    navigator.clipboard.writeText(serviceNumber);
    alert("নম্বর কপি হইছে :" + "  " + serviceNumber);

    copyCount++;
    copyCountEl.innerText = copyCount;
  });
}

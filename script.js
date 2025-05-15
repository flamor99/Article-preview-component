const shareButton = document.getElementById("shareBtn");
const shareLink = document.getElementById("pop-up");

shareButton.addEventListener("click", function (e) {
  shareLink.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!shareButton.contains(e.target) && !shareLink.contains(e.target)) {
    shareLink.classList.add("hidden");
  }
});

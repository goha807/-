<script>
function getPlayer() {
  return JSON.parse(localStorage.getItem("player"));
}

function savePlayer(p) {
  localStorage.setItem("player", JSON.stringify(p));
}

function checkPlayer() {
  if (!localStorage.getItem("player")) {
    location.href = "register.html";
  }
}
</script>

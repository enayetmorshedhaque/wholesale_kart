$(document).ready(function () {
  $("#logoutOption").css("display", "block");
  $("#logoutOption").click(function (e) {
    logout();
    // e.preventDefault();
  });
});

// Logout Function
function logout() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var documentLocation = "'" + $(location).attr("pathname") + "'";
    console.log(documentLocation);
  };
  xhr.open("GET", "./assets/db/logout.php", true);
  xhr.send();
}

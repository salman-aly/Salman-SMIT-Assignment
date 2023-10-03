function getValue() {
  var name = document.getElementById("uname").value;
  var password = document.getElementById("pswd").value;

  document.writeln(
    "your name is : " + name + "<br/>" + "your password is : " + password
  );
}

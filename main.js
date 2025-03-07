function submitForm() {
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  if (name && number) {
      document.getElementById("form").style.display = "none";
      document.getElementById("video-page").style.display = "block";
  } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
  }
}
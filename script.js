const isPallindrome = (str) => {
  var str = document.querySelector("input").value;
  var str1 = str.split("").reverse().join("");
  var x = document.getElementById("xyz");
  if (str == "") {
    x.innerText = "Please enter text";
  } else if (str === str1) {
    x.innerText = "True";
  } else {
    x.innerText = "False";
  }
};

isPallindrome();

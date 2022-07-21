console.log("To infinity and beyond.");

// write your JavaScript here
var post = document.getElementById("post");
post.addEventListener("click", function () {
  var commentBoxValue = document.getElementById("comment-box").value;

  var li = document.createElement("li");
  var text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);
});

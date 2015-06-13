load ("Stack.js");

function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  var rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  }
  else {
    return false;
  }
}

var word = "hello";
if (isPalindrome(word)) {
  print(word + " is a palindrome.");
}
else {
  print(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
  print(word + " is a palindrome.");
}
else {
  print(word + " is not a palindrome.");
}

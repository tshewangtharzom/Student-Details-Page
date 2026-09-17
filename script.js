/**
 * Merges two strings by alternating their characters.
 * Remaining characters of the longer string are appended at the end.
 *
 * mergeAlternately("abc", "pqrst") -> "apbqcrst"
 */
function mergeAlternately(str1, str2) {
  let result = "";
  const maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) {
      result += str1[i];
    }
    if (i < str2.length) {
      result += str2[i];
    }
  }
  return result;
}

function handleMerge() {
  const str1 = document.getElementById("str1").value;
  const str2 = document.getElementById("str2").value;
  const output = document.getElementById("output");

  if (str1 === "" && str2 === "") {
    output.textContent = "Please enter at least one string.";
    output.classList.add("empty");
    return;
  }

  output.textContent = mergeAlternately(str1, str2);
  output.classList.remove("empty");
}

function handleClear() {
  document.getElementById("str1").value = "";
  document.getElementById("str2").value = "";

  const output = document.getElementById("output");
  output.textContent = "Result will appear here";
  output.classList.add("empty");
}

document.getElementById("mergeBtn").addEventListener("click", handleMerge);
document.getElementById("clearBtn").addEventListener("click", handleClear);

// Allow pressing Enter inside either input to merge
document.querySelectorAll('input[type="text"]').forEach(function (input) {
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleMerge();
    }
  });
});

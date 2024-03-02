const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const secondResult = document.getElementById("result-1")

function check(val) {
    const inputValue = input.value;
    if (inputValue !== "@gmail.com" && inputValue !== "@email.com") {
        input.style = "border:1px groove hsl(354, 100%, 66%)";
        result.style = "display:block"
        secondResult.style = "display:none"
    } else {
        result.style = "display:none";
        secondResult.style = "display:block";
        input.style = "border: 1px groove hsl(0, 0%, 59%)";
    }
}
submitBtn.addEventListener("click", check);
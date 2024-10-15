let clickCount = 0;
const countBtn = document.querySelector("button")
countBtn.addEventListener("click", (event) => {
    clickCount++;
    document.body.querySelector("h1").textContent = `Hello World was said ${clickCount} times`
})

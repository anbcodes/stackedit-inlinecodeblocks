GLOBALREPLACE = true
document.getElementsByClassName('hidden-rendering-container')[1].addEventListener("DOMSubtreeModified", (e) => {
setTimeout(() => {GLOBALREPLACE = true}, 50)
if (GLOBALREPLACE) {
    console.log(e.target.innerHTML)
	e.target.innerHTML = e.target.innerHTML.replace(/(<code>)(.*?)(<\/code>)(.*?)(!)/g, (s, p1, p2, p3, p4) => `<code class="prism language-${p4}">${p2}</code>`)
    console.log("AFTER")
    console.log(e.target.innerHTML)
}
GLOBALREPLACE = false
})
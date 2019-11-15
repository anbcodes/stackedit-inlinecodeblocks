GLOBALREPLACE = true
document.getElementsByClassName('preview__inner-2')[0].addEventListener("DOMSubtreeModified", (e) => {
    setTimeout(() => {GLOBALREPLACE = true}, 20)
    if (GLOBALREPLACE) {
        GLOBALREPLACE = false
        console.log(new Date().toISOString())
        console.log("BEFORE")
        console.log(e.target.innerHTML)
        e.target.innerHTML = e.target.innerHTML.replace(/(<code>)(.*)(<\/code>)(.*)(!)/g, (s, p1, p2, p3, p4) => `<code class="prism language-${p4}">${p2}</code>`)
        console.log("AFTER")
        console.log(e.target.innerHTML)
    }
})
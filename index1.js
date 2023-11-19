const hideRemaining = (listElement) => {
    const toBeHidden = ["ul1", "ul2", "ul3", "ul4"].filter(a => a !== listElement)
    toBeHidden.map(a => document.getElementById(a).classList.add("hideUL"))
}

const toggleUL1 = () => {
    const a = document.getElementById('ul1')
    a.classList.toggle("hideUL")
    hideRemaining("ul1")
    getElementById('ul1').style.backgroundColor = "black";
}
const toggleUL2 = () => {
    const a = document.getElementById('ul2')
    a.classList.toggle("hideUL")
    hideRemaining("ul2")
}
const toggleUL3 = () => {
    const a = document.getElementById('ul3')
    a.classList.toggle("hideUL")
    hideRemaining("ul3")
}
const toggleUL4 = () => {
    const a = document.getElementById('ul4')
    a.classList.toggle("hideUL")
    hideRemaining("ul4")
}
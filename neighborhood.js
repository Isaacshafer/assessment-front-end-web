let randomBtn = document.querySelector('.rando')
let arrLinks = document.querySelectorAll('.food')
console.log(arrLinks)
let randomizer = () => {
    let randomLink = Math.floor(Math.random() * arrLinks.length)
    alert(arrLinks[randomLink])

}
randomBtn.addEventListener('click', randomizer)
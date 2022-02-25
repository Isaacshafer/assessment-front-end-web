console.log('test')
let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

let colorFunc = () => {
    alert('My favorite color is blue')
}
let placeFunc = () => {
    alert("My favorite place is Big Island Hawai'i")
}
let ritualFunc = () => {alert('My favorite ritual is getting home and watching basketball every night')}
colorBtn.addEventListener('click', colorFunc)
placeBtn.addEventListener('click', placeFunc)
ritualBtn.addEventListener('click', ritualFunc)
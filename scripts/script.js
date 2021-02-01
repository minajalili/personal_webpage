const navLink = document.querySelectorAll('.main-nav__items a')
const home = document.querySelector('body #home')

navLink.forEach(item=>{
    item.addEventListener('click',()=>{activeClass(item)})
    
})

const activeClass =(item)=>{
    navLink.forEach(item1=>{
        if(item1.classList=='active'){
            item1.classList.remove('active')
        }
    })
    item.classList.add('active')
}
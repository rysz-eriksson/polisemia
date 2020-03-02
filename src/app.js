import { magNum } from './articles'

// crating side-nav with all the magazine numbers and expandable list of all articles withinh the number

// rendring all the numbers from an array

magNum.forEach((edition) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `${edition.name} &#9662;</a>`
    document.querySelector('.side-menu').appendChild(listItem)
    listItem.setAttribute('class', 'expand')

    const submenu = document.createElement('ul')
    listItem.appendChild(submenu)
    submenu.setAttribute('class', 'submenu')

    // loading articles under each edition
    edition.articles.forEach((article) => {
        const articleItem = document.createElement('li')
        articleItem.innerHTML = `<a href="${article.url}">${article.author}, ${article.title}</a>`
        submenu.appendChild(articleItem)
    })
})

// expanding submenu with artciles

document.querySelectorAll('.expand').forEach((item) => {
    item.addEventListener('click', () => {
        let childEl = event.toElement.firstElementChild
        childEl.classList.toggle('show')
    })
})






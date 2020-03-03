import { magNum } from './articles'

// crating side-nav with all the magazine numbers and expandable list of all articles withinh the number

// rendring all the numbers from an array

magNum.forEach((edition) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<div class="expand"><span>${edition.name}</span><img src="images/keyboard_arrow_down-24px.svg"></div>`
    document.querySelector('.side-menu').appendChild(listItem)

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
        event.preventDefault()
        let toggleEl = event.toElement.nextElementSibling
        toggleEl.classList.toggle('show')
        let arrowEl = event.toElement.lastElementChild
        if (arrowEl.getAttribute('src') === 'images/keyboard_arrow_down-24px.svg') {
            arrowEl.setAttribute('src', 'images/keyboard_arrow_up-24px.svg')
        } else {
            arrowEl.setAttribute('src', 'images/keyboard_arrow_down-24px.svg')
        }
    })
})

// search for articles 

document.querySelector('#search-art').addEventListener('input', () => {
    let searchText = event.target.value.toLowerCase()
    let searchArray = []
    magNum.filter((item) => {
        if (item.name.toLowerCase().includes(searchText)) {
            searchArray.push({
                title: item.name,
                url: item.url
            })
        }
    })
    magNum.forEach((item) => {
        item.articles.filter((article) => {
            if (article.title.toLowerCase().includes(searchText) || article.author.toLowerCase().includes(searchText)) {
                searchArray.push({
                    title: article.title,
                    author: article.author,
                    url: article.url
                })
            }
        })
    })
    document.querySelector('#search-result').innerHTML = ''
    if (searchArray.length > 0) {
    searchArray.forEach((item) => {
        const resultEl = document.createElement('p')
        resultEl.innerHTML = !item.author ? `<a href="${item.url}" target="_blank">${item.title}</a>` : `<a href="${item.url}" target="_blank">${item.author}, ${item.title}</a>`
        console.log(resultEl)
        document.querySelector('#search-result').appendChild(resultEl)
        })
    } else {
        document.querySelector('#search-result').innerHTML = ''
    }
})






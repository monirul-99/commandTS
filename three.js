const commentJson = async() => {
    const urlLink = `https://jsonplaceholder.typicode.com/comments`
    const res = await fetch(urlLink);
    const data = await res.json();
    displayShow(data)
}

const displayShow = (data) => {
    const parentDiv = document.getElementById('parent')
    data.forEach(element => {
        const createDiv = document.createElement('div')
        createDiv.classList.add('col', 'text-white', 'bg-danger', 'mb-3', 'widthResize')
        createDiv.innerHTML = `
        <div class="card-header">${element.email}</div>
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.body.slice(0,50)}</p>
        <button class="btn btn-success px-4" onclick="focusId(${element.postId})">Post Id</button>
        </div>
        `
        parentDiv.appendChild(createDiv)
    });
}

const focusId = async(id) => {
    const urlLink = `https://jsonplaceholder.typicode.com/posts/${id}`
    const res =await fetch(urlLink);
    const secondData = await res.json();
    console.log(secondData)
    secondDisplay(secondData)
}

const secondDisplay = (extraCard) => {
    const secondParent = document.getElementById('first')
    secondParent.textContent = ''
        console.log(extraCard)
        const createDiv = document.createElement('div')
        createDiv.classList.add('col', 'text-white', 'bg-primary', 'mb-3')
        createDiv.innerHTML = `
        <div class="card-header">${extraCard.id}</div>
        <div class="card-body">
        <h5 class="card-title">${extraCard.title}</h5>
        <p class="card-text">${extraCard.body.slice(0,50)}</p>
        `
        secondParent.appendChild(createDiv)
}
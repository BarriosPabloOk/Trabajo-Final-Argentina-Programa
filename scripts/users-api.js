const response = document.getElementById('response');
const urlUsers = "https://jsonplaceholder.typicode.com/users"
const usersShowed = []

window.addEventListener('load', () => {
    const api = new XMLHttpRequest();

    api.open('GET', urlUsers, true);
    api.send();
    let datos = null;
    api.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4){
            datos = JSON.parse(this.responseText)
            console.log(datos)
            loadDatos(datos)            
        }
    }

})

function loadDatos(datos) {
    const fragmentUsers = document.createDocumentFragment()
    datos.map((users) => {
        const div = document.createElement('div')
        div.id = users.name
        div.className = "card p-3 m-3"
        div.innerHTML = `
        <div class="card-body">
            <h4>${users.name}</h4>
            <p>${users.phone}</p>
            <p>${users.company.catchPhrase}</p>
        </div>

            
        `
        fragmentUsers.appendChild(div)
    })
    response.append(fragmentUsers)
}




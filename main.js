const url = "http://localhost:5500/api"

const newUser = {
    name: "Abel ",
    avatar: "http://lorempixel.com/400/200",
    city: "Luanda"
}

const UpdataUser ={
    name:"Leonardo",
    avatar:"http://lorempixel.com/400/200",
    city :" Benguela"
}

function getUser() {

    axios.get(url)
        .then(response => {

            const data = response.data

            //mudar o conteudo da div por DOM
            renderResult.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}

getUser()

function addNewUser() {

    axios.post(url,newUser)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error=> console.log(error))
}

//addNewUser()

function updateUser(){
    axios.put(`${url}/2`, UpdataUser)
    .then(response=>{
        alert(JSON.stringify(response.data))
    })
    .catch(error=> console.log(error))
}

//updateUser()

function deleteUser(){
    axios.delete(`${url}/12`)
    .then( response=>{
        alert(JSON.stringify(response.data))
    })
    .catch(error=>console.log(error))
}

//deleteUser()

function getOneUser(){
    
    axios.get(`${url}/8`)
    .then(response=>{
        const data = response.data
        renderResult.textContent= JSON.stringify(data)
    })
    .catch(error =>console.log(error))
}

getOneUser()
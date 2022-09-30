const name = document.querySelector('.names')
// fetch ('https://jsonplaceholder.typicode.com/posts').then(function (response) {
//    return response.json()
// }).then(function (data) {
//     // name.innerHTML = data.map((namess,index)=>{
//     //     return `
//     //     <h4>${namess.title}</h4>
//     //     `
//     // }).join('');
    
// })
const res = async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').json()
    name.innerHTML = data.map((namess,index)=>{
        return `
        <h4>${namess.title}</h4>
        `
    }).join('');
    

}
res();
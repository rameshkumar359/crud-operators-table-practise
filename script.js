// var url="https://61d17199da87830017e5923a.mockapi.io/da"
// 
// function getdata(){
    // fetch(url,{
        // method:"GET",
        // headers:{
            // "Content-Type":"application/json",
        // }
    // }).then((result)=>result.json()).then((data)=>console.table(data)).catch((err)=>console.log("error"))
// }
// 
// creating a data using function format
// function Data(){
    // let data = {
        // name:"ramesh",
        // email:"ramesh@gmail.com",
    // };
    // fetch(url, {
        // method:"POST",
        // body: JSON.stringify(data),
        // headers:{
        // "Content-Type": "application/json",
        // },
    // })
    // .then((result)=>result.json())
    // .then((data)=>{
        // console.log(data)
    // })
    // .catch((error)=>
    // {
        // console.log("error")
    // })
// }
// function createData() {
    // let data = {
    //   name: "kohn",
    //   email: "kohn@gmail.com",
    // };
    // fetch(url, {
        // method: "POST",
        // body: JSON.stringify(data),
        // headers: {
        //   "Content-Type": "application/json",
        // },
    //   })
        // .then((result) => result.json())
        // .then((data) => {
        //   console.log(data);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
    // }
// createdata()
// 
// function updatedata(){
    // var a={
        // name:"rajesh",
        // email:"rajesh@gmail.com",
    // }
// 
    // fetch(url+ "/5",{
        // method:"PUT",
        // body:JSON.stringify(a),
        // headers:{
            // "Content-Type":"application/json",
        // },
    // }).then((result)=>result.json()).then((data)=>console.log(data)).catch((error)=>console.log("error"))
// }
// 
// function updateData() {
    // let data = {
    //   name: "Sindhu",
    //   email: "sindhunana@gmail.com",
    // };
    // fetch(url + "/8", {
    //   method: "PUT",
    //   body: JSON.stringify(data),
    //   headers: {
        // "Content-Type": "application/json",
    //   },
    // })
    //   .then((result) => result.json())
    //   .then((data) => {
        // console.log(data);
    //   })
    //   .catch((error) => {
        // console.log(error);
    //   });
//   }
// function deletedata(){
    // fetch(url + "/8",{
        // method:"DELETE",
    //    }).then((result)=>result.json()).then((data)=>console).catch((error)=>console.log("error"))
// }
// 
// deletedata()
// deletedata()
let url="https://61d17199da87830017e5923a.mockapi.io/da"

let table=document.querySelector(".body")
async function getdata(){
        let users
        try {
        const data=await fetch(url,{  
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        }
    })
    users=await data.json()
}
catch (err){
    console.log("error")
}
 return users
}

async function displaydata(){
       let users= await getdata()
       console.log(users)
       users.forEach((data)=>
         table.innerHTML=table.innerHTML+`
       <tr>
       <th>${data.number}</th>
       <td>${data.name}</td>
       <td>${data.email}</td>
       <td>${data.phone}</td>
       <button onClick="event.preventDefault();updateuser(${data.id})">EDIT</button>
       <button onclick="event.preventDefault();deleteuser(${data.id})">DELETE</button>
       <button onClick="event.preventDefault();submit(${data.id})">SUBMIT EDIT</button>
       </tr>`)
       document.querySelector("#unumber").value=""
       document.querySelector("#uname").value=""
       document.querySelector("#uemail").value=""
       document.querySelector("#uphone").value=""
       
}
displaydata()
async function deleteuser(id){
    alert("Are you sure you want to delete")
    try{
    const data= await fetch(`https://61d17199da87830017e5923a.mockapi.io/da/${id}`
    ,{
        method:"DELETE",
        headers:{
           "Content-Type": "application/json",
        }
    })
      const users=await data.json()
      console.log(users)
      await displaydata()
    }
    catch (err) {
        console.log(error)
    }

}

async function adduser(){
        let number=document.querySelector("#number").value
        let name=document.querySelector("#name").value
        let email=document.querySelector("#email").value
        let phone=document.querySelector("#phone").value
        
        const data=await fetch("https://61d17199da87830017e5923a.mockapi.io/da",{
            method: "POST",
            body: JSON.stringify({
                number:number,
                name:name,
                email:email,
                phone:phone,
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
        displaydata()
        document.querySelector("#number").value=""
        document.querySelector("#name").value=""
        document.querySelector("#email").value=""
        document.querySelector("#phone").value=""
}
 
//function submit(){
//    
//}

async function updateuser(id){
    try{
    const data=await fetch(`https://61d17199da87830017e5923a.mockapi.io/da/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
    })
    let users=await data.json()
    let unumber=document.querySelector("#unumber").value=users.number
    unumber.innerHTML=unumber
    let uname=document.querySelector("#uname").value=users.name
    uname.innerHTML=uname
    let uemail=document.querySelector("#uemail").value=users.email
    uemail.innerHTML=uemail
    let uphone=document.querySelector("#uphone").value=users.phone
    uphone.innerHTML=uphone
    console.log(id)
}
catch(err){
    console.log(err)
}
}
async function submit(id){
    console.log(id) 
    let unumber=document.querySelector("#unumber").value
    let uname=document.querySelector("#uname").value
    let uemail=document.querySelector("#uemail").value
    let uphone=document.querySelector("#uphone").value
    try{
        const data=await fetch(`https://61d17199da87830017e5923a.mockapi.io/da/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                number:unumber,
                name:uname,
                email:uemail,
                phone:uphone,
            })
        })
        let users=await data.json()
        displaydata()

        document.querySelector("#unumber").value=""
        document.querySelector("#uname").value=""
        document.querySelector("#uemail").value=""
        document.querySelector("#uphone").value=""

}
catch(err){
    console.log(err)
}
}
let socket = io.connect("http://localhost:4000");


let btn = document.getElementById("send");
let name = document.getElementById("name");
let message = document.getElementById("message");
let output = document.getElementById("output");
let feedback = document.getElementById("feedback");
console.log("valled");


// const getTime = () => {

//     let data = new Date();
//     let year = data.getFullYear();
//     let d = data.getDate();
//     let m = data.getMonth();

//     return output = `${d}. ${m}. ${year}`;
// }



btn.addEventListener("click", () => {

    if (name.value && message.value) {
        socket.emit("message", {
            name: name.value,
            message: message.value
        });
        message.value = "";
    }
    else {
        alert("Please Fill in fields!");
    }
});



message.addEventListener("keypress", () => {
    socket.emit("typing", {
        name: document.getElementById("name").value
    });
})






// Await res from Server


socket.on("message", (data) => {
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong class='strong' id=`${data.name}`>" + data.name + "</strong> : " + data.message + "</p>";
});


socket.on("typing", (data) => {
    feedback.innerHTML = "<p>" + data.name + " is typing!";
})
window.onload = ()=>{
    const OrderForm = document.getElementById("order-form")
    OrderForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(OrderForm.name.value.trim())
        var name = OrderForm.name.value.trim()
        var select = OrderForm.select.options[OrderForm.select.selectedIndex].value.trim()
        var message = OrderForm.message.value.trim()
        console.log(select)
        if(name == ""){
            console.log("name true")
            document.getElementById("name-error").innerText = "Please type your name"
        }else{
            document.getElementById("name-error").innerText = ""
        }
        if(select == "none"){
            console.log("select true")
            document.getElementById("select-error").innerText = "Please select your cake"
        }else{
            document.getElementById("select-error").innerText = ""
        }
        if(message == ""){
            console.log("message true")
            document.getElementById("message-error").innerText = "Please type your message"
        }else{
            document.getElementById("message-error").innerText = ""
        }
    })
}
















































































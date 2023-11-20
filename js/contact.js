window.onload = () => {
    const ContactForm = document.getElementById("contact-form")
    ContactForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(ContactForm.firstName.value.trim())
        var name = ContactForm.firstName.value.trim()
        var email = ContactForm.email.value.trim()
        var subject = ContactForm.subject.value.trim()
        var message = ContactForm.message.value.trim()
        if(name == ""){
            console.log("name true")
            document.getElementById("first-name-error").innerText = "Please type your name"
        }else{
            document.getElementById("first-name-error").innerText = ""
        }
        if(email == ""){
            console.log("email true")
            document.getElementById("email-error").innerText = "Please type your email"
        }else{
            document.getElementById("email-error").innerText = ""
        }
        if(subject == ""){
            console.log("sbj true")
            document.getElementById("subject-error").innerText = "Please type your subject"
        }else{
            document.getElementById("subject-error").innerText = ""
        }
        if(message == ""){
            console.log("message true")
            document.getElementById("message-error").innerText = "Please type your message"
        }else{
            document.getElementById("message-error").innerText = ""
        }
    })
}

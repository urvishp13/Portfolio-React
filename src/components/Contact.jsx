import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        message: ""
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
      
        const myForm = event.target
        const formData = new FormData(myForm)
      
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => alert("Thank you for your submission"))
          .catch((error) => alert(error))

        // reset form
        setFormData({
            name: "", 
            email: "",
            message: ""
        })
    }      

    return (
        <section id="contact-section" className="contact-section">
            <h2 className="contact-section-title">Contact</h2>
            <form 
                data-netlify="true"
                name="contact"
                method="post"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />
                <input 
                    type="text"
                    placeholder="Name"
                    className="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="email"
                    placeholder="Email"
                    className="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    placeholder="Message"
                    className="message-input"
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    required
                />
                <button className="submit">SEND</button>
            </form>
        </section>
    )
}
import { useState } from 'react';
import { firestore } from '../../Firebase';
import { ContactContainer, Image, ContactContent } from './ContactStyled';
import ContactBackground from '../../images/ContactBackground.png';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, email);
  
      firestore.collection("messages").add({
        name,
        email
      }).then(() => {
        setName(""),
        setEmail("")
      }).catch((error) => console.error("Error submitting data", error))
    };
  

    return (
      <ContactContainer>
        <Image src={ContactBackground} />
        <ContactContent>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Contact Form</h1>

            <label>Name</label>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Submit</button>

        </form>
        </ContactContent>
        </ContactContainer>
    )
}

export default Contact;
import { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc} from 'firebase/firestore';
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

       await addDoc(collection(db, "contacts"),{
                name: name,
                email: email,
            })
            .then(() => {
                alert("Information has been sent");
            })
            .catch((error) => {
                alert(error.message);
            });

        setName("");
        setEmail("");
    };

    return (
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
    )
}

export default Contact;
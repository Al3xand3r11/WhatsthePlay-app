import { useState } from 'react';
import { firestore } from '../../Firebase';
import { ContactContainer, Image, ContactContent, ContactH1 } from './ContactStyled';
import ContactBackground from '../../images/ContactBackground.jpeg';
import { Button, Box, TextField, FormControl } from '@mui/material';
import { Stack } from '@mui/system';

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
        <Box borderRadius='10%'height={400} width={800} sx={{
          bgcolor: 'rgba(0,0,0,.5)',
          
        }}>
        <Stack>
        <form className='form' onSubmit={handleSubmit}>
          <Stack alignItems='center' paddingTop={5}>
            <ContactH1>Get News From WTP!</ContactH1>
          </Stack>
          <Stack width={450} paddingLeft={10} paddingBottom={5} paddingTop={8}>
            <TextField
                placeholder="Name"
                label="Name"
                required
                variant='filled'
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                color="info"
                InputProps={{
                  style: {
                    color: 'white'
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: 'white'
                  }
                }}
            />

            <TextField
                placeholder="Email"
                required
                label="Email"
                variant='filled'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  style: {
                    color: 'white'
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: 'white'
                  }
                }}
            />
            </Stack>
            <Stack width={250} paddingLeft={10}>
            <Button type="submit" variant='contained' color='info'>Submit</Button>
            </Stack>

        </form>
        </Stack>
        </Box>
        </ContactContent>
        </ContactContainer>
    )
}

export default Contact;
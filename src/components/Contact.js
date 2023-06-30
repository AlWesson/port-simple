import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3cv95n8', 'template_5rozwas', form.current, 'hweYalZYVAY9czc61')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div >
            <h3 style={{textAlign: 'center', fontFamily: 'monospace' ,fontSize: '30px', color: 'dimgray' }}> Contact </h3>
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', backgroundColor: '#333333', padding: '20px', borderRadius: "15px", border: 'dashed gold 4px'}}>
            <form ref={form} onSubmit={sendEmail}>
                <div style={{paddingBottom: '10px', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                <label style={{color: 'white'}}>Name</label>
                <input type="text" name="user_name" style={{borderRadius: '15px', padding: '6px'}}/>
                </div>

                <div style={{paddingBottom: '10px', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                <label style={{color: 'white'}}>Email</label>
                <input type="email" name="user_email" style={{borderRadius: '15px', padding: '6px'}}/>
                </div>

                <div style={{paddingBottom: '10px', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                <label style={{color: 'white'}} >Message</label>
                <textarea name="message" style={{borderRadius: '15px', padding: '6px'}}/>
                </div>
                <input type="submit" value="Send" style={{backgroundColor: 'gold', borderRadius: '15px', padding: '6px'}}/>
            </form>
            </div>
        </div>
    )
}

export default Contact;
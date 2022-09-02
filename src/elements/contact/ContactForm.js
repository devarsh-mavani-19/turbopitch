import React , {useState} from 'react';
import emailjs from 'emailjs-com';
import { submitContactForm } from '../../../firebase/uploadRequest';
import { event } from '../../../lib/ga/index'
const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. We will contact you soon.</p>
    )
}

const Error = () => {
    return (
        <p className="success-message">Failed to deliver your message due to server problem. Please try contacting via email or phone.</p>
    )
}

function ContactForm({props , formStyle}) {
    const [ result,showresult ] = useState(false);
    const [ error,showerror ] = useState(false);

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [subject, setsubject] = useState('')
    const [description, setdescription] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault();
        let res = await submitContactForm({
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            description: description
        })
        if (res) {
            e.target.reset();
            showresult(true);
            event({
                action: 'conversion',
                params: { 'send_to': 'AW-617860929/zYx4CIum29EDEMGez6YC' }
            })
        } else {
            showerror(true)
            event({
                action: 'contact_form_error',
                params: {}
            })
        }
        // emailjs
        // .sendForm(
        //     'service_p4x3hv8', 
        //     'template_jgfr42f', 
        //     e.target, 
        //     'user_jrfTH2e0Ely35ZCVFdT9S'
        // )
        // .then((result) => {
        //     console.log(result.text);
        //     }, 
        //     (error) => {
        //         console.log(error.text);
        //     }
        // );
        
    };

    // setTimeout(() => {
    //     showresult(false);
    // }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input 
                type="text"
                name="fullname"
                value={name}
                onChange={(e) => {setname(e.target.value)}}
                placeholder="Your Name"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                value={email}
                onChange={(e) => {setemail(e.target.value)}}
                name="email"
                placeholder="Email Address"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                value={phone}
                onChange={(e) => {setphone(e.target.value)}}
                name="phone"
                placeholder="Phone Number"
                required
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                value={subject}
                onChange={(e) => {setsubject(e.target.value)}}
                name="subject"
                placeholder="Subject"
                required
                />
            </div>

            <div className="form-group">
                <textarea 
                name="message"
                value={description}
                onChange={(e) => {setdescription(e.target.value)}}
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Submit Now</button>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
                {error ? <Error /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;

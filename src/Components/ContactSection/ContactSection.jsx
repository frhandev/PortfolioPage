import styles from './ContactSection.module.css'

function ContactSection(){

    return(
        <section className={styles.ContactSection} id='contact'>
            <h1>Contact Me</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="94c4e040-216b-46de-977d-4188b79de352"/>
                <input type="name" name="name" placeholder="Your Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea name="message" placeholder="Your Message"></textarea>
                <button className={styles.sendButton} type="submit">Send</button>
            </form>
            
        </section>
    );
}

export default ContactSection
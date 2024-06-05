import styles from './Footer.module.css'
import linkedin from './SocialIcons/linkedin.png'
import instagram from './SocialIcons/instagram.png'
import youtube from './SocialIcons/youtube.png'
import github from './SocialIcons/github.png'

function Footer(){


    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Muhammed</p>
            <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/muhammed-ferhan-793196252/"><img className={styles.socialIcon} src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/frhandev"><img className={styles.socialIcon} src={github} alt="linkedin" /></a>
                <a href="https://www.youtube.com/channel/UCHlvKzyFy1MIz4e2jU9n4Og"><img className={styles.socialIcon} src={youtube} alt="linkedin" /></a>
                <a href="https://www.instagram.com/mohammad_farhan53/"><img className={styles.socialIcon} src={instagram} alt="linkedin" /></a>
            </div>
        </footer>
    );
}

export default Footer
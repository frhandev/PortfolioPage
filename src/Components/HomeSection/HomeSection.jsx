import styles from './HomeSection.module.css'
import linkedin from './SocialIcons/linkedin.png'
import instagram from './SocialIcons/instagram.png'
import github from './SocialIcons/github.png'
import youtube from './SocialIcons/youtube.png'

function HomeSection() {
    return(
        <section id='home' className={styles.HomeSection}>
            <div className={styles.myInfo}>
                <h3>Hi I'm Mohammad</h3>
                <p><span>front-end developer</span> <br /> I create responsive, user-friendly websites with a focus on quality and innovation.</p>
                <div className={styles.skillsContainer}>
                <a href="https://www.linkedin.com/in/muhammed-ferhan-793196252/"><img className={styles.skillIcon} src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/frhandev"><img className={styles.skillIcon} src={github} alt="linkedin" /></a>
                <a href="https://www.youtube.com/channel/UCHlvKzyFy1MIz4e2jU9n4Og"><img className={styles.skillIcon} src={youtube} alt="linkedin" /></a>
                <a href="https://www.instagram.com/mohammad_farhan53/"><img className={styles.skillIcon} src={instagram} alt="linkedin" /></a>
                </div>
                <div className={styles.skillsContainer}>
                    <img className={styles.skillIcon} src="../src/assets/SkillsIcons/html.png" alt="htmlLogo" />
                    <img className={styles.skillIcon} src="../src/assets/SkillsIcons/social.png" alt="cssLogo" />
                    <img className={styles.skillIcon} src="../src/assets/SkillsIcons/js.png" alt="jsLogo" />
                    <img className={styles.skillIcon} src="../src/assets/SkillsIcons/physics.png" alt="reactLogo" />
                </div>
            </div>
            <div className={styles.myImageContainer}>
                <img className={styles.myImage} src="../src/assets/me.jpeg" alt="me" />
            </div >
        </section>
    );
}

export default HomeSection
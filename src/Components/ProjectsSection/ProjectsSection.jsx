import styles from './projectsSection.module.css'
import ProjectContainer from './ProjectContainer'
import vitalityImg from './projectAssets/Vitality-Gym.jpeg'

function ProjectsSection() {
    return (
        <section id='projects' className={styles.projectsSection}>
            <h1>my recent Projects</h1>
            <div className={styles.projectCardContainer}>
            <ProjectContainer 
                projectImage={vitalityImg} 
                projectTitle='Vitality Gym'
                projectDiscreption='A landing page for a fictional fitness gym designed using HTML, CSS, JavaScript, and React.'
                projectLink='https://vitality-gym.netlify.app/'
                />
            </div>
        </section>
    );
}

export default ProjectsSection
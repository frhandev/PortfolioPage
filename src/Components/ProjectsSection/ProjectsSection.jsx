import styles from './projectsSection.module.css'
import ProjectContainer from './ProjectContainer'

function ProjectsSection() {
    return (
        <section id='projects' className={styles.projectsSection}>
            <h1>my recent Projects</h1>
            <div className={styles.projectCardContainer}>
            </div>
        </section>
    );
}

export default ProjectsSection
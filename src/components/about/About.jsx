import styles from "../about/About.module.css";

function About() {
	return (
		<div className={styles.about}>
			<div className={styles.about__boxex}>
				<div className={styles.box1}></div>
				<div className={styles.box2}></div>
				<div className={styles.box3}></div>
			</div>
		</div>
	);
}

export default About;

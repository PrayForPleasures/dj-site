import styles from "../about/About.module.css";
import dj1 from "../../images/dj1.jpg";
import dj2 from "../../images/dj2.jpg";
import dj3 from "../../images/dj3.jpg";
import dj4 from "../../images/dj4.jpg";
import djm from "../../images/djm.jpg";

function About() {
	return (
		<div className={styles.about}>
			<div className={styles.grid__parent}>
				<div className={styles.grid__item1}>
					<img className={styles.grid__image} src={dj1} alt="image" />
				</div>
				<div className={styles.grid__item2}>
					<img className={styles.grid__image} src={dj2} alt="image" />
				</div>
				<div className={styles.grid__item3}>
					<img className={styles.grid__image} src={dj3} alt="image" />
				</div>
				<div className={styles.grid__item4}>
					<img className={styles.grid__image} src={dj4} alt="image" />
				</div>
				<div className={styles.grid__item_main}>
					<img className={styles.grid__image_main} src={djm} alt="image" />
				</div>
			</div>
		</div>
	);
}

export default About;

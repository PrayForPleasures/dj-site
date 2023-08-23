import styles from "../about/About.module.css";
import song1 from "../../mp3/Dj Hueman - 5ever.mp3";
import song2 from "../../mp3/Dj Hueman - Any.mp3";
import song3 from "../../mp3/Dj Hueman - Snapfire.mp3";
import image1 from "../../images/dj4.jpg";
import image2 from "../../images/djm.jpg";
import image3 from "../../images/dj4.jpg";

function About() {
	return (
		<div className={styles.about}>
			<div className={styles.about__boxex}>
				<div className={styles.box1}>
					<img className={styles.about__image} src={image1} alt="image" />
				</div>
				<div className={styles.box2}>
					<img className={styles.about__image_main} src={image2} alt="image" />
				</div>
				<div className={styles.box3}>
					<img className={styles.about__image2} src={image3} alt="image" />
				</div>
			</div>
			<div className={styles.audio__box}>
				<audio
					className={styles.audio__self}
					id="audio"
					src={song1}
					controls
				></audio>
				<audio
					className={styles.audio__self}
					id="audio"
					src={song2}
					controls
				></audio>
				<audio
					className={styles.audio__self}
					id="audio"
					src={song3}
					controls
				></audio>
			</div>
		</div>
	);
}

export default About;

import styles from "../about/About.module.css";
import song1 from "../../mp3/Dj Hueman - 5ever.mp3";
import song2 from "../../mp3/Dj Hueman - Any.mp3";
import song3 from "../../mp3/Dj Hueman - Snapfire.mp3";
import image1 from "../../images/dj4.jpg";
import imageM from "../../images/djm.jpg";
import image2 from "../../images/dj1.jpg";

function About() {
	return (
		<div className={styles.about}>
			<div className={styles.about__boxex}>
				<div className={styles.box1}>
					<img className={styles.about__image} src={image1} alt="image" />
					<img className={styles.about__image} src={image2} alt="image" />
					<div className={styles.about__desc}>
						<h1 className={styles.audio__desc}>
							What does it mean to be a DJ?
						</h1>
						<p className={styles.audio__p}>
							The best part of my profession is that when I perform, I
							experience the highest release of dopamine, the hormone of
							pleasure. Cool performances on emotions are much stronger than
							sex. And what’s more, if you really get high, then it spreads to
							the whole hall and people get joy and a charge that sparkles from
							you. You turn into communicating vessels, and this feeling is
							beyond words, how amazing.
						</p>
					</div>
				</div>
				<div className={styles.box2}>
					<img className={styles.about__image_main} src={imageM} alt="image" />
				</div>
			</div>
			<div className={styles.audio}>
				<div className={styles.audio__box}>
					<p className={styles.audio__p}>Dj Hueman - 5ever</p>
					<audio
						className={styles.audio__self}
						id="audio"
						src={song1}
						controls
					></audio>
					<p className={styles.audio__p}>Dj Hueman - Any</p>
					<audio
						className={styles.audio__self}
						id="audio"
						src={song2}
						controls
					></audio>
					<p className={styles.audio__p}>Dj Hueman - Snapfire</p>
					<audio
						className={styles.audio__self}
						id="audio"
						src={song3}
						controls
					></audio>
				</div>
				<div className={styles.audio__box}>
					<p className={styles.audio__p}>
						The best part of my profession is that when I perform, I experience
						the highest release of dopamine, the hormone of pleasure. Cool
						performances on emotions are much stronger than sex. And what’s
						more, if you really get high, then it spreads to the whole hall and
						people get joy and a charge that sparkles from you. You turn into
						communicating vessels, and this feeling is beyond words, how
						amazing.
					</p>
				</div>
				<div className={styles.audio__box}>
					<p className={styles.audio__p}>
						The second is educational activities. If a DJ has taste, people in
						the audience discover artists they haven't heard before. And cool
						music is what we are all here for. Thirdly, from childhood I dreamed
						of becoming an artist, and from my youth I loved parties. And if
						you, like me, love to travel and hang out until the morning, then
						this is a dream profession.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;

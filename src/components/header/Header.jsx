import styles from "../header/Header.module.css";
import logo from "../../images/lo5.png";
import vk from "../../images/vk.png";
import inst from "../../images/inst.png";
import youtube from "../../images/youtube1.png";
import phone from "../../images/phone.png";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header_box}>
				<a href="#" className={styles.header__logo}>
					<img className={styles.header__logo_img} src={logo} alt="logo" />
					<ul className={styles.header__logo_text}>
						<li className={styles.header__logo_list}>D</li>
						<li className={styles.header__logo_list}>J</li>
						<li className={styles.header__logo_list}></li>
						<li className={styles.header__logo_list}>H</li>
						<li className={styles.header__logo_list}>u</li>
						<li className={styles.header__logo_list}>e</li>
						<li className={styles.header__logo_list}>m</li>
						<li className={styles.header__logo_list}>a</li>
						<li className={styles.header__logo_list}>n</li>
						<li className={styles.header__logo_list}></li>
					</ul>
				</a>
				<ul className={styles.header__list}>
					<li className={styles.header__list_item}>
						<a href="#">About</a>
					</li>
					<li className={styles.header__list_item}>
						<a href="#">Packages</a>
					</li>
					<li className={styles.header__list_item}>
						<a href="#">Video</a>
					</li>
					<li className={styles.header__list_item}>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className={styles.subheader}>
				<div className={styles.phone}>
					<img className={styles.phone__icon} src={phone} alt="call" />
					<a className={styles.phone__number} href="tel:+375445606060">
						8 (044) 560-23-42
					</a>
				</div>
				<div className={styles.list_box}>
					<ul className={styles.header__list}>
						<li className={styles.subheader__list_item}>
							<a href="#">
								<img
									className={styles.subheader__link_img}
									src={youtube}
									alt="youtube"
								/>
							</a>
						</li>
						<li className={styles.subheader__list_item}>
							<a href="#">
								<img
									className={styles.subheader__link_img}
									src={inst}
									alt="vk"
								/>
							</a>
						</li>
						<li className={styles.subheader__list_item}>
							<a href="#">
								<img
									className={styles.subheader__link_img}
									src={vk}
									alt="inst"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;

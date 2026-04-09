import { useState } from "react";
import { GetSvg } from "../GetSvg";
import styles from "./header.module.css";
import myPhoto from "../../assets/images/myPhoto.png";
import { useTranslation } from "react-i18next";
import { NavLinks } from "./NavLinks";
import { useTheme } from "../../context/ThemeContext";
export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme } = useTheme();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header
			className={`${styles.header}  p-4 w-full bg-backgroundLight dark:bg-backgroundDark   duration-100 flex justify-between items-center`}
			style={{
				animationName: theme === "dark" ? "scrollheaderDark" : "scrollheader",
				animationFillMode: "both",
				animationTimeline: "scroll()",
				animationRange: "50px 140px",
			}}
		>
			<span className="">
				<img src={myPhoto} width="50px" height="50px" alt="my photo" />
			</span>

			<nav className="hidden mobile:flex space-x-4">
				<NavLinks onLinkClick={() => setIsMenuOpen(false)} />
			</nav>

			<button
				onClick={toggleMenu}
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
				className={`${
					styles.menuBtn
				}  hidden border-4 border-backgroundDark dark:border-backgroundLight dark:text-backgroundLight before:bg-backgroundDark dark:before:bg-backgroundLight after:bg-backgroundDark dark:after:bg-backgroundLight  max-mobile:block  z-41 ${
					isMenuOpen ? styles.menuCloseBtn : ""
				}`}
			></button>
			<div className="flex items-center space-x-6">
				<LanguageSwitcher />
				<ThemeToggle />
			</div>

			{/* for menuMobile  */}
			<div
				className={`scroll-y-0 mobile:hidden fixed top-0  left-0 w-full  pointer-events-none bg-backgroundLight dark:bg-backgroundDark  transition-opacity duration-300  h-full ${
					isMenuOpen ? "z-40 opacity-100" : "z-[-10] opacity-0 "
				}`}
			/>

			{isMenuOpen && (
				<>
					<div
						className={`scroll-y-0 mobile:hidden fixed top-30 left-0   flex flex-col h-1/2  w-full justify-around  items-center ${
							isMenuOpen ? "z-40 opacity-100" : "z-[-10] opacity-0"
						}`}
					>
						<NavLinks onLinkClick={() => setIsMenuOpen(false)} />
					</div>
				</>
			)}
		</header>
	);
};

function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className=" space-x-2  inline-flex">
			{["en", "de"].map((lng) => (
				<button
					key={lng}
					onClick={() => changeLanguage(lng)}
					className={`
            px-3 py-1 rounded shadow 
            flex items-center
            transition duration-200   mobile:px-1.5  max-mobile:py-0.5 max-mobile:px-1
            ${
							i18n.language === lng
								? "bg-gradient-to-r from-[#f57f17] to-[#e9a441] text-white shadow-lg scale-105"
								: "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
						}
          `}
				>
					<GetSvg svg={lng} />
					<span className="ml-1 font-bold uppercase max-mobile:font-medium ">{lng}</span>
				</button>
			))}
		</div>
	);
}

function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="w-[60px] h-[25px] inline-flex">
			<input
				type="checkbox"
				id="darkmode"
				className={styles.darkmode_container}
				value={theme}
				checked={theme === "dark"}
				onChange={() => toggleTheme()}
			/>
			<label className={styles.cusomLabel} htmlFor="darkmode">
				<GetSvg svg="sun" />
				<GetSvg svg="moon" />
			</label>
		</div>
	);
}

import { useTranslation } from "react-i18next";
import useMobile from "../../hooks/useMobile";

export const NavLinks = ({ onLinkClick }) => {
	const isMobile = useMobile();
	const { t } = useTranslation();

	return (
		<>
			<a
				href="#about"
				onClick={() => onLinkClick()}
				className={`nav-link font-bold duration-200 text-center ${
					!isMobile
						? " hover:dark:text-white hover:text-black  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
						: "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
				}`}
			>
				{t("header.about")}
			</a>
			<a
				href="#skills"
				onClick={() => onLinkClick()}
				className={`nav-link font-bold duration-200 text-center ${
					!isMobile
						? " hover:dark:text-white hover:text-black  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
						: "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
				}`}
			>
				{t("header.skills")}
			</a>
			<a
				href="#projects"
				onClick={() => onLinkClick()}
				className={`nav-link font-bold duration-200 text-center ${
					!isMobile
						? " hover:dark:text-white hover:text-black  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
						: "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
				}`}
			>
				{t("header.projects")}
			</a>
			<a
				href="#experience"
				onClick={() => onLinkClick()}
				className={`nav-link font-bold duration-200 text-center ${
					!isMobile
						? " hover:dark:text-white hover:text-black  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
						: "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
				}`}
			>
				{t("header.experience")}
			</a>
			<a
				href="#contact"
				onClick={() => onLinkClick()}
				className={`nav-link font-bold duration-200 text-center ${
					!isMobile
						? " hover:dark:text-white hover:text-black  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left dark:after:bg-white after:bg-backgroundDark  dark:after:shadow-[0_0_8px_darkOrange] after:shadow-[0_0_8px_black] after:transition-transform after:duration-300 hover:after:scale-x-99"
						: "shadow-btn dark:shadow-btnDark  w-1/3 rounded active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98"
				}`}
			>
				{t("header.contact")}
			</a>
		</>
	);
};

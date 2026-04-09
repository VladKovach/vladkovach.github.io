import { useTranslation } from "react-i18next";
import { IdeasSlider } from "./IdeasSlider/IdeasSlider";
import { CubesScene } from "./CubesScene/CubesScene";

const Hero = () => {
	const { t } = useTranslation();
	return (
		<div
			className=" w-full flex justify-around max-sm:flex-col max-sm:items-center p-5 mt-15 max-sm:mt-0"
			style={{
				animationName: "fadeIn",
				animationFillMode: "both",
				animationDuration: "1s",
				animationTimingFunction: "ease-in-out",
			}}
		>
			<div className="flex flex-col  h-full w-2/5 max-sm:w-full mr-15 max-sm:mr-0">
				<h1 className="text-3xl max-mobile:text-2xl font-bold  ">
					<span className="dark:text-lightOrange text-darkOrange text-4xl max-mobile:text-3xl">
						{t("hero.lets")}
					</span>{" "}
					{t("hero.buildWhat")}
					<IdeasSlider />
				</h1>
				<p className="text-lg max-mobile:text-sm mt-4</p> font-bold">
					<span className="text-darkOrange dark:text-lightOrange text-xl max-mobile:text-lg">
						{t("hero.hiThere")}
					</span>{" "}
					{t("hero.intro")}
				</p>
				<a
					href="#projects"
					className="mt-6 text-lg max-mobile:text-sm py-2 font-bold w-[160px]  rounded shadow-btn dark:shadow-btnDark hover:shadow-btnhover text-center dark:hover:shadow-btnDarkHover  active:shadow-btnhover dark:active:shadow-btnDarkHover active:scale-98 duration-100 "
				>
					{t("hero.viewProjects")}
				</a>
			</div>
			<CubesScene />
		</div>
	);
};

export default Hero;

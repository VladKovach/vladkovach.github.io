import { useTranslation } from "react-i18next";
import { GetSvg } from "../GetSvg";
import styles from "./hero.module.css";

const cubes = [
	{ id: "cube-1", svg: "Html", svg2: "Css" },
	{ id: "cube-2", svg: "Js", svg2: "Ts" },
	{ id: "cube-3", svg: "React", svg2: "Next.js" },
	{ id: "cube-4", svg: "Scss", svg2: "Redux" },
	{ id: "cube-5", svg: "Git", svg2: "GitHub" },
	{ id: "cube-6", svg: "Angular", svg2: "Vue.js" },
	{ id: "cube-7", svg: "Npm", svg2: "es6" },
	{ id: "cube-8", svg: "Vite", svg2: "Webpack" },
	{ id: "cube-9", svg: "Rest", svg2: "Jest" },
];
const heroIdeas = ["imagine", "plan", "desire", "think"];
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
					<div className={styles.slider}>
						<div className={styles.container}>
							{heroIdeas.map((word) => (
								<p key={word} className={`flex items-center gap-1 pb-2 min-w-full ${styles.slide}`}>
									<span>{t(`hero.${word.toLowerCase()}`)}</span>
									<span className="rounded-full pb-1">
										<GetSvg svg={word} />
									</span>
								</p>
							))}
						</div>
					</div>
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
			<div
				className={`grid grid-cols-3 gap-2 max-sm:w-[200px] max-sm:mt-8  content-center ${styles.scene}`}
			>
				{cubes.map((cube) => (
					<div key={cube.id} className={styles.cube}>
						<div
							className={`${styles.face} ${styles.face_front} dark:bg-white bg-grayDark  inline-flex items-center justify-center`}
						>
							<GetSvg svg={cube.svg} />
						</div>
						<div className={`${styles.face} ${styles.face_back} dark:bg-white bg-grayDark `}></div>
						<div
							className={`${styles.face} ${styles.face_right} inline-flex items-center justify-center dark:bg-white bg-grayDark `}
						>
							<GetSvg svg={cube.svg2} />
						</div>
						<div className={`${styles.face} ${styles.face_left} dark:bg-white bg-grayDark `}></div>
						<div className={`${styles.face} ${styles.face_top} dark:bg-white bg-grayDark `}></div>
						<div
							className={`${styles.face} ${styles.face_bottom} dark:bg-white bg-grayDark `}
						></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero;

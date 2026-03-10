import plantShop from "../../assets/images/plantShop.png";
import posterPrint from "../../assets/images/posterPrint.png";

import coderr from "../../assets/images/coderr.png";

import kanmind from "../../assets/images/kanmind.png";

import SkillLogo from "../ui/SkillLogo/SkillLogo";
import { AnimatedBorder } from "../ui/AnimatedBorder/AnimatedBorder";
import { GetSvg } from "../GetSvg";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { isFirstTimeVisible } = useSectionObserver();

	const { t } = useTranslation();

	return (
		<div
			className={`flex flex-col mt-10 z-21 ${isFirstTimeVisible["projects"] ? "" : "invisible"}`}
			style={
				isFirstTimeVisible["projects"]
					? {
							animationName: "fadeIn",
							animationFillMode: "both",
							animationDuration: "1s",
							animationTimingFunction: "ease-in-out",
						}
					: {}
			}
		>
			<h2 className="font-bold text-3xl max-mobile:text-2xl">{t("projects.title")}</h2>
			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center   w-full justify-between">
					<a
						className="duration-300  shadow ml-2  hover:scale-103 rounded-projectImg max-mobile:flex   max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						href="https://coderr.vladkovach.com/"
						target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg  "
							src={coderr}
							alt="coderr"
						></img>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						<a
							className="font-bold text-2xl inline-flex items-center"
							href="https://coderr.vladkovach.com/"
							target="_blank"
						>
							<span className="mr-2 text-darkOrange dark:text-lightOrange text-2xl max-mobile:text-xl">
								Coderr
							</span>
							<GetSvg svg="external" />
						</a>
						<ul className="list-disc ml-5 mt-3 space-y-2 text-sm w-full">
							<li>coming soon...</li>
						</ul>
						<div className="mt-5 w-full p-1 max-mobile:text-center">
							{/* <SkillLogo name="Html" index={0} />
							<SkillLogo name="Scss" index={1} />
							<SkillLogo name="Js" index={2} />
							<SkillLogo name="React" index={3} />
							<SkillLogo name="Webpack" index={4} />
							<SkillLogo name="Figma" index={5} /> */}
						</div>
					</div>
				</div>
			</AnimatedBorder>
			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center   w-full justify-between">
					<a
						className="duration-300  shadow ml-2  hover:scale-103 rounded-projectImg max-mobile:flex   max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						href="https://kanmind.vladkovach.com"
						target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg  "
							src={kanmind}
							alt="kanmind"
						></img>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						<a
							className="font-bold text-2xl inline-flex items-center"
							href="https://vladkovach.com"
							target="_blank"
						>
							<span className="mr-2 text-darkOrange text-2xl max-mobile:text-xl dark:text-lightOrange">
								KanMind
							</span>
							<GetSvg svg="external" />
						</a>
						<ul className="list-disc ml-5 mt-3 space-y-2 text-sm w-full">
							<li>coming soon...</li>
						</ul>
						<div className="mt-5 w-full p-1 max-mobile:text-center">
							{/* <SkillLogo name="Html" index={0} />
							<SkillLogo name="Scss" index={1} />
							<SkillLogo name="Js" index={2} />
							<SkillLogo name="React" index={3} />
							<SkillLogo name="Webpack" index={4} />
							<SkillLogo name="Figma" index={5} /> */}
						</div>
					</div>
				</div>
			</AnimatedBorder>
			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center   w-full justify-between">
					<a
						className="duration-300  shadow ml-2  hover:scale-103 rounded-projectImg max-mobile:flex   max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						href="https://vladkovach.github.io/plantShop/"
						target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg  "
							src={plantShop}
							alt="PlantShop"
						></img>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						<a
							className="font-bold text-2xl inline-flex items-center"
							href="https://vladkovach.github.io/plantShop/"
							target="_blank"
						>
							<span className="mr-2 text-darkOrange text-2xl max-mobile:text-xl dark:text-lightOrange">
								Planty
							</span>
							<GetSvg svg="external" />
						</a>
						<ul className="list-disc ml-5 mt-3 space-y-2 text-sm w-full">
							<li>{t("projects.description1")}</li>
							<li>{t("projects.description2")}</li>
						</ul>
						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="Html" index={0} />
							<SkillLogo name="Scss" index={1} />
							<SkillLogo name="Js" index={2} />
							<SkillLogo name="React" index={3} />
							<SkillLogo name="Webpack" index={4} />
							<SkillLogo name="Figma" index={5} />
						</div>
					</div>
				</div>
			</AnimatedBorder>
			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center  w-full justify-between">
					<a
						className="duration-300  shadow ml-2  hover:scale-103  rounded-projectImg max-mobile:flex max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						href="https://posterprint.com.ua"
						target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg  "
							src={posterPrint}
							alt="posterPrint"
						></img>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						<a
							className="font-bold text-2xl inline-flex items-center"
							href="https://posterprint.com.ua"
							target="_blank"
						>
							<span className="mr-2 text-darkOrange text-2xl max-mobile:text-xl dark:text-lightOrange">
								PosterPrint
							</span>
							<GetSvg svg="external" />
						</a>
						<ul className="list-disc ml-5 mt-3 space-y-2 text-sm">
							<li>{t("projects.description3")}</li>
							<li>{t("projects.description4")}</li>
							<li>{t("projects.description5")}</li>
							<li>{t("projects.description6")}</li>
							<li>{t("projects.description7")}</li>
							<li>{t("projects.description8")}</li>
							<li>{t("projects.description9")}</li>
							<li>{t("projects.description10")}</li>
							<li>{t("projects.description11")}</li>{" "}
						</ul>

						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="Css" index={0} />
							<SkillLogo name="Next.js" index={1} darkSvg={true} />
							<SkillLogo name="Redux" index={2} />
							<SkillLogo name="Formik" index={2} />
							<SkillLogo name="Jest" index={3} />
							<SkillLogo name="Rest" index={4} />
							<SkillLogo name="Webpack" index={5} />
							<SkillLogo name="Jira" index={6} />
							<SkillLogo name="Postman" index={7} />
							<SkillLogo name="Figma" index={8} />
							<SkillLogo name="GitHub" index={9} />

							{/* <SkillLogo names={['html','scss', 'js', 'react', 'webpack']} index={0}/>
             <SkillLogo names={['html','scss', 'js', 'react', 'webpack']}index={1}/>
             <SkillLogo names={['html','scss', 'js', 'react', 'webpack']}index={2}/>
             <SkillLogo names={['html','scss', 'js', 'react', 'webpack']}index={3}/>
             <SkillLogo names={['html','scss', 'js', 'react', 'webpack']}index={4}/> */}
						</div>
					</div>
				</div>
			</AnimatedBorder>
		</div>
	);
};

export default Projects;

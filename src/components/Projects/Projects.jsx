import plantShop from "../../assets/images/plantShop.png";
import habitloop from "../../assets/images/habitloop.png";

import coderr from "../../assets/images/coderr.png";
import cvmatch from "../../assets/images/cvmatch.png";
import quizly from "../../assets/images/quizly.png";

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
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center w-full justify-between">
					<a
						className="duration-300 shadow ml-2 !cursor-auto hover:scale-103 rounded-projectImg max-mobile:flex max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						// href=""
						// target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg"
							src={cvmatch}
							alt="cvmatch"
						/>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						<p className="font-bold text-2xl inline-flex items-center">
							<span className="mr-2 text-darkOrange dark:text-lightOrange text-2xl max-mobile:text-xl">
								CVmatch.ai
								<span className="text-sm text-yellow-500 font-normal ml-2">(coming soon...)</span>
							</span>
						</p>
						<ul className="list-disc ml-5 pr-2 mt-3 space-y-2 text-sm w-full">
							<li>{t("projects.cvmatch.description1")}</li>
							<li>{t("projects.cvmatch.description2")}</li>
							<li>{t("projects.cvmatch.description3")}</li>
						</ul>

						<p className="mt-3 text-sm text-yellow-500 font-medium">
							{t("projects.cvmatch.inDev")}
						</p>

						<p className="mt-2 text-sm font-semibold">{t("projects.cvmatch.featuresTitle")}</p>
						<ul className="list-disc ml-5.5 pr-2 mt-1 space-y-1 text-sm text-grayLight">
							<li>{t("projects.cvmatch.feature1")}</li>
							<li>{t("projects.cvmatch.feature2")}</li>
							<li>{t("projects.cvmatch.feature3")}</li>
						</ul>

						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="React" index={0} />
							<SkillLogo name="Css" index={1} />
							<SkillLogo name="Python" index={2} />
							<SkillLogo name="Django" index={3} />
							<SkillLogo name="Rest" index={4} />
							<SkillLogo name="OpenAI" index={5} />
							<SkillLogo name="PostgreSQL" index={6} />
							<SkillLogo name="GitHub" index={7} />
						</div>
					</div>
				</div>
			</AnimatedBorder>

			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center w-full justify-between">
					<a
						className="duration-300 shadow ml-2 !cursor-auto hover:scale-103 rounded-projectImg max-mobile:flex max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						// href=""
						// target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg"
							src={habitloop}
							alt="habitloop"
						/>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						{/* <a
							className="font-bold text-2xl inline-flex items-center"
							href="https://github.com/VladKovach/habitloop"
							target="_blank"
						> */}
						<p className="font-bold text-2xl inline-flex items-center">
							{/* <span className="mr-2 text-darkOrange dark:text-lightOrange text-2xl max-mobile:text-xl">
								HabitLoop
							</span>
							<GetSvg svg="external" /> */}
							<span className="mr-2 text-darkOrange dark:text-lightOrange text-2xl max-mobile:text-xl">
								HabitLoop
								<span className="text-sm text-yellow-500 font-normal ml-2">(coming soon...)</span>
							</span>
							{/* </a>  */}
							{/* TODO: make live wenn deployed */}
						</p>
						<ul className="list-disc ml-5 pr-2 mt-3 space-y-2 text-sm w-full">
							<li>{t("projects.habitloop.description1")}</li>
							<li>{t("projects.habitloop.description2")}</li>
							<li>{t("projects.habitloop.description3")}</li>
						</ul>

						<p className="mt-3 text-sm text-yellow-500 font-medium">
							{t("projects.habitloop.inDev")}
						</p>

						<p className="mt-2 text-sm font-semibold">{t("projects.habitloop.featuresTitle")}</p>
						<ul className="list-disc ml-5.5 pr-2 mt-1 space-y-1 text-sm text-grayLight">
							<li>{t("projects.habitloop.feature1")}</li>
							<li>{t("projects.habitloop.feature2")}</li>
							<li>{t("projects.habitloop.feature3")}</li>
						</ul>
						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="React" index={0} />
							<SkillLogo name="Css" index={1} />
							<SkillLogo name="Python" index={2} />
							<SkillLogo name="Django" index={3} />
							<SkillLogo name="Rest" index={4} />
							<SkillLogo name="Css" index={5} />
							<SkillLogo name="PostgreSQL" index={6} />
							<SkillLogo name="GitHub" index={7} />
						</div>
					</div>
				</div>
			</AnimatedBorder>
			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center w-full justify-between">
					<a
						className="duration-300 shadow ml-2  hover:scale-103 rounded-projectImg max-mobile:flex max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						href="https://github.com/VladKovach/quizly"
						target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg"
							src={quizly}
							alt="quizly"
						/>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						<a
							className="font-bold text-2xl inline-flex items-center"
							href="https://github.com/VladKovach/quizly"
							target="_blank"
						>
							<span className="mr-2 text-darkOrange dark:text-lightOrange text-2xl max-mobile:text-xl">
								Quizly
							</span>
							<GetSvg svg="external" />
						</a>
						<ul className="list-disc ml-5 pr-2 mt-3 space-y-2 text-sm w-full">
							<li>{t("projects.quizly.description1")}</li>
							<li>{t("projects.quizly.description2")}</li>
							<li>{t("projects.quizly.description3")}</li>
							<li>{t("projects.quizly.description4")}</li>
							<li>{t("projects.quizly.description5")}</li>
						</ul>
						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="Python" index={0} />
							<SkillLogo name="Django" index={1} />
							<SkillLogo name="Rest" index={2} />
							<SkillLogo name="JWT" index={3} />
							<SkillLogo name="Gemini" index={4} />
							<SkillLogo name="PostgreSQL" index={5} />
							<SkillLogo name="GitHub" index={6} />
						</div>
					</div>
				</div>
			</AnimatedBorder>

			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center w-full justify-between">
					<a
						className="duration-300 shadow ml-2 hover:scale-103 rounded-projectImg max-mobile:flex max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						href="https://coderr.vladkovach.com/"
						target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg"
							src={coderr}
							alt="coderr"
						/>
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
						<ul className="list-disc ml-5 pr-2 mt-3 space-y-2 text-sm w-full">
							<li>{t("projects.coderr.description1")}</li>
							<li>{t("projects.coderr.description2")}</li>
							<li>{t("projects.coderr.description3")}</li>
							<li>{t("projects.coderr.description4")}</li>
							<li>{t("projects.coderr.description5")}</li>
						</ul>
						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="Python" index={0} />
							<SkillLogo name="Django" index={1} />
							<SkillLogo name="Rest" index={2} />
							<SkillLogo name="PostgreSQL" index={3} />
							<SkillLogo name="Postman" index={4} />
							<SkillLogo name="GitHub" index={5} />
							<SkillLogo name="JWT" index={6} />
						</div>
					</div>
				</div>
			</AnimatedBorder>
			<AnimatedBorder>
				<div className="p-2 flex max-mobile:flex-col-reverse max-mobile:items-center w-full justify-between">
					<a
						className="duration-300 shadow ml-2 hover:scale-103 rounded-projectImg max-mobile:flex max-mobile:w-fit max-mobile:justify-center max-mobile:mt-5"
						href="https://github.com/VladKovach/kanmind"
						target="_blank"
					>
						<img
							className="max-w-90 max-h-130 max-mobile:max-h-100 rounded-projectImg"
							src={kanmind}
							alt="kanMind"
						/>
					</a>
					<div className="w-3/5 ml-10 max-mobile:ml-0 max-mobile:w-full">
						<a
							className="font-bold text-2xl inline-flex items-center"
							href="https://github.com/VladKovach/kanmind"
							target="_blank"
						>
							<span className="mr-2 text-darkOrange text-2xl max-mobile:text-xl dark:text-lightOrange">
								KanMind
							</span>
							<GetSvg svg="external" />
						</a>
						<ul className="list-disc ml-5  pr-2 mt-3 space-y-2 text-sm">
							<li>{t("projects.kanmind.description1")}</li>
							<li>{t("projects.kanmind.description2")}</li>
							<li>{t("projects.kanmind.description3")}</li>
							<li>{t("projects.kanmind.description4")}</li>
						</ul>

						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="Python" index={0} />
							<SkillLogo name="Django" index={1} />
							<SkillLogo name="Rest" index={2} />
							<SkillLogo name="PostgreSQL" index={3} />
							<SkillLogo name="Postman" index={4} />
							<SkillLogo name="GitHub" index={5} />
							<SkillLogo name="JWT" index={6} />
						</div>
					</div>
				</div>
			</AnimatedBorder>
		</div>
	);
};

export default Projects;

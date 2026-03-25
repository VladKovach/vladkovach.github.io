import React from "react";
import { AnimatedBorder } from "../ui/AnimatedBorder/AnimatedBorder";
import { GetSvg } from "../GetSvg";
import SkillLogo from "../ui/SkillLogo/SkillLogo";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { useTranslation } from "react-i18next";

const Experience = () => {
	const { isFirstTimeVisible } = useSectionObserver();
	const { t } = useTranslation();

	return (
		<div
			className={`flex flex-col mt-10 z-21 ${isFirstTimeVisible["experience"] ? "" : "invisible"}`}
			style={
				isFirstTimeVisible["experience"]
					? {
							animationName: "fadeIn",
							animationFillMode: "both",
							animationDuration: "1s",
							animationTimingFunction: "ease-in-out",
						}
					: {}
			}
		>
			<h2 className="font-bold text-3xl max-mobile:text-2xl">{t("experience.title")}</h2>
			<AnimatedBorder>
				<div className="p-2  w-full ">
					<div className="">
						<div className="flex items-end max-sm:flex-col max-sm:items-center">
							<div className=" max-sm:w-full max-sm:flex max-sm:justify-between">
								<p className="font-bold text-2xl inline-flex items-center">
									<span className="font-bold mr-2 text-2xl max-mobile:text-xl text-darkOrange dark:text-lightOrange">
										2event
									</span>
								</p>
								<p className="shadow-inset font-bold mt-3 rounded-2xl p-3 ml-2">
									{t("experience.role1")}
								</p>
							</div>
							<div className="w-3/5 max-sm:w-full max-sm:mt-5 ml-10 max-sm:ml-0 mb-1 pb-2 flex justify-between border-b-[3px]">
								<p className="shadow-card dark:shadow-cardDark rounded-projectImg  p-5 pt-2 pb-2">
									03.2024
								</p>
								<p className="shadow-card dark:shadow-cardDark rounded-projectImg  p-5 pt-2 pb-2">
									10.2024
								</p>
							</div>
						</div>
						<p className="mt-7">{t("experience.desc1")}</p>

						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="Vue.js" index={0} />
							<SkillLogo name="Css" index={1} />
							<SkillLogo name="Js" index={2} />
							<SkillLogo name="Postman" index={3} />
							<SkillLogo name="Vite" index={4} />
							<SkillLogo name="Docker" index={5} />
							<SkillLogo name="Jira" index={6} />
							<SkillLogo name="Figma" index={7} />
							<SkillLogo name="GitLab" index={8} />
						</div>
					</div>
				</div>
			</AnimatedBorder>
			<AnimatedBorder>
				<div className="p-2  w-full ">
					<div className="">
						<div className="flex items-end max-sm:flex-col max-sm:items-center">
							<div className=" max-sm:w-full max-sm:flex max-sm:justify-between">
								<p className="font-bold text-2xl inline-flex items-center">
									<span className="font-bold mr-2 text-2xl max-mobile:text-xl text-darkOrange dark:text-lightOrange">
										PosterPrint
									</span>
								</p>
								<p className="shadow-inset font-bold mt-3 rounded-2xl p-3 ml-2">
									{t("experience.role2")}
								</p>
							</div>
							<div className="w-3/5 max-sm:w-full max-sm:mt-5 ml-10 max-sm:ml-0 mb-1 pb-2 flex justify-between border-b-[3px]">
								<p className="shadow-card  dark:shadow-cardDark rounded-projectImg  p-5 pt-2 pb-2">
									08/2023
								</p>
								<p className="shadow-card  dark:shadow-cardDark rounded-projectImg  p-5 pt-2 pb-2">
									03/2024
								</p>
							</div>
						</div>
						<p className="mt-7">{t("experience.desc2")}</p>
						<div className="mt-5 w-full p-1 max-mobile:text-center">
							<SkillLogo name="Next.js" index={1} darkSvg={true} />
							<SkillLogo name="Css" index={2} />
							<SkillLogo name="Js" index={3} />
							<SkillLogo name="Webpack" index={5} />
							<SkillLogo name="Jira" index={6} />
							<SkillLogo name="Postman" index={7} />
							<SkillLogo name="Figma" index={8} />
							<SkillLogo name="GitHub" index={9} />
						</div>
					</div>
				</div>
			</AnimatedBorder>

			{/* <article className="mt-10 p-6 dark:bg-backgroundLight bg-backgroundDark  dark:shadow-quoteDark shadow-quote text-center  max-w-2xl mx-auto">
				<blockquote className="text-lg italic dark:text-backgroundDark text-textLight">
					{t("experience.note")}
				</blockquote>
			</article> */}
		</div>
	);
};

export default Experience;

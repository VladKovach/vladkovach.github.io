import { useTranslation } from "react-i18next";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { AnimatedBorder } from "../ui/AnimatedBorder/AnimatedBorder";
import SkillItem from "../ui/SkillItem";
const Skills = () => {
	const { isFirstTimeVisible } = useSectionObserver();
	const { t } = useTranslation();

	return (
		<div
			className={`mt-10 ${isFirstTimeVisible["skills"] ? "" : "invisible"}`}
			style={
				isFirstTimeVisible["skills"]
					? {
							animationName: "fadeIn",
							animationFillMode: "both",
							animationDuration: "1s",
							animationTimingFunction: "ease-in-out",
						}
					: {}
			}
		>
			<div className="">
				<h2 className="font-bold  text-xl">Stack:</h2>
				{/* <div className="w-5/6 flex mt-2 flex-wrap shadow-card rounded p-3"> */}
				<AnimatedBorder index={0}>
					<SkillItem name="HTML" />
					<SkillItem name="Css" />
					<SkillItem name="JS" />
					<SkillItem name="TS" />
					<SkillItem name="Scss" />
					<SkillItem name="Tailwind" />
					<SkillItem name="React" />
					<SkillItem name="Redux" />
					<SkillItem name="NextJs" />
					<SkillItem name="Angular" />
					<SkillItem name="Vue.js" />
					<SkillItem name="Vite" />
					<SkillItem name="Webpack" />
					<SkillItem name="CI/CD" />
					<SkillItem name="Website Perfomance" />
					<SkillItem name="Jest" />
					<SkillItem name="Vitest" />
					<SkillItem name="Git" />
					<SkillItem name="GitHub" />
					<SkillItem name="REST" />
					<SkillItem name="JIRA" />
					<SkillItem name="UI & UX" />
					<SkillItem name="Docker" />
					<SkillItem name="Figma" />
					<SkillItem name="Postman" />
					{/* </div> */}
				</AnimatedBorder>
			</div>
			{/* <div className=" mt-5 ">
        <h2 className="font-bold text-xl">{t("about.whatican")}</h2>
        <AnimatedBorder classNames="flex flex-col" index={1}>
          <SkillItem name={t("about.skill1")} />
          <SkillItem name={t("about.skill2")} />
          <SkillItem name={t("about.skill3")} />
          <SkillItem name={t("about.skill4")} />
          <SkillItem name={t("about.skill5")} />
          <SkillItem name={t("about.skill6")} />
          <SkillItem name={t("about.skill7")} />
          <SkillItem name={t("about.skill8")} />
          <SkillItem name={t("about.skill9")} />
          <SkillItem name={t("about.skill10")} />{" "}
        </AnimatedBorder>
      </div> */}
			<div className=" mt-5 ">
				<h2 className="font-bold text-xl">{t("about.languagesTitle")}</h2>
				<AnimatedBorder index={2} classNames="flex flex-col">
					<SkillItem name={t("about.language1")} />
					<SkillItem name={t("about.language2")} />
					<SkillItem name={t("about.language3")} />
					<SkillItem name={t("about.language4")} />
				</AnimatedBorder>
			</div>
		</div>
	);
};

export default Skills;

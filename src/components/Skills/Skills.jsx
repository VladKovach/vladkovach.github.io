import { useTranslation } from "react-i18next";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import SkillItem from "../ui/SkillItem";
import { AnimatedBorder } from "../ui/AnimatedBorder/AnimatedBorder";

// Category accent colors per section
const categories = [
	{
		label: "Frontend",
		color: "border-blue-400/60 dark:border-blue-400/35",
		dot: "bg-blue-400",
		skills: [
			"HTML",
			"CSS",
			"JS",
			"TS",
			"SCSS",
			"Tailwind",
			"React",
			"Redux",
			"Next.js",
			"Angular",
			"Vue.js",
			"Vite",
			"Webpack",
			"Figma",
			"UI & UX",
			"Website Performance",
		],
	},
	{
		label: "Backend",
		color: "border-lightOrange/60 dark:border-lightOrange/35",

		dot: "bg-lightOrange",
		skills: [
			"Python",
			"Django",
			"Django REST Framework",
			"REST API",
			"Redis",
			"PostgreSQL",
			"Postman",
		],
	},
	{
		label: "DevOps & Tools",
		color: "border-green-400/50 dark:border-green-400/35",
		dot: "bg-green-400",
		skills: ["Docker", "CI/CD", "Linux", "SSH", "Hetzner VPS", "Nginx", "Git", "GitHub", "JIRA"],
	},
	{
		label: "Testing",
		color: "border-purple-400/55 dark:border-purple-400/35",
		dot: "bg-purple-400",
		skills: ["Jest", "Vitest", "Pytest", "React Testing Library"],
	},
];

const languages = [
	{ name: "German", level: "C1", fill: 78 },
	{ name: "English", level: "B2", fill: 65 },
	{ name: "Ukrainian", level: "Native", fill: 100 },
	{ name: "Russian", level: "C1", fill: 85 },
];

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
			<h2 className="font-bold text-3xl max-mobile:text-2xl">
				Skills
				{/* {t("skills.title")} */}
			</h2>

			{/* ── Stack Section ── */}
			<AnimatedBorder>
				<div className="rounded-2xl   w-full border-grayLight/20  p-6 shadow-card mt-6 mr-4 ml-4 max-mobile:mr-2 max-mobile:ml-2">
					<h2 className="font-bold text-2xl max-mobile:text-xl ">Stack</h2>

					{categories.map((cat) => (
						<div key={cat.label} className="w-full mt-6">
							{/* Category label */}
							<div className="flex items-center gap-2 mb-3">
								<span className={`w-2 h-2 rounded-full ${cat.dot}`} />
								<p className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-grayLight">
									{cat.label}
								</p>
							</div>
							{/* Skills card with unique border color */}
							<div
								className={`rounded-xl border ${cat.color} p-4 shadow-card flex flex-wrap gap-2`}
							>
								{cat.skills.map((skill) => (
									<SkillItem key={skill} name={skill} />
								))}
							</div>
						</div>
					))}
				</div>
				{/* ── Languages Section ── */}
				<div className="rounded-2xl  w-full border-grayLight/20 p-6 shadow-card mt-6">
					<h2 className="font-bold text-2xl max-mobile:text-xl mb-4">
						{t("about.languagesTitle")}
					</h2>
					<div className="flex flex-col gap-3">
						{languages.map((lang) => (
							<div key={lang.name} className="flex items-center gap-3">
								<span className="w-24 text-sm font-medium">{lang.name}</span>
								{/* Progress bar */}
								<div className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-grayDark overflow-hidden">
									<div
										className="h-full rounded-full bg-lightOrange transition-all duration-700"
										style={{ width: `${lang.fill}%` }}
									/>
								</div>
								<span className="text-xs text-grayLight w-12 text-right">{lang.level}</span>
							</div>
						))}
					</div>
				</div>
			</AnimatedBorder>
		</div>
	);
};

export default Skills;

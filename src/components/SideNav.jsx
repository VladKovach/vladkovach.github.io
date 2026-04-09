import { useSectionObserver } from "../hooks/useSectionObserver";

const sections = [
	{ id: "about", label: "Home" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "experience", label: "Experience" },
	{ id: "contact", label: "Contact" },
];

export default function SideNav() {
	const { activeSection } = useSectionObserver();
	const activeIndex = sections.findIndex((s) => s.id === activeSection);
	const fillPercent = (activeIndex / (sections.length - 1)) * 100;

	return (
		<nav className="fixed top-1/2 left-4 transform -translate-y-1/2 h-1/2">
			<div className="relative h-full flex flex-col items-center">
				<div className="absolute w-[2px] bg-textLight dark:bg-grayDark top-0 bottom-0" />
				<div
					className="absolute w-[2px] bg-gradient-to-b from-textLight to-grayDark dark:from-grayDark dark:to-textLight top-0"
					style={{ height: `${fillPercent}%`, transition: "height 0.5s ease" }}
				/>
				<ul className="relative z-10 flex flex-col items-center justify-between h-full">
					{sections.map((sec) => {
						const isActive = activeSection === sec.id;
						return (
							<li key={sec.id}>
								<a
									href={`#${sec.id}`}
									className={` block w-5 h-5 max-sm:w-4 max-sm:h-4 ${
										isActive
											? "bg-grayDark dark:bg-textLight rotate-135 scale-110"
											: "bg-textLight dark:bg-grayDark"
									}
                				    border-textLight dark:border-grayDark
                				    transition-all duration-1000
                  					`}
									title={sec.label}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

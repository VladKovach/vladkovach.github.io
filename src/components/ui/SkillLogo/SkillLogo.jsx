import { GetSvg } from "../../GetSvg";
import styles from "./skillLogo.module.css";
const SkillLogo = ({ name, index, darkSvg }) => {
	return (
		<div
			className="
      relative inline-block perspective-near m-2
      shadow-card
      dark:shadow-textLight/20
      rounded-full
    "
		>
			<div className={`${styles.container} z-10`} style={{ animationDelay: `${index * 300}ms` }}>
				{[...Array(10)].map((_, i) => (
					<div
						key={i}
						className={`
              ${styles.sideLayer}
              bg-gray-200 dark:bg-grayDark
              border border-gray-300/50 dark:border-transparent
            `}
						style={{ transform: `translateZ(${i * 0.5}px)` }}
					>
						{i === 9 ? (
							<div className="z-20">
								<GetSvg svg={name} width="40" height="40" darkSvg />
							</div>
						) : null}
					</div>
				))}
				<div className="z-20 rotate-y-180 font-bold text-gray-800 dark:text-textLight break-words text-center text-xs ">
					{name}
				</div>
			</div>
		</div>
	);
};

export default SkillLogo;

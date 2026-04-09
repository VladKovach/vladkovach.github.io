const heroIdeas = ["imagine", "plan", "desire", "think"];
import { useTranslation } from "react-i18next";
import styles from "./ideasSlider.module.css";
import { GetSvg } from "../../GetSvg";
export const IdeasSlider = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.slider}>
			<div className={styles.container}>
				{heroIdeas.map((word) => (
					<p key={word} className="flex items-center gap-1 pb-2 min-w-full">
						<span>{t(`hero.${word.toLowerCase()}`)}</span>
						<span className="rounded-full pb-1">
							<GetSvg svg={word} />
						</span>
					</p>
				))}
			</div>
		</div>
	);
};

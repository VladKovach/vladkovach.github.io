import { GetSvg } from "../../GetSvg";
import styles from "./cubesScene.module.css";

const cubes = [
	{ id: "cube-1", svg: "Html", svg2: "Css" },
	{ id: "cube-2", svg: "Js", svg2: "Ts" },
	{ id: "cube-3", svg: "React", svg2: "Next.js" },
	{ id: "cube-4", svg: "Scss", svg2: "Tailwind" },
	{ id: "cube-5", svg: "Git", svg2: "GitHub" },
	{ id: "cube-6", svg: "Angular", svg2: "Vue.js" },
	{ id: "cube-7", svg: "Python", svg2: "Django" },
	{ id: "cube-8", svg: "Vite", svg2: "PostgreSQL" },
	{ id: "cube-9", svg: "Rest", svg2: "Pytest" },
];
export const CubesScene = () => {
	return (
		<div
			className={`grid grid-cols-3 gap-4.5 max-sm:w-[200px] max-sm:mt-8  content-center ${styles.scene}`}
		>
			{cubes.map((cube) => (
				<div key={cube.id} className={styles.cube}>
					<div
						className={`${styles.face} ${styles.face_front}  inline-flex items-center justify-center`}
					>
						<GetSvg svg={cube.svg} />
					</div>
					<div className={`${styles.face} ${styles.face_back} `}></div>
					<div
						className={`${styles.face} ${styles.face_right} inline-flex items-center justify-center `}
					>
						<GetSvg svg={cube.svg2} />
					</div>
					<div className={`${styles.face} ${styles.face_left} `}></div>
					<div className={`${styles.face} ${styles.face_top} `}></div>
					<div className={`${styles.face} ${styles.face_bottom} `}></div>
				</div>
			))}
		</div>
	);
};

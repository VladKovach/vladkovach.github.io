import { useRef, useState } from "react";
import styles from "./animatedBorder.module.css";

export const AnimatedBorder = ({ classNames, children, index }) => {
	const containerRef = useRef([]);

	const handleMouseMove = (index) => (e) => {
		const container = containerRef.current[index];
		if (!container) return;
		const rect = container.getBoundingClientRect();

		const mouseX = e.clientX - rect.left - rect.width / 2;
		const mouseY = e.clientY - rect.top - rect.height / 2;

		let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

		angle = (angle + 360) % 360;

		container.style.setProperty("--start", angle + 60);
	};

	return (
		<div
			ref={(el) => (containerRef.current[index] = el)}
			onMouseMove={handleMouseMove(index)}
			className={` ${styles.card} ${classNames}  mb-8 timeline-card w-full flex  mt-2 flex-wrap
         shadow-card dark:shadow-cardDark
          rounded-xl p-3 dark: `}
			// style={{ "--x": `${coords.x}px`, "--y": `${coords.y}px` }}
		>
			<div className={styles.glow}></div>
			{children}
		</div>
	);
};

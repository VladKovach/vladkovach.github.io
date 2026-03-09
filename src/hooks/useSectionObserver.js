import { useEffect, useState, useRef } from "react";

const sectionIds = ["about", "skills", "projects", "experience", "contact"];

export function useSectionObserver() {
	const [activeSection, setActiveSection] = useState(sectionIds[0]);
	const [isFirstTimeVisible, setIsFirstTimeVisible] = useState({});
	const seenRef = useRef({});

	// ── 1. Active section via scroll (fixes the "about never active" bug) ──
	useEffect(() => {
		const handleScroll = () => {
			let current = sectionIds[0];
			let minDistance = Infinity;

			for (const id of sectionIds) {
				const el = document.getElementById(id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				const distance = Math.abs(rect.top - 150);

				if (rect.top <= 150 && distance < minDistance) {
					minDistance = distance;
					current = id;
				}
			}

			setActiveSection(current);
		};

		handleScroll(); // set correct active on mount
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// ── 2. First-time visibility via IntersectionObserver (keeps animations) ──
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = entry.target.id;
					if (entry.isIntersecting && !seenRef.current[id]) {
						seenRef.current[id] = true;
						setIsFirstTimeVisible((prev) => ({ ...prev, [id]: true }));
					}
				});
			},
			{ rootMargin: "-10% 0px -10% 0px" },
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return { activeSection, isFirstTimeVisible };
}

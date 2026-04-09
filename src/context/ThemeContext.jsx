import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) return localTheme;
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	}, []);
	const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
};

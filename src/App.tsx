import { useState } from "react";
import { colors, darkColors } from "./config/colors";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { AppShowcase } from "./components/AppShowcase";
import { CTA } from "./components/footer/CTA";
import { Footer } from "./components/footer/Footer";

export default function App() {
	const [isDark, setIsDark] = useState(false);
	const theme = isDark ? darkColors : colors;

	return (
		<div style={{ backgroundColor: theme.background }}>
			<Header
				theme={theme}
				isDark={isDark}
				onToggleTheme={() => setIsDark(!isDark)}
			/>

			<div className="pt-16">
				<Hero theme={theme} />
				<AppShowcase theme={theme} />
				<CTA theme={theme} />
			</div>

			<Footer theme={theme} />
		</div>
	);
}

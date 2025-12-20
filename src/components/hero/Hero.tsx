import React from "react";
import { type ColorTheme } from "../../config/colors";
import { MockPhoneShowcase } from "./MockPostShowcase";
import { mockPhoneData } from "../../constants";
import HeroText from "./HeroText";
interface HeroProps {
	theme: ColorTheme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
	return (
		<section
			className="min-h-screen flex items-center justify-center px-6 py-20"
			style={{ backgroundColor: theme.background }}
		>
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				<HeroText theme={theme} />

				<MockPhoneShowcase theme={theme} mockPhoneData={mockPhoneData} />
			</div>
		</section>
	);
};

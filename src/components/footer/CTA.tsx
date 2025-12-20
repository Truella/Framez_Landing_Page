import React from "react";
import {type ColorTheme } from "../config/colors";

interface CTAProps {
	theme: ColorTheme;
}

export const CTA: React.FC<CTAProps> = ({ theme }) => {
	return (
		<section className="py-20 px-6" style={{ backgroundColor: theme.surface }}>
			<div
				className="max-w-4xl mx-auto text-center p-12 rounded-3xl"
				style={{
					background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
				}}
			>
				<h2 className="text-4xl font-bold text-white mb-4">
					Ready to Explore?
				</h2>
				<p className="text-xl text-white mb-8 opacity-90">
					Watch the full demo video to see Framez in action
				</p>
				<button
					className="px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
					style={{
						backgroundColor: "white",
						color: theme.primary,
					}}
				>
					Watch Full Demo
				</button>
			</div>
		</section>
	);
};

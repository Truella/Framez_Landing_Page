import React from "react";
import {type ColorTheme } from "../config/colors";

interface ScreenshotsProps {
	theme: ColorTheme;
}

export const Screenshots: React.FC<ScreenshotsProps> = ({ theme }) => {
	return (
		<section
			className="py-20 px-6"
			style={{ backgroundColor: theme.background }}
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2
						className="text-4xl font-bold mb-4"
						style={{ color: theme.textPrimary }}
					>
						See It In Action
					</h2>
					<p className="text-xl" style={{ color: theme.textSecondary }}>
						Explore the beautiful interface and smooth interactions
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[1, 2, 3].map((i) => (
						<div
							key={i}
							className="aspect-[9/16] rounded-2xl overflow-hidden"
							style={{
								background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
								opacity: 0.8,
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

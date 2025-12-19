import React from "react";
import { type ColorTheme } from "../config/colors";
import { MockPhoneShowcase } from "./MockPhoneShowcase";
import { mockPhoneData } from "../constants";
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
				<div className="space-y-6">
					<div className="inline-block">
						<div
							className="text-sm font-semibold px-4 py-2 rounded-full"
							style={{
								background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
								color: "#ffffff",
							}}
						>
							Portfolio Project
						</div>
					</div>

					<h1
						className="text-5xl md:text-6xl font-bold leading-tight"
						style={{ color: theme.textPrimary }}
					>
						Share Your{" "}
						<span
							style={{
								background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							Moments
						</span>
					</h1>

					<p
						className="text-xl leading-relaxed"
						style={{ color: theme.textSecondary }}
					>
						Framez is a modern social platform for capturing and sharing life's
						beautiful moments through photos and stories.
					</p>

					<div className="flex flex-wrap gap-4">
						<button
							className="px-8 py-4 rounded-lg font-semibold text-white transition-transform hover:scale-105"
							style={{
								background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
							}}
						>
							Watch Demo
						</button>
						{/*<button
							className="px-8 py-4 rounded-lg font-semibold transition-all"
							style={{
								backgroundColor: theme.surface,
								color: theme.textPrimary,
								border: `2px solid ${theme.border}`,
							}}
						>
							View Screenshots
						</button>
					 */}
					</div>
				</div>

				<MockPhoneShowcase theme={theme} mockPhoneData={mockPhoneData} />
			</div>
		</section>
	);
};

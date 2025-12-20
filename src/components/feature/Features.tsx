import React from "react";
import { Camera, Heart, Grid } from "lucide-react";
import {type ColorTheme } from "../../config/colors";
import { FeatureCard } from "./FeatureCard";

interface FeaturesProps {
	theme: ColorTheme;
}

export const Features: React.FC<FeaturesProps> = ({ theme }) => {
	const features = [
		{
			icon: Camera,
			title: "Capture Moments",
			description:
				"Share your world through stunning photos and engaging stories",
		},
		{
			icon: Heart,
			title: "Connect & Engage",
			description: "Like, comment, and interact with friends and creators",
		},
		{
			icon: Grid,
			title: "Beautiful Profiles",
			description: "Showcase your creativity with elegant profile layouts",
		},
	];

	return (
		<section className="py-20 px-6" style={{ backgroundColor: theme.surface }}>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2
						className="text-4xl font-bold mb-4"
						style={{ color: theme.textPrimary }}
					>
						Everything You Need
					</h2>
					<p className="text-xl" style={{ color: theme.textSecondary }}>
						Built with modern features for the best social experience
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<FeatureCard key={index} feature={feature} theme={theme} />
					))}
				</div>
			</div>
		</section>
	);
};

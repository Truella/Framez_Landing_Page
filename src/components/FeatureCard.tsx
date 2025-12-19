import React from "react";
import {type LucideIcon } from "lucide-react";
import {type ColorTheme } from "../config/colors";

interface FeatureCardProps {
	feature: {
		icon: LucideIcon;
		title: string;
		description: string;
	};
	theme: ColorTheme;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, theme }) => {
	const Icon = feature.icon;

	return (
		<div
			className="p-8 rounded-2xl transition-transform hover:scale-105"
			style={{
				backgroundColor: theme.background,
				border: `1px solid ${theme.border}`,
			}}
		>
			<div
				className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
				style={{
					background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
				}}
			>
				<Icon size={24} color="#ffffff" />
			</div>

			<h3
				className="text-xl font-bold mb-2"
				style={{ color: theme.textPrimary }}
			>
				{feature.title}
			</h3>

			<p style={{ color: theme.textSecondary }}>{feature.description}</p>
		</div>
	);
};

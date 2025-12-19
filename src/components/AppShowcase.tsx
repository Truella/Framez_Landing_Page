import React from "react";
import { motion } from "framer-motion";
import  ShowcaseItem  from "./ShowcaseItem";
import {type ColorTheme } from "../config/colors"; 
import { showcaseItems } from "../constants"; 
interface AppShowcaseProps {
	theme: ColorTheme;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ theme }) => {

	return (
		<section
			className="py-20 px-6"
			style={{ backgroundColor: theme.background }}
		>
			<div className="max-w-6xl mx-auto space-y-32 overflow-hidden">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2
						className="text-4xl md:text-5xl font-bold mb-4"
						style={{ color: theme.textPrimary }}
					>
						Experience{" "}
						<span
							style={{
								background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							Framez
						</span>
					</h2>
					<p
						className="text-xl max-w-2xl mx-auto"
						style={{ color: theme.textSecondary }}
					>
						A seamless social experience designed for modern storytellers
					</p>
				</motion.div>

				{showcaseItems.map((item, index) => (
					<ShowcaseItem
						key={index}
						{...item}
						reverse={index % 2 !== 0}
						theme={theme}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

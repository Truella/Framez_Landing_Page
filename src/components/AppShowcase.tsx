import React from "react";
import { motion } from "framer-motion";
import  ShowcaseItem  from "./ShowcaseItem";
import {type ColorTheme } from "../config/colors";  
interface AppShowcaseProps {
	theme: ColorTheme;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ theme }) => {
	const showcaseItems = [
		{
			title: "Create Beautiful Posts",
			description:
				"Share your moments with stunning photos and engaging captions. Express yourself with our intuitive post creation interface.",
			image:
				"/images/create_post.png",
		},
		{
			title: "Engage with Community",
			description:
				"Connect with friends and creators through likes, comments, and shares. Build meaningful connections in a vibrant community.",
			image:
				"/images/post_dark.png",
		},
		{
			title: "Your Personal Space",
			description:
				"Customize your profile and showcase your creativity. Manage your posts and saved content all in one place.",
			image:
				"images/user_post.png",
		},
	];

	return (
		<section
			className="py-20 px-6"
			style={{ backgroundColor: theme.background }}
		>
			<div className="max-w-6xl mx-auto space-y-32">
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

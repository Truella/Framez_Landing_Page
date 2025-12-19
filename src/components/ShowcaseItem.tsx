import React from "react";
import { motion } from "framer-motion";
import {type ColorTheme } from "../config/colors";

interface ShowcaseItemProps {
	title: string;
	description: string;
	image: string;
	reverse?: boolean;
	theme: ColorTheme;
	index: number;
}

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
	title,
	description,
	image,
	reverse = false,
	theme,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			className={`grid md:grid-cols-2 gap-12 items-center ${
				reverse ? "md:grid-flow-dense" : ""
			}`}
		>
			<motion.div
				className={`space-y-4 ${reverse ? "md:col-start-2" : ""}`}
				initial={{ opacity: 0, x: reverse ? 50 : -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
			>
				<h3
					className="text-3xl md:text-4xl font-bold"
					style={{ color: theme.textPrimary }}
				>
					{title}
				</h3>
				<p
					className="text-lg leading-relaxed"
					style={{ color: theme.textSecondary }}
				>
					{description}
				</p>
			</motion.div>

			<motion.div
				className={`relative ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
				initial={{ opacity: 0, x: reverse ? -50 : 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
				whileHover={{ scale: 1.05 }}
			>
				<div
					className="overflow-hidden mx-auto"
					style={{
						maxWidth: "340px",
					}}
				>
					<img
						src={image}
						alt={title}
						className="w-full h-auto"
						style={{ display: "block" }}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};
export default ShowcaseItem;
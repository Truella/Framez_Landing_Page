import React from "react";
import { Heart, MessageCircle, Share2, User2 } from "lucide-react";
import {type ColorTheme } from "../config/colors";
import type { MockPhoneItem } from "../types";

interface MockPhoneProps {
	theme: ColorTheme;
	item: MockPhoneItem
}

export const MockPhone: React.FC<MockPhoneProps> = ({ theme, item }) => {
	return (
		<div
			className={`absolute left-1/2 top-1/2 -translate-1/2 rounded-2xl overflow-hidden shadow-md mx-auto hover:transform ${item.hoverClass} transition-all duration-500`}
			style={{
				backgroundColor: theme.background,
				maxWidth: "320px",
				border: `1px solid ${theme.border}`,
			}}
		>
			<div className="p-4 space-y-4">
				<div className="flex items-center gap-3">
					<div
						className="w-10 h-10 rounded-full flex items-center justify-center"
						style={{
							background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
						}}
					><User2 color="#ffffff"/></div>
					<div className="flex-1">
						<div className="font-semibold" style={{ color: theme.textPrimary }}>
							{item.username}
						</div>
						<div className="text-sm" style={{ color: theme.textSecondary }}>
							{item.time}
						</div>
					</div>
				</div>

				<div
					className="aspect-square rounded-lg overflow-hidden"
					style={{
						background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
					}}
				><img src={item.image} alt="" className="object-cover h-full"/></div>

				<div className="flex items-center gap-6 py-2">
					<Heart size={24} style={{ color: theme.like }} />
					<MessageCircle size={24} style={{ color: theme.comment }} />
					<Share2 size={24} style={{ color: theme.share }} />
				</div>

				<div style={{ color: theme.textPrimary }}>
					<span className="font-semibold">{item.likes}</span> likes
				</div>
			</div>
		</div>
	);
};

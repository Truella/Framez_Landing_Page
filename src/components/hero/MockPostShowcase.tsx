import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ColorTheme } from "../../config/colors";
import type { MockPhoneItem } from "../../types";
import { MockPhone } from "./MockPost";

interface MockPhoneShowcaseProps {
	theme: ColorTheme;
	mockPhoneData: MockPhoneItem[];
}

export const MockPhoneShowcase: React.FC<MockPhoneShowcaseProps> = ({
	theme,
	mockPhoneData,
}) => {
	const [isMobile, setIsMobile] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Auto-rotate for mobile
	useEffect(() => {
		if (!isMobile) return;

		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % mockPhoneData.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [isMobile, mockPhoneData.length]);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe) {
			setActiveIndex((prev) => (prev + 1) % mockPhoneData.length);
		}

		if (isRightSwipe) {
			setActiveIndex(
				(prev) => (prev - 1 + mockPhoneData.length) % mockPhoneData.length
			);
		}

		setTouchStart(0);
		setTouchEnd(0);
	};

	const goToSlide = (index: number) => {
		setActiveIndex(index);
	};

	const nextSlide = () => {
		setActiveIndex((prev) => (prev + 1) % mockPhoneData.length);
	};

	const prevSlide = () => {
		setActiveIndex(
			(prev) => (prev - 1 + mockPhoneData.length) % mockPhoneData.length
		);
	};

	return (
		<div className="relative">
			<div
				className="rounded-3xl overflow-hidden shadow-sm"
				style={{
					background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
				}}
			>
				<div
					className={`min-h-[80vh] relative ${!isMobile ? "group" : ""}`}
					style={{ backgroundColor: theme.surface }}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{mockPhoneData.map((item, index) => (
						<MockPhone
							theme={theme}
							item={item}
							key={item.id}
							isMobile={isMobile}
							isActive={isMobile ? index === activeIndex : undefined}
						/>
					))}

					{/* Mobile Navigation Controls */}
					{isMobile && (
						<>
							{/* Arrow Buttons */}
							<button
								onClick={prevSlide}
								className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full backdrop-blur-md"
								style={{
									backgroundColor: `${theme.surface}cc`,
									color: theme.textPrimary,
								}}
							>
								<ChevronLeft size={24} />
							</button>

							<button
								onClick={nextSlide}
								className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full backdrop-blur-md"
								style={{
									backgroundColor: `${theme.surface}cc`,
									color: theme.textPrimary,
								}}
							>
								<ChevronRight size={24} />
							</button>

							{/* Dot Indicators */}
							<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
								{mockPhoneData.map((_, index) => (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className="w-2 h-2 rounded-full transition-all duration-300"
										style={{
											backgroundColor:
												index === activeIndex
													? theme.primary
													: `${theme.textTertiary}80`,
											width: index === activeIndex ? "24px" : "8px",
										}}
									/>
								))}
							</div>
						</>
					)}
				</div>
			</div>

			{/* Mobile Instructions - Only show on first load */}
			{isMobile && (
				<div className="text-center mt-4">
					<p className="text-sm" style={{ color: theme.textSecondary }}>
						Swipe to explore • Auto-rotates every 3s
					</p>
				</div>
			)}
		</div>
	);
};

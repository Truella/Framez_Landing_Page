import type { MockPhoneItem } from "./types";

export const mockPhoneData: MockPhoneItem[] = [
	{
		id: 2,
		username: "@ui_daily",
		time: "6 hours ago",
		image: "/images/Beach.jpg",
		likes: 892,
		hoverClass: "group-hover:-translate-x-2/3 group-hover:-rotate-4",
	},
	{
		id: 3,
		username: "@motion_design",
		time: "1 day ago",
		image: "/images/people.jpg",
		likes: 2451,
		hoverClass: "group-hover:-translate-x-1/9 group-hover:-rotate-4",
	},
	{
		id: 1,
		username: "@creative_user",
		time: "2 hours ago",
		image: "/images/happy.jpg",
		likes: 1234,

		hoverClass:
			"group-hover:-translate-x-1/4 group-hover:translate-y-4/5 group-hover:rotate-6",
	},
];

export const showcaseItems = [
	{
		title: "Create Beautiful Posts",
		description:
			"Share your moments with stunning photos and engaging captions. Express yourself with our intuitive post creation interface.",
		image: "/images/create_post.png",
	},
	{
		title: "Engage with Community",
		description:
			"Connect with friends and creators through likes, comments, and shares. Build meaningful connections in a vibrant community.",
		image: "/images/post_dark.png",
	},
	{
		title: "Your Personal Space",
		description:
			"Customize your profile and showcase your creativity. Manage your posts and saved content all in one place.",
		image: "images/user_post.png",
	},
	{
		title: "Saved Posts",
		description:
			"Save and organize your favorite posts for easy access later. Create collections to keep your inspirations handy.",
		image: "images/saved_post.png",
	},
];
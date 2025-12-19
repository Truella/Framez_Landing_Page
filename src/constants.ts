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

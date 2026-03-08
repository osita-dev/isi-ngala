import ujuorig from "@/assets/ujuorig.jpeg";
import lowBun from "@/assets/low_bun.jpeg";
import bunWithFringe from "@/assets/bun_with_fringe.jpeg";
import ujucurly from "@/assets/ujucurly.jpeg";
import adaorig from "@/assets/adaorig.jpeg";
import cornrow from "@/assets/cornrow.jpeg";
import uju from "@/assets/uju.jpeg";

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
}

export interface Post {
  id: string;
  userId: string;
  user: User;
  image?: string;
  caption: string;
  hairType: string;
  tags: string[];
  likes: number;
  comments: number;
  createdAt: string;
  liked?: boolean;
  saved?: boolean;
}

export const users: User[] = [
  {
    id: "1",
    username: "ujunaturals",
    displayName: "Uju",
    avatar: ujuorig,
    bio: "Natural hair enthusiast 🌿 4C hair journey | Lagos, Nigeria",
    followers: 2340,
    following: 189,
    posts: 47,
  },
  {
    id: "2",
    username: "adabeauty",
    displayName: "Ada",
    avatar: adaorig,
    bio: "Celebrating African beauty ✨ Hair stylist & educator",
    followers: 5120,
    following: 312,
    posts: 89,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    userId: "1",
    user: users[0],
    image: ujucurly,
    caption: "Twist-out on freshly washed hair 💫 Used shea butter and black castor oil for definition. My curls are thriving!",
    hairType: "4C",
    tags: ["twist-out", "wash-day", "4C-curls", "natural-hair"],
    likes: 234,
    comments: 18,
    createdAt: "2026-02-28T10:00:00Z",
  },
  {
    id: "2",
    userId: "2",
    user: users[1],
    image: adaorig,
    caption: "Embracing my afro in all its glory 👑 No product, just pure natural texture. This is what freedom looks like.",
    hairType: "4B",
    tags: ["afro", "natural-texture", "self-love", "african-beauty"],
    likes: 512,
    comments: 42,
    createdAt: "2026-02-27T14:30:00Z",
  },
  {
    id: "3",
    userId: "1",
    user: users[0],
    image: lowBun,
    caption: "Sleek low bun for the office 💼 Protective styling doesn't have to be boring!",
    hairType: "4C",
    tags: ["low-bun", "protective-style", "office-hair", "sleek"],
    likes: 189,
    comments: 12,
    createdAt: "2026-02-26T09:15:00Z",
  },
  {
    id: "4",
    userId: "1",
    user: users[0],
    image: bunWithFringe,
    caption: "Bun with a fringe moment 🌸 Feeling playful today. Who else loves this style?",
    hairType: "4C",
    tags: ["bun", "fringe", "playful", "natural-styling"],
    likes: 321,
    comments: 27,
    createdAt: "2026-02-25T16:00:00Z",
  },
  {
    id: "5",
    userId: "2",
    user: users[1],
    image: cornrow,
    caption: "Feed-in cornrows 🔥 My go-to protective style. Lasts two weeks and looks amazing!",
    hairType: "4B",
    tags: ["cornrows", "protective-style", "braids", "feed-in"],
    likes: 445,
    comments: 35,
    createdAt: "2026-02-24T11:45:00Z",
  },
  {
    id: "6",
    userId: "1",
    user: users[0],
    image: uju,
    caption: "Blowout season 🍂 When your natural hair hits different after a good stretch.",
    hairType: "4C",
    tags: ["blowout", "stretched-hair", "volume", "natural"],
    likes: 278,
    comments: 20,
    createdAt: "2026-02-23T13:20:00Z",
  },
  {
    id: "7",
    userId: "2",
    user: users[1],
    caption: "Just had the best wash day in months! My hair feels so soft and moisturized. Gonna try a new deep conditioner recipe next week — avocado, honey, and olive oil. Anyone tried this combo before? 🧴💚",
    hairType: "4B",
    tags: ["wash-day", "deep-conditioner", "hair-care", "moisture"],
    likes: 167,
    comments: 24,
    createdAt: "2026-02-22T08:30:00Z",
  },
  {
    id: "8",
    userId: "1",
    user: users[0],
    caption: "Reminder: your natural hair is beautiful at every stage of the journey. Whether you're transitioning, big chopping, or years into being natural — you're doing amazing 👑✨",
    hairType: "4C",
    tags: ["motivation", "natural-hair", "self-love"],
    likes: 402,
    comments: 31,
    createdAt: "2026-02-21T19:00:00Z",
  },
];

export const trendingTags = [
  "wash-day", "4C-curls", "protective-style", "twist-out",
  "cornrows", "afro", "natural-hair", "hair-growth",
  "shea-butter", "loc-journey", "braids", "silk-press",
];

export const hairCategories = [
  { name: "Twist Outs", count: 1240 },
  { name: "Protective Styles", count: 3450 },
  { name: "Wash Day", count: 890 },
  { name: "Cornrows & Braids", count: 2100 },
  { name: "Afros", count: 1670 },
  { name: "Locs", count: 980 },
  { name: "Silk Press", count: 760 },
  { name: "Bantu Knots", count: 540 },
];

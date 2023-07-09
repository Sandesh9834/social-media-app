import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Juicy and vibrant, nature's sweet delight,Fruit's colorful palette, a healthy sight.Nourishing bodies with vitamins and fiber,Nature's gift, a refreshing desire.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        id: "c4525a94-eebf-45c9-aa08-8432e6d73a42",
        createdAt: "2023-06-01",
        username: "subhamsoni",
        comment: "Nice Fruit",
      },
      {
        id: "75ec47f3-f37f-4820-9888-5b07f78f528f",
        createdAt: "2023-06-03",
        username: "rinkusingh",
        comment: "Wow",
      },
    ],
    fullname: "Aritra Chowdhury",
    username: "aritrachowdhury",
    postImage: ["https://source.unsplash.com/random/1100x900/?fruit"],
    createdAt: "2023-06-01",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Weights clanking, bodies in motion,Gym's energy fuels dedication and devotion.Sweat dripping, muscles pushing to the max,A place where strength and fitness intersect.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        id: "8408233c-676e-455d-a406-35f98fb747b5",
        createdAt: "2023-06-02",
        username: "aritrachowdhury",
        comment: "Lightweight Buddy",
      },
    ],
    fullname: "Subham Soni",
    username: "subhamsoni",
    postImage: ["https://source.unsplash.com/random/1100x900/?gym"],
    createdAt: "2023-06-02",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "ChatGPT, an advanced language model,A virtual assistant, clever and intellectual,With its vast knowledge, it helps and interacts,Understanding queries, providing accurate facts.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "Rinku Singh",
    username: "rinkusingh",
    postImage: [
      "https://res.cloudinary.com/dazdakg1z/video/upload/v1684863392/samples/sea-turtle.mp4",
    ],
    createdAt: "2023-06-03",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "In the wild they roam, majestic and grand,Their size and strength, hard to withstand. With gentle eyes and a trunk so long,Elephants, nature's wonder, forever strong.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "Rinku Singh",
    username: "rinkusingh",
    postImage: [
      "https://res.cloudinary.com/dazdakg1z/video/upload/v1684863395/samples/elephants.mp4",
    ],
    createdAt: "2023-06-04",
    updatedAt: formatDate(),
  },
];

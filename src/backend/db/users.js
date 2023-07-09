import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Aritra",
    lastName: "Chowdhury",
    username: "aritrachowdhury",
    password: "aritrachowdhury123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar:
      "https://res.cloudinary.com/dazdakg1z/image/upload/v1687503763/echosphere/rtoo1m2dlhpgqlduyujp.gif",
    bio: "Passionate learner dedicated to exploring the intersections of art and technology for creative problem-solving. Embracing challenges with an open mind and a thirst for knowledge.",
    website: "https://aritraportfolio.netlify.app/",
    background:
      "https://res.cloudinary.com/dazdakg1z/image/upload/v1684863383/samples/animals/three-dogs.jpg",
  },
  {
    _id: uuid(),
    firstName: "Subham",
    lastName: "Soni",
    username: "subhamsoni",
    password: "subhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://picsum.photos/id/1009/200/200",
    bio: "Motivated gym trainer committed to inspiring clients to achieve their fitness goals through personalized training programs and continuous support. Empowering individuals to transform their bodies and lives with a holistic approach to health and wellness.",
    website: "https://www.mantrahealthclub.com/mantra/",
    background:
      "https://res.cloudinary.com/dazdakg1z/image/upload/v1684863379/samples/food/pot-mussels.jpg",
  },
  {
    _id: uuid(),
    firstName: "Rinku",
    lastName: "Singh",
    username: "rinkusingh",
    password: "rinkusingh123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://picsum.photos/id/1005/200/200",
    bio: "Dynamic cricketer with exceptional batting skills and a fierce passion for the game. Known for delivering match-winning performances and contributing to the team's success with an unwavering dedication to the sport.",
    website: "https://www.kkr.in/players/rinku-singh-profile-64727",
    background:
      "https://res.cloudinary.com/dazdakg1z/image/upload/v1684863378/samples/animals/reindeer.jpg",
  },
  {
    _id: uuid(),
    firstName: "Mukesh",
    lastName: "Gehlot",
    username: "mukeshgehlot",
    password: "mukeshgehlot123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://picsum.photos/id/1006/200/200",
    bio: "In India's strength realm, a power lifter rises,Muscles chiseled, determination in their eyes.Lifting heavy burdens, defying all odds,They embody resilience, breaking through iron rods.",
    website: "https://en.wikipedia.org/wiki/Mukesh_Singh_Gehlot",
    background:
      "https://res.cloudinary.com/dazdakg1z/image/upload/v1684863389/samples/landscapes/nature-mountains.jpg",
  },
  {
    _id: uuid(),
    firstName: "Sonu",
    lastName: "Nigam",
    username: "sonunigam",
    password: "sonunigam123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://picsum.photos/id/1008/200/200",
    bio: "From the land of melodies, an Indian singer shines,Their voice enchanting, captivating hearts and minds. Through soulful ballads or energetic beats,They create magic, making the world sway to their feats.",
    website: "https://en.wikipedia.org/wiki/Sonu_Nigam",
    background:
      "https://res.cloudinary.com/dazdakg1z/image/upload/v1684863377/samples/people/kitchen-bar.jpg",
  },
];

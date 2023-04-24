import { CHAR_SET, STRING_LENGTH } from "./helpers";
export const generateString = () => {
  const message = [
    "Good question - I am still trying to figure that out!",
    "I do NOT work in an office",
    "Full time student and rockin it!",
    "I am a traveler",
    "Inner and outer peace",
    "A compassionate world",
    "Personal growth",
    "Finding true love",
    "Understanding other people",
    "I am a bit of a bright spark - Intelligence",
    "I am always helping out - Kindness",
    "My life is a crazy explosion of shapes and colors - Creativity",
    "I am a survivor - Strength",
    "I know what I want - Confidence",
    "I like to make my friends laugh",
    "They always come to me for advice",
    "I tend to be the peacemaker between friends",
    "I offer support where I can",
    "I am usually the one to help them fix things",
    "Vihan op",
    "Rajesh op",
    "Suresh op",
    "Avhi op",
    "Virat op",
    "Subroto op",
    "Arjun op",
    "Sirdhart op",
    "Kamala op",
    "Sruti op",
    "Sunanda op",
    "Work out? Are you serious right now?",
    "Every day - if walking through the shops count as working out!",
    "Getting out of bed is enough of a workout for me!",
    "The people at the gym know me by name",
    "Fitness is life!",
    "It looked like fun",
    "I was bored",
    "My friends encouraged me to do so",
    "All of the above",
    "None of the above",
  ];

  return message[Math.floor(Math.random() * message.length)];
};

export const generateNames = () => {
  const nameList = [
    "Vihan",
    "Rajesh",
    "Suresh",
    "Avhi",
    "Virat",
    "Subroto",
    "Arjun",
    "Sirdhart",
    "Kamala",
    "Sruti",
    "Sunanda",
  ];

  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const generateImageUrl = () => {
  const url = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUGFZDrnAumJwM5JkKRRA0xCLvqmkzBFoT4fR33pL4YlwoE7yyEVB3GPgoM-QZIHRU7s&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUGFZDrnAumJwM5JkKRRA0xCLvqmkzBFoT4fR33pL4YlwoE7yyEVB3GPgoM-QZIHRU7s&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUGFZDrnAumJwM5JkKRRA0xCLvqmkzBFoT4fR33pL4YlwoE7yyEVB3GPgoM-QZIHRU7s&usqp=CAU",
  ];

  return url[Math.floor(Math.random() * url.length)];
};

export const USER_AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNOpai32_rwcRrMxmpF4sNJG3CIR7yTPv7MD9qK4Ft5OdltMU6DymiRqxXRb0qtgGJoE&usqp=CAU";
export const USER_NAME = "User";

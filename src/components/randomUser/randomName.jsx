const names = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Isabella",
  "Sophia",
  "Mia",
  "Charlotte",
  "Amelia",
  "Harper",
  "Evelyn",
  "Abigail",
  "Emily",
  "Elizabeth",
  "Sofia",
  "Avery",
  "Ella",
  "Scarlet",
  "Grace",
  "Chloe",
  "Victoria",
  "Riley",
  "Aria",
  "Lily",
  "Aubrey",
  "Zoey",
  "Penelope",
  "Lillian",
  "Addison",
  "Layla",
  "Natalie",
  "Camila",
  "Hannah",
  "Brooklyn",
  "Zoe",
  "Nora",
  "Leah",
  "Savannah",
  "Audrey",
  "Claire",
  "Eleanor",
  "Skylar",
  "Ellie",
  "Samantha",
  "Stella",
  "Paisley",
  "Violet",
  "Mila",
  "Allison",
  "Alexa",
  "Serenity",
  "Gabriella",
  "Scarlet",
  "Hailey",
  "Liliana",
  "Ariana",
  "Grace",
  "Nevaeh",
  "Natalia",
  "Eliana",
  "Aaliyah",
  "Bella",
  "Elena",
  "Vivian",
  "Lucy",
  "Julia",
  "Sadie",
  "Kinsley",
  "Piper",
  "Autumn",
  "Nova",
  "Ruby",
  "Willow",
  "Everly",
  "Adalynn",
  "Stella",
  "Quinn",
  "Maya",
  "Nora",
  "Camilla",
  "Ella",
];

const surnames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "Hernandez",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
  "Gonzalez",
  "Nelson",
  "Carter",
  "Mitchell",
  "Perez",
  "Roberts",
  "Turner",
  "Phillips",
  "Campbell",
  "Parker",
  "Evans",
  "Edwards",
  "Collins",
  "Stewart",
  "Sanchez",
  "Morris",
  "Rogers",
  "Reed",
  "Cook",
  "Morgan",
];

export default function randomName() {
  const name = names[Math.floor(Math.random() * names.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  const userName = name + " " + surname;
  return userName;
}

export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    personality: 'Aria' | 'Sonnet' | 'Canon';
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Walking beside a moonlit river, you wonder, what makes a journey meaningful?",
    options: [
      { text: "The companions beside you, and the memories you create together.", personality: "Aria" },
      { text: "The thrill of the unknown, and the strength it takes to survive it.", personality: "Sonnet" },
      { text: "Discovering truths hidden beneath the surface.", personality: "Canon" }
    ]
  },
  {
    id: 2,
    question: "The river suddenly rises and changes its course. What interests you most?",
    options: [
      { text: "Understanding what caused the change.", personality: "Canon" },
      { text: "Watching how the river reshapes the land and life around it.", personality: "Aria" },
      { text: "Testing yourself against the stronger current.", personality: "Sonnet" }
    ]
  },
  {
    id: 3,
    question: "A lonely kuuhenki sits quietly by the water. What do you do?",
    options: [
      { text: "Ask what troubles them and search for a solution.", personality: "Canon" },
      { text: "Sit with them in silence so they do not feel alone.", personality: "Aria" },
      { text: "Try to lift their mood with a joke or playful distraction.", personality: "Sonnet" }
    ]
  },
  {
    id: 4,
    question: "How would you spend a perfect day along the river?",
    options: [
      { text: "Racing the current or exploring dangerous paths.", personality: "Sonnet" },
      { text: "Observing the land and learning its secrets.", personality: "Canon" },
      { text: "Creating something beautiful music, art, or stories.", personality: "Aria" }
    ]
  },
  {
    id: 5,
    question: "If you could build something by the river, what would it be?",
    options: [
      { text: "A watchtower or lighthouse to guide travellers.", personality: "Canon" },
      { text: "A stronghold to endure whatever dangers may come.", personality: "Sonnet" },
      { text: "A sanctuary where weary wanderers can rest.", personality: "Aria" }
    ]
  },
  {
    id: 6,
    question: "A sudden landslide blocks the river path. What do you do first?",
    options: [
      { text: "Stay behind to help those struggling to move.", personality: "Aria" },
      { text: "Act quickly and escape before the danger spreads.", personality: "Sonnet" },
      { text: "Study the terrain and guide people along the safest route.", personality: "Canon" }
    ]
  },
  {
    id: 7,
    question: "How do you react when something familiar changes?",
    options: [
      { text: "With curiosity, you seek to understand its purpose.", personality: "Canon" },
      { text: "With hope, perhaps it will bring something beautiful.", personality: "Aria" },
      { text: "With resistance, why disturb what already works?", personality: "Sonnet" }
    ]
  },
  {
    id: 8,
    question: "If you were given power over others, how would you wield it?",
    options: [
      { text: "To protect and support those who rely on you.", personality: "Aria" },
      { text: "Boldly and decisively, even if some disagree.", personality: "Sonnet" },
      { text: "With wisdom and transparency so people understand your decisions.", personality: "Canon" }
    ]
  },
  {
    id: 9,
    question: "When faced with a choice between safety and a chance for something greater, you choose to...",
    options: [
      { text: "Protect what already exists.", personality: "Sonnet" },
      { text: "Weigh every consequence before choosing.", personality: "Canon" },
      { text: "Take the risk, growth requires courage.", personality: "Aria" }
    ]
  },
  {
    id: 10,
    question: "Night falls and the moon rises above the river. What are you doing?",
    options: [
      { text: "Making sure everyone nearby is warm and safe.", personality: "Aria" },
      { text: "Laughing and sharing stories with friends around a fire.", personality: "Sonnet" },
      { text: "Studying the stars and contemplating what lies ahead.", personality: "Canon" }
    ]
  }
];
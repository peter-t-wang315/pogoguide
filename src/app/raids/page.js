import InfoPage from "@/components/InfoPage";
import MakeRaidParties from "./beginner/MakeRaidParties";
import HiddenBallMultiplier from "./beginner/HiddenBallMultiplier";
import ActivateMega from "./beginner/ActivateMega";
import MaximizingBalls from "./beginner/MaximizingBalls";
import SendInvites from "./beginner/SendInvites";
import PartyPlay from "./beginner/PartyPlay";
import RaidCatchCP from "./beginner/RaidCatchCP";
import ShinyRaidBoss from "./beginner/ShinyRaidBoss";

const options2 = [
  {
    title: "Yo Auntie",
    description:
      "This is the yo auntie card. Yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie",
    collapsibleDescription: {
      type: "twoList",
      description:
        "yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie",
      content: [
        "Defeating the boss",
        "Friends in the raids",
        "Time left after defeating the boss",
        "Individual damage contribution",
        "Gym control",
      ],
    },
  },
  {
    title: "Yo Mama",
    description:
      "This is the yo mama card. Yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama yo mama",
  },
  {
    title: "Yo Dada",
    description:
      "This is the yo dada card. Yo dada yo dada yo dada yo dada yo dada yo dada yo dada yo dada yo dada yo dada yo dada yo dada yo dada",
    collapsibleDescription: {
      description:
        "RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    },
  },
  {
    title: "Mad",
    description:
      "This is the mad card. Mad mad mad mad mad mad mad mad mad mad mad mad mad",
    collapsibleDescription: {
      description:
        "Mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad",
    },
  },
  {
    title: "Tortle",
    description:
      "This is the tortle card. tortle tortle tortle tortle tortle tortle tortle tortle tortle tortle tortle tortle tortle",
    href: "/",
  },
  {
    title: "Why",
    description: "Why is it doing this America explain",
    collapsibleDescription: {
      description:
        "Why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why",
    },
  },
];

export default function RaidPage() {
  const options = [
    MakeRaidParties,
    HiddenBallMultiplier,
    ActivateMega,
    MaximizingBalls,
    SendInvites,
    PartyPlay,
    RaidCatchCP,
    ShinyRaidBoss,
  ];
  return <InfoPage beginnerCards={options} advancedCards={options2} />;
}

import InfoPage from "@/components/InfoPage";
import MakeRaidParties from "./MakeRaidParties";
import HiddenBallMultiplier from "./HiddenBallMultiplier";

const options2 = [
  {
    title: "Yo Auntie",
    description:
      "This is the yo auntie card. Yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie",
    collapsibleDescription:
      "yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie yo auntie",
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
    collapsibleDescription:
      "RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  {
    title: "Mad",
    description:
      "This is the mad card. Mad mad mad mad mad mad mad mad mad mad mad mad mad",
    collapsibleDescription:
      "Mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad",
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
    collapsibleDescription:
      "Why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why why",
  },
];

export default function RaidPage() {
  const options = [MakeRaidParties, HiddenBallMultiplier];
  return <InfoPage beginnerCards={options} advancedCards={options2} />;
}

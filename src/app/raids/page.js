"use client";
import BeginnerAdvanced from "@/components/BeginnerAdvanced";
import TriGrid from "@/components/TriGrid";
import InfoCard from "@/components/InfoCard";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect, useRef, createRef } from "react";
import InfoCollapsible from "@/components/InfoCollapsible";
import InfoPage from "@/components/InfoPage";

const options = [
  {
    title: "Yurt",
    description:
      "This is the yurt card. Yurt yurt yurt yurt yurt yurt yurt yurt yurt yurt yurt yurt yurt",
  },
  {
    title: "Yary",
    description:
      "This is the yary card. Yary yary yary yary yary yary yary yary yary yary yary yary yary",
    collapsibleDescription:
      "RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  {
    title: "Pleeeeeee Pleeeeeee Pleeeeeee Pleeeeeee",
    description:
      "This is the pleeeeeee card. Pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee",
    collapsibleDescription:
      "Pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee ",
  },
  {
    title: "Mad",
    description:
      "This is the mad card. Mad mad mad mad mad mad mad mad mad mad mad mad mad",
    collapsibleDescription:
      "Mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad",
  },
  {
    title: "Teeeg",
    description:
      "This is the teeg card. Teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg",
    href: "/",
  },
  {
    title: "Eeeeee",
    description:
      "This is the eeeeee card. Eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee",
    collapsibleDescription:
      "Whaaaaaaaaaaaaaaaaat. Eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee",
  },
];

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
];

export default function RaidPage() {
  return <InfoPage beginnerCards={options} advancedCards={options2} />;
}

"use client";
import BeginnerAdvanced from "@/components/BeginnerAdvanced";
import GradientTriGrid from "@/components/GradientTriGrid";
import InfoCard from "@/components/InfoCard";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

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
    type: "icon",
  },
  {
    title: "Pleeeeeee Pleeeeeee Pleeeeeee Pleeeeeee Pleeeeeee",
    description:
      "This is the pleeeeeee card. Pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee pleeeeeee",
  },
  {
    title: "Mad",
    description:
      "This is the mad card. Mad mad mad mad mad mad mad mad mad mad mad mad mad",
  },
  {
    title: "Teeeg",
    description:
      "This is the teeg card. Teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg teeg",
    type: "page",
  },
  {
    title: "Eeeeee",
    description:
      "This is the eeeeee card. Eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee",
    type: "icon",
  },
];

export default function RaidPage() {
  const [beginnerAdvanced, setBeginnerAdvanced] = useState("beginner");

  return (
    <>
      <Box
        display={"flex"}
        backgroundColor={"primary.main"}
        justifyContent={"center"}
        alignItems={"center"}
        py={5}
        px={2}
        color={"primary.foreground"}
      >
        <Typography
          sx={{ typography: { xs: "h4", bgsm: "h3", md: "h3" } }}
          align="center"
        >
          Raids
        </Typography>
      </Box>
      <GradientTriGrid
        middleContent={
          <>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BeginnerAdvanced
                value={beginnerAdvanced}
                setValue={setBeginnerAdvanced}
              />
            </Grid>
            {options.map((option) => (
              // Maybe here if there is an open card, iterate through each of the options and then at the end of it's row, create a new div of a collapsible
              // and then make it xs={12} and let it open
              <Grid item xs={12} bgsm={6} lg={4}>
                <InfoCard
                  title={option.title}
                  description={option.description}
                  type={option.type}
                />
              </Grid>
            ))}
          </>
        }
        middleContentSX={{ pt: 2, pb: 5, px: { xs: 0, sm: 2, md: 4 }, mt: 0 }}
        spacing={3}
        variant={"gradient"}
      />
    </>
  );
}

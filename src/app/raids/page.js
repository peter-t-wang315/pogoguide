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
    collapsibleContent: "This is the collapsibles content",
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
    href: "/",
  },
  {
    title: "Eeeeee",
    description:
      "This is the eeeeee card. Eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee",
    collapsibleContent:
      "Whaaaaaaaaaaaaaaaaat. Eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee",
  },
];

export default function RaidPage() {
  const [beginnerAdvanced, setBeginnerAdvanced] = useState("beginner");
  const [collapsibleContent, setCollapsibleContent] = useState([]);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        backgroundColor={"primary.main"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={5}
        pb={4}
        px={2}
        color={"primary.foreground"}
      >
        <Typography
          sx={{ typography: { xs: "h4", bgsm: "h3", md: "h3" }, mb: 3 }}
          align="center"
        >
          Raids
        </Typography>
        <BeginnerAdvanced
          value={beginnerAdvanced}
          setValue={setBeginnerAdvanced}
        />
      </Box>
      <GradientTriGrid
        middleContent={
          <>
            {options.map((option, index) => {
              // Maybe here if there is an open card, iterate through each of the options and then at the end of it's row, create a new div of a collapsible
              // and then make it xs={12} and let it open
              console.log("oidjf", collapsibleContent);

              return (
                <Grid item xs={12} bgsm={6} lg={4} key={index} display="flex">
                  <InfoCard
                    title={option.title}
                    description={option.description}
                    index={index}
                    setCollapsibleContent={setCollapsibleContent}
                    collapsibleContent={option?.collapsibleContent}
                    href={option?.href}
                  />
                </Grid>
              );
            })}
          </>
        }
        middleContentSX={{
          pt: 2,
          pb: 5,
          px: { xs: 0, sm: 2, md: 4 },
          mt: 0,
        }}
        spacing={3}
        variant={"gradient"}
      />
    </>
  );
}

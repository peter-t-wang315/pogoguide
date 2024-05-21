"use client";
import BeginnerAdvanced from "@/components/BeginnerAdvanced";
import TriGrid from "@/components/TriGrid";
import InfoCard from "@/components/InfoCard";
import {
  Box,
  Collapse,
  Grid,
  keyframes,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";

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
    collapsibleDescription: "This is the collapsibles content",
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
    collapsibleDescription:
      "Mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad mad",
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

export default function RaidPage() {
  const [beginnerAdvanced, setBeginnerAdvanced] = useState("beginner");
  const [collapsibleContent, setCollapsibleContent] = useState([]);
  const [oldCollapsibleContent, setOldCollapsibleContent] = useState([]);
  const [columnNum, setColumnNum] = useState(3);
  const theme = useTheme();

  const large = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const bigSmall = useMediaQuery((theme) => theme.breakpoints.up("bgsm"));

  useEffect(() => {
    if (large) {
      setColumnNum(3);
    } else if (bigSmall) {
      setColumnNum(2);
    } else {
      setColumnNum(1);
    }
  }, [large, bigSmall]);

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
      <TriGrid
        middleContent={
          <>
            {options.map((option, index) => {
              // Once a new collapsibleContent is set, set oldCollapsibleContent so that when the old content
              // is collapsing, it doesn't show the new content as it collapses
              // console.log("oidjf", collapsibleContent);
              const collapseIn =
                collapsibleContent?.length &&
                Math.ceil((collapsibleContent[0] + 1) / columnNum) ===
                  Math.ceil((index + 1) / columnNum);
              return (
                <>
                  <Grid item xs={12} bgsm={6} lg={4} key={index} display="flex">
                    <InfoCard
                      title={option.title}
                      description={option.description}
                      index={index}
                      collapsibleDescription={option?.collapsibleDescription}
                      setCollapsibleContent={setCollapsibleContent}
                      collapsibleContent={collapsibleContent}
                      setOldCollapsibleContent={setOldCollapsibleContent}
                      oldCollapsibleContent={oldCollapsibleContent}
                      href={option?.href}
                    />
                  </Grid>
                  {((index + 1) % columnNum === 0 ||
                    index === options.length - 1) && (
                    <Grid
                      item
                      xs={12}
                      sx={{
                        "&.MuiGrid-item": { p: 0 },
                      }}
                    >
                      <Collapse in={collapseIn} unmountOnExit>
                        {/* Maybe gotta do the transition on the height of the Typography as that is what's changing? */}
                        <Paper
                          elevation={10}
                          sx={{ ml: 3, mt: 3, p: 2, borderRadius: "20px" }}
                        >
                          <Typography>
                            {collapseIn
                              ? collapsibleContent?.[1]
                              : oldCollapsibleContent?.[1]}
                          </Typography>
                        </Paper>
                      </Collapse>
                    </Grid>
                  )}
                </>
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
        // variant={"gradient"}
      />
    </>
  );
}

// {
//   collapseIn ? (
//     <Typography>{collapsibleContent?.[1]}</Typography>
//   ) : (
//     <Typography>
//       {oldCollapsibleContent?.[1]}
//     </Typography>
//   );
// }

{
  /* <Collapse in={collapseIn}>
  <Typography>
    {collapseIn ? collapsibleContent?.[1] : oldCollapsibleContent?.[1]}
  </Typography>
</Collapse>; */
}

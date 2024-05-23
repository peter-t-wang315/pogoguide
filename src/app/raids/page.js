"use client";
import BeginnerAdvanced from "@/components/BeginnerAdvanced";
import TriGrid from "@/components/TriGrid";
import InfoCard from "@/components/InfoCard";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect, useRef, createRef } from "react";
import InfoCollapsible from "@/components/InfoCollapsible";

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

export default function RaidPage() {
  const [beginnerAdvanced, setBeginnerAdvanced] = useState("beginner");
  const [collapsibleContent, setCollapsibleContent] = useState([]);
  const [oldCollapsibleContent, setOldCollapsibleContent] = useState([]);
  const [columnNum, setColumnNum] = useState(3);
  const theme = useTheme();
  const large = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const bigSmall = useMediaQuery((theme) => theme.breakpoints.up("bgsm"));
  const gridRefs = useRef([]);

  useEffect(() => {
    gridRefs.current = Array(options.length)
      .fill()
      .map((_, i) => gridRefs.current[i] || createRef());
  }, []);

  useEffect(() => {
    if (large) {
      setColumnNum(3);
    } else if (bigSmall) {
      setColumnNum(2);
    } else {
      setColumnNum(1);
    }
  }, [large, bigSmall]);

  const getCurrRow = (num1) => {
    return Math.ceil(num1 / columnNum);
  };

  const scrollToIndex = () => {
    const index = collapsibleContent?.[0];
    if (gridRefs.current[index]) {
      const element = gridRefs.current[index].current;
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

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
              const collapseIn =
                collapsibleContent?.length &&
                getCurrRow(collapsibleContent[0] + 1) === getCurrRow(index + 1);

              return (
                <>
                  <Grid
                    item
                    xs={12}
                    bgsm={6}
                    lg={4}
                    key={index}
                    display="flex"
                    ref={gridRefs.current[index]}
                  >
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
                      <InfoCollapsible
                        collapseIn={collapseIn}
                        collapsibleContent={collapsibleContent}
                        oldCollapsibleContent={oldCollapsibleContent}
                        scrollToIndex={scrollToIndex}
                      />
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

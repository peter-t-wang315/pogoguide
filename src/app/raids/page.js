"use client";
import BeginnerAdvanced from "@/components/BeginnerAdvanced";
import GradientTriGrid from "@/components/GradientTriGrid";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useState } from "react";

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
            <Grid item xs={12}>
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
            </Grid>
            <Grid item xs={12}>
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
              Yurt
              <br />
            </Grid>
          </>
        }
        middleContentSX={{ pt: 2, pb: 5, px: { xs: 0, sm: 2, md: 4 }, mt: 0 }}
        spacing={3}
        variant={"gradient"}
      />
    </>
  );
}

import { Grid } from "@mui/material";

// middleContent's column space should be 8
export default function TriGrid({
  middleContent,
  middleContentSX,
  spacing,
  containerSX = undefined,
  variant = undefined,
  heavySpacing = false,
}) {
  return (
    <Grid container sx={containerSX}>
      <Grid
        container
        item
        xs={heavySpacing ? 1.5 : 0.75}
        smsm={heavySpacing ? 2 : 0.75}
        bgsm={heavySpacing ? 1 : 0.75}
        lg={heavySpacing ? 2.25 : 1}
        variant={variant}
      ></Grid>
      <Grid
        container
        item
        xs={heavySpacing ? 9 : 10.5}
        smsm={heavySpacing ? 8 : 10.5}
        bgsm={heavySpacing ? 10 : 10.5}
        lg={heavySpacing ? 7.5 : 10}
        variant={variant}
        spacing={spacing}
        sx={middleContentSX}
      >
        {middleContent}
      </Grid>
      <Grid
        container
        item
        xs={heavySpacing ? 1.5 : 0.75}
        smsm={heavySpacing ? 2 : 0.75}
        bgsm={heavySpacing ? 1 : 0.75}
        lg={heavySpacing ? 2.25 : 1}
        variant={variant}
      ></Grid>
    </Grid>
  );
}

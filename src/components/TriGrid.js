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
        xs={0.5}
        md={1}
        lg={heavySpacing ? 2 : 1}
        xl={heavySpacing ? 2.25 : 1}
        variant={variant}
      ></Grid>
      <Grid
        container
        item
        xs={11}
        md={10}
        lg={heavySpacing ? 8 : 10}
        xl={heavySpacing ? 7.5 : 10}
        variant={variant}
        spacing={spacing}
        sx={middleContentSX}
      >
        {middleContent}
      </Grid>
      <Grid
        container
        item
        xs={0.5}
        md={1}
        lg={heavySpacing ? 2 : 1}
        xl={heavySpacing ? 2.25 : 1}
        variant={variant}
      ></Grid>
    </Grid>
  );
}

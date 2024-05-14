import { Grid } from "@mui/material";

// middleContent's column space should be 8
export default function GradientTriGrid({
  middleContent,
  middleContentSX,
  spacing,
  variant = undefined,
}) {
  return (
    <Grid container>
      <Grid container item xs={1} variant={variant}></Grid>
      <Grid
        container
        item
        xs={10}
        variant={variant}
        spacing={spacing}
        sx={middleContentSX}
      >
        {middleContent}
      </Grid>
      <Grid container item xs={1} variant={variant}></Grid>
    </Grid>
  );
}

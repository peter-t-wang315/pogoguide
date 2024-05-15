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
      <Grid container item xs={1} lg={2} xl={2.25} variant={variant}></Grid>
      <Grid
        container
        item
        xs={10}
        lg={8}
        xl={7.5}
        variant={variant}
        spacing={spacing}
        sx={middleContentSX}
      >
        {middleContent}
      </Grid>
      <Grid container item xs={1} lg={2} xl={2.25} variant={variant}></Grid>
    </Grid>
  );
}

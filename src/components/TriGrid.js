import { Grid } from "@mui/material";

// middleContent's column space should be 8
export default function TriGrid({
  middleContent,
  middleContentSX,
  spacing,
  containerSX = undefined,
  variant = undefined,
}) {
  return (
    <Grid container sx={containerSX}>
      <Grid
        container
        item
        xs={0.5}
        md={1}
        lg={2}
        xl={2.25}
        variant={variant}
      ></Grid>
      <Grid
        container
        item
        xs={11}
        md={10}
        lg={8}
        xl={7.5}
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
        lg={2}
        xl={2.25}
        variant={variant}
      ></Grid>
    </Grid>
  );
}

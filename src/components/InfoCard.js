import { Box, Paper, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export default function InfoCard({ title, description, type = undefined }) {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        py: 2,
        px: 2.5,
        borderRadius: "20px",
        position: "relative",
        "&:hover": {
          boxShadow: 14,
        },
        ...(type && {
          "&:hover": {
            boxShadow: 20,
            cursor: "pointer",
            backgroundColor: "background.dark",
          },
        }),
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            typography: {
              sm: "h5",
              xs: "h6",
            },
            fontWeight: {
              xl: "normal",
              xs: "normal",
            },
          }}
        >
          {title}
        </Typography>
        {type === "icon" ? (
          <InfoOutlinedIcon
            sx={{ color: "primary.light", fontSize: 18, mt: 0.5 }}
          />
        ) : type === "page" ? (
          <DescriptionOutlinedIcon
            sx={{ color: "primary.light", fontSize: 18, mt: 0.5 }}
          />
        ) : null}
      </Box>
      <Typography>{description}</Typography>
    </Paper>
  );
}

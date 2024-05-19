import { Box, Paper, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useRouter } from "next/navigation";

export default function InfoCard({
  title,
  description,
  index,
  setCollapsibleContent,
  collapsibleContent = undefined,
  href = undefined,
}) {
  const { push } = useRouter();
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
        ...(collapsibleContent || href
          ? {
              "&:hover": {
                boxShadow: 20,
                cursor: "pointer",
                backgroundColor: "background.dark",
              },
            }
          : {
              "&:hover": {
                boxShadow: 10,
              },
            }),
      }}
      onClick={() => {
        if (href) push(href);
        setCollapsibleContent(
          collapsibleContent ? [index, collapsibleContent] : []
        );
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
        {collapsibleContent ? (
          <InfoOutlinedIcon
            sx={{ color: "primary.light", fontSize: 18, mt: 0.5 }}
          />
        ) : href ? (
          <DescriptionOutlinedIcon
            sx={{ color: "primary.light", fontSize: 18, mt: 0.5 }}
          />
        ) : null}
      </Box>
      <Typography>{description}</Typography>
    </Paper>
  );
}

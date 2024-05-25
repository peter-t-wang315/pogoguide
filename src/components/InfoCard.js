import { Box, Paper, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useRouter } from "next/navigation";
import DoubleList from "./DoubleList";

export default function InfoCard({
  title,
  description,
  listContent = undefined,
  index,
  collapsibleDescription = undefined,
  setCollapsibleContent,
  collapsibleContent,
  setOldCollapsibleContent,
  href = undefined,
}) {
  const { push } = useRouter();
  return (
    <Paper
      elevation={
        collapsibleContent.length === 0
          ? 5
          : index === collapsibleContent[0]
          ? 15
          : 2
      }
      sx={{
        display: "flex",
        flexDirection: "column",
        py: 2.5,
        px: 3.5,
        borderRadius: "20px",
        position: "relative",
        ...(collapsibleDescription || href
          ? {
              "&:hover": {
                boxShadow: 15,
                cursor: "pointer",
                backgroundColor: "background.dark",
              },
            }
          : {
              "&:hover": {
                boxShadow: 10,
              },
            }),
        transform:
          collapsibleContent.length === 0
            ? "scale(1)"
            : index !== collapsibleContent[0]
            ? "scale(0.925)"
            : "scale(1.025)",
        transition: "transform 0.3s ease-in-out",
      }}
      onClick={() => {
        if (href) push(href);
        else {
          if (index === collapsibleContent?.[0]) {
            setCollapsibleContent([]);
            setOldCollapsibleContent(collapsibleContent);
          } else {
            setOldCollapsibleContent(collapsibleContent);
            setCollapsibleContent(
              collapsibleDescription ? [index, collapsibleDescription] : []
            );
          }
        }
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
            pb: 2,
          }}
        >
          {title}
        </Typography>
        {collapsibleDescription ? (
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
      {listContent && <DoubleList listContent={listContent} />}
    </Paper>
  );
}

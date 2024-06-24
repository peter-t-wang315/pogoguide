import {
  Avatar,
  Box,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
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
  const theme = useTheme();
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
        borderRadius: 10,
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
        overflow: "hidden",
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
      <Box
        sx={{
          mt: -3,
          mx: -4,
          backgroundColor: "primary.light",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
            pt: 3,
          }}
        >
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
          {collapsibleDescription ? (
            <InfoOutlinedIcon
              sx={{ color: "primary.dark", fontSize: 18, mt: 0.5 }}
            />
          ) : href ? (
            <DescriptionOutlinedIcon
              sx={{ color: "primary.dark", fontSize: 18, mt: 0.5 }}
            />
          ) : null}
        </Box>
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "primary.dark",
            },
            mb: -1.6,
            "&>.mui-qywfm8-MuiDivider-wrapper": {
              p: 0,
              mx: -0.34,
            },
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "background.default",
              border: `3px solid ${theme.palette.primary.main}`,
              width: 20,
              height: 20,
            }}
          >
            <CircleIcon
              sx={{
                color: "primary.main",
                fontSize: 16,
              }}
            />
          </Avatar>
        </Divider>
      </Box>
      <Typography sx={{ mt: 3 }}>{description}</Typography>
      {listContent && <DoubleList listContent={listContent} />}
    </Paper>
  );
}

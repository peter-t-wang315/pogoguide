import { Box, Divider, Paper, Typography } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
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
            mb: -2.4,
            "&>.mui-qywfm8-MuiDivider-wrapper": {
              p: 0,
              mx: -0.34,
            },
          }}
        >
          <RadioButtonCheckedIcon
            sx={{
              color: "primary.main",
              mt: 0.4,
              fontSize: 30,
            }}
          />
          {/* <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 26, // Adjust size as needed
              height: 26, // Adjust size as needed
              borderRadius: "50%",
              backgroundColor: "white", // Set the background color to white
              overflow: "hidden", // Ensure any overflow is hidden
            }}
          >
            <RadioButtonCheckedIcon
              sx={{
                color: "primary.main",
                fontSize: 30,
              }}
            />
          </Box> */}
        </Divider>
      </Box>
      <Typography sx={{ mt: 3 }}>{description}</Typography>
      {listContent && <DoubleList listContent={listContent} />}
    </Paper>
  );
}

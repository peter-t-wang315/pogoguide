"use client";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePageCard({ img, altImg, title, link }) {
  const { push } = useRouter();
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "row",
        py: 1,
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          boxShadow: 22,
          cursor: "pointer",
          backgroundColor: "background.dark",
        },
      }}
      onClick={() => push(link)}
    >
      {/* Diagonal Slash */}
      <Box
        sx={{
          position: "absolute",
          top: 60,
          left: -35,
          width: "200%",
          height: "110%",
          backgroundColor: "primary.light",
          transform: "rotate(-65deg)",
          transformOrigin: "top left",
        }}
      />
      {/* Image */}
      <Box sx={{ position: "relative" }}>
        <Image src={img} width={50} height={50} alt={altImg} />
      </Box>
      {/* Text */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            typography: {
              xl: "h5",
              lg: "h6",
              bgsm: "h7",
              smsm: "h6",
              xs: "h10",
            },
            fontWeight: {
              xl: "normal",
              lg: "normal",
              bgsm: "normal",
              smsm: "normal",
              xs: "normal",
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}

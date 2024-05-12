"use client";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePageCard({ img, altImg, title, link }) {
  const { push } = useRouter();
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        borderRadius: "20px",
        "&:hover": { boxShadow: 22, cursor: "pointer" },
      }}
      onClick={() => push(link)}
    >
      <Image src={img} width={150} height={150} alt={altImg} />
      <Typography variant="h4" mt={2}>
        {title}
      </Typography>
    </Paper>
  );
}

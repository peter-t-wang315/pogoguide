import HomePageCard from "@/components/HomePageCard";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// https://www.deviantart.com/jormxdos/gallery/84991095/pokemon-go-medal
// https://bulbapedia.bulbagarden.net/wiki/Medal_(GO)
// pokemongo.fandom.com/wiki/Medals

export default function Home() {
  const categories = [
    {
      title: "Raids",
      img: "/medal/Champion.png",
      altImg: "Champion Medal",
      link: "/raids",
    },
    {
      title: "Catching",
      img: "/medal/Collector.png",
      altImg: "Collector Medal",
      link: "/catching",
    },
    {
      title: "Friendship",
      img: "/medal/Idol.png",
      altImg: "Idol Image",
      link: "/friendship",
    },
    {
      title: "Incense",
      img: "/IncenseImage.png",
      altImg: "Incense Image",
      link: "/incense",
    },
    {
      title: "Pokemon Storage",
      img: "/StorageImage.png",
      altImg: "Storage Image",
      link: "/pokemonStorage",
    },
    {
      title: "Item Storage",
      img: "/ItemImage.png",
      altImg: "Item Image",
      link: "/itemStorage",
    },
    {
      title: "Trades",
      img: "/medal/Gentleman.png",
      altImg: "Gentleman Medal",
      link: "/trades",
    },
    {
      title: "Gyms",
      img: "/medal/GymLeader.png",
      altImg: "Gym Leader Medal",
      link: "/gyms",
    },
    {
      title: "PvP",
      img: "/GoBattleLeagueImage.png",
      altImg: "Battle League Image",
      link: "/pvp",
    },
    {
      title: "Shinies",
      img: "/ShinyImage.png",
      altImg: "Shiny Image",
      link: "/shinies",
    },
    {
      title: "Shadow",
      img: "/ShadowImage.png",
      altImg: "Shadow Image",
      link: "/shadow",
    },
    { title: "IVs", img: "/IVImage.png", altImg: "IV Image", link: "/ivs" },
  ];
  return (
    <>
      <Box
        display={"flex"}
        backgroundColor={"primary.dark"}
        justifyContent={"center"}
        alignItems={"center"}
        py={5}
        color={"primary.foreground"}
      >
        <Typography variant="h3">
          Thank you for checking out this page
        </Typography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={4} py={4} px={5}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Categories</Typography>
        </Grid>
        {categories.map((category) => (
          <Grid item xs={12} md={4}>
            <HomePageCard
              img={category.img}
              altImg={category.altImg}
              title={category.title}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

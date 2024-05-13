import HomePageCard from "@/components/HomePageCard";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

// https://www.deviantart.com/jormxdos/gallery/84991095/pokemon-go-medal
// https://bulbapedia.bulbagarden.net/wiki/Medal_(GO)
// pokemongo.fandom.com/wiki/Medals

// Side bar images
// https://digitalcricut.com/cdn/shop/products/bundle-cricut-file-silhouette-cameo-cartoon-svg-293_grande.jpg?v=1658391364

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
      // img: "/GoBattleLeagueImage.png",
      img: "/medal/pvp.png",
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
        backgroundColor={"primary.main"}
        justifyContent={"center"}
        alignItems={"center"}
        py={5}
        color={"primary.foreground"}
      >
        <Typography variant="h3">
          Thank you for checking out this page
          <br /> Lets try this out
        </Typography>
      </Box>
      <Grid container>
        <Grid container item xs={2} variant="gradient"></Grid>
        <Grid
          container
          item
          xs={8}
          spacing={2}
          pt={2}
          pb={5}
          px={4}
          mt={0}
          variant="gradient"
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" color={"primary.foreground"}>
              Categories
            </Typography>
            <Divider sx={{ width: "67%", height: 2, my: 2 }} />
          </Grid>
          {categories.map((category) => (
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                pr: 2,
              }}
            >
              <HomePageCard
                img={category.img}
                altImg={category.altImg}
                title={category.title}
                link={category.link}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={2} variant="gradient"></Grid>
      </Grid>
    </>
  );
}

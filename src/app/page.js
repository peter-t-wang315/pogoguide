import TriGrid from "@/components/TriGrid";
import HomePageCard from "@/components/HomePageCard";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import categories from "./InfoCategories";

// https://www.deviantart.com/jormxdos/gallery/84991095/pokemon-go-medal
// https://bulbapedia.bulbagarden.net/wiki/Medal_(GO)
// pokemongo.fandom.com/wiki/Medals

// Side bar images
// https://digitalcricut.com/cdn/shop/products/bundle-cricut-file-silhouette-cameo-cartoon-svg-293_grande.jpg?v=1658391364

export default function Home() {
  return (
    <>
      <Box
        display={"flex"}
        backgroundColor={"primary.main"}
        justifyContent={"center"}
        alignItems={"center"}
        py={5}
        px={2}
        color={"primary.foreground"}
      >
        <Typography
          sx={{ typography: { xs: "h5", smsm: "h4", bgsm: "h3" } }}
          align="center"
        >
          Welcome to PoGo Guide. <br />
          The all in one stop shop for <br />
          Pokémon Go tips. <br />
          Lets GO
        </Typography>
      </Box>
      <TriGrid
        middleContent={
          <>
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
              <Typography
                sx={{ typography: { xs: "h5", bgsm: "h4" } }}
                color={"primary.foreground"}
              >
                Categories
              </Typography>
              <Divider sx={{ width: "67%", height: 2, my: 2 }} />
            </Grid>
            {categories.map((category) => (
              <Grid item xs={12} bgsm={6} lg={4}>
                <HomePageCard
                  img={category.img}
                  altImg={category.altImg}
                  title={category.title}
                  link={category.link}
                />
              </Grid>
            ))}
          </>
        }
        middleContentSX={{
          pt: 2,
          pb: 5,
          px: { xs: 0, sm: 2, md: 4 },
          mt: 0,
        }}
        spacing={3}
        variant={"gradient"}
        heavySpacing={true}
      />
    </>
  );
}

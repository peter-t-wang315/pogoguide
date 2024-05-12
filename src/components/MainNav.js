import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import NavSearch from "./NavSearch";

export default async function MainNav() {
  // TO DO: Make it so that when the user is on phone, that the search bar turns into the icon and then
  // can change the entire nav. Look at MUI docs on phone

  const options = [
    { name: "Raids" },
    { name: "Catching" },
    { name: "Friendship" },
    { name: "Incense" },
    { name: "Pokemon Storage" },
    { name: "Item Storage" },
    { name: "Trades" },
    { name: "Gyms" },
    { name: "PvP" },
    { name: "Shinies" },
    { name: "Shadow" },
    { name: "IVs" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
        justifyContent: "space-between",
        px: 20,
        py: 2,
      }}
      color={"primary.foreground"}
    >
      <div>PoGo Guide</div>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          backgroundColor: "primary.main",
          color: "primary.foreground-darker",
        }}
      >
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Stack>

      <NavSearch options={options} />
    </Box>
  );
}

export const PokeBallStyle = { backgroundColor: "pokeball.red" };
export const MasterBallStyle = {
  position: "relative",
  backgroundColor: "pokeball.purple",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "70%",
    height: "140%",
    backgroundColor: "pokeball.lightPurple",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "70%",
    height: "140%",
    backgroundColor: "pokeball.lightPurple",
    borderRadius: "50%",
    transform: "translate(50%, -50%)",
    zIndex: 1,
  },
};

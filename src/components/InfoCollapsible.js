import { Collapse, Paper, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

export default function InfoCollapsible({
  collapseIn,
  collapsibleContent,
  oldCollapsibleContent,
  scrollToIndex,
}) {
  return (
    <TransitionGroup>
      {collapseIn ? (
        <Collapse
          unmountOnExit
          sx={{ pb: 1 }}
          key={collapsibleContent[0]}
          onEntered={scrollToIndex}
        >
          <Paper
            key={collapsibleContent[0]}
            elevation={8}
            sx={{
              ml: 3,
              mt: 3,
              p: 2,
              borderRadius: "20px",
            }}
          >
            <Typography>
              {collapseIn
                ? collapsibleContent?.[1]
                : oldCollapsibleContent?.[1]}
            </Typography>
          </Paper>
        </Collapse>
      ) : null}
    </TransitionGroup>
  );
}

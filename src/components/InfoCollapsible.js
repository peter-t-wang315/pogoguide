import { Collapse, Paper, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import DoubleList from "./DoubleList";

export default function InfoCollapsible({
  collapseIn,
  collapsibleContent,
  oldCollapsibleContent,
  scrollToIndex,
}) {
  const content = collapseIn
    ? collapsibleContent?.[1]
    : oldCollapsibleContent?.[1];

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
            <Typography>{content.description}</Typography>
            {content?.type === "divider" || content?.type === "twoList" ? (
              <DoubleList listContent={content} />
            ) : null}
          </Paper>
        </Collapse>
      ) : null}
    </TransitionGroup>
  );
}

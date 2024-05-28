import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function DoubleList({ listContent }) {
  if (listContent.type === "twoList") {
    const evenItems = listContent.content.filter((_, index) => index % 2 === 0);
    const oddItems = listContent.content.filter((_, index) => index % 2 !== 0);
    return <TwoLists leftContent={evenItems} rightContent={oddItems} />;
  } else if (listContent.type === "divider") {
    return (
      <DividerList
        leftContent={listContent.left}
        rightContent={listContent.right}
      />
    );
  }
}

const TwoLists = ({ leftContent, rightContent }) => (
  <Box sx={{ display: "flex" }}>
    <List dense={true}>
      {leftContent.map((content, index) => (
        <ListItem key={index} sx={{ mt: -1 }}>
          <ListItemIcon sx={{ mt: 1.4, ml: -2, alignSelf: "flex-start" }}>
            <CircleIcon color="primary" sx={{ fontSize: 6 }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: -5 }}>{content}</ListItemText>
        </ListItem>
      ))}
    </List>
    <List dense={true}>
      {rightContent.map((content, index) => (
        <ListItem key={index} sx={{ mt: -1 }}>
          <ListItemIcon sx={{ mt: 1.4, ml: -2, alignSelf: "flex-start" }}>
            <CircleIcon color="primary" sx={{ fontSize: 6 }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: -5 }}>{content}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Box>
);

const DividerList = ({ leftContent, rightContent }) => (
  <Box sx={{ display: "flex" }}>
    <List dense={true}>
      {leftContent.map((content, index) => (
        <ListItem key={index} sx={{ mt: -1, pr: 0 }}>
          <ListItemIcon sx={{ mt: 1.4, ml: -2, alignSelf: "flex-start" }}>
            <CircleIcon color="primary" sx={{ fontSize: 6 }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: -5 }}>{content}</ListItemText>
        </ListItem>
      ))}
    </List>
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      sx={{ backgroundColor: "common.dark-gray", mx: 3, my: 0.75 }}
    />
    <List dense={true}>
      {rightContent.map((content, index) => (
        <ListItem key={index} sx={{ mt: -1 }}>
          <ListItemIcon sx={{ mt: 1.4, ml: -2, alignSelf: "flex-start" }}>
            <CircleIcon color="primary" sx={{ fontSize: 6 }} />
          </ListItemIcon>
          <ListItemText sx={{ ml: -5 }}>{content}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Box>
);

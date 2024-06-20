import { SvgIcon } from "@mui/material";

// Custom ExpandLess Icon with path id
function CustomUpCaretIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        id="up-caret"
        d="M12 8.59L16.58 13.17L18 11.76L12 5.76L6 11.76L7.42 13.17L12 8.59Z"
      />
    </SvgIcon>
  );
}

// Custom ExpandMore Icon with path id
function CustomDownCaretIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        id="down-caret"
        d="M12 15.5L6 9.5L7.41 8.09L12 12.67L16.59 8.09L18 9.5L12 15.5Z"
      />
    </SvgIcon>
  );
}

export { CustomDownCaretIcon, CustomUpCaretIcon };

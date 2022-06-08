import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);

  const handleFormatChange = (
    _e: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormat(updatedFormats);
    console.log(updatedFormats);
  };

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="#">
          Button
        </Button>
        <Button variant="outlined" href="#">
          Button
        </Button>
        <Button variant="contained">Button</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant="contained"
          disableElevation
          disableRipple
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <IconButton aria-label="send">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          orientation="vertical"
          size="small"
          variant="contained"
          aria-label="alignement btn grp"
        >
          <Button>Left</Button>
          <Button>center</Button>
          <Button>rigth</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          exclusive
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;

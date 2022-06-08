import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="name"
          type="password"
          variant="filled"
          size="small"
          color="secondary"
          helperText="hello world"
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="read only" error inputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Amount" inputProps={{
            stratAdornment: <InputAdornment position="start" >$</InputAdornment>
        }}  />
        <TextField label="weight" inputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>
        }}  />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;

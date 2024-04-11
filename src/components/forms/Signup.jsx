import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Select,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signup = () => {
  const [level, setLevel] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <>
      <Typography
        component="h2"
        sx={{
          my: { xs: "24px", lg: "32px" },
          textAlign: "center",
          fontSize: { xs: "30px", md: "40px" },
        }}
      >
        إنشاء حساب
      </Typography>
      <Box
        component="form"
        className="w-[90%] lg:w-1/2 xl:w-1/3 p-4 mx-auto flex flex-col gap-4 rounded-lg border shadow-lg"
      >
        <TextField id="username" label="الأسم" variant="outlined" />
        <TextField id="email" label="البريد الإلكترونى" variant="outlined" />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            كلمة المرور
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            startAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="كلمة المرور"
          />
        </FormControl>
        <TextField id="mobile" label="الهاتف" variant="outlined" />
        <FormControl>
          <InputLabel htmlFor="selectLevel">الصف الدراسى</InputLabel>
          <Select
            id="selectLevel"
            name="selectLevel"
            value={level}
            label="الصف الدراسى"
            onChange={handleChange}
          >
            <MenuItem value={1}>الصف الأول</MenuItem>
            <MenuItem value={2}>الصف الثانى</MenuItem>
            <MenuItem value={3}>الصف الثالث</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="success" size="large">
          تأكيد
        </Button>
      </Box>
    </>
  );
};

export default Signup;

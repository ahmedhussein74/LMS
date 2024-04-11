import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        تسجيل الدخول
      </Typography>
      <Box
        component="form"
        className="w-[90%] lg:w-1/2 xl:w-1/3 p-4 mx-auto flex flex-col gap-4 rounded-lg border shadow-lg"
      >
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
        <Button variant="contained" color="success" size="large">
          تأكيد
        </Button>
      </Box>
    </>
  );
};

export default Login;

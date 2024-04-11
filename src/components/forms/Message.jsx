import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Message = () => {
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
        كيف يمكننا مساعدتك
      </Typography>
      <Box
        component="form"
        className="w-[90%] lg:w-1/2 xl:w-1/3 p-4 mx-auto flex flex-col gap-4 rounded-lg border shadow-lg"
      >
        <TextField id="username" label="الإسم" variant="outlined" />
        <TextField id="mobile" label="الهاتف" variant="outlined" />
        <TextField id="email" label="البريد الإلكترونى" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="الموضوع"
          multiline
          rows={4}
          placeholder="أكتب رسالتك"
        />
        <Button variant="contained" color="success" size="large">
          إرسال
        </Button>
      </Box>
    </>
  );
};

export default Message;

import { useState } from "react";
import { Typography, TextField, Button, Paper } from "@mui/material";

function LoginPage() {
  const [phone, setPhone] = useState("");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call backend API gửi mã code về SĐT này
    alert(`Đã gửi code đến số ${phone}`);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 350 }}>
      <Typography variant="h5" mb={2} align="center">
        Đăng nhập bằng số điện thoại
      </Typography>
      <form onSubmit={handleSendCode}>
        <TextField
          fullWidth
          label="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
          required
        />
        <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
          Gửi mã xác thực
        </Button>
      </form>
    </Paper>
  );
}

export default LoginPage;

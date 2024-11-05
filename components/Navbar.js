import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";



export default function Navbar() {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Zoska Instagram
        </Typography>
        {session && (
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Welcome, {session.user.name}
          </Typography>
        )}
        <SignInButton />
      </Toolbar>
    </AppBar>
  );
}

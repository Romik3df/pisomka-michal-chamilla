// Import necessary modules and components
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar.js"; // Navbar component we created earlier
import { Container, Typography, Box, Button } from "@mui/material";
import { signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession(); // Get session data to check if the user is authenticated

  return (
    <Container>
      {/* Navbar component */}
      <Navbar />

      {/* Main content area */}
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        {session ? (
          // If user is signed in
          <>
            <Typography variant="h4" gutterBottom>
              Welcome, {session.user.name}!
            </Typography>
            <Typography variant="h6">
              You are signed in with {session.user.email}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => signOut()}
              sx={{ marginTop: 2 }}
            >
              Sign Out
            </Button>
          </>
        ) : (
          // If user is not signed in
          <>
            <Typography variant="h4" gutterBottom>
              Welcome to Zoska Instagram
            </Typography>
            <Typography variant="h6" gutterBottom>
              Please sign in to access your account
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => signIn("google")}
              sx={{ marginTop: 2 }}
            >
              Sign In with Google
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
}

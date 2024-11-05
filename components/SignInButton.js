import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <Button variant="contained" color="secondary" onClick={() => signOut()}>
      Sign Out
    </Button>
  ) : (
    <Button variant="contained" color="primary" onClick={() => signIn("google")}>
      Sign In with Google
    </Button>
  );
}

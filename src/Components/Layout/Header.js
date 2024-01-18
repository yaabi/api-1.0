import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import LoadingComponent from "@/LampTechsComponents/LoadingComponent";

function Header() {
  const { data: session, status } = useSession();

  const router = useRouter();
  React.useEffect(() => {
    if (status === "authenticated" && session.isRegistered)
      router.push("/customer/dashboard");
    else if (status === "authenticated" && session.alreadyRegistered)
      router.push("/login");
  }, [status]);
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <LoadingComponent IsLoading={status === "loading"} />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            YAABI
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            YAABI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            {(status !== "authenticated" && !session?.isRegistered) ||
            session?.alreadyRegistered ? (
              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => router.push("/login")}
                >
                  Log in{" "}
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ mx: "10px" }}
                  onClick={() => router.push("/")}
                >
                  Sign up
                </Button>
              </Box>
            ) : (
              <Box>
                {" "}
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => signOut()}
                >
                  Log Out{" "}
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

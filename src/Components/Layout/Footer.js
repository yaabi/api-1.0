import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Divider sx={{ my: "20px" }} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <Typography color={"#373737"} fontSize={"16px"}>
              Yaabi As
            </Typography>
            <Typography fontSize={"14px"} color={"#373737"} my={"15px"}>
              Karl Johans gate 16 <br />
              0514 Oslo
            </Typography>
            <Typography fontSize={"14px"} color={"#373737"}>
              +47 958 91 500
            </Typography>
            <Typography fontSize={"14px"} color={"primary.main"}>
              post@yaabi. no
            </Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Typography color={"#373737"} fontSize={"16px"}>
              Support
            </Typography>
            <List>
              <ListItem disableGutters disablePadding>
                <ListItemButton
                  sx={{
                    color: "#373737",
                    px: "0px",
                    py: "5px",

                    fontSize: "14px",
                  }}
                >
                  Conditions{" "}
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemButton
                  sx={{
                    color: "#373737",
                    px: "0px",
                    py: "5px",

                    fontSize: "14px",
                  }}
                >
                  {" "}
                  Privacy
                </ListItemButton>{" "}
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemButton
                  sx={{
                    color: "#373737",
                    px: "0px",
                    py: "5px",

                    fontSize: "14px",
                  }}
                >
                  Documentation
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            {" "}
            <Typography color={"#373737"} fontSize={"16px"}>
              Information
            </Typography>
            <List>
              <ListItem disableGutters disablePadding>
                <ListItemButton
                  sx={{
                    color: "#373737",
                    px: "0px",
                    py: "5px",

                    fontSize: "14px",
                  }}
                >
                  About Us{" "}
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemButton
                  sx={{
                    color: "#373737",
                    px: "0px",
                    py: "5px",

                    fontSize: "14px",
                  }}
                >
                  {" "}
                  License
                </ListItemButton>{" "}
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemButton
                  sx={{
                    color: "#373737",
                    px: "0px",
                    py: "5px",

                    fontSize: "14px",
                  }}
                >
                  Account
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

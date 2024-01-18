import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import YaabiInput from "./YaabiInput";
import { signIn } from "next-auth/react";
import useApiRequest from "@/Hooks/ApiRequestHook";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import YaabiPassword from "./YaabiPassword";
import ErrorComponent from "../Utils/ErrorComponent";
import ReCaptcha from "../Utils/ReCaptcha";
import Link from "next/link";

export default function LoginForm() {
  const { HandleRequest, error, isLoading } = useApiRequest();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleOnSubmit = () => {
    HandleRequest([
      {
        url: "/customer/login",
        body: data,
        onSuccess: (r) => {
          if (r.status === 200) {
            toast.success("Logged In Successfully!", { duration: 2000 });
            router.push("/customer/dashboard");
          }
        },
        onError: (err) =>
          toast.error(
            err?.response?.data?.message ||
              err?.response?.data?.error[0] ||
              err.message + " - Something went wrong!"
          ),
        method: "POST",
      },
    ]);
  };
  const handleChange = (e) =>
    setData({ ...data, [e?.target?.name]: e?.target?.value });
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box bgcolor={"white"} p={"10px"} width={"700px"}>
        {/* <ErrorComponent error={error} /> */}
        <FormContainer onSubmit={handleOnSubmit}>
          <Typography fontSize={"24px"} textAlign={"center"} my={"30px"}>
            {" "}
            Log in
          </Typography>
          <Box px={"40px"}>
            <YaabiInput
              size="small"
              fullWidth
              required
              label="Email"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
            <YaabiPassword
              size="small"
              fullWidth
              required
              label="Password"
              value={data.password}
              name="password"
              onChange={handleChange}
            />
            <Box
              px={"40px"}
              my={"20px"}
              display={"flex"}
              justifyContent={"center"}
            >
              <ReCaptcha onChange={(v) => setData({ ...data, recaptcha: v })} />
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={isLoading || !data?.recaptcha}
            >
              Log in
            </Button>
            <Box py={"5px"}>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Button
                    sx={{ p: "0px" }}
                    onClick={() => router.push("/")}
                    color="primary"
                  >
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box px={"40px"}>
            <Divider sx={{ my: "50px" }}>Or log in with</Divider>
            <Box display={"flex"} gap={2}>
              <Box flex={1}>
                <Button
                  variant="outlined"
                  color="themeWhite"
                  fullWidth
                  onClick={() => signIn("apple")}
                  sx={{ color: "black" }}
                  startIcon={
                    <img src="/assets/images/apple.svg" alt="apple-login" />
                  }
                >
                  Apple
                </Button>
              </Box>
              <Box flex={1}>
                <Button
                  variant="outlined"
                  color="themeWhite"
                  fullWidth
                  onClick={() => signIn("google")}
                  sx={{ color: "black" }}
                  startIcon={
                    <img src="/assets/images/google.svg" alt="google-login" />
                  }
                >
                  Google
                </Button>
              </Box>
            </Box>
          </Box>
        </FormContainer>
      </Box>
    </Box>
  );
}

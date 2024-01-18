import { Box, Button, Divider, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import YaabiInput from "./YaabiInput";
import { signIn, useSession } from "next-auth/react";
import YaabiSelect from "./YaabiSelect";
import useApiRequest from "@/Hooks/ApiRequestHook";
import ErrorComponent from "../Utils/ErrorComponent";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import CustomCountryOption from "./CustomCountryOption";
import ReCaptcha from "../Utils/ReCaptcha";
import YaabiPassword from "./YaabiPassword";
import Link from "next/link";

export default function SignUpForm() {
  const { data: session, status } = useSession();

  const [countries, setCountries] = useState([]);
  const { HandleRequest, isLoading, error } = useApiRequest();
  const [data, setData] = useState({
    full_name: "",
    country_id: "4",
    company_name: "",
    email: "",
    password: "",
    confirm_password: "",
    status: "Active",
    recaptcha: "",
    type: "manual",
  });
  const handleChange = (e) =>
    setData({ ...data, [e?.target?.name]: e?.target?.value });
  const fetchData = () => {
    HandleRequest([
      {
        url: "/public/public-country/list",
        onSuccess: (r) => setCountries(r.data.data),
      },
    ]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const isPasswordsSame = () => data.password === data.confirm_password;
  const router = useRouter();
  const handleOnSubmit = () => {
    HandleRequest([
      {
        url: "/public/public-customer/store",
        body: data,
        onSuccess: (r) => {
          toast.success(" Account Created Successfully!", { duration: 2000 });
          router.push("/login");
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

  useEffect(() => {
    if (status === "authenticated") {
      setData({
        ...data,
        full_name: session?.user?.name,
        email: session?.user?.email,
        provider_id: session?.user?.id,
        type: "google",
      });
    }
  }, [status]);

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box bgcolor={"white"} p={"10px"} width={"700px"}>
        <FormContainer onSubmit={handleOnSubmit}>
          <Typography fontSize={"24px"} textAlign={"center"} my={"30px"}>
            {status === "authenticated"
              ? "Finish Your Account"
              : "Create account!"}
          </Typography>
          {/* <ErrorComponent error={error} /> */}

          <Box px={"40px"}>
            <YaabiInput
              size="small"
              fullWidth
              required
              label="Company Name"
              value={data.company_name}
              name="company_name"
              onChange={handleChange}
            />
            {status === "unauthenticated" && (
              <YaabiInput
                size="small"
                fullWidth
                required
                label="Contact Name"
                value={data.full_name}
                name="full_name"
                onChange={handleChange}
              />
            )}
            <YaabiSelect
              size="small"
              fullWidth
              required
              label="Country"
              value={data.country_id}
              name="country_id"
              onChange={handleChange}
            >
              {countries.map((c) => (
                <MenuItem key={c.id} value={c.id} component="div">
                  <CustomCountryOption country={c} />
                </MenuItem>
              ))}
            </YaabiSelect>
          </Box>

          {status !== "authenticated" && (
            <>
              <Divider sx={{ my: "50px" }}>Sign Up</Divider>
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
                <YaabiPassword
                  size="small"
                  fullWidth
                  required
                  value={data.confirm_password}
                  name="confirm_password"
                  onChange={handleChange}
                  helperText={
                    data.confirm_password !== "" &&
                    data.password !== "" &&
                    !isPasswordsSame() &&
                    "Password Should be same"
                  }
                  error={
                    data.confirm_password !== "" &&
                    data.password !== "" &&
                    !isPasswordsSame()
                  }
                  label="Confirm Password"
                />
              </Box>
            </>
          )}
          <Box
            px={"40px"}
            my={"20px"}
            display={"flex"}
            justifyContent={"center"}
          >
            <ReCaptcha onChange={(v) => setData({ ...data, recaptcha: v })} />
          </Box>
          <Box px={"40px"} pb={"20px"}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={
                ((data.confirm_password !== "" || data.password !== "") &&
                  (!isPasswordsSame() || isLoading)) ||
                !data.recaptcha
              }
            >
              Sign up
            </Button>

            {status !== "authenticated" && (
              <>
                <Divider sx={{ my: "50px" }}>Or Sign up with</Divider>
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
                      sx={{ color: "black" }}
                      onClick={() => {
                        signIn("google");
                      }}
                      startIcon={
                        <img
                          src="/assets/images/google.svg"
                          alt="google-login"
                        />
                      }
                    >
                      Google
                    </Button>
                  </Box>
                </Box>
              </>
            )}
            <Box textAlign={"center"} py={"10px"}>
              <Typography variant="body2">
                Already using Yaabi ? Log in <Link href={"/login"}>here.</Link>
              </Typography>
            </Box>
          </Box>
        </FormContainer>
      </Box>
    </Box>
  );
}

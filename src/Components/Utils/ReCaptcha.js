import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptcha({ onChange }) {
  return (
    <ReCAPTCHA
      sitekey="6LdyQlIpAAAAAK5L21P6nhbbo_RXgFkvtGn8hzaL"
      onChange={onChange}
    />
  );
}

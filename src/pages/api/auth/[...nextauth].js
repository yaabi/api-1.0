import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import axios from "axios";

const googleCreds = {
  clientId:
    "181825260939-s3shnshs8p9331mc55l0h49tclt757fd.apps.googleusercontent.com",
  clientSecret: "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",
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: googleCreds.clientId,
      clientSecret: googleCreds.clientSecret,
    }),
    AppleProvider({
      clientId: googleCreds.clientId,
      clientSecret: googleCreds.clientSecret,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      const isUserExist = await checkUserExist(token?.email);
      if (isUserExist) {
        const currentUser = await loginUser(token);
        if (currentUser) {
          session.user = currentUser;
          session.isRegistered = true;
        } else {
          session.AlreadyRegistered = true;
        }
      }
      session.user.id = token.sub;
      return session;
    },
  },

  secret: "bK3NEDo6ycyk9csxJulZJQ==",
};
export default NextAuth(authOptions);

const checkUserExist = async (email) => {
  const url = `https://yaabi.lamptechs.com/api/v1/public/public-customer/searchEmail?email=${encodeURIComponent(
    email
  )}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      return data?.data?.isEmailExist;
    } else {
      // Handle non-successful response (e.g., server error)
      console.error(
        "Failed to fetch user existence status:",
        response.statusText
      );

      return false;
    }
  } catch (error) {
    // Handle network or other errors
    console.error("Error while fetching user existence status:", error.message);
    return false;
  }
};
const loginUser = async (user) => {
  const url = `https://yaabi.lamptechs.com/api/v1/customer/login`;
  const fd = new FormData();
  fd.append("email", user?.email);
  fd.append("provider_id", user?.sub);
  try {
    const response = await axios.post(url, fd);

    if (response.status === 200) {
      const data = await response.data;

      return data;
    } else {
      // Handle non-successful response (e.g., server error)
      console.error(
        "Failed to fetch user existence status:",
        response.statusText
      );
      return false;
    }
  } catch (error) {
    // Handle network or other errors
    console.error("Error while fetching user existence status:", error.message);
    return false;
  }
};

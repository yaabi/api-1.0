import SignUpForm from "@/Components/Forms/SignUpForm";
import Layout from "@/Components/Layout/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
}

import { getSession, getSessionData } from "@/pages/libs/next-session";
import { GetServerSideProps } from "next";

type Props = {
  id: number;
  username: string;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res);
  if (getSessionData(session, "id")) {
    let props: Props = {
      id: Number(session.data.id),
      username: String(session.data.username),
    };
    return { props: props };
  }
  return {
    redirect: {
      destination: "/login",
      permanent: true,
    },
  };
};

export default function Page(props: Props) {
  return (
    <>
      <h1>Attendance</h1>
      <h2>You Logged in as {props.username} !!</h2>
    </>
  );
}

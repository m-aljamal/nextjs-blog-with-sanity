import { signIn, getSession } from "next-auth/client";
const signin = () => {
  return (
    <div>
      <h1>Signin </h1>
      <button onClick={() => signIn("github")}>Signin with gitub</button>
      <button onClick={() => signIn("google")}>Signin with google</button>
    </div>
  );
};

export default signin;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (session) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
  }
  return { props: {} };
}

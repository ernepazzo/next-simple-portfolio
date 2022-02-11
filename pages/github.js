import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {

  if (statusCode) {
    return <Error statusCode={statusCode}/>    
  }
  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              My Blog
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// PARA PODER CONECTARME A TRAVES DEL PROXY
import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";
import Link from "next/link";

export async function getServerSideProps() {
  const proxyAgent = new HttpsProxyAgent("http://192.168.30.120:3128");
  const res = await fetch("https://api.github.com/users/ernepazzo", {
    agent: proxyAgent,
  });
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode
    },
  };
}

export default Github;

import Head from "next/head";
import Projects from "../components/projects/projectsPage";

import type { GetStaticProps, InferGetStaticPropsType } from "next";

import type { Repositories } from "@saber2pr/types-github-api";

export default function Home({
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Pratham Portfolio</title>
        {/* <meta name="description" content="Generated by create-t3-app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Projects repo={repos} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  repos: Repositories;
}> = async () => {
  let repos = (await fetch(
    "https://api.github.com/users/KinMod-ui/repos?sort=created"
  ).then((res) => res.json())) as Repositories;

  // let repos: Repositories = await res.json();
  const allowed = [
    "twitterClone",
    "Nasa-rocket-project",
    "NetworkConnector",
    "PostOffice",
    "portfolio",
  ];
  repos = repos.filter((repo) => allowed.includes(repo.name));

  //   console.log(
  //     "here",
  //     repos.map((r) => r.name)
  //   );

  return {
    props: {
      repos,
    },
  };
};

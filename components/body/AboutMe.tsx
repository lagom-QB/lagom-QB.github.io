import React from "react";
import { useQuery, gql } from "@apollo/client";
import { motion } from "framer-motion";
import { client } from "../../pages/_app";
import type { NextPage } from "next";

import styles from "../ComponentStyles/AboutMe.module.css";

const QUERY = gql`
  query {
    authors {
      aboutMe
      id
    }
  }
`;
const motionProps = {
  animate: { opacity: [0, 1, 0, 1], scale: [0.8, 1] },
  exit: { opacity: 0 },
  transition: {
    type: "spring",
    duration: 2,
    delay: 2,
  },
};

const AboutMe: NextPage = () => {
  const { loading, error, data } = useQuery(QUERY, {
    fetchPolicy: "network-only", // Used for first execution
    nextFetchPolicy: "cache-first", // Used for subsequent executions
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ color: "#0070f3" }}>
      <motion.ul
        animate={{ x: [-10, 5] }}
        transition={{ delay: 5, duration: 1 }}
        style={{ color: "#0070f3", padding: "2rem 0" }}
      >
        {data.authors.map(
          (data: { aboutMe: string; id: string }, idx: number) => (
            <div key={data.id}>
              {data.aboutMe === "Quinsy Brenda" ? (
                <h1>{data.aboutMe}</h1>
              ) : (
                <h2>{data.aboutMe}</h2>
              )}
            </div>
          )
        )}
      </motion.ul>
    </div>
  );
};

export async function getStaticProps<GetStaticProps>() {
  const { data } = await client.query({
    query: gql`
      query {
        authors {
          aboutMe
          id
        }
      }
    `,
  });

  return {
    props: {
      skills: data.skills,
    },
  };
}
export default AboutMe;

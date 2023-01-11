import { getSession, signIn, useSession } from "next-auth/react";
import React from "react";
import styles from "../styles/Home.module.css";

type dataType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

type propsType = { data: dataType[] };

const Store = (props: propsType) => {
  const prodData = props.data;
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.storeHeading}>Store</h1>
        {prodData.map((prod) => {
          return (
            <div className={styles.content}>
              <img
                src={prod.image}
                alt="this is alternative"
                width="200"
                height="200"
              />
              <h4>{prod.title}</h4>
              <p>Price - {prod.price}</p>
              <p>category - {prod.category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  const session = await getSession(context);
  console.log("Store Server Side Session ", session);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/Store",
        permanent: false,
      },
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Store;

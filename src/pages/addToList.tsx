import Head from "next/head";
import { AppBar } from "../components/appBar";
import { BottonNavigation } from "../components/bottonNavigation";
import { Container } from "../components/container";
import { Lists } from "../components/lists";
import axios from "axios";
import { ShoppingList } from "@/models/entities/ShoppingList";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";

type AddToListProps = {
  shoppingList: ShoppingList[];
  productId: number;
};

export default function AddToList({ shoppingList, productId }: AddToListProps) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return "loading...";
  }

  if (status !== "authenticated") {
    router.push("/login");
    return null;
  }

  return (
    <>
      <Head>
        <title>CompreBEM</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AppBar left={<AppBar.Back />} />

      <Container>
        <Lists lists={shoppingList} productId={productId} />
      </Container>
      <BottonNavigation />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<AddToListProps> = async ({
  req,
  res,
  query,
}) => {
  try {
    const productId = Number(query.id as string);
    const { user } = await getServerSession(req, res, authOptions);
    const userId = parseInt(user.id, 10);

    const response = await axios.get<ShoppingList[]>(
      "http://localhost:4444/shopping-lists/user/" + userId
    );

    return {
      props: {
        shoppingList: response.data,
        productId,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        shoppingList: [],
        productId: 0,
      },
    };
  }
};

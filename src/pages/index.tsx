import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AppBar } from "../components/appBar";
import { BottonNavigation } from "../components/bottonNavigation";
import { Container } from "../components/container";
import { ProductCardProps } from "../components/productCard";
import { Section } from "../components/section";
import axios from "axios";
import { Category } from "@/models/entities/Category";

type HomeProps = {
  categories: Category[];
};

export default function Home({ categories }: HomeProps) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return "loading...";
  }

  if (status !== "authenticated") {
    router.push("/login");
    return null;
  }

  const COLOR_MAP: Record<string, string> = {
    higiene: "#C93838",
    hortifruit: "#E37A1A",
    limpeza: "#27893C",
    pereciveis: "#1569B7",
  };

  return (
    <>
      <Head>
        <title>CompreBEM</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AppBar content={<AppBar.Logo />} withFilter />

      <Container small>
        {categories.map((c) => (
          <Section
            key={c.name}
            title={c.name}
            color={COLOR_MAP[c.name as keyof typeof COLOR_MAP] || "#000000"}
            products={c.products}
          />
        ))}
      </Container>
      <BottonNavigation />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await axios.get<Category[]>(
      "http://localhost:4444/products/active"
    );

    return {
      props: {
        categories: response.data,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      categories: [],
    },
  };
};

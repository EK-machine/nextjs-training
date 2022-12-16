import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next/types";
import axios from "axios";
import { withLayout } from "../../components/Layout/Layout";
import { HomeProps, MenuItem, TypeProps } from "../../types/types";
import { FirstLevelMenu } from "../../helpers/helpers";
import { ParsedUrlQuery } from "querystring";

const Type: React.FC<TypeProps> = ({ firstCategory }): JSX.Element => {
  return <div>Type: {firstCategory}</div>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: FirstLevelMenu.map((m) => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = FirstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory: firstCategoryItem.id,
    }
  );
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

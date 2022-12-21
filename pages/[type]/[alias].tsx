import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next/types";
import { withLayout } from "../../components/Layout/Layout";
import axios from "axios";
import {
  TopicPageProps,
  MenuItem,
  PageModel,
  ProductModel,
} from "../../types/types";
import { ParsedUrlQuery } from "querystring";
import { FirstLevelMenu } from "../../helpers/helpers";
import TopicPageComponent from "../../pageComponents/TopicPageComponent/TopicPageComponent";
import { API } from "../../helpers/api";
import Head from "next/head";

function TopicPage({
  page,
  products,
  firstCategory,
}: TopicPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="article" />
      </Head>

      <TopicPageComponent
        page={page}
        products={products}
        firstCategory={firstCategory}
      />
    </>
  );
}

export default withLayout(TopicPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of FirstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: m.id,
    });
    paths = paths.concat(
      menu.flatMap((e) => e.pages.map((page) => `/${m.route}/${page.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopicPageProps> = async ({
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
  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    });

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<PageModel>(
      API.topPage.byAlias + params.alias
    );

    const { data: products } = await axios.post<ProductModel[]>(
      API.product.find,
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

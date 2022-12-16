import { withLayout } from "../components/Layout/Layout";
import { HomeProps, MenuItem } from "../types/types";
import { GetStaticProps } from "next/types";
import axios from "axios";

const Search: React.FC = (): JSX.Element => {
  return <div>Search</div>;
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

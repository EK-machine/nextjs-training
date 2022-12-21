import HTag from "../components/HTag/HTag";
import Button from "../components/Button/Button";
import PTag from "../components/PTag/PTag";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import { withLayout } from "../components/Layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next/types";
import { HomeProps, MenuItem } from "../types/types";
import Input from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  return (
    <>
      <HTag tag="h1">Hi there</HTag>
      <Button appearance="primary" className="zz" arrow="right">
        Click
      </Button>
      <Button appearance="ghost" arrow="right">
        Click
      </Button>
      <PTag size="b">Hello</PTag>
      <PTag size="m">Hello</PTag>
      <PTag size="s">Hello</PTag>
      <Tag color="ghost" size="m">
        Hello
      </Tag>
      <Tag color="green" size="s">
        Hello
      </Tag>
      <Tag color="gray" size="m">
        Hello
      </Tag>
      <Tag color="primary" size="s">
        Hello
      </Tag>
      <Tag color="red" size="m">
        Hello
      </Tag>
      <Rating rating={3} isEditable />
      <Input />
      <TextArea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

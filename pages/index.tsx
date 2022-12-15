import HTag from "../components/HTag/HTag";
import Button from "../components/Button/Button";
import PTag from "../components/PTag/PTag";
import Tag from "../components/Tag/Tag";

export default function Home(): JSX.Element {
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
      <Tag color="grey" size="m">
        Hello
      </Tag>
      <Tag color="primary" size="s">
        Hello
      </Tag>
      <Tag color="red" size="m">
        Hello
      </Tag>
    </>
  );
}

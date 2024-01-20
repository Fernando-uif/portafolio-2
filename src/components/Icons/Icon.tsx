import { iconList } from "@/data/Icons/icons";

const Icon = ({ name }: { name: string }) => {
  const icon = iconList[name];
  return <span dangerouslySetInnerHTML={{ __html: icon }} />;
};

export default Icon;

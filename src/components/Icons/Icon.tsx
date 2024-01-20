import { iconList } from "@/data/Icons/icons";
import Link from "next/link";
import React from "react";

const Icon = ({ name, url }: { name: string; url: string }) => {
  const icon = iconList[name];
  return <Link href={url} dangerouslySetInnerHTML={{ __html: icon }} />;
};

export default Icon;

import { iconList } from "@/data/Icons/icons";
import Link from "next/link";
import React from "react";

const Icon = ({ name }: { name: string }) => {
  const icon = iconList[name];
  return <span dangerouslySetInnerHTML={{ __html: icon }} />;
};

export default Icon;

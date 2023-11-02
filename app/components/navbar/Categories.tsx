"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Techno",
    icon: TbBeach,
    description: "Discotecas donde solo ponen Techno!",
  },
  {
    label: "Salsa",
    icon: GiWindmill,
    description: "Discotecas donde solo ponen Salsa!",
  },
  {
    label: "Dancehall",
    icon: MdOutlineVilla,
    description: "Discotecas donde solo ponen Dancehall!",
  },
  {
    label: "Crossover",
    icon: TbMountain,
    description: "Discotecas donde solo ponen Crossover!",
  },
  {
    label: "Reggaetón",
    icon: TbPool,
    description: "Discotecas donde solo ponen Reggaetón!",
  },
  {
    label: "Lujosos",
    icon: IoDiamond,
    description: "Discotecas Lujosas!",
  },
  {
    label: "Otro",
    icon: GiBoatFishing,
    description: "Otro tipo de discotecas!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

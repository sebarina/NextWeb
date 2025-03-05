"use client";
import React from "react";
import Image from "next/image";


import { Badge } from "flowbite-react";
import { TbPoint }   from "react-icons/tb";

import { Icon } from "@iconify/react";
import Link from "next/link";
import BlogCardsData from "@/utils/data/BlogCardsData"

const BlogCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-30">
        {BlogCardsData.map((item, i) => (
          <div className="lg:col-span-4 col-span-12" key={i}>
            <Link href={item.url} className="group">
            <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-0 relative w-full break-words overflow-hidden">
                <div className="relative">
                  <Image src={item.coveravatar} alt="matdash" />
                  <Badge
                    color={"muted"}
                    className="absolute bottom-5 end-5 font-semibold rounded-sm bg-muted"
                  >
                    {item.read}
                  </Badge>
                </div>

                <div className="px-6 pb-6">
                  <Image
                    src={item.avatar}
                    className="h-10 w-10 rounded-full -mt-7 relative z-1"
                    alt="user"
                  />
                  <Badge color={"muted"} className="mt-6">
                    {item.category}
                  </Badge>
                  <h5 className="text-lg my-6 group-hover:text-primary line-clamp-2">{item.title}</h5>
                  <div className="flex">
                    <div className="flex gap-2 me-6 items-center">
                    <Icon icon="solar:eye-outline" height="18" className="text-dark" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                    <Icon icon="solar:chat-line-outline" height="18" className="text-dark" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-1 items-center ms-auto">
                      <TbPoint
                        size={15}
                        className="text-dark"
                      />{" "}
                      <span className="text-sm text-darklink">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCards;

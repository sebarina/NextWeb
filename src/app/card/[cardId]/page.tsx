import React from "react";

import BlogCardsData from "@/utils/data/BlogCardsData"
import Link from "next/link";


export const runtime = 'edge'; // Directly export the runtime

export default async function Page ({
  params,
}: {
  params: Promise<{ cardId: number }>
}) {
  const { cardId } = await params

  const cardData = BlogCardsData[cardId]
  return (
    <>
      <Link href="/sample-page">
      <span className="flex gap-3 align-center items-center truncate mb-3">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m0 0l3-3m-3 3l3 3"/><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/></g></svg>
        </span>
        <span className="max-w-36 card-title">返回</span>
      </span>
      </Link>
      <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <h5 className="card-title">{ cardData.title }</h5>
        <p className="card-subtitle">{ cardData.name }</p>
      </div>
    </>
  );
};

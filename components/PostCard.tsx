import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { PostCardProps } from '../typings'

export default function PostCard({
  postLink,
  mainImage,
  title,
  description,
  author,
  authorImage,
}: PostCardProps) {
  return (
    <Link href={postLink}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border">
        <img
          className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={urlFor(mainImage).url()!}
          alt="#"
        />
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{title}</p>
            <p className="text-xs">
              {description} by {author}
            </p>
          </div>
          <img
            className="h-12 w-12 rounded-full"
            src={urlFor(authorImage).url()!}
            alt="#"
          />
        </div>
      </div>
    </Link>
  )
}

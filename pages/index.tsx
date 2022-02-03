import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import { sanityClient } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Posts */}
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            <PostCard
              postLink={`/post/${post.slug.current}`}
              mainImage={post.mainImage}
              title={post.title}
              description={post.description}
              author={post.author.name}
              authorImage={post.author.image}
            />
          </React.Fragment>
        ))}
      </div>
      {/* Posts */}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name, 
    image
  },
  description,
  mainImage,
  slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}

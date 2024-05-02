"use client";
import Link from "next/link";
import { formatDate } from "app/blog/utils";
import { posts } from ".velite";

export function BlogPosts() {
  let allBlogs = posts;

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                {formatDate(post.publishedAt, false)}
              </p>
              <div className="w-full ">
                <p className="text-neutral-900 text-lg dark:text-neutral-100 tracking-tight">
                  {post.title}
                </p>
                <p className="text-xs">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

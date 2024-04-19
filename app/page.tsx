import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Ivan Leo</h1>
      <p className="mb-4">
        {`I'm a Software Engineer based out of Singapore working mainly with Typescript. In my spare time, I write about my experience building prototypes with LLMs, teaching myself ML and other things I've learnt along the way.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}

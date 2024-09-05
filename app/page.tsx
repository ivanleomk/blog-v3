import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Ivan Leo</h1>
      <p className="mb-4">
        {`I'm currently a Research Engineer at 567 labs where I help prototype and experiment with application tooling involving LLMs. I primarily work with Python, though I have experience in JavaScript and Java. I maintain the instructor package for Python and spend my free time delving into AI research and experimenting with various tooling infrastructures.`}
      </p>
      <p>
        {`Outside of tech, I enjoy running, weightlifting, and outdoor adventures. I often write about my experiences in ML and software engineering.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}

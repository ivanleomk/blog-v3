import { Code, FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Pomofocus",
    description:
      "Pomofocus is a NextJS Application built and deployed on Cloudflare. Users can work in 25 min bursts and document each pomodoro session. Sessions are backed up using a D1 database, ensuring persistent sessions across devices",
    code: "https://github.com/ivanleomk/pomofocus",
  },
  {
    name: "Markdown Replace",
    description:
      "Markdown Replace is a simple cli tool written in Rust which helps to locate all .md files in a single directory, identify any wikilinks and then replace them with a relative link that uses the directory as a root folder.",
    code: "https://github.com/ivanleomk/rust-cli",
    link: "/blog/rust-cli",
  },
];

const Page = () => {
  return (
    <div>
      {/* <h1 className="mb-8 text-2xl font-bold tracking-tighter">Projects</h1> */}

      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => {
          return (
            <div key={project.name}>
              <h2 className="text-2xl">{project.name}</h2>
              <p
                className="text-md text-justify mt-8 h-50"
                style={{ height: "200px", width: "300px" }}
              >
                {project.description}
              </p>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Code />
                <span style={{ marginLeft: "8px" }}>See Code</span>
              </a>
              {project.link && (
                <Link href={project.link} className="flex items-center mt-4">
                  <FileText />
                  <span style={{ marginLeft: "8px" }}>Read More</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

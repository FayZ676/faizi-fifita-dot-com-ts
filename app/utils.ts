import { promises as fs } from "fs";

import { compileMDX } from "next-mdx-remote/rsc";

import { Frontmatter } from "./types";

export async function getMDXFileData(projectId: string) {
  const markdown = await fs.readFile(
    process.cwd() + `/data/mdx/work/${projectId}.mdx`
  );
  const components = {};
  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: markdown,
    options: { parseFrontmatter: true },
    components: components,
  });
  return { frontmatter, content };
}

async function getMDXFilenames() {
  const directoryPath = process.cwd() + `/data/mdx/work/`;
  const files = await fs.readdir(directoryPath);
  return files;
}

export async function getAllMDXFrontmatter() {
  const files = await getMDXFilenames();
  const frontmatters = await Promise.all(
    files.map(async (file) => {
      const { frontmatter } = await getMDXFileData(file.replace(".mdx", ""));
      return frontmatter;
    })
  );
  return frontmatters;
}

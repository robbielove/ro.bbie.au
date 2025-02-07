import { promises as fs } from 'fs';
import path from 'path';
import { compile } from '@mdx-js/mdx'
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', 'content');

export async function getMDXContent(filename: string): Promise<string> {
  const filePath = path.join(contentDirectory, `${filename}.mdx`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContents);

    const compiledMdx = await compile(content, {
      outputFormat: 'program',
      development: process.env.NODE_ENV === 'development',
    });

    return compiledMdx.value.toString();

  } catch (error) {
    console.error(`Error reading or processing MDX file: ${filename}.mdx`, error);
    return `<p>Error loading content for ${filename}. Please check the file.</p>`;
  }
}
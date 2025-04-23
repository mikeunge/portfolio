export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  websiteLink: string | undefined;
  githubLink: string | undefined;
};

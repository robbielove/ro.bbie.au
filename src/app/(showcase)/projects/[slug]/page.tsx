import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  { slug: "project-1", title: "Project One", description: "Description of project 1" },
  { slug: "project-2", title: "Project Two", description: "Description of project 2" },
];

interface PageProps {
  params: { slug: string };
}

const ProjectDetailPage = ({ params }: PageProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailPage;
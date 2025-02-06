// src/app/(resume)/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResumePage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume</CardTitle>
        <CardDescription>View and download the resume of Robbie Loversidge.</CardDescription>
      </CardHeader>
      <CardContent>
        <a href="/resume.pdf" download className="text-blue-500 hover:underline">
          Download Resume (PDF)
        </a>
      </CardContent>
    </Card>
  );
};

export default ResumePage;
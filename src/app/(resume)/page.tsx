import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResumePage = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Resume</CardTitle>
            <CardDescription>View and download Robbie Loversidge's resume.</CardDescription>
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
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description, href }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardContent className="p-4 border-t">
        <Link href={href} className="text-blue-500 hover:underline block text-center">
          View
        </Link>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
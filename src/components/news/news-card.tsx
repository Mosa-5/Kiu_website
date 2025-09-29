import { Card, CardContent } from "@/components/ui/card";

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
}

const NewsCard = ({ date, title, description }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="aspect-video overflow-hidden">
        <img 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
import { useParams } from "react-router-dom";
import kiuimage from "@/assets/KIU.jpg";
import newsItems from "@/data/newsItems";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = newsItems[Number(id)];

  if (!item) {
    return <p className="text-center text-xl mt-10">News not found</p>;
  }
  const textContent = `The event was officially opened by Professor Paata Turava, Acting Rector of Kutaisi International University. The closing ceremony was attended by Avtandil Kasradze, Chairman of GITA, Levan Kopaliani, Chancellor of KIU, Vakhtang Tsagareli, Director of Kutaisi University Campus, project mentors, students, and invited guests.

    The 2025 Summer School began in July and continued for two months. It is implemented annually within the framework of cooperation between KIU and GITA. This year, nearly 55 students took part in the program.

    Within the framework of the Summer School, KIU students completed a Startup Building course authored by entrepreneurs Nikoloz Gogotchuri and Nikoloz Rostomashvili. The program offered participants the opportunity to enhance their innovative thinking, ideation, and entrepreneurial skills, while gaining hands-on experience in managing the early stages of a startup. Over several weeks, students engaged in both theoretical and practical learning, developed their own ideas, formed teams, and presented innovative project models to a jury. The final stage of the program, Demo Day, featured presentations of seven student projects.

    Since 2021, the Innovation and Startup Acceleration Summer School has been held annually at KIU. Over the past four years, nearly 200 KIU students have participated in the program. Dozens of startup ideas initiated by students have been implemented, and many participants have applied the acquired knowledge and skills in practice. A significant number of them have founded their own startups and attracted multiple forms of funding.`;

  const paragraphs = textContent.split('\n\n').filter(p => p.trim());
  return (
    <div className="max-w-[1680px] mx-auto bg-white">
      <div className="relative">
        <div className="float-right ml-4 mb-4 w-full md:w-1/2 lg:w-[686px] h-[512px]">
          <img 
            src={kiuimage}
            alt="Event ceremony with participants"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="text-gray-800 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 text-xl font-medium">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default NewsDetail;

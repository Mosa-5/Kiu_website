import React from "react";
import newsItems from "@/data/newsItems"; 
import kiuimage from "@/assets/KIU.jpg";
import { useParams } from "react-router-dom";

type NewsItem = {
  id: number;
  date: string;
  title: string;
};


function getRandomNews(data: NewsItem[], count: number): NewsItem[] {
  return [...data].sort(() => 0.5 - Math.random()).slice(0, count);
}


const SimilarNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentId = Number(id);

  const filteredNews = newsItems.filter((item) => item.id !== currentId);

  const randomNews = getRandomNews(filteredNews, 3);


  return (
    <div className="mt-16 mb-40 flex flex-col items-center">
        <div className="max-w-[1680px]">
            <h2 className="text-4xl font-semibold text-[#3C70AF] mb-12">Similar News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {randomNews.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
                >
                    <div className="relative overflow-hidden">
                    <img
                        src={kiuimage}
                        alt={item.title}
                        className="object-cover w-[540px] h-[420pxs]"
                    />
                    </div>
                    <div className="p-4 h-52">
                        <p className="text-lg text-gray-500 font-medium">{item.date}</p>
                        <h3 className="mt-1 text-2xl font-medium text-black">
                            {item.title}
                        </h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    
  );
};

export default SimilarNews;
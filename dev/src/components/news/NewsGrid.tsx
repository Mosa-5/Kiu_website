import { useState } from "react";
import NewsCard from "./NewsCard";
import NewsCardMobile from "./NewsCardMobile";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { kiuCardImg } from "@/assets";
import { grid, paginationWrapper, paginationButton } from "./NewsGrid.styles";

interface NewsGridProps {
  items: typeof import("@/data/newsItems").default;
}

const NewsGrid = ({ items }: NewsGridProps) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className={grid()}>
        {currentItems.map((item) => (
          <div key={item.id}>
            {/* Desktop version - hidden on mobile */}
            <div className="hidden md:block">
              <NewsCard
                id={item.id}
                imageUrl={kiuCardImg}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </div>

            {/* Mobile version - hidden on desktop */}
            <div className="md:hidden">
              <NewsCardMobile
                id={item.id}
                imageUrl={kiuCardImg}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={paginationWrapper()}>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={paginationButton({
                  disabled: currentPage === 1,
                })}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 5 && <PaginationEllipsis />}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={paginationButton({
                  disabled: currentPage === totalPages,
                })}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default NewsGrid;

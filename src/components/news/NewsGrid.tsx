import { useState } from "react";
import NewsCard from "./NewsCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import kiuimage from "@/assets/KIU.jpg";
import {
  container,
  grid,
  paginationWrapper,
  paginationButton,
} from "./NewsGrid.styles";

interface NewsGridProps {
  items: typeof import("@/data/newsItems").default;
}

const NewsGrid = ({ items }: NewsGridProps) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={container()}>
      <div className={grid()}>
        {currentItems.map((item) => (
          <NewsCard
            id={item.id}
            imageUrl={kiuimage}
            key={item.id}
            date={item.date}
            title={item.title}
            description={item.description}
          />
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

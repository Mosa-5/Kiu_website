import * as React from "react";
import {
  // ChevronLeftIcon,
  // ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-3.5", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "flex items-center justify-center w-11 h-11 text-xl rounded-md border-2 font-medium transition-colors ",
        isActive
          ? "border-[#3C70AF] bg-[#3C70AF] text-white"
          : "border-[#3C70AF] bg-white text-[#3C70AF] hover:bg-[#3C70AF] hover:text-white hover:cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5 group w-11 h-11", className)}
      {...props}
    >
      <svg
        width="16"
        height="32"
        viewBox="0 0 16 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#4879B4] group-hover:fill-white duration-200 rotate-180 size-7"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5427 16.948L6.00008 24.4907L4.11475 22.6054L10.7147 16.0054L4.11475 9.40535L6.00008 7.52002L13.5427 15.0627C13.7927 15.3127 13.9331 15.6518 13.9331 16.0054C13.9331 16.3589 13.7927 16.698 13.5427 16.948Z"
          // fill="#4879B4"
        />
      </svg>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5 group w-11 h-11", className)}
      {...props}
    >
      <svg
        width="16"
        height="32"
        viewBox="0 0 16 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#4879B4] group-hover:fill-white duration-200 size-7"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5427 16.948L6.00008 24.4907L4.11475 22.6054L10.7147 16.0054L4.11475 9.40535L6.00008 7.52002L13.5427 15.0627C13.7927 15.3127 13.9331 15.6518 13.9331 16.0054C13.9331 16.3589 13.7927 16.698 13.5427 16.948Z"
          // fill="#4879B4"
        />
      </svg>
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex w-10 h-10 items-center justify-center rounded-md border-2 border-[#3C70AF] bg-white text-[#3C70AF]",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};

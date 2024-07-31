import React from "react";
import { Pagination, PaginationItemType } from "@nextui-org/react";

export default function CustomPagination() {
  const customColor = "#11693d"; // Ваш цвет

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={`${className} bg-default-200/50 min-w-8 w-8 h-8`}
          onClick={onNext}
        >
          &gt;
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={`${className} bg-default-200/50 min-w-8 w-8 h-8`}
          onClick={onPrevious}
        >
          &lt;
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }

    return (
      <button
        key={key}
        ref={ref}
        className={`${className} ${isActive ? "text-white bg-gradient-to-br from-[your_color] to-gray-700 font-bold" : ""}`}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={10}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
    />
  );
}

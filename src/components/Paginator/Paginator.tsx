import React, { useState } from 'react';
import { Page, StyledPaginator } from './Paginator.styles';
import { PaginatorProps } from './Paginator.types';
import { RESOLUTIONS_LIMIT } from '../../constants/constants';
import { ChevronLeft, ChevronRight } from 'react-feather';

const startItem = (total: number, currentPage: number) => {
  if (total <= RESOLUTIONS_LIMIT) return 1
  return (currentPage - 1) * RESOLUTIONS_LIMIT + 1
}

const endItem = (total: number, currentPage: number) => {
  if (total <= RESOLUTIONS_LIMIT) return total
  return currentPage * RESOLUTIONS_LIMIT >= total ? total : currentPage * RESOLUTIONS_LIMIT
}

const pages = (
  total: number,
  currentPage: number,
  limit: number,
  setPage: (page: number) => void,
  onChange: (page: number) => void,) => {
  const pages = Math.ceil(total / limit)
  const pagesArray = Array.from({length: pages}, (_, i) => i + 1)
  return pagesArray.map(page =>
    <Page
      key={page}
      active={currentPage === page}
      disabled={currentPage === page}
      onClick={() => {
        setPage(page)
        onChange(page)
      }}
    >
      {page}
    </Page>)
}

export const Paginator: React.FC<PaginatorProps> = ({total, onChange}) => {
  const lastPage = Math.ceil(total / RESOLUTIONS_LIMIT)
  const [page, setPage] = useState(1) // todo
  const firstResults = startItem(total, page)
  const lastResults = endItem(total, page)
  console.log('paginatorPage', page)
  return (
    <StyledPaginator>
      <p><span>Results:</span> {firstResults}-{lastResults} of {total}</p>
      <Page
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1)
          onChange(page)
        }}
      >
        <ChevronLeft />
      </Page>
      {pages(total, page, RESOLUTIONS_LIMIT, setPage, onChange)}
      <Page
        disabled={page === lastPage}
        onClick={() => {
          setPage(page + 1)
          onChange(page)
        }}
      >
        <ChevronRight />
      </Page>
    </StyledPaginator>
  );
};

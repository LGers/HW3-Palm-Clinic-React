import React from 'react';
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
  return currentPage * RESOLUTIONS_LIMIT
}

const pages = (total: number, currentPage: number, limit: number) => {
  const pages = Math.ceil(total / limit)
  const pagesArray = Array.from({length: pages}, (_, i) => i + 1)
  return pagesArray.map(page =>
    <Page
      key={page}
      active={currentPage === page}
      disabled={currentPage === page}
    >
      {page}
    </Page>)
}

export const Paginator: React.FC<PaginatorProps> = ({total, currentPage}) => {
  const firstResults = startItem(total, currentPage)
  const lastResults = endItem(total, currentPage)
  const lastPage = Math.ceil(total / RESOLUTIONS_LIMIT)

  return (
    <StyledPaginator>
      <p><span>Results:</span> {firstResults}-{lastResults} of {total}</p>
      <Page disabled={currentPage === 1}><ChevronLeft /></Page>
      {pages(total, currentPage, RESOLUTIONS_LIMIT)}
      <Page disabled={currentPage === lastPage}><ChevronRight /></Page>
    </StyledPaginator>
  );
};

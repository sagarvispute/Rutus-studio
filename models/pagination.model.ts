export interface PaginationResponse<T> {
    count: number
    currentPage: number
    nextPage: number
    records: T
}

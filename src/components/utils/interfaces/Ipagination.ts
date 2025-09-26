export interface IPagination {
    totalpages: number;
    currentpage: number;
    setPage: (page: number) => void;
}
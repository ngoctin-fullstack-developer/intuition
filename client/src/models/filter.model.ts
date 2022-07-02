export interface IFilter {
    cate : string|null,
    color : string|null,
    size : string|null,
    price : {
        min : string,
        max : string,
    } | null
}

export const initialFilter : IFilter = {
    cate : null,
    color : null,
    size : null,
    price : null
}
export interface DataJSONModelResponse {
    data:       DataModelResponse[];
    totalCount: number;
    groupCount: number;
}

export interface DataModelResponse {
    Value: string;
    Text:  string;
}

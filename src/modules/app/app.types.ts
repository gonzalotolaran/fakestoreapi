export interface IApiResponse<T> {
	data?: T ;
	hasError?: boolean ;
	error?: any;
}
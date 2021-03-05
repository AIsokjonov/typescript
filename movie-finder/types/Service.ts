export interface APIResponse {
	id: number;
	title: string;
	release_date: string;
	poster_path: string | undefined;
	match: any;
};

interface ServiceInit {
	status: 'init';
}

interface ServiceLoading {
	status: 'loading';
}

interface ServiceLoaded<T> {
	status: 'loaded';
	payload: T;
}

interface ServiceError {
	status: 'error';
	error: Error;
};

export type Service<T> =
	| ServiceInit
	| ServiceLoading
	| ServiceLoaded<T>
	| ServiceError;

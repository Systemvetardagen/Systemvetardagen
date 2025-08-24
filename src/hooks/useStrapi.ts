import {
    useQuery,
    useQueryClient,
    UseQueryOptions,
} from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import {
    StrapiQueryParams,
    StrapiCollectionResponse,
    StrapiSingleResponse,
    StrapiError,
    PluralEndpoints,
    SingularEndpoints,
} from '../types/strapi';

interface StrapiConfig {
    baseUrl: string;
    apiToken: string;
}

const defaultConfig: StrapiConfig = {
    baseUrl: import.meta.env.VITE_STRAPI_BASE_URL,
    apiToken: import.meta.env.VITE_STRAPI_API_TOKEN,
};

// Generic fetch func
async function fetchStrapi<T>(
    endpoint: string,
    params?: StrapiQueryParams,
    config: StrapiConfig = defaultConfig
): Promise<T> {
    const url = new URL(`${config.baseUrl}/${endpoint}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                if (key === 'populate' || key === 'fields' || key === 'sort') {
                    if (Array.isArray(value)) {
                        value.forEach((item) =>
                            url.searchParams.append(key, item)
                        );
                    } else if (typeof value === 'object') {
                        url.searchParams.append(key, JSON.stringify(value));
                    } else {
                        url.searchParams.append(key, value as string);
                    }
                } else if (key === 'filters') {
                    Object.entries(value).forEach(
                        ([filterKey, filterValue]) => {
                            url.searchParams.append(
                                `filters[${filterKey}]`,
                                filterValue as string
                            );
                        }
                    );
                } else if (key === 'pagination') {
                    Object.entries(value).forEach(
                        ([paginationKey, paginationValue]) => {
                            url.searchParams.append(
                                `pagination[${paginationKey}]`,
                                paginationValue as string
                            );
                        }
                    );
                } else {
                    url.searchParams.append(key, value as string);
                }
            }
        });
    }

    // eslint-disable-next-line no-undef
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    const token = config.apiToken;
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url.toString(), {
        method: 'GET',
        headers,
    });

    if (!response.ok) {
        const errorData: StrapiError = await response.json();
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
    }

    return response.json();
}

// Hook for fetching collections (plural endpoints)
export function useStrapiCollection<T>(
    endpoint: PluralEndpoints,
    params?: StrapiQueryParams,
    options?: Omit<
        UseQueryOptions<StrapiCollectionResponse<T>>,
        'queryKey' | 'queryFn'
    >
) {
    const { i18n } = useTranslation();
    
    const paramsWithLocale = {
        ...params,
        locale: i18n.language === 'en' ? 'en' : 'sv'
    };
    
    return useQuery({
        queryKey: ['strapi', endpoint, paramsWithLocale],
        queryFn: () =>
            fetchStrapi<StrapiCollectionResponse<T>>(endpoint, paramsWithLocale),
        ...options,
    });
}

// Hook for fetching single items
export function useStrapiSingle<T>(
    endpoint: SingularEndpoints,
    id: string | number,
    params?: StrapiQueryParams,
    options?: Omit<
        UseQueryOptions<StrapiSingleResponse<T>>,
        'queryKey' | 'queryFn'
    >
) {
    const { i18n } = useTranslation();
    
    // Add current locale to params
    const paramsWithLocale = {
        ...params,
        locale: i18n.language === 'en' ? 'en' : 'sv'
    };
    
    return useQuery({
        queryKey: ['strapi', endpoint, id, paramsWithLocale],
        queryFn: () =>
            fetchStrapi<StrapiSingleResponse<T>>(`${endpoint}/${id}`, paramsWithLocale),
        enabled: !!id,
        ...options,
    });
}

// Hook for custom Strapi queries (for any endpoint)
export function useStrapiQuery<T>(
    endpoint: string,
    params?: StrapiQueryParams,
    options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
    const { i18n } = useTranslation();
    
    // Add current locale to params
    const paramsWithLocale = {
        ...params,
        locale: i18n.language === 'en' ? 'en' : 'sv'
    };
    
    return useQuery({
        queryKey: ['strapi', endpoint, paramsWithLocale],
        queryFn: () => fetchStrapi<T>(endpoint, paramsWithLocale),
        ...options,
    });
}

// Utility hook for prefetching data
export function useStrapiPrefetch() {
    const queryClient = useQueryClient();

    const prefetchCollection = <T>(
        endpoint: PluralEndpoints,
        params?: StrapiQueryParams
    ) => {
        return queryClient.prefetchQuery({
            queryKey: ['strapi', endpoint, params],
            queryFn: () =>
                fetchStrapi<StrapiCollectionResponse<T>>(endpoint, params),
        });
    };

    const prefetchSingle = <T>(
        endpoint: SingularEndpoints,
        id: string | number,
        params?: StrapiQueryParams
    ) => {
        return queryClient.prefetchQuery({
            queryKey: ['strapi', endpoint, id, params],
            queryFn: () =>
                fetchStrapi<StrapiSingleResponse<T>>(
                    `${endpoint}/${id}`,
                    params
                ),
        });
    };

    return { prefetchCollection, prefetchSingle };
}

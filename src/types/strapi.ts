export type PluralEndpoints = "companies" | "programs" | "positions"

export type SingularEndpoints = "company" | "program" | "position"

// Base Strapi response structure
export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

// Single item response
export interface StrapiSingleResponse<T> {
  data: T
  meta: Record<string, any>
}

// Collection response
export interface StrapiCollectionResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

// Query parameters for Strapi
export interface StrapiQueryParams {
  populate?: string | string[] | Record<string, any>
  filters?: Record<string, any>
  sort?: string | string[]
  pagination?: {
    page?: number
    pageSize?: number
    start?: number
    limit?: number
  }
  publicationState?: 'live' | 'preview'
  locale?: string
  fields?: string[]
}

// Auth token interface
export interface StrapiAuthToken {
  jwt: string
  user?: any
}

// Error response
export interface StrapiError {
  data: null
  error: {
    status: number
    name: string
    message: string
    details?: Record<string, any>
  }
}

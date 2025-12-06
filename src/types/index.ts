export interface BaseParams {
    [key: string]: string | string[] | undefined;
}

export interface RouteParams extends BaseParams {
    documentId?: string;
}

export type Params = Promise<RouteParams>;
export type SearchParams = Promise<BaseParams>;

export type TImage = {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string | null;
};

export type TLink = {
    id: number;
    href: string;
    label: string;
    isExternal?: boolean;
};

export type TFeature = {
    id: number;
    heading: string;
    subHeading: string;
    icon: string;
};

export type THomePage = {
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    blocks: any; // we will change this soon
};

export type THeader = {
    logoText: TLink;
    ctaButton: TLink;
};

export type TFooter = {
    logoText: TLink;
    text: string;
    socialLink: TLink[];
};

export type TGlobal = {
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    header: THeader;
    footer: TFooter;
};

export type TMetaData = {
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type TSummary = {
    documentId: string;
    videoId: string;
    userId: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type TAuthUser = {
    id: number;
    documentId: string;
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
    bio?: string;
    credits?: number;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type TCourseType = {
    id: number;
    documentId: string;
    title: string;
    description?: string[] | null;
    small_title1?: string | null;
    additional_descr1: string[] | null;
    small_title2: string | null;
    additional_descr2: string[] | null;
    courses: any[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type TStrapiResponse<T = null> = {
    success: boolean;
    data?: T;
    error?: {
        status: number;
        name: string;
        message: string;
        details?: Record<string, string[]>;
    };
    meta?: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
    status: number;
};
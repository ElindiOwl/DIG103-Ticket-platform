export interface EventTheme {
    primaryColor: string;
    primaryColorLight: string;
    secondaryColor: string;
    fontFamily: string;
}

export interface EventThemeAPIResponse {
    colorPrimary: string;
    colorPrimaryLight: string;
    colorSecondary: string;
    fontFamily: string;
}

export interface EventFeature {
    id: number;
    image: string;
    description: string;
}

export interface EventFeatureAPIResponse {
    id: number;
    imageUrl: string;
    description: string;
}

export interface Event {
    id: number;
    title: string;
    start?: string;
    location?: string;
    end?: string;
    description: string;
    mainImage?: string;
    heroImage?: string;
    theme?: EventTheme;
    features?: EventFeature[];
    artists?: number[];
}

export interface FeaturedEvent {
    id: number;
    title: string;
    theme?: EventTheme;
}

export interface EventAPIResponse {
    id: number;
    name: string;
    startDate?: string;
    location?: string;
    endDate?: string;
    description: string;
    imageUrl?: string;
    backgroundUrl?: string;
    theme?: EventThemeAPIResponse;
    isFeatured?: boolean;
    features?: EventFeatureAPIResponse[];
    artistIds?: number[];
}

export interface FeaturedEventAPIResponse {
    id: number;
    name: string;
    theme?: EventThemeAPIResponse;
}
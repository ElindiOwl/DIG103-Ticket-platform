export interface ArtistEvent {
    id: number
}

export interface Artist {
    id: number,
    name: string,
    description: string,
    image: string,
    events: ArtistEvent[]
}

export interface ArtistAPIResponse {
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    eventIds: ArtistEvent[]
}
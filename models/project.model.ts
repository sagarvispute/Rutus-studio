export interface Project {
    id: number
    category: number
    completion_year: string
    created_at: string
    description: string
    image: string
    images_count: string
    location: string
    name: string
}

export interface Categories {
    id: string
    name: string
    active?: boolean
}

export interface Pet {
    id: number;
    name: string;
    bred_for?: string; // Optional in case some breeds don’t have this
    breed_group?: string;
    life_span: string;
    origin?: string;
    reference_image_id?: string;
    temperament?: string;
    height: {
        imperial: string;
        metric: string;
    };
    weight: {
        imperial: string;
        metric: string;
    };
}
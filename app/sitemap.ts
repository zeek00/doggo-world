
import { MetadataRoute } from 'next'
import {groups} from "@/data/data";
import {fetchPets} from "@/lib/api";

const SITE_URL = process.env.PROD_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const pets = await fetchPets()


    const staticRoutes = [
        '',
        'about',
        'search',
        'breeds',
        'featured',
        'pets'
    ]



    return [
        ...staticRoutes.map(path => ({
            url: `${SITE_URL}${path ? `/${path}` : ''}`,
            lastModified: new Date(),
        })),
        ...groups.map(group => ({
            url: `${SITE_URL}/breeds/${group}`,
            lastModified: new Date(),
        })),
        ...pets.map(pet => ({
            url: `${SITE_URL}/pets/${pet.id}`,
            lastModified: new Date(),
        })),
    ]
}
import {HeadersProp} from "@/lib/headers";
import { cache } from 'react'
import 'server-only'
import {Pet} from "@/types/pets";

const Headers : HeadersProp = {
    'x-api-key': process.env.API_KEY || ''

}

export const preload = () => {
    void fetchPets()
    console.log('...data preloaded !')
}


 const  fetchPets  = cache(async ()=>{
     const values: Pet[] = [];
     try{
        const res = await fetch('https://api.thedogapi.com/v1/breeds', {
            method: 'GET',
            headers: Headers
        })

        if(!res.ok){
            throw new Error(`Failed to fetch breed groups: ${res.status} - ${res.statusText}`)
        }
        const data = await res.json()
         data.forEach(( pet: Pet )=>{
            if(pet['breed_group'] && typeof pet['breed_group'] === 'string' && pet['breed_group'].trim() !== '') {
                values.push(pet);
            }
        })

        return values
    }catch (error){
        console.error('Error fetching breed groups:', error);
        return [];
    }
})


export {
    fetchPets
}
// noinspection ExceptionCaughtLocallyJS

import {HeadersProp} from "@/lib/headers";
import { cache } from 'react'
import 'server-only'
import {Pet} from "@/types/pets";

const Headers : HeadersProp = {
    'x-api-key': process.env.API_KEY || ''

}

export const preload = () => {
    void fetchPets(0,10)
    console.log('...data preloaded !')
}


 const  fetchPets  = cache(async (page?: number, limit?: number)=>{
     const values: Pet[] = [];
     try{
        const res = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`, {
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

const fetchPetById = cache(async (id: string) => {
    try{
        const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`, {
            method: 'GET',
            headers: Headers
        })
        if(!res.ok){
            throw new Error(`Failed to fetch pet Id: ${res.status} - ${res.statusText}`)
        }
        return res.json()
    }catch (error){
        console.error('Error fetching pet Id:', error);
        return {};
    }
})

const  fetchFeaturedPet  = cache(async (pets:Pet[])=>{
    const randomId = Math.floor(Math.random() * pets.length) - 1;
    const pet = pets.find(( pet: Pet)=> pet === pets[randomId])
    try{
        const res = await fetch(`https://api.thedogapi.com/v1/images/${pet?.reference_image_id}`, {
            method: 'GET',
            headers: Headers
        })

        if(!res.ok){
            throw new Error(`Failed to fetch pet: ${res.status} - ${res.statusText}`)
        }
        return res.json()
    }catch (error){
        console.error('Error fetching breed groups:', error);
        return [];
    }
})

export {
    fetchPets,
    fetchPetById,
    fetchFeaturedPet
}
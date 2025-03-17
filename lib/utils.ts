import 'server-only'
import {Pet} from "@/types/pets";





const getAllBreedGroups = async (pets: Pet[]) =>{
    const values = new Set<string>();
    pets.forEach(( pet: Pet ) => {
        if (pet['breed_group'] && typeof pet['breed_group'] === 'string' && pet['breed_group'].trim() !== '') {
            values.add(pet['breed_group'] as string);
        }
    })
    return Array.from(values);
}

const getFeaturedPet = async(pets: Pet[]) => {
    const id = Math.floor(Math.random() * pets.length) - 1 ;
    return pets.filter(( pet: Pet)=>pet.id === id)

}

const getPetCategory = async (group: string, pets: Pet[]) =>{
     return pets.filter(( pet: Pet ) => pet['breed_group'] === group)

}

const getPetsByGroup = async (group: string, pets: Pet[]) =>{
    return pets.filter(( pet: Pet ) => pet['breed_group'] === group)
}




export {getAllBreedGroups, getPetCategory, getFeaturedPet, getPetsByGroup}
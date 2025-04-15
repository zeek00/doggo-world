import {ButtonProps} from "@/types/props";
import {BreedGroups} from "@/types/breedGroups";

 const links: ButtonProps[] = [
    {to:'about', hoverColor:'hover:bg-[var(--peach-shade)]', borderColor:'border-[var(--peach-shade)]'},
    {to:'pets', hoverColor:'hover:bg-[var(--green-shade)]', borderColor:'border-[var(--green-shade)]'},
    {to:'breeds', hoverColor:'hover:bg-[var(--yellow-shade)]', borderColor:'border-[var(--yellow-shade)]'},
];

const groups: string[] = [
    'toy',
    'hound',
    'terrier',
    'working',
    'mixed',
    'sporting',
    'herding',
    'non-sporting',
]


 const breedGroups: BreedGroups = {
    Toy: {
        characteristics: "Small, affectionate dogs bred primarily for companionship. Ideal for apartment living and close human interaction.",
        examples: ["Chihuahua", "Pomeranian", "Pug", "Maltese", "Yorkshire Terrier"],
        purpose: "Ideal for apartment living and companionship.",
        svg: "/svg/toy.svg"
    },
    Hound: {
        characteristics: "Known for their keen sense of smell or sight, these dogs excel in tracking and endurance-based hunting.",
        examples: ["Beagle", "Greyhound", "Bloodhound", "Dachshund"],
        purpose: "Traditionally used for tracking and hunting game.",
        svg: "/svg/hound.svg"
    },
    Terrier: {
        characteristics: "Energetic and tenacious dogs originally bred for hunting vermin and small game, known for their feisty personalities.",
        examples: ["Jack Russell Terrier", "Scottish Terrier", "Bull Terrier"],
        purpose: "Originally bred for hunting vermin and small game.",
        svg: "/svg/terrier.svg"
    },
    Working: {
        characteristics: "Strong and intelligent dogs bred for guarding, pulling, and other physically demanding tasks. Many serve as police or service dogs.",
        examples: ["Siberian Husky", "Rottweiler", "Boxer", "Great Dane"],
        purpose: "Serve as guard dogs, sled dogs, and police/military dogs.",
        svg: "/svg/working.svg"
    },
    Mixed: {
        characteristics: "A combination of multiple breeds, often resulting in unique traits and diverse characteristics depending on lineage.",
        examples: ["Labradoodle", "Goldendoodle", "Cockapoo"],
        purpose: "Varying traits from parent breeds, often companion animals.",
        svg: "/svg/mixed.svg"
    },

    Sporting: {
        characteristics: "Active and friendly dogs bred for retrieving and assisting hunters, particularly with birds and waterfowl.",
        examples: ["Labrador Retriever", "Golden Retriever", "Cocker Spaniel", "Pointer"],
        purpose: "Hunting and retrieving birds and waterfowl.",
        svg: "/svg/sporting.svg"
    },
    Herding: {
        characteristics: "Highly intelligent and obedient dogs developed to herd and control livestock, often excelling in agility and work-based tasks.",
        examples: ["Border Collie", "German Shepherd", "Australian Shepherd", "Corgi"],
        purpose: "Herd and protect livestock; often used in police and search-and-rescue work.",
        svg: "/svg/herding.svg"
    },
     "Non-Sporting": {
         characteristics: "A diverse group of breeds that don’t fit into other categories, varying widely in size, temperament, and appearance.",
         examples: ["Dalmatian", "Bulldog", "Poodle", "Shiba Inu"],
         purpose: "Originally bred for specific jobs but now mostly companions.",
         svg: "/svg/non-sporting.svg"
     },
};

export {links, breedGroups, groups}
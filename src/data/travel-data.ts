import { ITravelDataType } from "@/interFace/interFace";

export const travelData: ITravelDataType[] = [
    {
        id: 1, 
        travelIcon: 'icon-elephant',
        travelTitle: 'Wild Life',
    },
    {
        id: 7,
        travelIcon: 'icon-cycling', // closest for Hiking
        travelTitle: 'Hiking & Biking',
    },
    // {
    //     id: 2, 
    //     travelIcon: 'icon-gas-balloon',
    //     travelTitle: 'Paragliding',
    // },
    {
        id: 3, 
        travelIcon: 'icon-airplane', // closest for Mountain Flight
        travelTitle: 'Mountain Flight',
    },
    // {
    //     id: 4, 
    //     travelIcon: 'icon-adventure',
    //     travelTitle: 'Adventure',
    // },
    {
        id: 5,
        travelIcon: 'icon-plane-up', // closest for Helicopter Tour
        travelTitle: 'Helicopter',
    },
    {
        id: 6,
        travelIcon: 'icon-life-jacket', // closest for Boating
        travelTitle: 'Boating',
    },
    
    {
        id: 8,
        travelIcon: 'icon-trip', // closest for Trekking
        travelTitle: 'Trekking',
    },
];
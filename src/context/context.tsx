import { createContext, type ReactNode, useContext, useState } from 'react';
import type { ListingContextType, Listing } from '../types/UiTypes';

const ListingContext = createContext<ListingContextType | undefined>(undefined);

export function ListingProvider({ children }: { children: ReactNode }){
    
    const [listings, setListings] = useState<Listing[]>([]);
    
    const listingValue = {
        listings,
        setListings
    }

    return(
        <ListingContext.Provider value={listingValue}>
            {children}
        </ListingContext.Provider>
    )
};

export const useListings = () => {
    const context = useContext(ListingContext);

    if(!context){
        throw new Error('UseListings must be used within a ListingProvider')
    }

    return context;
}
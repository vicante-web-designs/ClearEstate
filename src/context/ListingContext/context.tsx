import { type ReactNode } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import type { Listing } from '../../types/UiTypes';
import { ListingContext } from './createListingContext';

export function ListingProvider({ children }: { children: ReactNode }){
    
    const [listings, setListings] = useLocalStorage<Listing[]>('listings', []);
    
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
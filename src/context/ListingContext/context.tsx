import { useState, type ReactNode } from 'react';
import type { Listing } from '../../types/Listing';
import { ListingContext } from './createListingContext';
import { mockListings } from '../../data/ListingData';

export function ListingProvider({ children }: { children: ReactNode }){
    
    const [listings, setListings] = useState<Listing[]>(mockListings);
    
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
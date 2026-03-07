import { createSlice } from '@reduxjs/toolkit'
import type { Listing } from '../../types/Listing';
import { mockListings } from '../../data/ListingData';

interface ListingState {
    listingValue: Listing[];
}

const initialState: ListingState = {
    listingValue: mockListings
}

const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {

    }
})

export default listingSlice.reducer;
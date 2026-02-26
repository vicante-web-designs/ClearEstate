import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ListingContext } from '../../context/ListingContext/createListingContext';
import type { Listing } from '../../types/Listing';
import { formatPrice } from '../../utils/formatPrice';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react'

const ListingDetails = () => {
    const { listingId } = useParams();

    const context = useContext(ListingContext)

    if(!context){
        throw new Error('Context not found')
    }

    const { listings } = context;

    const listing = listings.find((listing: Listing) => listing.id === listingId)

  return (
    listing ? (
        <section className='max-w-3xl mx-auto'>
            <img src={listing.images[0]} alt={`Image of ${listing.title}`} />

            <div className='flex w-full justify-between items-end'>
                <h1 className='text-5xl'>
                    {listing.title}
                </h1>

                <h3 className='text-green-700 font-bold'>
                    {formatPrice(listing.price)}
                </h3>
            </div>

            <p className='text-xl max-w-[50%] my-16'>
                {listing.description}
            </p>

            <div className='flex gap-4'>
                <MapPin color='#ff6666' size={24}/>
                <p>
                    {`${listing.location}, ${listing.city}, ${listing.state}`}
                </p>
            </div>

            <div className='flex justify-between my-32'>
                <article className='w-fit'>
                    <div className='flex justify-between'>
                        <Bed color='gray' size={24}/>
                        <p className='font-bold'>
                            {listing.bedrooms}
                        </p>
                    </div>
                    <p>Bedrooms</p>
                </article>

                <article className='w-fit'>
                    <div className='flex justify-between'>
                        <Bath color='gray' size={24}/>
                        <p className='font-bold'>
                            {listing.bathrooms}
                        </p>
                    </div>
                    <p>Bathrooms</p>
                </article>

                <article className='w-fit'>
                    <div className='flex justify-between'>
                        <Maximize color='gray' size={24}/>
                        <p className='font-bold'>
                            {`${listing.sizeSqft}`}
                        </p>
                    </div>
                    <p>Square Feet</p>
                </article>
            </div>

            
        </section>
    ) : ''
  )
}

export default ListingDetails

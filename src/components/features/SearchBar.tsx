import { ListingContext } from '../../context/ListingContext/createListingContext'
import Button from '../ui/Button'
import { useContext, useState } from 'react'

function SearchBar(){
    const [search, setSearch] = useState<string>('')
    const context = useContext(ListingContext)

    if (!context) return;

    const { listings } = context;

    function handleSubmit(e){
        e.preventDefault();

        const newListings = listings.filter(listing => listing.title.includes(search))

        console.log(newListings)

        setSearch('')

    }

    return (
        <div>
            <form className=' mx-30' onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <label className='flex flex-col gap-16'>
                    <h3>
                        Search Listing
                    </h3>
                    <input
                        type="text"
                        className='rounded-full w-full p-3 bg-white shadow-lg'
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        value={search}
                    />
                </label>

                <Button
                    label='Search'
                    variant='primary'
                    type='submit'
                />
            </form>
        </div>
    )
}

export default SearchBar
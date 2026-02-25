import Button from '../ui/Button'

function SearchBar(){
    return (
        <form className=' mx-30'>
            <label className='flex flex-col gap-16'>
                <h3>
                    Search Listing
                </h3>
                <input type="text" className='rounded-full w-full p-3 bg-white shadow-lg'/>
            </label>

            <Button
                label='Search'
                variant='primary'
                type='submit'
            />
        </form>
    )
}

export default SearchBar
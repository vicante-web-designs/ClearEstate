import Button from '../components/ui/Button';

function CreateListingPage(){
    return(
        <form>
            <article>
                <h2 className='text-2xl font-bold'>
                    List Your Property with Ease
                </h2>

                <p>
                    Fill out the form below to share your property with thousands of potential clients.
                </p>
            </article>

            <article>
                <label htmlFor="">
                    Title
                </label>
                <input type="text" />
            </article>

            <article>
                <label htmlFor="">
                    Description
                </label>
                <input type="text" />
            </article>

            <article>
                <label htmlFor="">
                    Location
                </label>
                <input type="text" />
            </article>

            <article>
                <label htmlFor="">
                    Agent ID
                </label>
                <input type="text" />
            </article>

             <article>
                <label htmlFor="">
                    Price
                </label>
                <input type="text" />
            </article>

             <article>
                <label htmlFor="">
                    Tags
                </label>
                <input type="text" />
            </article>

             <article>
                <label htmlFor="">
                    Bedrooms
                </label>
                <input type="text" />
            </article>

             <article>
                <label htmlFor="">
                    Type
                </label>
                <input type="text" />
            </article>

            <Button 
                label='Publish Listing'
                variant='primary'
                type='submit'
            />
        </form>
    )
}

export default CreateListingPage;
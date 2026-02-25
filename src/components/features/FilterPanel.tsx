function FilterPanel(){
    return (
        <section>
            <h3>Filter by:</h3>
            <div
                className='flex gap-16'
            >
                <article>
                    <p>
                        Price
                    </p>
                    <select name="price" id="price" title='price' className='bg-white shadow-lg p-3 rounded-full'>
                        <option value="">All Prices</option>
                        <option value="under-10m">Less than 10M</option>
                        <option value="10m-20m">10M - 20M</option>
                        <option value="20m-30m">20M - 30M</option>
                        <option value="above-30m">Above 30M</option>
                    </select>
                </article>

                <article>
                    <p>
                        Location
                    </p>
                    <input
                        type="text"
                        placeholder='Enter location' 
                        className='rounded-full w-full p-3 bg-white shadow-lg'
                    />
                </article>
            </div>
        </section>
    )
}

export default FilterPanel;
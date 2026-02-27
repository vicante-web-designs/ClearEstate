const ListingLoadingState = () => {
  return (
    <section className='flex w-full flex-wrap px-10 items-center justify-center gap-10'>

      {Array.from({ length: 6 }).map((_, i) => (
        <article key={i} className='bg-neutral-100 w-100 shadow-lg rounded-2xl overflow-hidden flex flex-col h-fit animate-pulse'>
          
          {/* Image skeleton */}
          <div className='w-full h-56 bg-neutral-300' />

          <div className='px-16 py-24 flex flex-col gap-6'>
            
            <div className='flex flex-col gap-2'>
              <div className='h-5 bg-neutral-300 rounded-full w-3/4' />
              <div className='h-5 bg-neutral-300 rounded-full w-1/3' />
              <div className='flex flex-col gap-2 mt-1'>
                <div className='h-3 bg-neutral-300 rounded-full w-full' />
                <div className='h-3 bg-neutral-300 rounded-full w-5/6' />
                <div className='h-3 bg-neutral-300 rounded-full w-4/6' />
              </div>
            </div>

            <div className='h-4 bg-neutral-300 rounded-full w-2/3' />
          </div>

          <div className='flex justify-center px-16 pb-16'>
            <div className='h-10 bg-neutral-300 rounded-full w-full' />
          </div>

        </article>
      ))}
      
    </section>
  )
}

export default ListingLoadingState
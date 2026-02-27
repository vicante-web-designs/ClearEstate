const Footer = () => {
    const getCurrentYear = () => {
        const date = new Date();

        return date.getFullYear();
    }
    return(
        <footer className='flex justify-center bg-primary text-white p-24 mt-40'>
            <p>
                &copy; {getCurrentYear()}  ClearListing - All rights reserved
            </p>
        </footer>
    )
}

export default Footer
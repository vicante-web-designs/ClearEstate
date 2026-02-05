import Navbar from '../layout/Navbar'
import HeroSection from '../layout/HeroSection'

function HomePage(){
    return(
        <main className='flex flex-col gap-40'>
            <Navbar />
            <HeroSection />
        </main>
    )
}

export default HomePage
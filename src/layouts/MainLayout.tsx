import Navbar from './Navbar'
import Footer from './Footer'

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className='flex flex-col gap-40'>
      <Navbar />
        {children}
      <Footer />
    </main>
  )
}

export default MainLayout;

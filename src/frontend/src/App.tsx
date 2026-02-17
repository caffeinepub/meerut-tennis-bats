import { useState } from 'react';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserProfile } from './hooks/useQueries';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Speciality from './components/Speciality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderDialog from './components/OrderDialog';
import ProfileSetupDialog from './components/ProfileSetupDialog';
import LoginButton from './components/LoginButton';
import { Button } from './components/ui/button';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const { identity, loginStatus } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  const handleOrderClick = () => {
    if (!isAuthenticated) {
      // Show a message or trigger login
      alert('Please login first to place an order');
      return;
    }
    setOrderDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero onOrderClick={handleOrderClick} />
        <Products />
        <Speciality />
        <Contact />
      </main>
      
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <LoginButton />
        {isAuthenticated && !showProfileSetup && (
          <Button 
            size="lg" 
            onClick={handleOrderClick}
            className="shadow-lg"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Order Now
          </Button>
        )}
      </div>

      {/* Dialogs */}
      <OrderDialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen} />
      <ProfileSetupDialog open={showProfileSetup} />
    </div>
  );
}

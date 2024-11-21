// src/app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}

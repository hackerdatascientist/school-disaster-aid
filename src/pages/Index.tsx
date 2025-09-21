import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EducationModules from "@/components/EducationModules";
import VirtualDrills from "@/components/VirtualDrills";
import EmergencyContacts from "@/components/EmergencyContacts";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EducationModules />
        <VirtualDrills />
        <EmergencyContacts />
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

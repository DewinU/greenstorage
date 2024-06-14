import LandingPage from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'GreenStorage',
  description: 'Almacenamiento verde en la nube',
}

export default function Home() {
  return <LandingPage />;
}

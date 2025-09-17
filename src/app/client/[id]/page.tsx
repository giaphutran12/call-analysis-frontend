import { BrokerHeader } from "@/components/broker-header";
import { ClientRenewalProfile } from "@/components/client-renewal-profile";

interface PageProps {
  params: { id: string };
}

export default function ClientPage({ params }: PageProps) {
  // ... keep params for future data fetching with id: params.id
  return (
    <>
      <BrokerHeader />
      <ClientRenewalProfile />
    </>
  );
}
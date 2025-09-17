import { BrokerHeader } from "@/components/broker-header";
import { CallIntelligenceDashboard } from "@/components/call-intelligence-dashboard";

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-background">
      <BrokerHeader />
      <CallIntelligenceDashboard />
    </div>
  );
}
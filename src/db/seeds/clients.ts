import { db } from '@/db';
import { clients } from '@/db/schema';

async function main() {
    const now = new Date();
    const currentTimestamp = now.toISOString();
    
    const getLastCallEpoch = (daysBack: number) => {
        const callDate = new Date(now);
        callDate.setDate(callDate.getDate() - daysBack);
        return callDate.getTime();
    };

    const sampleClients = [
        {
            name: 'Michael Chen',
            company: 'Tech Solutions Inc',
            lastCallAt: getLastCallEpoch(2),
            email: 'michael.chen@techsolutions.com',
            phone: '(555) 234-5678',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Client A',
            company: 'Global Ventures',
            lastCallAt: getLastCallEpoch(5),
            email: 'contact@globalventures.net',
            phone: null,
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Sarah Rodriguez',
            company: 'Marketing Pro',
            lastCallAt: getLastCallEpoch(1),
            email: null,
            phone: '(555) 876-5432',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'David Thompson',
            company: 'Local Services LLC',
            lastCallAt: getLastCallEpoch(8),
            email: 'david.thompson@localservices.com',
            phone: '(555) 345-6789',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Client B',
            company: 'Innovation Labs',
            lastCallAt: getLastCallEpoch(12),
            email: 'info@innovationlabs.co',
            phone: null,
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Jennifer Liu',
            company: 'Business Analytics Corp',
            lastCallAt: getLastCallEpoch(3),
            email: null,
            phone: null,
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Corporate Holdings Group',
            company: 'Finance Forward',
            lastCallAt: getLastCallEpoch(10),
            email: 'partnerships@financeforward.com',
            phone: '(555) 987-6543',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Amanda Wright',
            company: 'Digital Dynamics',
            lastCallAt: getLastCallEpoch(7),
            email: 'amanda.wright@digitald.com',
            phone: '(555) 654-3210',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Client C',
            company: 'Strategic Partners Inc',
            lastCallAt: getLastCallEpoch(14),
            email: null,
            phone: '(555) 456-7890',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
        {
            name: 'Robert Kim',
            company: 'Enterprise Solutions',
            lastCallAt: getLastCallEpoch(4),
            email: 'robert.kim@enterprisesol.com',
            phone: '(555) 789-0123',
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp,
        },
    ];

    await db.insert(clients).values(sampleClients);
    
    console.log('✅ Clients seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});
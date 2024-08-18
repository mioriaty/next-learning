import React from 'react';

import { DashboardHeader } from '@/app/(dashboard)/_components/DashboardHeader';

type PageProps = object;

const DashboardPage: React.FC<PageProps> = () => {
  return (
    <div>
      <DashboardHeader />
      Dashboard Page
    </div>
  );
};

export default DashboardPage;

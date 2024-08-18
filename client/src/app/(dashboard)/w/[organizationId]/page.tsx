import { auth } from '@clerk/nextjs/server';
import React from 'react';

interface PageProps {}

const OrganizationDetailPage: React.FC<PageProps> = () => {
  const { userId } = auth();
  return <div>{userId}</div>;
};

export default OrganizationDetailPage;

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className? : string;
}

function Layout({ children, className = 'wrapper' }: LayoutProps) {
  return <div className={className}>{children}</div>;
}

export default Layout;

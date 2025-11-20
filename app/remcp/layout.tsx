import { remcpSource } from '@/lib/source';
import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={remcpSource.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}

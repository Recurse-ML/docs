import { gh, rml, remcp, spx } from '@/source.config';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

export const ghSource = loader({
  baseUrl: '/gh',
  // @ts-expect-error - type mismatch with fumadocs v15
  source: createMDXSource(gh),
});

export const rmlSource = loader({
  baseUrl: '/rml',
  // @ts-expect-error - type mismatch with fumadocs v15
  source: createMDXSource(rml),
});

export const remcpSource = loader({
  baseUrl: '/remcp',
  // @ts-expect-error - type mismatch with fumadocs v15
  source: createMDXSource(remcp),
});

export const spxSource = loader({
  baseUrl: '/spx',
  // @ts-expect-error - type mismatch with fumadocs v15
  source: createMDXSource(spx),
});

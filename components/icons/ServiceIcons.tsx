import React from "react";

const iconClass = "mx-auto h-16 w-16 md:h-20 md:w-20";

export function MarketingIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8v12M32 44v12M20 32H8M56 32H44M44 20l-8 8M20 44l-8 8M44 44l-8-8M20 20l-8-8" />
      <circle cx="32" cy="32" r="12" />
      <path d="M32 24v8l4 4" />
    </svg>
  );
}

export function DesignIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="16" width="24" height="20" rx="2" />
      <circle cx="24" cy="26" r="4" />
      <path d="M36 32l16-8v24l-16-8" />
    </svg>
  );
}

export function WebMobileIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="32" height="48" rx="4" />
      <path d="M8 20h32M44 16v40M44 24h12M44 32h8M44 40h10" />
      <circle cx="24" cy="48" r="2" />
    </svg>
  );
}

export function CloudIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M48 40c4-2 8-6 8-12a12 12 0 00-24 0c0 2 .5 4 1.5 5.5" />
      <path d="M20 44H12a8 8 0 010-16c2 0 4 .5 6 1.5" />
      <circle cx="32" cy="28" r="8" strokeDasharray="2 2" />
      <path d="M28 24h8M32 20v8" />
    </svg>
  );
}

export function MigrationIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 24c0-4 4-8 12-8s12 4 12 8v16c0 4-4 8-12 8s-12-4-12-8V24z" />
      <path d="M32 40v12M28 52h8" />
      <path d="M20 32h-4a4 4 0 00-4 4v4a4 4 0 004 4h32a4 4 0 004-4v-4a4 4 0 00-4-4h-4" />
      <path d="M24 24l4-8 4 8M32 16v8" />
    </svg>
  );
}

export function InfrastructureIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="36" width="48" height="20" rx="2" />
      <path d="M16 36V24M28 36V20M40 36V24M52 36V28" />
      <path d="M16 24H8a4 4 0 000 8h8M52 28h8a4 4 0 010 8h-8" />
      <path d="M24 20h16v16H24z" />
    </svg>
  );
}

export function SecurityIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8L12 16v12c0 14 8 22 20 28 12-6 20-14 20-28V16L32 8z" />
      <path d="M24 32l6 6 12-12" />
    </svg>
  );
}

export function EnterpriseIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="28" r="10" />
      <path d="M32 38v6M28 44h8M20 52h24" />
      <path d="M16 20l8-4 8 4 8-4 8 4M16 28l8 4 8-4 8 4 8-4" />
    </svg>
  );
}

const icons: Record<string, React.ComponentType> = {
  marketing: MarketingIcon,
  design: DesignIcon,
  webmobile: WebMobileIcon,
  cloud: CloudIcon,
  migration: MigrationIcon,
  infrastructure: InfrastructureIcon,
  security: SecurityIcon,
  enterprise: EnterpriseIcon,
};

export function ServiceIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? CloudIcon;
  return <Icon />;
}

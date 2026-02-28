type PartnerItem = {
  id: string;
  name: string;
  description?: string | null;
  logoType: string;
  accentColor?: string | null;
};

function TechConnectLogo({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill={accentColor}>
        <circle cx="24" cy="14" r="5" />
        <circle cx="12" cy="28" r="4" />
        <circle cx="36" cy="28" r="4" />
        <circle cx="24" cy="38" r="4" />
        <path d="M24 19v6M18 26l4 4 4-4M24 32v4" stroke={accentColor} strokeWidth="1.5" fill="none" />
      </svg>
      <span
        className="flex h-10 items-center justify-center px-3 text-lg font-bold text-white"
        style={{ backgroundColor: accentColor }}
      >
        TC
      </span>
    </div>
  );
}

export default function PartnerCard({ partner }: { partner: PartnerItem }) {
  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
      {partner.logoType === "techconnect" ? (
        <>
          <TechConnectLogo accentColor={partner.accentColor ?? "#E64A19"} />
          <p
            className="mt-4 text-sm font-semibold uppercase tracking-wide"
            style={{ color: partner.accentColor ?? "#E64A19" }}
          >
            {partner.name}
          </p>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold text-[#000000]">{partner.name}</h3>
          {partner.description && (
            <p className="mt-2 text-center text-sm text-[#000000]">{partner.description}</p>
          )}
        </>
      )}
    </div>
  );
}

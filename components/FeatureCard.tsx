import { FeatureIcon } from "./icons/FeatureIcons";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  side: string;
  iconBg: string;
  iconColor: string;
};

export default function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <div className="w-full max-w-[41.25rem] rounded-xl bg-white p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] md:p-8">
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: feature.iconBg }}
      >
        <FeatureIcon name={feature.icon} bg={feature.iconBg} color={feature.iconColor} />
      </div>
      <h3 className="text-lg font-bold text-[#333333] md:text-xl">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#696969] md:text-base">{feature.description}</p>
    </div>
  );
}

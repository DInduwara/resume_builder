// src/components/home/FeaturesSection.jsx
import React from "react";

const FEATURE_ITEMS = [
  {
    id: "analytics",
    title: "Real-Time Analytics",
    description:
      "Get instant insights into your resumes and applications with live dashboards.",
    icon: "🔑",
    variant: "violet",
  },
  {
    id: "security",
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption and secure authentication to protect your personal data.",
    icon: "🛡️",
    variant: "emerald",
  },
  {
    id: "reports",
    title: "Customizable Reports",
    description:
      "Export recruiter-ready resumes in multiple formats for different roles and companies.",
    icon: "⬇️",
    variant: "orange",
  },
];

const VARIANT_STYLES = {
  violet: {
    cardHoverBg: "hover:bg-violet-50",
    cardHoverBorder: "hover:border-violet-200",
    iconBg: "bg-violet-50",
    iconBorder: "border-violet-200",
    iconText: "text-violet-600",
    titleHover: "group-hover:text-violet-800",
  },
  emerald: {
    cardHoverBg: "hover:bg-emerald-50",
    cardHoverBorder: "hover:border-emerald-200",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200",
    iconText: "text-emerald-600",
    titleHover: "group-hover:text-emerald-800",
  },
  orange: {
    cardHoverBg: "hover:bg-orange-50",
    cardHoverBorder: "hover:border-orange-200",
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-200",
    iconText: "text-orange-500",
    titleHover: "group-hover:text-orange-700",
  },
};

const FeatureCard = ({ title, description, icon, variant }) => {
  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.violet;

  return (
    <article
      className={[
        "group flex gap-4 items-start rounded-2xl border border-slate-200",
        "bg-white/80 px-6 py-5 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-lg",
        styles.cardHoverBg,
        styles.cardHoverBorder,
      ].join(" ")}
    >
      <div
        className={[
          "mt-1 flex h-10 w-10 items-center justify-center rounded-full text-xl border transition",
          "group-hover:scale-105",
          styles.iconBg,
          styles.iconBorder,
          styles.iconText,
        ].join(" ")}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <h3
          className={[
            "text-lg font-semibold text-slate-900 transition",
            styles.titleHover,
          ].join(" ")}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
    </article>
  );
};

const FeaturesSection = () => {
  return (
    <section
      id="features"
      aria-label="Key features"
      className="w-full flex justify-center px-6 md:px-16 lg:px-24 xl:px-32 mt-20 mb-24"
    >
      <div className="w-full max-w-4xl space-y-6">
        {FEATURE_ITEMS.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

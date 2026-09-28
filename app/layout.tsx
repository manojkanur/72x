import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "72X | Private Founder Residency | 72 Hours × Execution",
  description: "72X is a private 72-hour founder residency for 25 selected builders. Validate, ship, sell and build real market traction. Cohort 01 launches November 2026."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

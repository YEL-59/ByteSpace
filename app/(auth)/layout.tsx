import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Sign In or Create an Account",
  description:
    "Join ByteSpace to unlock high-impact tech courses, master modern skills, and advance your career.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#003be2]">
      {children}
    </div>
  );
}

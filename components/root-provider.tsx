'use client'

export default function RootProvider({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      {children}
    </>
  );
}
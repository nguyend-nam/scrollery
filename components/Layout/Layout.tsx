import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useIsMdScreenSize } from "../../hooks/useIsMdScreenSize";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [hydrated, setHydrated] = useState(false);
  const { push } = useRouter();
  const isMd = useIsMdScreenSize();

  useEffect(() => {
    setHydrated(true);
  }, [push]);

  if (!hydrated) {
    return null;
  }

  return (
    <div
      style={{
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
      }}
    >
      <main style={{ width: "100%" }}>
        <div
          style={{
            padding: isMd ? 32 : 16,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 24,
              flexDirection: "column",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {children}
          </div>
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#A5F1E9",
          padding: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          href="https://github.com/nguyend-nam"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            fontWeight: 500,
            color: "#477076",
          }}
        >
          Nam Nguyen Dinh
        </Link>
      </footer>
    </div>
  );
};

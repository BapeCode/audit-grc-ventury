"use client";

import Button from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import Container from "@/components/layout/container";
// import { captureChart } from "@/lib/utils";
import { logout } from "@/actions/auth.actions";

export default function ResultFooter() {
  //   const handleExport = async () => {
  //     const radar = await captureChart("radar-chart");
  //     const pie = await captureChart("pie-chart");
  //     const bar = await captureChart("bar-chart");

  //     localStorage.setItem("radar-chart", radar);
  //     localStorage.setItem("pie-chart", pie);
  //     localStorage.setItem("bar-chart", bar);

  //     window.open("/preview", "_blank");
  //   };

  const handleReset = () => {
    localStorage.removeItem("radar-chart");
    localStorage.removeItem("pie-chart");
    localStorage.removeItem("bar-chart");
    localStorage.removeItem("answers");
  };

  return (
    <footer className="w-full py-4 border-t border-border mt-4">
      <Container className="flex justify-end items-center gap-2">
        <form action={logout}>
          <Button
            type="submit"
            variant={"secondary"}
            className="w-auto"
            onClick={handleReset}
          >
            <RefreshCcw className="h-4 w-4" />
            Recommencer l&apos;audit
          </Button>
        </form>
      </Container>
    </footer>
  );
}

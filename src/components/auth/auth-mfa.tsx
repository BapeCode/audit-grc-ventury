"use client";

import { ArrowLeft, Loader, Lock } from "lucide-react";
import { maskEmail } from "@/lib/utils";
import Button from "../ui/button";
import { useEffect, useRef, useState, useTransition } from "react";
import { verify } from "@/actions/auth.actions";

export default function AuthMFA({ email }: { email: string }) {
  const [isPending, startTransition] = useTransition();
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputsRef.current[0]) inputsRef.current[0].focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode);
    setError(null);
    if (value && index < 5 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (
      e.key === "Backspace" &&
      !code[index] &&
      index > 0 &&
      inputsRef.current[index - 1]
    ) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (pastedData.length !== 6 || isNaN(Number(pastedData))) return;

    const newCode = pastedData.split("");
    setCode(newCode);
    inputsRef.current[5]?.focus();
  };

  const handleSubmit = () => {
    const fullCode: string = code.join("");
    if (fullCode.length < 6) {
      setError("Veuillez remplir les 6 chiffres");
      return;
    }

    startTransition(async () => {
      const isCorrect = await verify(fullCode);
      if (isCorrect.error) {
        setError(isCorrect.error);
        return;
      }
      setCode(Array(6).fill(""));
      inputsRef.current[0]?.focus();
    });
  };

  return (
    <div className="flex flex-col justify-start items-center gap-8 flex-1 max-w-3xl mx-auto">
      <div className="flex items-center p-4 rounded-full bg-primary/20">
        <Lock className="h-15 w-15 text-primary stroke-1" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-text text-2xl font-bold">Vérification du mail</h1>
        <p className="text-text/50 font-normal text-center text-sm">
          Entrez le code à 6 chiffre envoyer à{" "}
          <span className="text-text font-bold">{maskEmail(email)}</span>
        </p>
      </div>

      <div className="flex gap-2 w-full">
        {code.map((digit, index) => (
          <input
            key={index}
            //@ts-expect-error HTML InputElement
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            disabled={isPending}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={`w-12 h-16 text-center text-text text-2xl font-bold border rounded-md bg-surface transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              error
                ? "border-danger focus:ring-danger/50"
                : "border-border focus:border-primary"
            }`}
          />
        ))}
      </div>

      {error && (
        <p className="text-danger text-sm font-medium animate-in fade-in">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4 w-full">
        <Button variant="primary" onClick={handleSubmit}>
          {isPending ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              <p>Vérification</p>
            </>
          ) : (
            "Valider le code"
          )}
        </Button>
        <Button
          variant="ghost"
          className="flex items-center justify-center gap-2 text-text/50 hover:text-text/90"
        >
          <ArrowLeft className="h-4 w-4 stroke-1" />
          Retour en arrière
        </Button>
      </div>
    </div>
  );
}

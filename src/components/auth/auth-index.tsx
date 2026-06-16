"use client";

import { AUTH_STEPPER } from "@/data/auth.data";
import { useState, useRef, useActionState, startTransition } from "react";
import React from "react";
import { Check, Loader } from "lucide-react";
import Button from "@/components/ui/button";
import { AuthFormStep } from "@/types/auth.type";
import { isProEmail } from "@/lib/utils";
import AuthFormComponent from "@/components/auth/auth-form";
import Container from "@/components/layout/container";
import Cards from "@/components/ui/card";
import { submitForm } from "@/actions/auth.actions";

const STEP_PERSONAL: AuthFormStep[] = [
  { key: "firstName", label: "Prénom", placeholder: "Prénom" },
  { key: "lastName", label: "Nom de famille", placeholder: "Nom de famille" },
  { key: "email", label: "Adresse E-Mail", placeholder: "example@company.com" },
  { key: "phone", label: "Téléphone", placeholder: "06.XX.XX.XX.XX" },
];

const STEP_COMPANY: AuthFormStep[] = [
  {
    key: "company",
    label: "Nom de l'entreprise",
    placeholder: "Votre entreprise",
  },
  { key: "grade", label: "Votre poste", placeholder: "Ex : DSI, RSSI..." },
];

const STEP_FINISH: AuthFormStep[] = [
  {
    key: "message",
    label: "Message complémentaire",
    placeholder: "Décrivez vos besoins, vos questions...",
    type: "textarea",
  },
];

export default function AuthIndex() {
  const [step, setStep] = useState<number>(1);
  const [legal, setLegal] = useState<boolean>(false);
  const [error, setError] = useState<Record<string, string>>({});
  const [state, actions, isPending] = useActionState(submitForm, undefined);

  const formRef = useRef<HTMLFormElement>(null);

  const handleNext = () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (step === 1) {
      if (!data.firstName || String(data.firstName).length < 3) {
        newErrors.firstName = "Le prénom doit contenir au moins 3 caractères.";
        isValid = false;
      }
      if (!data.lastName || String(data.firstName).length < 3) {
        newErrors.lastName = "Le nom doit contenir au moins 3 caractères.";
        isValid = false;
      }
      if (!data.email || !isProEmail(data.email as string)) {
        newErrors.email = "L'e-Mail doit être un e-Mail professionnel.";
        isValid = false;
      }
      if (!data.phone || String(data.phone).length !== 10) {
        newErrors.phone = "Le téléphone doit être valide.";
        isValid = false;
      }
    }

    if (step === 2) {
      if (!data.company || String(data.company).length < 3) {
        newErrors.company = "L'entreprise doit contenir au moins 3 caractères.";
        isValid = false;
      }
    }

    setError(newErrors);

    if (isValid) {
      setError({});
      if (step < 3) {
        setStep(step + 1);
      } else if (step === 3) {
        startTransition(() => {
          actions(formData);
        });
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Container className="flex w-full flex-1">
      <div className="flex flex-col items-center justify-center flex-1">
        <header className="flex flex-row items-center justify-between w-full">
          {AUTH_STEPPER.map((item, index) => {
            const isActive = index + 1 === step;
            const isFinish = index < step - 1;
            const progress = isFinish ? 100 : isActive ? 0 : 0;

            return (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className={`flex items-center p-3 rounded-full border border-border ${
                    isFinish ? "bg-primary" : ""
                  } ${isActive ? "bg-surface text-text" : "bg-surface/50 text-text/50"}`}
                >
                  {isFinish ? (
                    <Check className="h-5 w-5 text-primary stroke-1" />
                  ) : (
                    <item.icon className={"h-5 w-5 stroke-1"} />
                  )}
                </div>
                {index < 2 && (
                  <div className="h-0.5 flex-1 bg-border">
                    <div
                      className="h-full bg-primary"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </header>

        <form
          ref={formRef}
          className="flex-1 mt-8 w-full flex flex-col justify-between"
        >
          <div className="flex-1 w-full relative">
            <AuthFormComponent
              title={"Information personnelles"}
              subtitle={
                "Dites-nous qui vous êtes pour personnaliser votre rapport."
              }
              fields={STEP_PERSONAL}
              currentIndex={step}
              viewIndex={1}
              error={error}
            />

            <AuthFormComponent
              title={"Information entreprises"}
              subtitle={"Dites-nous en plus sur votre entreprise."}
              fields={STEP_COMPANY}
              currentIndex={step}
              viewIndex={2}
              error={error}
            />

            <AuthFormComponent
              title={"Information complémentaire"}
              subtitle={"Ajoutez un message complémentaire en cas de besoin."}
              fields={STEP_FINISH}
              currentIndex={step}
              viewIndex={3}
              error={error}
            />
          </div>

          <footer className="flex flex-col items-center justify-between w-full gap-4">
            {step === 3 && (
              <Cards className="items-center flex-row gap-4">
                <input
                  type="checkbox"
                  onChange={(e) => setLegal(e.target.checked)}
                />
                <p className="text-text text-sm font-normal">
                  En soumettant ce formulaire, vous acceptez que Ventury
                  Technology traite vos données personnelles pour vous envoyer
                  votre rapport et vous recontacter.
                </p>
              </Cards>
            )}
            {state?.error && (
              <p className="text-danger text-sm font-medium">{state.error}</p>
            )}
            <div className="flex items-center gap-2 w-full">
              <Button
                type="button"
                variant={"secondary"}
                disabled={step === 1}
                onClick={handlePrev}
              >
                Précédent
              </Button>
              <Button
                type={"button"}
                variant={"primary"}
                disabled={step === 3 && !legal}
                onClick={handleNext}
              >
                {step === 3 ? (
                  isPending ? (
                    <div className="flex items-center gap-2">
                      <Loader className="animate-spin text-text/50 h-4 w-4" />
                      <p>Envoi en cours..</p>
                    </div>
                  ) : (
                    "Valider"
                  )
                ) : (
                  "Suivant"
                )}
              </Button>
            </div>
          </footer>
        </form>
      </div>
    </Container>
  );
}

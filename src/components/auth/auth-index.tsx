"use client";

import { AUTH_STEPPER } from "@/data/auth.data";
import { useState, useRef } from "react";
import React from "react";
import { Check, Loader } from "lucide-react";
import Button from "@/components/ui/button";
import { AuthForm, AuthFormStep } from "@/types/auth.type";
import { isProEmail } from "@/lib/utils";
import AuthFormComponent from "@/components/auth/auth-form";
import { useAuth } from "@/store/auth-store";
import Container from "@/components/layout/container";
import Cards from "@/components/ui/card";
import AuthLoader from "@/components/auth/auth-loader";
import AuthMFA from "@/components/auth/auth-mfa";

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

const LOADING_MESSAGES: Record<string, { title: string; subtitle: string }> = {
  validating: {
    title: "Vérification de vos données...",
    subtitle: "Vos informations sont en cours de vérifications",
  },
  sending: {
    title: "Envoie du mail...",
    subtitle: "Le rapport est en cours d'envoie par mail...",
  },
  mfa: {
    title: "Envoie du mail...",
    subtitle: "Un mail de double authentification en cours d'envoie...",
  },
  mfa_failed: {
    title: "Une erreur est survenue.",
    subtitle: "Votre double authentification n'a pas fonctionner...",
  },
  done: {
    title: "Mail envoyé avec succès, redirection en cours...",
    subtitle: "Vous allez recevoir votre rapport, merci de votre confiance !",
  },
  error: {
    title: "Une erreur serveur est survenu.",
    subtitle:
      "Si l'erreur devient persistant, merci de prévenir l'administrateur du site !",
  },
  invalid: {
    title: "Un champ est invalide, l'authentification a échoué.",
    subtitle: "Vérifier vos champs sur les pages précédente et réssayer.",
  },
};

export default function AuthIndex() {
  const [step, setStep] = useState<number>(3);
  const [form, setForm] = useState<AuthForm>({
    firstName: "",
    lastName: "",
    email: "forest.mathieu69270@gmail.com",
    phone: "",
    company: "",
    grade: "",
    message: "",
  });
  const [error, setError] = useState<AuthForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    grade: "",
    message: "",
  });
  const [loadingStep, setLoadingStep] = useState<string>("validating");
  const [legal, setLegal] = useState<boolean>(false);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const { login } = useAuth();

  const validator = (step: "personal" | "company" | "final"): boolean => {
    const newErrors = { ...error };
    let isValid = true;

    if (step === "personal") {
      if (form.firstName.length < 3) {
        newErrors.firstName = "Le prénom doit contenir au moins 3 caractères.";
        isValid = false;
      } else {
        newErrors.firstName = "";
      }

      if (form.lastName.length < 3) {
        newErrors.lastName =
          "Le nom de famille doit contenir au moins 3 caractères.";
        isValid = false;
      } else {
        newErrors.lastName = "";
      }

      if (!isProEmail(form.email)) {
        newErrors.email = "L'email doit être un email professionnel.";
        isValid = false;
      } else {
        newErrors.email = "";
      }

      if (form.phone.length < 14) {
        newErrors.phone = "Le téléphone doit être valide.";
        isValid = false;
      } else {
        newErrors.phone = "";
      }
    }

    if (step === "company") {
      if (form.company.length < 3) {
        newErrors.company = "L'entreprise doit contenir au moins 3 caractères.";
        isValid = false;
      } else {
        newErrors.company = "";
      }

      if (form.grade.length < 3) {
        newErrors.grade = "Votre poste doit contenir au moins 3 caractères.";
        isValid = false;
      } else {
        newErrors.grade = "";
      }
    }

    setError(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (step + 1 > 6) return;
    if (step === 3) {
      handleMFA().then();
      return;
    }
    if (step === 5) {
      handleSubmit().then();
      return;
    }
    if (step === 1 && !validator("personal")) return;
    if (step === 2 && !validator("company")) return;

    console.log(step);
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step - 1 < 0) return;
    setStep(step - 1);
  };

  const reset = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      grade: "",
      message: "",
    });
    setError({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      grade: "",
      message: "",
    });
    setStep(1);
    setLoadingStep("validating");
  };

  const handleSubmit = async () => {
    setStep(6);
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        form: JSON.stringify(form),
        code: code,
        token: localStorage.getItem("token"),
      }),
    });
    const reader = response?.body?.getReader();

    if (!reader) return setLoadingStep("error");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const message: string = new TextDecoder().decode(value);
      setLoadingStep(message);
      if (message === "mfa_failed") {
        setTimeout(() => {
          setStep(5);
        }, 1500);
      }
      if (message === "done") {
        setTimeout(() => {
          login(form);
          reset();
        }, 1500);
      }
    }
  };

  const handleMFA = async () => {
    setStep(4);

    const response = await fetch("/api/mfa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
      }),
    });

    if (!response.ok) {
      setStep(3);
      return;
    }
    const { token } = await response.json();
    localStorage.setItem("token", token);

    setStep(5);
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
          onSubmit={handleSubmit}
          className="flex-1 mt-8 w-full flex flex-col justify-between"
        >
          {step === 1 && (
            <AuthFormComponent
              title={"Information personnelles"}
              subtitle={
                "Dites-nous qui vous êtes pour personnaliser votre rapport."
              }
              form={form}
              setForm={setForm}
              error={error}
              fields={STEP_PERSONAL}
            />
          )}
          {step === 2 && (
            <AuthFormComponent
              title={"Informations d'entreprises"}
              subtitle={"Dites-nous en plus concernant votre entreprise."}
              form={form}
              setForm={setForm}
              error={error}
              fields={STEP_COMPANY}
            />
          )}

          {step === 3 && (
            <AuthFormComponent
              title={"Informations complémentaire"}
              subtitle={"Ajoutez un message complémentaire en cas de besoin."}
              form={form}
              setForm={setForm}
              error={error}
              fields={STEP_FINISH}
            />
          )}

          {step === 4 && (
            <AuthLoader message={LOADING_MESSAGES} loadingStep={"mfa"} />
          )}

          {step === 5 && (
            <AuthMFA
              email={form.email}
              code={code}
              setCode={setCode}
              inputRef={inputRef}
            />
          )}

          {step === 6 && (
            <AuthLoader message={LOADING_MESSAGES} loadingStep={loadingStep} />
          )}

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
            <div className="flex items-center gap-2 w-full">
              <Button
                type="button"
                variant={"secondary"}
                disabled={step === 1}
                onClick={prevStep}
              >
                Précédent
              </Button>
              <Button
                type={"button"}
                variant={"primary"}
                onClick={nextStep}
                disabled={step === 3 && !legal}
              >
                {step === 5 ? "Valider" : "Suivant"}
              </Button>
            </div>
          </footer>
        </form>
      </div>
    </Container>
  );
}

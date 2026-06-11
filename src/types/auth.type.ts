import {LucideIcon} from "lucide-react";
import React from "react";

interface AuthStepper {
    icon: LucideIcon
}

interface AuthForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    grade: string;
    message: string;
}

interface AuthFormStep {
    key: keyof AuthForm;
    label: string;
    placeholder: string;
    required?: boolean;
    type?: "input" | "textarea";
}

interface AuthFormProps {
    form: AuthForm;
    setForm: React.Dispatch<React.SetStateAction<AuthForm>>;
    error: AuthForm
    title: string;
    subtitle: string;
    fields: AuthFormStep[];
}

interface AuthContextProps {
    auth: boolean;
    login: (value: AuthForm) => void;
    logout: () => void;
}

export type {
    AuthStepper,
    AuthForm,
    AuthContextProps,
    AuthFormProps,
    AuthFormStep
}
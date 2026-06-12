import {Loader, Lock, X} from "lucide-react";
import React from "react";
import {maskEmail} from "@/lib/utils";
import {AuthMFAProps} from "@/types/props.type";

export default function AuthMFA({
    email,
    code,
    setCode,
    inputRef
}: AuthMFAProps) {

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            inputRef.current[index + 1]?.focus();
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRef.current[index - 1]?.focus();
        }
    }

    return (
        <div className="flex flex-col justify-start items-center gap-8 flex-1">
            <div className="flex items-center p-4 rounded-full bg-primary/20">
                <Lock className="h-15 w-15 text-primary stroke-1"/>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-text text-2xl font-bold">Vérification</h1>
                <p className="text-text/50 font-normal text-center text-sm">
                    Entrez le code à 6 chiffre envoyer à {" "}
                    <span className="text-text font-bold">{maskEmail(email)}</span>
                </p>
            </div>

            <div className="flex gap-2 w-full">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => { inputRef.current[index] = el }}
                        type="text"
                        inputMode="numeric"
                        required
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-full h-15 text-center text-text text-xl border border-border bg-surface rounded-xs"
                    />
                ))}
            </div>
        </div>
    )
}
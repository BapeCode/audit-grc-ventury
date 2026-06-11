import {AuthFormProps} from "@/types/auth.type";
import Input from "@/components/ui/input";
import {formatPhone} from "@/lib/utils";
import React from "react";

export default function AuthFormComponent({
    form,
    setForm,
    error,
    title,
    subtitle,
    fields
}: AuthFormProps) {
    return (
        <div className="flex flex-col items-start gap-1">
            <h2 className="text-text font-semibold text-xl md:text-3xl">{title}</h2>
            <p className="text-text/50 font-medium text-sm md:text-md">{subtitle}</p>

            <div className="mt-4 w-full flex flex-col gap-4">
                {fields.map((field, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <label htmlFor={field.key} className="text-text text-md font-medium">{field.label}</label>
                        {field.type && field.type === "textarea" ? (
                            <textarea
                                className="bg-surface p-4 border border-border rounded-xs max-h-40 focus:outline-none focus:border-primary text-text placeholder:text-text/50"
                                placeholder={field.placeholder}
                                name={field.key}
                                id={field.key}
                                onChange={(e) => {
                                    setForm(prev => ({...prev, [field.key]: e.target.value}));
                                }}
                            ></textarea>
                        ) : (
                            <Input
                                className={error[field.key] ? "border-danger" : "border-border"}
                                id={field.key}
                                name={field.key}
                                placeholder={field.placeholder}
                                value={form[field.key]}
                                onChange={(e) => {
                                    const value = field.key === "phone" ? formatPhone(e.target.value) : e.target.value
                                    setForm(prev => ({ ...prev, [field.key]: value }))
                                }}
                            />
                        )}
                        {error[field.key] && (
                            <p className="text-danger text-xs">{error[field.key]}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
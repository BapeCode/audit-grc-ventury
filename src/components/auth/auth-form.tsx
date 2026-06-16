import { AuthFormProps } from "@/types/auth.type";
import Input from "../ui/input";

export default function AuthFormComponent({
  title,
  subtitle,
  fields,
  currentIndex,
  viewIndex,
  error,
}: AuthFormProps) {
  let positionClass = "";

  if (viewIndex < currentIndex) {
    positionClass = "opacity-0 -translate-x-full pointer-events-none";
  } else if (viewIndex == currentIndex) {
    positionClass = "opacity-100 translate-x-0 pointer-events-auto z-10";
  } else {
    positionClass = "opacity-0 translate-x-full pointer-events-none";
  }

  return (
    <div className={`absolute top-0 w-full ${positionClass}`}>
      <div className="flex flex-col items-start gap-1">
        <h2 className="text-text font-semibold text-xl md:text-3xl">{title}</h2>
        <p className="text-text/50 font-medium text-sm md:text-md">
          {subtitle}
        </p>

        <div className="mt-4 w-full flex flex-col gap-4">
          {fields.map((field, index) => {
            const hasError = error && error[field.key];
            return (
              <div key={index} className="flex flex-col gap-1">
                <label
                  htmlFor={"user_" + field.key}
                  className={`text-md font-medium ${hasError ? "text-danger" : "text-text"}`}
                >
                  {field.label}
                </label>
                {field.type && field.type === "textarea" ? (
                  <textarea
                    className="bg-surface p-4 border border-border rounded-xs max-h-40 focus:outline-none focus:border-primary text-text placeholder:text-text/50"
                    placeholder={field.placeholder}
                    name={field.key}
                    id={"user_" + field.key}
                  ></textarea>
                ) : (
                  <Input
                    className={`${hasError ? "border-danger placeholder:text-danger" : "border-border"}`}
                    id={"user_" + field.key}
                    name={field.key}
                    placeholder={field.placeholder}
                    autoComplete="off"
                  />
                )}
                {hasError && (
                  <p className="text-danger text-sm font-medium">{hasError}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

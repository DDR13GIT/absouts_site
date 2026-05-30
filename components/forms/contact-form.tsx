"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button, Input, Textarea, toast } from "@/components/ui";
import { submitContact } from "@/lib/actions/contact";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
  website: string;
};

const initialState: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  serviceInterest: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const t = useTranslations("forms.contact");
  const [values, setValues] = React.useState<ContactFormState>(initialState);
  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function updateField(name: keyof ContactFormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!values.firstName.trim()) nextErrors.firstName = t("errors.firstName");
    if (!values.lastName.trim()) nextErrors.lastName = t("errors.lastName");
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) nextErrors.email = t("errors.email");
    if (values.message.trim().length < 10) nextErrors.message = t("errors.message");
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await submitContact(values);
    setIsSubmitting(false);

    if (result.ok) {
      toast({ title: t("successTitle"), description: t("successDescription") });
      setValues(initialState);
      setErrors({});
      return;
    }

    toast({
      title: t("errorTitle"),
      description: result.error === "invalid" ? t("invalidDescription") : t("errorDescription"),
      variant: "destructive",
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(event) => updateField("website", event.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("firstName")} error={errors.firstName}>
          <Input
            value={values.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
          />
        </Field>
        <Field label={t("lastName")} error={errors.lastName}>
          <Input
            value={values.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("email")} error={errors.email}>
          <Input
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label={t("company")}>
          <Input
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
          />
        </Field>
      </div>

      <Field label={t("serviceInterest")}>
        <Input
          value={values.serviceInterest}
          onChange={(event) => updateField("serviceInterest", event.target.value)}
          placeholder={t("servicePlaceholder")}
        />
      </Field>

      <Field label={t("message")} error={errors.message}>
        <Textarea
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={6}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="mr-2 size-4 animate-spin" /> : null}
        {isSubmitting ? t("sending") : t("submit")}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const id = React.useId();
  return (
    <label className="grid gap-2 text-sm font-medium text-text-primary" htmlFor={id}>
      <span>{label}</span>
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<{ id?: string; "aria-describedby"?: string }>, {
            id,
            "aria-describedby": error ? `${id}-error` : undefined,
          })
        : children}
      {error ? (
        <span id={`${id}-error`} className="text-xs font-medium text-red-600" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

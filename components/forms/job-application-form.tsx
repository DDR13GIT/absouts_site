"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  toast,
} from "@/components/ui";
import { submitApplication } from "@/lib/actions/application";

type ApplicationState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  resumeUrl: string;
  coverLetter: string;
  privacyConsent: boolean;
  website: string;
};

const initialState: ApplicationState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  experience: "",
  resumeUrl: "",
  coverLetter: "",
  privacyConsent: false,
  website: "",
};

type JobApplicationFormProps = {
  jobId: string;
  jobTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function JobApplicationForm({ jobId, jobTitle, open, onOpenChange }: JobApplicationFormProps) {
  const t = useTranslations("forms.application");
  const [values, setValues] = React.useState<ApplicationState>(initialState);
  const [errors, setErrors] = React.useState<Partial<Record<keyof ApplicationState, string>>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setValues(initialState);
      setErrors({});
      setIsSubmitting(false);
    }
  }, [open]);

  function updateField<K extends keyof ApplicationState>(name: K, value: ApplicationState[K]) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof ApplicationState, string>> = {};
    if (!values.firstName.trim()) nextErrors.firstName = t("errors.firstName");
    if (!values.lastName.trim()) nextErrors.lastName = t("errors.lastName");
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) nextErrors.email = t("errors.email");
    if (!/^[\d\s+\-()]+$/.test(values.phone.trim())) nextErrors.phone = t("errors.phone");
    if (!values.experience) nextErrors.experience = t("errors.experience");
    try {
      new URL(values.resumeUrl);
    } catch {
      nextErrors.resumeUrl = t("errors.resumeUrl");
    }
    if (!values.privacyConsent) nextErrors.privacyConsent = t("errors.privacyConsent");
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await submitApplication({ ...values, jobId });
    setIsSubmitting(false);

    if (result.ok) {
      toast({ title: t("successTitle"), description: t("successDescription") });
      setValues(initialState);
      onOpenChange(false);
      return;
    }

    toast({
      title: t("errorTitle"),
      description: result.error === "invalid" ? t("invalidDescription") : t("errorDescription"),
      variant: "destructive",
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("title", { jobTitle })}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

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
            <Field label={t("phone")} error={errors.phone}>
              <Input
                type="tel"
                value={values.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <span className="text-sm font-medium text-text-primary">{t("experience")}</span>
              <Select value={values.experience} onValueChange={(value) => updateField("experience", value)}>
                <SelectTrigger aria-invalid={Boolean(errors.experience)}>
                  <SelectValue placeholder={t("experiencePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">{t("experienceOptions.0-1")}</SelectItem>
                  <SelectItem value="2-3">{t("experienceOptions.2-3")}</SelectItem>
                  <SelectItem value="4-5">{t("experienceOptions.4-5")}</SelectItem>
                  <SelectItem value="6-10">{t("experienceOptions.6-10")}</SelectItem>
                  <SelectItem value="10+">{t("experienceOptions.10+")}</SelectItem>
                </SelectContent>
              </Select>
              {errors.experience ? <ErrorText>{errors.experience}</ErrorText> : null}
            </div>

            <Field label={t("resumeUrl")} error={errors.resumeUrl}>
              <Input
                type="url"
                value={values.resumeUrl}
                onChange={(event) => updateField("resumeUrl", event.target.value)}
                placeholder="https://"
                aria-invalid={Boolean(errors.resumeUrl)}
              />
            </Field>
          </div>

          <Field label={t("coverLetter")}>
            <Textarea
              value={values.coverLetter}
              onChange={(event) => updateField("coverLetter", event.target.value)}
              rows={5}
              placeholder={t("coverLetterPlaceholder")}
            />
          </Field>

          <div className="flex items-start gap-3 rounded-lg border border-neutral-dark/10 bg-bg-darker p-4">
            <Checkbox
              checked={values.privacyConsent}
              onCheckedChange={(checked) => updateField("privacyConsent", checked === true)}
              aria-invalid={Boolean(errors.privacyConsent)}
              className="mt-1"
            />
            <div className="grid gap-1">
              <span className="text-sm font-medium leading-relaxed text-text-primary">
                {t("privacyConsent")}
              </span>
              {errors.privacyConsent ? <ErrorText>{errors.privacyConsent}</ErrorText> : null}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              {t("cancel")}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="mr-2 size-4 animate-spin" /> : null}
              {isSubmitting ? t("submitting") : t("submit")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
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
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </label>
  );
}

function ErrorText({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <span id={id} className="text-xs font-medium text-red-600" role="alert">
      {children}
    </span>
  );
}

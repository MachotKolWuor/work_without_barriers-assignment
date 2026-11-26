import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Machot Kol Wuor" },
      { name: "description", content: "Get in touch with Machot Kol Wuor about collaboration or projects." },
      { property: "og:title", content: "Contact — Machot Kol Wuor" },
      { property: "og:description", content: "Get in touch about collaboration or projects." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

const field = "mt-1 w-full rounded-md border border-input bg-card px-3 py-2 outline-none focus:border-ring";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const r = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const i of r.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    form.reset();
    toast.success("Thanks! Your message has been received.");
  }
  return (
    <div className="fade-up grid gap-12 pt-20 md:grid-cols-2">
      <div>
        <h1 className="text-4xl md:text-5xl">Let's talk</h1>
        <p className="mt-4 text-muted-foreground">
          Working on hiring, compliance or payment access? I'd love to hear about it.
        </p>
      </div>
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {(["name", "email"] as const).map((n) => (
          <label key={n} className="block text-sm font-medium capitalize">
            {n}
            <input name={n} type={n === "email" ? "email" : "text"} className={field} maxLength={n === "email" ? 255 : 100} />
            {errors[n] && <span className="text-xs text-destructive">{errors[n]}</span>}
          </label>
        ))}
        <label className="block text-sm font-medium">
          Message
          <textarea name="message" rows={5} maxLength={1000} className={field} />
          {errors["message"] && <span className="text-xs text-destructive">{errors["message"]}</span>}
        </label>
        <button type="submit" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Send message
        </button>
      </form>
    </div>
  );
}

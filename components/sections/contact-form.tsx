"use client";

import { MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/utils";

type FormValues = {
  name: string;
  area: string;
  service: string;
  message: string;
};

export function ContactForm() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      service: services[0]?.title ?? ""
    }
  });

  const onSubmit = (values: FormValues) => {
    const text = `නම: ${values.name}\nප්‍රදේශය: ${values.area}\nසේවාව: ${values.service}\nවිස්තරය: ${values.message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="rounded-card border border-ink/10 bg-white p-6 shadow-soft" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          නම
          <input className="focus-ring rounded-card border border-ink/10 px-4 py-3 font-normal" {...register("name", { required: true })} />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          ප්‍රදේශය
          <input className="focus-ring rounded-card border border-ink/10 px-4 py-3 font-normal" {...register("area", { required: true })} />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold">
        සේවාව
        <select className="focus-ring rounded-card border border-ink/10 px-4 py-3 font-normal" {...register("service", { required: true })}>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold">
        විස්තරය
        <textarea className="focus-ring min-h-32 rounded-card border border-ink/10 px-4 py-3 font-normal" {...register("message", { required: true })} />
      </label>
      <button className="focus-ring mt-6 inline-flex items-center gap-2 rounded-card bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-ink" type="submit">
        <MessageCircle className="h-4 w-4" />
        WhatsApp වෙත යවන්න
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

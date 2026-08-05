'use client';

import { FormEvent } from 'react';
import { Send } from 'lucide-react';

// Ganti dengan nomor WhatsApp Sekretariat/Humas KKN (Gunakan format 62)
const NOMOR_WA = '6282330907168';

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Format pesan untuk WhatsApp
    const textPesan = `Halo KKN Kelompok 20 Kabuaran,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;

    // Redirect ke WhatsApp
    const urlWA = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(textPesan)}`;
    window.open(urlWA, '_blank');

    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-3 font-body text-sm text-cream placeholder:text-muted/60 focus:border-gold"
            placeholder="Nama lengkap kamu"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-3 font-body text-sm text-cream placeholder:text-muted/60 focus:border-gold"
            placeholder="nama@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-3 font-body text-sm text-cream placeholder:text-muted/60 focus:border-gold"
          placeholder="Tulis pesan, pertanyaan, atau masukan kamu di sini..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
      >
        Kirim via WhatsApp
        <Send size={16} />
      </button>
    </form>
  );
}
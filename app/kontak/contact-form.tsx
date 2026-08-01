'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

// Situs ini statis (tanpa server sendiri), jadi form ini memakai Web3Forms
// (layanan gratis) untuk mengirim email tanpa backend.
// Cara pakai:
// 1. Daftar gratis di https://web3forms.com dan ambil "Access Key" kamu
// 2. Ganti nilai WEB3FORMS_ACCESS_KEY di bawah ini dengan access key tersebut

const WEB3FORMS_ACCESS_KEY = 'GANTI_DENGAN_ACCESS_KEY_KAMU';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'Pesan baru dari Website KKN Kelompok 20');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
        <Send size={16} />
      </button>

      {status === 'success' && (
        <p className="flex items-center gap-2 font-body text-sm text-terrace-soft">
          <CheckCircle2 size={16} /> Pesan berhasil dikirim. Terima kasih!
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 font-body text-sm text-red-400">
          <AlertCircle size={16} /> Gagal mengirim. Pastikan access key Web3Forms sudah diisi.
        </p>
      )}
    </form>
  );
}

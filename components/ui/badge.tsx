import { cn } from '@/lib/utils';

export default function Badge({
  children,
  tone = 'gold',
}: {
  children: React.ReactNode;
  tone?: 'gold' | 'green' | 'neutral';
}) {
  const tones = {
    gold: 'border-gold/40 text-gold bg-gold/5',
    green: 'border-terrace/40 text-terrace-soft bg-terrace/10',
    neutral: 'border-ink-border text-muted bg-ink-surface',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider',
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

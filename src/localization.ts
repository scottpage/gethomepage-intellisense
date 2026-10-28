export type SupportedLocale = 'en' | 'pt-BR';

export function resolveLocale(language: string | undefined): SupportedLocale {
  const locale = (language ?? '').toLowerCase().replace('_', '-');
  return locale === 'pt' || locale.startsWith('pt-') ? 'pt-BR' : 'en';
}

/**
 * Canal de triagem via WhatsApp.
 *
 * Esta é a ÚNICA fonte do número e da mensagem de abertura da triagem.
 * Nenhum componente de UI deve montar essa URL na mão.
 *
 * O número aqui é o mesmo atendido pelo `potentia-whatsapp-bridge`, que recebe
 * a conversa pela Meta Cloud API e a conduz no Typebot. Trocar o número exige
 * trocar também a configuração da Meta no bridge.
 */

const WHATSAPP_NUMBER = "5511913020039";

const DEFAULT_TRIAGE_MESSAGE =
  "Olá! Acessei o site da Potentia e gostaria de iniciar minha triagem.";

/** Monta a URL do WhatsApp. Use quando precisar de um `href` (links). */
export function buildTriageUrl(message: string = DEFAULT_TRIAGE_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Abre a triagem numa nova aba. Use em `onClick` (botões). */
export function openTriageChannel(message?: string): void {
  window.open(buildTriageUrl(message), "_blank", "noopener,noreferrer");
}

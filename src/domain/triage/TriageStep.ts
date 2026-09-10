/**
 * Passo do fluxo de triagem, como explicado ao paciente na seção "Como Funciona".
 *
 * Isto é a descrição do processo para o visitante do site. O fluxo executado de
 * fato vive no `potentia-whatsapp-bridge` (Meta Cloud API -> Typebot). Ao mudar
 * o fluxo real lá, revise estes textos para que não se contradigam.
 */
export interface TriageStep {
  readonly id: string;
  /** Número exibido no círculo (ex.: "01"). */
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

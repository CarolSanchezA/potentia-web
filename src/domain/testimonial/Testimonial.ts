/**
 * Depoimento de paciente.
 *
 * Atenção: são relatos reais, de pessoas identificadas, sobre atendimento em
 * saúde. Publicação depende de consentimento do paciente (LGPD, art. 7º e 11 —
 * dado de saúde é dado sensível). Não adicione, edite ou reatribua um
 * depoimento sem autorização registrada.
 */
export interface Testimonial {
  readonly id: string;
  /** Nome do paciente, como ele autorizou ser exibido. */
  readonly authorName: string;
  readonly text: string;
  /** Selo exibido abaixo do nome (ex.: "Paciente Verificado"). */
  readonly badge: string;
}

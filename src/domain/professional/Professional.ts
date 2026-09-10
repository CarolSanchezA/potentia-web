/**
 * Profissional da equipe multidisciplinar da Potentia.
 *
 * Linguagem Ubíqua: usamos "Professional", nunca "Doctor". A equipe é composta
 * por psicólogas, fonoaudióloga, fisioterapeuta, nutricionista, assistente
 * social e massoterapeuta — nenhum deles é médico, e tratá-los como tal seria
 * incorreto clínica e legalmente.
 */
export interface Professional {
  /** Identificador estável. Usado como key de lista e na navegação do modal. */
  readonly id: string;
  readonly name: string;
  /** Especialidade e área de atuação, como exibido no card. */
  readonly role: string;
  /** Mini-currículo. Opcional: nem todo profissional já enviou o seu. */
  readonly bio?: string;
  /** Foto de perfil já importada pelo bundler. Opcional. */
  readonly photo?: string;
  /** Registro no conselho de classe (ex.: "CRESS 60.868"), quando informado. */
  readonly registrationCode?: string;
}

/**
 * Iniciais exibidas no lugar da foto quando o profissional não tem uma.
 *
 * Regra de domínio pura: derivada do nome, nunca digitada à mão. Antes da
 * refatoração esse campo era preenchido manualmente e estava inconsistente
 * (a Vanessa aparecia como "AR", a Débora Palu como "RS" e a assistente social
 * tinha o número do CRESS no lugar das iniciais).
 */
export function getInitials(professional: Professional): string {
  return professional.name
    .split(" ")
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

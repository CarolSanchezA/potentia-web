/**
 * Dados cadastrais da pessoa jurídica.
 *
 * Fonte única para Termos de Uso e Política de Privacidade. Antes da
 * refatoração este bloco estava duplicado literalmente nos dois arquivos, o que
 * permitia que um documento jurídico fosse atualizado e o outro não.
 *
 * Os nomes dos campos ficam em português porque "razão social" e "CNPJ" são
 * conceitos do direito brasileiro, sem equivalente direto — traduzi-los
 * afastaria o código da linguagem do negócio.
 */
export interface Clinic {
  readonly razaoSocial: string;
  readonly cnpj: string;
  readonly endereco: string;
  readonly email: string;
}

export const CLINIC: Clinic = {
  razaoSocial: "POTENTIA APOIO ADMINISTRATIVO LTDA",
  cnpj: "61.579.902/0001-06",
  endereco:
    "Rua Manuel da Nobrega, 354, Conj. 112, Paraíso, São Paulo - SP, 04001-001",
  email: "potentiasaude@gmail.com",
};

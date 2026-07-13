const EMPRESA = {
  razaoSocial: "POTENTIA APOIO ADMINISTRATIVO LTDA",
  cnpj: "61.579.902/0001-06",
  endereco: "Rua Manuel da Nobrega, 354, Conj. 112, Paraíso, São Paulo - SP, 04001-001",
  email: "potentiasaude@gmail.com",
};

export default function TermosDeUso() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Termos de Uso</h1>
      <p className="text-sm text-gray-500 mb-8">
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </p>

      <section className="space-y-6 leading-relaxed text-sm">
        <div>
          <h2 className="text-lg font-semibold mb-2">1. Aceitação dos termos</h2>
          <p>
            Ao acessar nosso site ou utilizar nosso canal de atendimento via
            WhatsApp, você concorda com estes Termos de Uso. Caso não
            concorde com algum ponto, recomendamos não utilizar nossos
            serviços digitais.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">2. Sobre o serviço</h2>
          <p>
            {EMPRESA.razaoSocial}, CNPJ {EMPRESA.cnpj}, oferece atendimento e
            agendamento de consultas por meio de um canal automatizado
            (chatbot) e atendimento humano, disponibilizado através do
            WhatsApp Business API.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">3. Uso adequado</h2>
          <p className="mb-2">Ao utilizar nosso canal de atendimento, você concorda em:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fornecer informações verdadeiras durante o atendimento</li>
            <li>Não utilizar o canal para fins ilícitos ou abusivos</li>
            <li>Não enviar spam ou conteúdo ofensivo</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">4. Disponibilidade do serviço</h2>
          <p>
            Envidamos esforços para manter o canal de atendimento disponível,
            mas não garantimos funcionamento ininterrupto. Podem ocorrer
            interrupções temporárias para manutenção ou por motivos fora do
            nosso controle, incluindo indisponibilidade da plataforma da
            Meta/WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">5. Limitação de responsabilidade</h2>
          <p>
            O atendimento automatizado (chatbot) tem caráter informativo e de
            agendamento. Em caso de urgência médica, procure atendimento
            presencial imediato ou os serviços de emergência.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">6. Alterações destes termos</h2>
          <p>
            Podemos atualizar estes Termos de Uso periodicamente. A versão
            mais recente estará sempre disponível nesta página.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">7. Contato</h2>
          <p>
            Dúvidas sobre estes Termos podem ser enviadas para{" "}
            <a href={`mailto:${EMPRESA.email}`} className="text-teal-700 underline">
              {EMPRESA.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
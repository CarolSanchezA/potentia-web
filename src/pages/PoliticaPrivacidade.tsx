const EMPRESA = {
  razaoSocial: "POTENTIA APOIO ADMINISTRATIVO LTDA",
  cnpj: "61.579.902/0001-06",
  endereco: "Rua Manuel da Nobrega, 354, Conj. 112, Paraíso, São Paulo - SP, 04001-001",
  email: "potentiasaude@gmail.com",
};

export default function PoliticaPrivacidade() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Política de Privacidade</h1>
      <p className="text-sm text-gray-500 mb-8">
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </p>

      <section className="space-y-6 leading-relaxed text-sm">
        <div>
          <h2 className="text-lg font-semibold mb-2">1. Quem somos</h2>
          <p>
            Esta Política de Privacidade se aplica aos serviços oferecidos por{" "}
            {EMPRESA.razaoSocial}, inscrita no CNPJ {EMPRESA.cnpj}, com sede em{" "}
            {EMPRESA.endereco} ("nós", "nosso"). Este documento descreve como
            coletamos, usamos, armazenamos e protegemos os dados pessoais de
            pacientes e usuários que interagem com nossos canais, incluindo o
            atendimento via WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">2. Quais dados coletamos</h2>
          <p className="mb-2">Ao utilizar nosso canal de atendimento via WhatsApp, podemos coletar:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nome completo</li>
            <li>Número de telefone</li>
            <li>Informações de agendamento (data, horário, tipo de consulta)</li>
            <li>Conteúdo das mensagens trocadas durante o atendimento</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">3. Como usamos seus dados</h2>
          <p className="mb-2">Utilizamos os dados coletados para:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Agendar, confirmar e enviar lembretes de consultas</li>
            <li>Responder dúvidas e solicitações via chatbot ou atendente humano</li>
            <li>Manter histórico de atendimento para continuidade do cuidado</li>
            <li>Cumprir obrigações legais e regulatórias aplicáveis à área de saúde</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">4. Compartilhamento de dados</h2>
          <p>
            Utilizamos a API do WhatsApp Business, fornecida pela Meta
            Platforms, Inc., para operar nosso canal de atendimento. As
            mensagens trafegam pela infraestrutura da Meta conforme os termos
            e políticas de privacidade próprios da plataforma. Não vendemos
            nem compartilhamos seus dados pessoais com terceiros para fins de
            marketing sem o seu consentimento.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">5. Armazenamento e segurança</h2>
          <p>
            Seus dados são armazenados em servidores com controles de acesso
            e medidas técnicas de segurança para prevenir acessos não
            autorizados, perda ou alteração indevida das informações.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">6. Seus direitos (LGPD)</h2>
          <p className="mb-2">
            Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você
            tem direito a:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a exclusão dos seus dados, quando aplicável</li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">7. Contato</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta
            Política de Privacidade, entre em contato pelo e-mail{" "}
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
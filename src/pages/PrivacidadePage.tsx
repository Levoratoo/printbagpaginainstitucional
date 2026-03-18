import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Política de Privacidade
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Nosso compromisso com a proteção dos seus dados pessoais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-lg"
          >
            <p className="text-muted-foreground font-medium">04 de maio de 2020</p>
            
            <p className="text-foreground leading-relaxed">
              Nós, da Printbag Embalagens Ltda. (Printbag), inscrita no CNPJ sob nº. 07.599.090/0001-28, com sede na Rua José Francisco Bernardes, nº. 1751, no Distrito Industrial, bairro Areias do município de Camboriú, estado de Santa Catarina, temos um compromisso sólido com respeito e a preservação da privacidade e com a proteção dos dados pessoais coletados e tratados, de usuários de nossos sites e serviços, das pessoas que participam dos processos de seleção de novos colaboradores, clientes, fornecedores, representantes e demais públicos que, porventura, venham a interagir com a Printbag através deste site.
            </p>

            <p className="text-foreground leading-relaxed">
              Esta Política de Privacidade reflete o compromisso da Printbag com a Privacidade e a Proteção de Dados, ao estabelecer, de modo simples e transparente, as regras e condições de tratamento dos seus dados pessoais, além de apresentar seus direitos e a forma como você pode exercê-los. Esta política aplica-se a todos os sites e serviços digitais, disponibilizados ou administrados pela Printbag.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">1. QUE TIPO DE DADOS COLETAMOS</h2>
            
            <p className="text-foreground leading-relaxed">
              Na sua interação com a Printbag, podemos, em determinadas circunstâncias, fazer a coleta e o tratamento das seguintes categorias de dados pessoais.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Dados fornecidos, por você, para iniciar um contato corporativo com a Printbag</h3>
            
            <p className="text-foreground leading-relaxed">
              Para entrar em contato com a Printbag, pelo nosso site, é necessário preencher um formulário, onde são solicitadas as seguintes informações: seu nome, seu e-mail, seu telefone, o assunto do contato e a mensagem que você deseja nos mandar. Caso você queira, pode informar, também, a sua cidade.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Dados fornecidos para participação em processos seletivos de novos colaboradores da Printbag</h3>
            
            <p className="text-foreground leading-relaxed">
              Através de nosso site, também é possível que você indique seus dados pessoais para participação dos processos de seleção de novos colaboradores da empresa. Para esta finalidade é preciso encaminhar um conjunto de informações que sejam suficientes para a avaliação do seu perfil, de forma a permitir que a Printbag, seguindo os critérios internos de aprovação de novos colaboradores, possa avaliar se você atende aos critérios mínimos para participação das entrevistas de seleção. Para esta finalidade, solicitamos as seguintes informações: seu nome, seu e-mail, seu endereço completo, com indicação do CEP e que você anexe uma cópia do seu currículo. Você também pode, neste momento, nos indicar sua idade, seu estado civil, seu telefone para contato e algumas observações, caso sinta necessidade.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Dados fornecidos para visualizar e solicitar produtos delivery oferecidos pela Printbag, mediante WhatsApp</h3>
            
            <p className="text-foreground leading-relaxed">
              Ao entrar no site da Printbag, é possível que você solicite a aquisição dos nossos produtos, através do link de "Delivery", realizando o contato com os colaboradores da Printbag, através do botão que o direciona ao WhatsApp (https://www.printbag.com.br/delivery/). Selecionada esta opção, através do site, há o direcionamento ao Web-WhatsApp, onde haverá, caso você queira, a interação com a empresa. As informações cadastrais das suas contas serão compartilhadas conosco, viabilizando o recebimento da sua demanda e posterior encaminhamento de resposta. Dados como o ID da sua aplicação de WhatsApp, seu número de telefone e outras informações que estejam configuradas como publicamente visíveis em seu perfil podem ser compartilhadas conosco.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Dados de como você usa o site da Printbag ou outros sites/serviços digitais disponibilizados diretamente pela Printbag</h3>
            
            <p className="text-foreground leading-relaxed">
              São informações coletadas automaticamente, a partir da navegação em nossas plataformas que podem envolver informações como IP, data e hora de acesso, informações sobre cliques, navegador utilizado, características dos dispositivos utilizados para acesso e sua localização aproximada. O modo como utilizamos cookies está detalhado no item 5 desta Política, que trata especificamente deste tema.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">2. COMO E QUANDO OS DADOS PESSOAIS SÃO COLETADOS</h2>
            
            <p className="text-foreground leading-relaxed">
              A Printbag coleta dados pessoais fornecidos por você e, também, automaticamente, a partir das suas atividades de navegação. Todas as finalidades de uso de dados pessoais estão detalhadas neste documento. Por padrão, as informações que você nos fornece, incluindo, eventualmente, dados que permitem a sua identificação, não são conectadas às informações de navegação. Sendo assim, garantimos a você que não fazemos rastreamento individual de atividades.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">3. QUE TIPO DE DADOS NÃO COLETAMOS</h2>
            
            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Não coletamos dados sensíveis</h3>
            
            <p className="text-foreground leading-relaxed">
              Em nenhuma hipótese fazemos qualquer atividade de tratamento envolvendo dados sensíveis. Para você saber, são considerados dados sensíveis, aqueles sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Não coletamos dados de crianças</h3>
            
            <p className="text-foreground leading-relaxed">
              As informações disponibilizadas nos canais digitais da Tecnofibras não são destinadas ao público infanto-juvenil. Também é requisito de nossos processos de seleção de novos colaboradores que os candidatos sejam maiores e plenamente capazes. Para o nosso programa de jovens aprendizes, nosso sistema também recebe currículos de adolescentes, a partir de 14 (quatorze) anos. Portanto, não fazemos captação ou tratamento, em nenhuma hipótese, de dados pessoais de crianças.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">4. QUAIS AS FINALIDADES DE USO DOS SEUS DADOS</h2>
            
            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Para nos comunicarmos como você, apenas quando você solicita</h3>
            
            <p className="text-foreground leading-relaxed">
              Caso você concorde em receber comunicações da Printbag, utilizaremos seus dados cadastrais para realizar essa comunicação. Você poderá solicitar, a qualquer tempo, a revogação desta solicitação e a exclusão dos dados armazenados exclusivamente para este fim. Esta solicitação pode ser feita, diretamente, a partir das mensagens de e-mail que encaminhamos a você, pelo link disponibilizado no rodapé da mensagem, ou você poderá solicitar diretamente, enviando um e-mail para privacy@printbag.com.br.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Para atendermos às suas demandas através do contato "Fale Conosco"</h3>
            
            <p className="text-foreground leading-relaxed">
              Utilizaremos os dados disponibilizados por você para operacionalizar a comunicação entre você, titular externo, com a Printbag, auxiliando-o no que você precisar. Serão utilizadas, exclusivamente, as informações fornecidas no link referente à opção "Fale Conosco" (https://www.printbag.com.br/fale-conosco/#envie-sua-mensagem). Estas informações serão utilizadas exclusivamente para possibilitar a solução e endereçamento das demandas apresentadas por você à nossa empresa, fornecendo respostas aos seus questionamentos.
            </p>

            <p className="text-foreground leading-relaxed">
              Suas informações serão mantidas por 01 (um) ano, a contar da data do preenchimento do formulário, exceto aquelas necessárias para cumprimento de obrigações legais ou para exercício regular de direitos em processo judicial, administrativo ou arbitral.
            </p>

            <p className="text-foreground leading-relaxed">
              Caso, posteriormente, haja o estabelecimento de relação contratual entre nós e você, as suas informações serão mantidas durante todo o período contratual firmado, com exceção daquelas necessárias para cumprimento de obrigações legais ou para exercício regular de direitos em processo judicial, administrativo ou arbitral, neste último caso pelos prazos prescricionais relativos a demandas que possam surgir em decorrência do negócio jurídico firmado entre as partes.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Para viabilizar a sua participação nos nossos processos de seleção, através do contato "Trabalhe Conosco"</h3>
            
            <p className="text-foreground leading-relaxed">
              Utilizaremos os dados disponibilizados por você para operacionalizar o processo de seleção de novos colaboradores para a Printbag. Serão utilizadas, exclusivamente, as informações fornecidas no link referente à opção "Trabalhe conosco" (https://www.printbag.com.br/trabalhe-conosco). Estas informações serão utilizadas exclusivamente para possibilitar a escolha dos candidatos que participarão do processo de seleção.
            </p>

            <p className="text-foreground leading-relaxed">
              Suas informações serão mantidas por 03 (três) anos, a contar da data do preenchimento do formulário, exceto aquelas necessárias para cumprimento de obrigações legais ou para exercício regular de direitos em processo judicial, administrativo ou arbitral, neste último caso pelos prazos prescricionais relativos a demandas que possam surgir em decorrência do processo de seleção, destacadamente, mas não exclusivamente, aquelas ligadas à contestação dos resultados.
            </p>

            <p className="text-foreground leading-relaxed">
              Se você for selecionado, as informações serão mantidas durante todo o período de avaliação e testes para finalização do processo de seleção e, caso você seja aprovado e decida, de fato, fazer parte da equipe de colaboradores da Printbag, pelo tempo em que se manter o relacionamento entre a você e a Printbag, com exceção daquelas necessárias para cumprimento de obrigações legais ou para exercício regular de direitos em processo judicial, administrativo ou arbitral, neste último caso pelos prazos prescricionais relativos a demandas que possam surgir em decorrência do processo de seleção e da relação empregatícia.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Para atendermos às suas demandas através do link de "Delivery"</h3>
            
            <p className="text-foreground leading-relaxed">
              Utilizaremos os dados disponibilizados por você para operacionalizar a comunicação entre você, titular externo, com a Printbag, auxiliando-o no que você precisar. Serão utilizadas, exclusivamente, as informações de número de telefone e outras disponibilizadas como públicas por você, fornecidas através da integração do site com a plataforma Web-WhatsApp. Estas informações serão utilizadas exclusivamente para possibilitar o recebimento, solução e endereçamento das suas solicitações referentes à aquisição dos produtos por nós ofertados.
            </p>

            <p className="text-foreground leading-relaxed">
              Suas informações serão mantidas por 05 (cinco) anos, a partir da data de envio da mensagem pelo titular de dados pessoais, exceto aquelas necessárias para cumprimento de obrigações legais ou para exercício regular de direitos em processo judicial, administrativo ou arbitral.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Para funcionamento adequado do nosso site e de nossos serviços digitais</h3>
            
            <p className="text-foreground leading-relaxed">
              Capturamos automaticamente, utilizando cookies, dados essenciais para a disponibilização do nosso site e de outras presenças/serviços digitais disponibilizados diretamente pela Printbag. Mais adiante, nesta Política, há uma seção que tratará, especificamente sobre cookies.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Para melhorar sua experiência de uso</h3>
            
            <p className="text-foreground leading-relaxed">
              Alguns dados capturados automaticamente são utilizados para melhorar a forma como você navega na plataforma e, também, geram dados necessários para avaliarmos quais conteúdos são mais relevantes para os usuários de nosso site e de outras presenças/serviços digitais disponibilizados diretamente pela Printbag.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Aprimorar nosso site e os serviços digitais disponibilizados pela Printbag</h3>
            
            <p className="text-foreground leading-relaxed">
              Podemos utilizar alguns dados capturados automaticamente para entender melhor o comportamento e os interesses dos usuários de nosso site e dos serviços digitais que disponibilizamos, com o único objetivo de melhorar a forma como oferecemos produtos e serviços ao mercado.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">5. COOKIES</h2>
            
            <p className="text-foreground leading-relaxed">
              Cookies são pequenas porções de dados (arquivos texto) que um site, quando visitado por você, pede para seu navegador armazenar em seu dispositivo, com o objetivo de manter uma memória sobre você. Nós utilizamos cookies que são mantidos por nós mesmos e, também, cookies mantidos e administrados por outras empresas, neste último caso, com o objetivo de melhorar as ações de marketing realizadas pela Printbag.
            </p>

            <p className="text-foreground leading-relaxed">
              É importante que você saiba que métodos de coleta de informações que utilizam cookies podem ser desativados no seu terminal (computador, tablet ou smartphone). Nesse caso, como alguns cookies são essenciais para o funcionamento pleno da plataforma, você poderá sentir algumas diferenças no uso e alguns recursos poderão não estar disponíveis.
            </p>

            <p className="text-foreground leading-relaxed">
              Dividimos os cookies utilizados pela Printbag em quatro categorias:
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Cookies Necessários para Disponibilização da Plataforma</h3>
            
            <p className="text-foreground leading-relaxed">
              Estes cookies são essenciais para que as nossas páginas funcionem adequadamente. Eles não podem ser desabilitados, pois, se forem, a disponibilização das nossas páginas ficará comprometida. Os cookies estritamente necessários normalmente são ativados a partir de uma ação tomada pelo usuário, que equivale a uma solicitação de serviços, como entrar em um de nossos domínios. Esses cookies não armazenam nenhuma informação pessoal identificável.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Cookies Analíticos</h3>
            
            <p className="text-foreground leading-relaxed">
              Os cookies analíticos nos permitem manter controle sobre as visitas e as fontes de tráfego dentro de nossas páginas, para que possamos medir e melhorar a performance do nosso site. Eles nos ajudam a saber quais páginas são mais populares dentre os usuários e quais são as menos populares, além de verificar como os visitantes se movem pelas páginas. Em geral, coletam informações de forma anônima. Estes cookies podem ser operados por terceiros a partir do site ou dos serviços digitais disponibilizados diretamente pela Printbag.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Cookies Funcionais</h3>
            
            <p className="text-foreground leading-relaxed">
              Estes cookies permitem que nós forneçamos melhores funcionalidades e personalização da sua atividade em nossa plataforma, bem como em outros produtos, serviços e propriedades digitais mantidas pela Printbag. Eles podem ser configurados e/ou administrados por nós ou por terceiros, provedores de serviços que tenham sido adicionados a nossas páginas. Se você optar por desabilitar estes cookies, alguns ou todos estes serviços podem deixar de funcionar.
            </p>

            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Cookies de Marketing</h3>
            
            <p className="text-foreground leading-relaxed">
              Os cookies de marketing podem ser agregados em nosso site por parceiros de publicidade. Eles podem ser utilizados por estas companhias para entender as suas preferências e mostrar quais os anúncios fazem mais sentido e são mais relevantes para você. Os cookies de direcionamento não armazenam, diretamente, dados pessoais, mas são baseados em uma identificação exclusiva do seu navegador e dispositivo de internet, conforme sua interação com nossas páginas. Se você não permitir a utilização destes cookies, receberá uma publicidade menos direcionada e específica às suas preferências. Com estes cookies, os terceiros de publicidade ajudam a Printbag a melhorar suas estratégias de marketing, incluindo publicidade direcionada.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">6. TERCEIROS COM QUEM SEUS DADOS SÃO COMPARTILHADOS</h2>
            
            <p className="text-foreground leading-relaxed">
              A Printbag realiza o compartilhamento de seus dados pessoais apenas exclusivamente com os terceiros confiáveis descritos nesta Política de Privacidade, nas seguintes circunstâncias, das seguintes formas:
            </p>

            <p className="text-foreground leading-relaxed">
              <strong>Com outras empresas do grupo econômico da Printbag.</strong> Caso você tenha autorizado a Printbag a estabelecer uma comunicação regular com você, esta autorização se estende a todas as empresas do grupo econômico, composto por:
            </p>

            <ul className="list-disc list-inside text-foreground leading-relaxed ml-4">
              <li>Weisul Agrícola LTDA</li>
              <li>Weisul Participações S/A</li>
              <li>Uw Empreendimentos Imobiliários LTDA</li>
              <li>Branor Agrícola LTDA</li>
              <li>Arnaldo Ulmann Participações e Administração S/A</li>
              <li>Jointech Industrial S/A</li>
            </ul>

            <p className="text-foreground leading-relaxed mt-4">
              <strong>Com órgãos públicos e autoridades governamentais</strong>, nas seguintes circunstâncias: (i) em decorrência de ordem judicial ou por solicitação de autoridade administrativa competente para realizar essa solicitação e (ii) para tomada de providencias legais, judiciais ou administrativas, no sentido de defender direitos legítimos da Printbag, em processo judicial ou administrativo, sempre respeitando as previsões estabelecidas nesta Política de Privacidade.
            </p>

            <p className="text-foreground leading-relaxed">
              <strong>Com compradores de companhias e/ou ativos.</strong> Em casos de alterações societárias, fusões ou aquisições envolvendo a Printbag, onde a transferência será necessária para a continuidade da prestação de serviços.
            </p>

            <p className="text-foreground leading-relaxed">
              <strong>Com prestadores de serviços de marketing.</strong> A partir da coleta automatizada de dados, com o objetivo de melhorar a entrega anúncios (marketing digital), baseados no perfil dos usuários dos sites e propriedades digitais da Printbag.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">7. QUAIS SÃO OS SEUS DIREITOS</h2>
            
            <p className="text-foreground leading-relaxed">Você tem o direito de solicitar:</p>

            <ul className="list-disc list-inside text-foreground leading-relaxed ml-4 space-y-2">
              <li>A confirmação da existência do tratamento de seus dados pessoais, com indicação, sempre que possível, da forma como os dados são tratados e as finalidades de tratamento. Você também pode solicitar o acesso aos seus dados pessoais.</li>
              <li>Correção dos dados pessoais que eventualmente estejam incompletos, inexatos ou desatualizados.</li>
              <li>O bloqueio ou eliminação dos dados pessoais desnecessários, excessivos ou eventualmente tratados em desconformidade com legislação brasileira.</li>
              <li>A revogação, a qualquer tempo, do consentimento dado por você para de dados pessoais específicos, cujo tratamento seja autorizado por essa base legal, podendo também solicitar a exclusão destes dados, que será atendida desde que não haja determinação legal para mantê-los ou outra base legal que sustente a não exclusão dos dados.</li>
              <li>A portabilidade dos seus dados pessoais, salvo dos dados pessoais que já tenham sido anonimizados.</li>
              <li>Informações sobre as entidades públicas ou privadas com as quais há o compartilhamento de dados pessoais.</li>
              <li>Informação sobre a possibilidade de não fornecer consentimento e quais são as consequências decorrentes de eventual negativa.</li>
            </ul>

            <p className="text-foreground leading-relaxed mt-4">
              Em casos de impossibilidade de prestação de informações, decorrentes de segredo industrial ou comercial ou outra exceção, você será informado sobre esta situação, com uma justificativa clara acerca dos motivos pelos quais sua solicitação não será atendida.
            </p>

            <p className="text-foreground leading-relaxed">
              Para realizar qualquer solicitação, entre em contato conosco pelo e-mail <a href="mailto:privacy@printbag.com.br" className="text-primary hover:underline">privacy@printbag.com.br</a> ou pelos canais de comunicação apresentados no final dessa página.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">8. ONDE SEUS DADOS FICAM ARMAZENADOS</h2>
            
            <p className="text-foreground leading-relaxed">
              A Printbag armazena os dados coletados em servidores contratados de terceiros, localizados no Brasil e no exterior, onde são empregados todos os esforços razoáveis de mercado com o objetivo de preservar a segurança dos dados.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">9. QUÃO SEGUROS ESTÃO OS SEUS DADOS PESSOAIS</h2>
            
            <p className="text-foreground leading-relaxed">
              Adotamos práticas usuais de coleta, armazenamento e processamento de dados e medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Entretanto, ressalta-se que nenhuma medida de segurança é perfeita ou impenetrável. Apesar de nossos esforços habituais para manter a segurança de seus dados pessoais, tais informações podem ser interceptadas, roubadas, hackeadas ou acessadas indevidamente sem que isso signifique a existência de uma falha nossa.
            </p>

            <p className="text-foreground leading-relaxed">
              Por outro lado, nos reservamos na obrigação de, havendo algum evento de violação, alteração, invasão ou evento semelhante, relativo aos dados pessoais que tratamos, informar a você a extensão dessas violações, quais dados foram impactados, quais são as nossas estratégias de solução ou mitigação dos efeitos decorrentes desse evento e outras informações que, eventualmente, sejam relevantes.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">10. QUANTO TEMPO SEUS DADOS FICAM ARMAZENADOS</h2>
            
            <p className="text-foreground leading-relaxed">
              Nós manteremos seus dados pessoais armazenadas tão somente pelo tempo necessário ao atendimento das finalidades das atividades de tratamento dos dados pessoais. Em eventuais casos de tratamento pelo consentimento, caso você opte pela exclusão das informações, atenderemos sua solicitação tão rápido quanto possível.
            </p>

            <p className="text-foreground leading-relaxed">
              Há dados que nós tratamos, não necessariamente para viabilização dos nossos serviços, de maneira específica, nem para melhorar a experiência dos nossos usuários, mas, sim, em virtude de obrigações legais a nós impostas em razão da atividade que exercemos. Assim, há a possibilidade de manutenção de dados pessoais em nossas bases e sistemas por prazos específicos definidos em lei ou por uma autoridade competente, razão pela qual, mesmo que você solicite a exclusão, através dos nossos pontos de contato, mesmo que cabível, essa exclusão não poderá ocorrer.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">11. LINKS PARA TERCEIROS</h2>
            
            <p className="text-foreground leading-relaxed">
              Pode existir, nas páginas do site da Printbag e em qualquer outro site ou serviço digital disponibilizado diretamente pela Printbag, links para outros sites, aplicações ou plataformas. Isso não significa que a Printbag endossa ou se responsabiliza por qualquer coisa que aconteça fora de seus domínios. Você também deve ter ciência de que, ao clicar nestes links, estará sujeito aos termos de uso e políticas de privacidade destes sites, aplicações e plataformas externas.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">12. ISENÇÕES DE RESPONSABILIDADE</h2>
            
            <p className="text-foreground leading-relaxed">A Printbag não será responsável por:</p>

            <ul className="list-disc list-inside text-foreground leading-relaxed ml-4 space-y-2">
              <li>Eventuais erros ou inconsistências na transmissão de dados da rede, bem como relacionados à qualidade ou disponibilidade de conexão de internet, capazes de obstar o adequado recebimento de informações;</li>
              <li>Dados desatualizados, incompletos ou inverídicos, fornecidos por você.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">13. ABRANGÊNCIA DESTE TERMO E LEI APLICÁVEL</h2>
            
            <p className="text-foreground leading-relaxed">
              Este termo rege a relação da Printbag com usuários que acessam seus site ou sites/serviços digitais mantidos diretamente pela Printbag, no que se refere à privacidade e proteção de dados pessoais. A lei e as regulamentações aplicáveis serão sempre as da República Federativa do Brasil.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">14. FORO DE ELEIÇÃO</h2>
            
            <p className="text-foreground leading-relaxed">
              Você tem ciência e concorda com a eleição do foro da comarca da cidade de Camboriú, estado de Santa Catarina, para que tenha jurisdição sobre qualquer litígio que eventualmente possa ocorrer relativo a essa Política de Privacidade, excetuando as reclamações realizadas por usuários que se enquadrem no conceito legal de consumidores, que poderão submetê-las ao foro de seu domicílio.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">15. RESPONSÁVEL POR PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS</h2>
            
            <p className="text-foreground leading-relaxed">
              A Printbag tem um responsável por privacidade e proteção e dados pessoais designado. É a consultoria externa Betânia Sulczinski Zardo Sociedade Individual de Advocacia. Caso você tenha alguma dúvida sobre como realizar algum tratamento de dados pessoais, tenha alguma sugestão ou crítica a fazer ou queria realizar alguma solicitação referente a seus dados pessoais, entre em contato com ele, usando as informações de contato a seguir:
            </p>

            <div className="bg-muted p-6 rounded-lg mt-6">
              <p className="text-foreground font-semibold">Betânia Sulczinski Zardo Sociedade Individual de Advocacia</p>
              <p className="text-muted-foreground">Encarregada por privacidade e proteção de dados pessoais</p>
              <p className="text-primary mt-2">
                <a href="mailto:dpo@printbag.com.br" className="hover:underline">dpo@printbag.com.br</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

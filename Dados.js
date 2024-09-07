let dado_categorias = [
    {
        titulo: "Rendas Fixas",
        descricao: "Renda fixa é como emprestar seu dinheiro para instituições como o governo ou bancos e receber de volta, além do valor emprestado, um juro extra, ou seja, um valor a mais do que o emprestado, de forma segura e com valor garantido.",
        descricao_sim: "Simplificando: é como alugar seu dinheiro e ganhar um dinheirinho extra por isso.",
        link: "https://www.gov.br/investidor/pt-br/investir/antes-de-investir/entenda-as-caracteristicas-dos-investimentos#:~:text=Renda%20Fixa,-Diz-se%20que&text=Essa%20remunera%C3%A7%C3%A3o%20pode%20ser%20pr%C3%A9,DI%20ou%20a%20taxa%20Selic.",
        tags: "Garantido seguro risco baixo"
    },
    {
        titulo: "CDB",
        descricao: "Certificados de Depósito Bancário (CDB) são investimentos onde você empresta dinheiro para o banco, que utiliza esse valor e devolve com juros após um período. Diferente da poupança, o CDB rende mais e é protegido pelo FGC, garantindo o valor investido até R$ 250.000 por banco. Alguns bancos oferecem resgate imediato, enquanto outros têm prazos variados.",
        descricao_sim: "Simplificando: é como emprestar dinheiro ao banco, com mais rendimento que a poupança, e você pode retirar a qualquer momento em alguns casos.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/titulos-bancarios/certificado-de-deposito-bancario-cdb",
        tags: "CDB banco seguro FGC risco baixo"
    },
    {
        titulo: "LCI",
        descricao: "Letra de Crédito Imobiliário (LCI) é um investimento onde você empresta dinheiro para o setor imobiliário, recebendo juros ao final de um período. Rende mais que a poupança e é isento de imposto de renda, mas o dinheiro fica 'travado' por um prazo mínimo de 3 meses, e só após esse período pode ser resgatado. Garantido pelo FGC até R$ 250.000.",
        descricao_sim: "Simplificando: você empresta para o setor imobiliário, rende mais que a poupança, mas só pode resgatar depois de 3 meses.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/titulos-bancarios/letra-de-credito-imobiliario-lci-e-letra-de-credito-do-agronegocio-lca",
        tags: "LCI imobiliário isento imposto seguro FGC 3 meses"
    },
    {
        titulo: "LCA",
        descricao: "Letra de Crédito do Agronegócio (LCA) funciona de forma semelhante à LCI, mas o dinheiro é emprestado ao setor agrícola. Também rende mais que a poupança, é isento de imposto de renda e protegido pelo FGC. Assim como a LCI, o investimento fica 'travado' por no mínimo 3 meses, sendo possível resgatar apenas após esse período.",
        descricao_sim: "Simplificando: você empresta para o setor agrícola, rende mais que a poupança, mas só pode resgatar depois de 3 meses.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/titulos-bancarios/letra-de-credito-imobiliario-lci-e-letra-de-credito-do-agronegocio-lca",
        tags: "LCA agrícola isento imposto seguro FGC 3 meses"
    },
    {
        titulo: "Tesouro Direto",
        descricao: "O Tesouro Direto é um investimento onde você empresta dinheiro ao governo brasileiro. Existem diversos tipos de títulos, como o Tesouro Selic (mais seguro e com resgate rápido), Tesouro IPCA+ (protegido contra a inflação) e Tesouro Prefixado (com uma taxa de juros fixa). Todos os títulos rendem mais que a poupança e possuem diferentes prazos e rendimentos, mas não são protegidos pelo FGC.",
        descricao_sim: "Simplificando: você empresta para o governo, com vários tipos de títulos e mais rendimento que a poupança.",
        link: "https://www.tesourodireto.com.br/conheca/conheca-o-tesouro-direto.htm#:~:text=O%20QUE%20%C3%89%3F,de%20R%24%2030%2C00.",
        tags: "Tesouro Direto governo seguro vários títulos risco baixo"
    },
    {
        titulo: "Poupança",
        descricao: "A Poupança é o investimento mais conhecido e simples. Ela oferece liquidez imediata, ou seja, você pode sacar seu dinheiro a qualquer momento. No entanto, o rendimento é muito baixo em comparação com outros investimentos como o CDB, LCI, LCA e Tesouro Direto.",
        descricao_sim: "Simplificando: você guarda dinheiro no banco e ele rende pouco, mas você pode sacar a qualquer momento.",
        link: "https://www.bcb.gov.br/cidadaniafinanceira/poupar_investir",
        tags: "Poupança liquidez imediata baixo rendimento segurança seguro"
    },


    {
        titulo: "Rendas Variáveis",
        descricao: "Renda variável é quando você investe em empresas comprando partes delas, chamadas de ações e/ou cotas. O valor dessas partes pode aumentar ou diminuir, dependendo do desempenho da empresa e do mercado.",
        descricao_sim: "Simplificando: é como ser sócio de uma empresa e ter parte dos lucros (ou prejuízos)...",
        link: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/pagamento/renda-variavel#:~:text=São%20conhecidas%20como%20renda%20variável,Brazilian%20Depositary%20Receipts%20-%20BDR)%3B",
        tags: "variável risco médio risco alto alto risco risco médio variavel"
    },
    {
        titulo: "Criptomoedas",
        descricao: "Criptomoedas são moedas digitais, como Bitcoin, Ethereum e Tether. Elas não são controladas por nenhum governo ou banco, e seu valor pode mudar muito rapidamente, aumentando ou diminuindo conforme a oferta e demanda no mercado. É importante lembrar que todos os ganhos com criptomoedas devem ser declarados no Imposto de Renda, independentemente do valor.",
        descricao_sim: "Simplificando: você compra moedas digitais e o valor delas pode variar bastante. Ganhos precisam ser declarados no imposto.",
        link: "https://www.bcb.gov.br/meubc/faqs/p/moedas-virtuais-criptomoedas-ou-criptograficas",
        tags: "variável criptomoedas variavel"
    },
    {
        titulo: "Ações",
        descricao: "Ações são pequenas partes de empresas que você pode comprar. Quando você compra uma ação, se torna sócio daquela empresa e pode ganhar ou ter prejuízos financeiros, dependendo do valor da empresa. Ações têm um risco maior, mas também podem oferecer retornos mais elevados. Qualquer pessoa que investe em ações precisa declarar no Imposto de Renda, e se houver lucro na venda das ações, pode haver tributação específica.",
        descricao_sim: "Simplificando: você compra uma parte de uma empresa e pode ganhar ou perder dependendo do sucesso dela. Precisa declarar no Imposto de Renda.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/acoes",
        tags: "variável ações variavel"
    },
    {
        titulo: "FII (Fundos Imobiliários)",
        descricao: "Fundos Imobiliários (FII) são investimentos onde você compra partes de grandes imóveis, como shopping centers e prédios comerciais. Ao investir em FIIs, você recebe uma parte dos aluguéis que esses imóveis geram. Os FIIs costumam ser uma opção de investimento para quem quer renda passiva, mas também têm riscos de variação no mercado. Os ganhos com FIIs precisam ser declarados no Imposto de Renda.",
        descricao_sim: "Simplificando: você investe em imóveis grandes e recebe uma parte dos aluguéis, mas também precisa declarar no imposto.",
        link: "https://www.gov.br/investidor/pt-br/investir/tipos-de-investimentos/fundos-de-investimentos-imobiliarios-fii",
        tags: "variável fundos imobiliários variavel"
    },
    {
        titulo: "Investimento Coletivo pela INCO",
        descricao: "O investimento coletivo pela INCO é uma forma de investir em projetos imobiliários junto com outras pessoas. A INCO organiza esses projetos, e você coloca seu dinheiro junto com outros investidores para financiar grandes construções. Em troca, você recebe uma parte dos lucros quando o projeto é concluído. Os ganhos com investimentos pela INCO também devem ser declarados no Imposto de Renda.",
        descricao_sim: "Simplificando: você junta dinheiro com outras pessoas para investir em construções e recebe uma parte dos lucros, mas precisa declarar no imposto.",
        link: "https://inco.vc",
        tags: "variável investimento coletivo variavel"
    },
    

    {
        titulo: "Aprenda Mais",
        descricao: "'Aprenda Mais' é uma plataforma de educação oferecida pelo Ministério da Educação do Brasil. O objetivo é oferecer cursos e capacitações em diversas áreas, ajudando no desenvolvimento pessoal e profissional. A plataforma disponibiliza uma ampla gama de cursos online gratuitos, que podem ajudar na educação básica e profissional. Investir em conhecimento é uma excelente forma de crescimento.",
        descricao_sim: "Simplificando: é um site onde você pode fazer cursos gratuitos para aprender mais e se desenvolver. Alguns cursos são gratuitos e outros pagos, e você pode obter certificados em alguns casos.",
        link: "https://aprendamais.mec.gov.br",
        tags: "Educação cursos gratuitos esforco esforço"
    },

    {
        titulo: "Aprenda Mais com Udemy",
        descricao: "Udemy é uma plataforma global de aprendizado online que oferece uma vasta gama de cursos em diversas áreas, desde programação e design até habilidades pessoais e profissionais. A plataforma disponibiliza muitos cursos gratuitos e pagos, permitindo que você escolha de acordo com suas necessidades e orçamento. Para encontrar cursos gratuitos, basta aplicar o filtro de preço como 'GRATUITO' dentro da plataforma. Investir em educação é essencial para o crescimento pessoal e profissional.",
        descricao_sim: "Em resumo, Udemy é um site onde você pode encontrar cursos gratuitos e pagos sobre diversos temas. Use o filtro de preço 'GRATUITO' para acessar os cursos sem custo. É um ótimo recurso para aprender e se desenvolver.",
        link: "https://www.udemy.com",
        tags: "Educação, cursos, gratuitos, pagos, esforço, esforco"
    },
    


    {
        titulo: "Celular Seguro",
        descricao: "'Celular Seguro' é uma plataforma do governo brasileiro que ajuda a proteger seu smartphone contra roubo, perda e vazamento de dados. Com essa ferramenta, você pode registrar seu aparelho e, em caso de perda ou roubo, bloqueá-lo para proteger suas informações pessoais.",
        descricao_sim: "Simplificando: é um serviço que ajuda a manter seu celular seguro, bloqueando-o se for perdido ou roubado para proteger suas informações.",
        link: "https://www.gov.br/pt-br/apps/celular-seguro-br",
        tags: "Segurança proteção protecao proteçao protecâo"
    },
    {
        titulo: "Calculadora de Juros Compostos",
        descricao: "A Calculadora de Juros Compostos é uma ferramenta que ajuda a prever quanto dinheiro você pode ganhar com seus investimentos. Inserindo o valor inicial, a taxa de juros e os depósitos mensais, você pode ver quanto seu investimento pode render ao longo do tempo.",
        descricao_sim: "Simplificando: é uma ferramenta que mostra quanto seu dinheiro pode crescer se você investir uma quantia e fazer contribuições regulares.",
        link: "https://investidorsardinha.r7.com/calculadoras/calculadora-de-juros-compostos/",
        tags: "Investimento rendimento calculadora"
    },
    

    {
        titulo: "Cassino",
        descricao: "Cassinos são locais onde você aposta dinheiro em jogos de azar, como roleta, blackjack e caça-níqueis. A probabilidade de ganhar é menor do que a de perder, pois a 'casa' sempre tem uma vantagem. Mesmo que você ganhe às vezes, a longo prazo a casa acaba ganhando mais.",
        descricao_sim: "Simplificando: é jogar jogos onde as chances de perder dinheiro são muito maiores do que as de ganhar.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.",
        tags: "Perder"
    },
    {
        titulo: "Cassino Online",
        descricao: "Cassinos online funcionam como os físicos, mas na internet. Eles oferecem conveniência e muitos jogos, mas as chances de ganhar são baixas e a vantagem da casa continua a mesma. Além disso, muitas plataformas online não são regulamentadas, aumentando o risco de fraudes e perdas.",
        descricao_sim: "Simplificando: é jogar os mesmos jogos de cassino pela internet, com as mesmas baixas chances de ganhar e risco de perder dinheiro.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.",
        tags: "Perder"
    },
    {
        titulo: "Apostas",
        descricao: "Apostas envolvem colocar dinheiro em eventos futuros, como resultados de jogos ou competições. A maioria das apostas não é regulamentada e tem uma alta probabilidade de perda. A casa (ou site de apostas) sempre tem uma vantagem, e não há garantia de ganhar dinheiro a médio ou longo prazo.",
        descricao_sim: "Simplificando: é apostar dinheiro em eventos e torcer para um resultado favorável, com grandes chances de perder dinheiro.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.",
        tags: "Perder"
    },
    {
        titulo: "Apostas Esportivas",
        descricao: "Apostas esportivas são apostas feitas em jogos ou eventos esportivos. Embora muitas plataformas sejam regulamentadas, as chances de ganhar são sempre menores do que as de perder. A longo prazo, a casa sempre tem vantagem, tornando essa prática mais uma forma de entretenimento do que um investimento real.",
        descricao_sim: "Simplificando: é apostar dinheiro em esportes e, na maioria das vezes, você vai perder mais do que ganhar.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.",
        tags: "Perder"
    },
    {
        titulo: "Jogos de Azar Não Regulamentados",
        descricao: "Jogos de azar não regulamentados por autoridades competentes apresentam riscos altos, incluindo a perda total do dinheiro apostado. Esses jogos frequentemente não oferecem garantias e podem ser fraudulentos. Sem regulamentação, você não tem garantia de que você de fato está tendo chances de ganhar algo em que está apostando.",
        descricao_sim: "Simplificando: é participar de jogos onde você pode perder todo o seu dinheiro sem garantias ou proteção, e é muito difícil ganhar.",
        link: "https://www.oddsshark.com/br/casino/borda-da-casa#:~:text=Devido%20ao%20direito%20legal%20de,mecanismo%20de%20lucro%20dos%20cassinos.",
        tags: "Perder"
    }
    
    
];

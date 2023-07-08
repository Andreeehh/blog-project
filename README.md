
#Blog React com Backend no Strapi
Este projeto consiste em um blog desenvolvido com React, utilizando o Strapi como backend para gerenciar o conteúdo. O objetivo do blog é apresentar publicações relacionadas a tecnologia web, com foco em temas como React, Javascript e estudos para emprego na Europa. Além disso, o blog utiliza o ChatGPT para gerar posts automaticamente com exemplos de código.

##Funcionalidades
Visualização de posts: Os usuários podem visualizar os posts publicados no blog, incluindo os posts gerados automaticamente pelo ChatGPT.
Geração automática de posts: Utilizando a API do ChatGPT, o blog é capaz de gerar posts automaticamente com base em uma mensagem fornecida pelo usuário. Através dessa funcionalidade, novos posts podem ser criados diariamente.
Gerenciamento de conteúdo: O Strapi é utilizado como o backend para gerenciar o conteúdo do blog. Com o Strapi, é possível adicionar, editar e excluir posts, bem como definir categorias e tags para organizar o conteúdo.
Execução do script de criação de posts
O arquivo create-post.js é responsável por executar o script de criação dos posts gerados pelo ChatGPT. Ele utiliza a biblioteca Axios para fazer as requisições HTTP necessárias para a API do ChatGPT e para o Strapi.

O script realiza as seguintes etapas:

Envio da requisição ao ChatGPT: Utilizando a função sendChatRequest, o script envia uma mensagem ao ChatGPT para obter um novo post gerado automaticamente. O ChatGPT utiliza as informações fornecidas, como o tema do blog e a mensagem do usuário, para gerar um post completo.

Extração das informações do post: O script utiliza expressões regulares para extrair o título, resumo e conteúdo do post gerado pelo ChatGPT a partir da resposta recebida.

Criação do post no Strapi: Utilizando a função createPost, o script faz uma requisição POST ao endpoint do Strapi para criar um novo post com as informações obtidas. É necessário autenticar-se no Strapi antes de realizar a requisição, para obter o token de autenticação JWT.

##Agendamento da execução do script
O script do projeto chatGPT é agendado para ser executado uma vez por dia, às 8h da manhã, utilizando a função scheduleDailyExecution. Essa função calcula o tempo restante até o próximo agendamento e utiliza o setTimeout para agendar a execução do script no horário definido.

O agendamento é realizado utilizando o serviço externo de agendamento, como o cron-job.org, que envia uma solicitação GET para o URL do Netlify Build Hook uma vez por dia, acionando assim a execução do script.

Hospedagem
O backend do Strapi está hospedado no Render, enquanto o frontend do blog React está hospedado na Vercel. Ambos os serviços oferecem hospedagem gratuita e escalonamento automático para atender às demandas do projeto. O blog React pode ser acessado no seguinte link: https://blog-project-kappa-one.vercel.app/.

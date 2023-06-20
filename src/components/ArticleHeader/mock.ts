import { ArticleHeaderProps } from '.';
import mock from 'components/ArticleMeta/mock';

export default {
  id: '1',
  attributes: {
    title: 'Meu primeiro post',
    slug: 'meu-primeiro-post',
    except:
      'Esse é o primeiro post feito em aula do Curso de React do André Carvalho, criando um blog com back-end no strapi e front end em react',
    content:
      '🚀 Meu primeiro post no Curso de React do André Carvalho! 🎓\n\nOlá a todos! Estou super empolgado em compartilhar com vocês o meu primeiro projeto desenvolvido durante as aulas do Curso de React, ministrado pelo incrível André Carvalho. Nesta jornada, estou aprendendo a criar um blog com back-end no strap e front-end em React.\n\nPara quem não está familiarizado, o React é uma biblioteca JavaScript extremamente popular e poderosa para a criação de interfaces de usuário interativas. Com sua abordagem baseada em componentes reutilizáveis, o React torna o desenvolvimento de aplicações web mais eficiente e eficaz.\n\nNo curso, temos a oportunidade de mergulhar profundamente no mundo do React e aprender os fundamentos essenciais para a construção de aplicações web modernas. Através das instruções detalhadas e exemplos práticos fornecidos pelo André Carvalho, estou aprendendo a desenvolver projetos incríveis e funcionais.\n\nNo meu primeiro projeto, estou criando um blog. Mas aqui está a parte interessante: estamos utilizando um back-end no strapi, uma tecnologia poderosa que nos permite construir a infraestrutura necessária para o blog. Combinando-o com o front-end em React, podemos criar uma experiência de usuário perfeita e interativa.\n\nA criação de um blog com essa arquitetura me permite explorar e aplicar conceitos avançados de React, como roteamento, gerenciamento de estado e interação com APIs. Estou aprendendo a construir componentes reutilizáveis, lidar com rotas dinâmicas e integrar o front-end com o back-end de forma eficiente.\n\nAo longo do curso, compartilharei minha jornada de aprendizado, insights interessantes e os desafios que encontro durante o desenvolvimento do meu projeto. Também estarei à disposição para responder a quaisquer perguntas que vocês possam ter e espero que possamos trocar conhecimentos e experiências valiosas.\n\nAgradeço ao André Carvalho pela sua dedicação em ensinar e compartilhar seu conhecimento de forma clara e envolvente. Estou ansioso para explorar mais sobre o React e criar projetos incríveis durante este curso.\n\nFiquem ligados para atualizações sobre o meu projeto do blog em React! Vamos embarcar nessa jornada de aprendizado e construção juntos. 🚀💻\n\n#CursoDeReact #BlogComStrap #FrontEndReact #Aprendizado #DesenvolvimentoWeb',
    cover: {
      data: {
        id: '2',
        attributes: {
          alternativeText: null,
          url: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1685711665/beautiful_view_greenery_bridge_forest_perfect_background_181624_17827_814287f2a3.avif',
        },
      },
    },
    ...mock,
  },
} as ArticleHeaderProps;

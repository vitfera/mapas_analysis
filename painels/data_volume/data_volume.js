// Data structure
const mockData = [
  {
      "description": "O Mapas Culturais é uma plataforma livre para mapeamento cultural.",
      "version": "v7.6.0-minc25",
      "timezone": "Etc/GMT+3",
      "agents_count": 153517,
      "spaces_count": 22155,
      "events_count": 7724,
      "projects_count": 7320,
      "opportunities_count": 266,
      "url": "https://mapa.cultura.gov.br/api/site/info",
      "img": "https://mapa.cultura.gov.br/assets/mapa.cultura.gov.br/svg/main-logo.img.sulcyn.svg",
      "name": "Mapa da Cultura – MinC"
      
  },
  {
      "name": "Mapa Uruguai",
      "description": "Plataforma de Informaciones culturales",
      "version": "v4.6.3",
      "timezone": "America/Argentina/Buenos_Aires",
      "agents_count": 23131,
      "spaces_count": 1711,
      "events_count": 461,
      "projects_count": 317,
      "opportunities_count": 86,
      "url": "http://culturaenlinea.uy/api/site/info",
      "img": "https://raw.githubusercontent.com/LabDoFuturo/mapas_analysis/refs/heads/main/painels/data_volume/logo/mapa-uruguai.png"
  },
  {
      "name": "Pontos de Mem\u00f3ria/BR",
      "description": "#Sobre a plataforma Pontos de Mem\u00f3ria/BR\n\nA **prefeitura de S\u00e3o Paulo** e o **Instituto TIM** se uniram em 2013 em um esfor\u00e7o conjunto para dar mais qualidade \u00e0 gest\u00e3o cultural dos munic\u00edpios e estados. O objetivo era reunir informa\u00e7\u00f5es sobre agentes, espa\u00e7os, eventos e projetos culturais por meio de uma ferramenta colaborativa, fornecendo ao poder p\u00fablico uma radiografia da \u00e1rea de cultura e ao cidad\u00e3o um mapa de espa\u00e7os e eventos culturais da cidade. Dessa parceria surgiu Mapas Culturais, um software livre que pode ser adotado gratuitamente por qualquer cidade ou estado, e que no Ibram, leva o nome Museusbr.\n\nAs bases para o desenvolvimento do projeto foram lan\u00e7adas no Encontro Mapas Culturais, em julho de 2013, que reuniu agentes culturais de v\u00e1rios pa\u00edses da Am\u00e9rica Latina, do **Minist\u00e9rio da Cultura** e da prefeitura de S\u00e3o Paulo para discutir a cria\u00e7\u00e3o de uma ferramenta de mapeamento de iniciativas culturais, gest\u00e3o cultural e gera\u00e7\u00e3o de indicadores.\n\nA plataforma est\u00e1 alinhada ao **Sistema Nacional de Informa\u00e7\u00e3o e Indicadores Culturais do Minist\u00e9rio da Cultura (SNIIC)** e contribui para que os gestores p\u00fablicos realizem alguns dos objetivos do **Plano Nacional de Cultura (PNC)**. A instala\u00e7\u00e3o **PontosdeMemoria** foi implementada em maio de 2017, e responde a uma expectativa presente desde o in\u00edcio do **Programa Pontos de mem\u00f3ria**, em 2009, de cria\u00e7\u00e3o de um espa\u00e7o virtual que reunisse e divulgasse informa\u00e7\u00f5es sobre os Pontos de Mem\u00f3ria.\n\nA plataforma oferece v\u00e1rias funcionalidades e servi\u00e7os aos usu\u00e1rios, como o georreferenciamento, buscas avan\u00e7adas, cruzamento de dados e disponibiliza\u00e7\u00e3o dos dados em formato de planilha.\n\nMais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do Instituto TIM.\n\nPara contato sobre d\u00favidas, sugest\u00f5es, por favor, utilize o endere\u00e7o pontosdememoria@museus.gov.br",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 15361,
      "spaces_count": 219,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://pontosdememoria.cultura.gov.br/api/site/info",
  },
  {
      "name": "Mapa Cultural do Cear\u00e1",
      "description": "O Mapa Cultural do Cear\u00e1 \u00e9 a plataforma livre, gratuita e colaborativa de mapeamento da Secretaria da Cultura do Estado do Cear\u00e1 sobre cen\u00c3\u00a1rio cultural cearense. Ficou mais f\u00c3\u00a1cil se programar para conhecer as op\u00c3\u00a7\u00c3\u00b5es culturais que as cidades cearenses oferecem: shows musicais, espet\u00c3\u00a1culos teatrais, sess\u00c3\u00b5es de cinema, saraus, entre outras. Al\u00e9m de conferir a agenda de eventos, voc\u00c3\u00aa tamb\u00e9m pode colaborar na gest\u00c3\u00a3o da cultura do estado: basta criar seu perfil de agente cultural. A partir deste cadastro, fica mais f\u00c3\u00a1cil participar dos editais e programas da Secretaria e tamb\u00e9m divulgar seus eventos, espa\u00c3\u00a7os ou projetos.",
      "version": "v5.9.11",
      "timezone": "America/Fortaleza",
      "agents_count": 130912,
      "spaces_count": 6289,
      "events_count": 9865,
      "projects_count": 4100,
      "opportunities_count": 1953,
      "url": "https://mapacultural.secult.ce.gov.br/api/site/info",
      "img": "https://mapacultural.secult.ce.gov.br/assets/img/logo-ceara-2396208294-1740421520.png"

  },
  {
      "description": "O Mapa Cultural ES \u00e9 uma plataforma livre, colaborativa e interativa de mapeamento do cen\u00e1rio cultural capixaba,",
      "version": "v7.5.35",
      "timezone": "America/Sao_Paulo",
      "agents_count": 21324,
      "spaces_count": 1383,
      "events_count": 930,
      "projects_count": 1842,
      "opportunities_count": 415,
      "url": "https://mapa.cultura.es.gov.br/api/site/info",
      "img": "https://mapa.cultura.es.gov.br/assets/img/logo.img.1qidpp6.png",
      "name": "Mapa Cultural ES"
  },
  {
      "description": "O Mapa Goiano \u00e9 uma plataforma colaborativa que re\u00fane informa\u00e7\u00f5es sobre agentes, espa\u00e7os, eventos, projetos culturais e oportunidades",
      "version": "v7.5.36",
      "timezone": "Etc/GMT+3",
      "agents_count": 23844,
      "spaces_count": 1051,
      "events_count": 479,
      "projects_count": 969,
      "opportunities_count": 172,
      "url": "https://mapagoiano.cultura.go.gov.br/api/site/info",
      "img": "https://mapagoiano.cultura.go.gov.br/assets/img/logo-Mapas-GO.img.1bjtf4v.png",
      "name": "Mapa Goiano"
  },
  {
      "name": "Mapa Cultural do Maranh\u00e3o",
      "description": "# Sobre a plataforma Mapa Cultural do Maranh\u00e3o\n\nEm julho de 2013, agentes culturais de v\u00e1rios pa\u00edses da Am\u00e9rica Latina e do Brasil se reuniram para discutir a cria\u00e7\u00e3o de uma ferramenta de mapeamento de iniciativas culturais e gest\u00e3o cultural. Desse encontro surgiram as bases para a cria\u00e7\u00e3o de Mapas Culturais, um software livre que permite o aprimoramento da gest\u00e3o cultural dos munic\u00edpios e estados, e que no estado leva o nome de **Mapa Cultural do Maranh\u00e3o**.\n\n**Mapa Cultural do Maranh\u00e3o** \u00e9 uma plataforma colaborativa que re\u00fane informa\u00e7\u00f5es sobre **agentes**, **espa\u00e7os**, **eventos** e **projetos culturais**, fornecendo ao cidad\u00e3o um mapa da produ\u00e7\u00e3o cultural da regi\u00e3o e ao poder p\u00fablico uma radiografia da \u00e1rea da cultura. A plataforma est\u00e1 alinhada ao Sistema Nacional de Informa\u00e7\u00e3o e Indicadores Culturais do Minist\u00e9rio da Cultura (SNIIC) e contribui para a realiza\u00e7\u00e3o de alguns dos objetivos dos Planos Nacional e Estadual de Cultura.\n\nVoc\u00ea encontra mais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do\u00a0[Instituto TIM](https://institutotim.org.br/project/mapas-culturais/ \"Instituto TIM - Mapas Culturais\").\n\n**Realiza\u00e7\u00e3o**\n\n![img](http://mapas.cultura.gov.br/files/subsite/11/instituto_tim.png)",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 4696,
      "spaces_count": 926,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://ma.mapas.cultura.gov.br/api/site/info"
  },
  {
      "description": "O Mapas MT \u00e9 uma plataforma colaborativa que re\u00fane informa\u00e7\u00f5es sobre agentes, espa\u00e7os, eventos, projetos culturais e oportunidades",
      "version": "v7.5.11",
      "timezone": "Etc/GMT+3",
      "agents_count": 2889,
      "spaces_count": 528,
      "events_count": 440,
      "projects_count": 161,
      "opportunities_count": 87,
      "url": "https://mapas.mt.gov.br/api/site/info",
      "img": "https://mapas.mt.gov.br/assets/img/logo-mapasmt.img.1qxeipd.png",
      "name": "Mapas MT"

  },
  {
      "name": "Mapa Cultural de Mato Grosso do Sul",
      "description": "Plataforma livre, gratuita, colaborativa e interativa de mapeamento cultural desenvolvida para ser um instrumento transparente e colaborativo de gest\u00e3o p\u00fablica, permitindo aos gestores, agentes culturais e a todos os cidad\u00e3os conhecer, compartilhar e participar da produ\u00e7\u00e3o e a\u00e7\u00f5es que integram a pol\u00edtica cultural do Estado.\nO Mapa Cultural \u00e9 uma ferramenta de comunica\u00e7\u00e3o  que busca visibilizar os eventos do calend\u00e1rio cultural, os projetos desenvolvidos e os espa\u00e7os promovidos pelos agentes e institui\u00e7\u00f5es culturais de Mato Grosso do Sul e, passa a ser tamb\u00e9m,  a plataforma de acesso e execu\u00e7\u00e3o dos editais realizados pela Funda\u00e7\u00e3o de Cultura de MS.\nAl\u00e9m de conferir a agenda de eventos, voc\u00ea tamb\u00e9m pode colaborar na gest\u00e3o da cultura do estado: basta criar seu perfil de agente cultural. A partir do cadastro, fica mais f\u00e1cil participar dos editais e programas da FCMS e tamb\u00e9m divulgar seus eventos, espa\u00e7os ou projetos. Navegue, se informe, contribua e interaja com a gente!",
      "version": "v5.1.55",
      "timezone": "America/Manaus",
      "agents_count": 5394,
      "spaces_count": 163,
      "events_count": 29,
      "projects_count": 118,
      "opportunities_count": 63,
      "url": "https://www.mapacultural.ms.gov.br/api/site/info",
      //"img": "https://www.mapacultural.ms.gov.br/assets/www.mapacultural.ms.gov.br/img/logo-site-$hash.png"
      "img": "https://www.mapacultural.ms.gov.br/assets/www.mapacultural.ms.gov.br/img/logo_ms_Cultura_cidada-$hash.png"
  },
  {
      "description": "O Mapa Cultural do Par\u00e1 \u00e9 uma plataforma colaborativa que re\u00fane informa\u00e7\u00f5es sobre agentes, espa\u00e7os, eventos, projetos culturais e oportunidades",
      "version": "v7.5.25",
      "timezone": "America/Belem",
      "agents_count": 27284,
      "spaces_count": 2356,
      "events_count": 862,
      "projects_count": 1343,
      "opportunities_count": 261,
      "url": "https://mapacultural.pa.gov.br/api/site/info",
      "img": "https://mapacultural.pa.gov.br/assets/mapacultural.pa.gov.br/img/logo-Mapas-PA.img.uvrg1p.png",
      "name": "Mapa Cultural do Par\u00e1"
  },
  {
      "name": "Cultura na Para\u00edba",
      "description": "# Sobre a plataforma Cultura na Para\u00edba\n\nEm julho de 2013, agentes culturais de v\u00e1rios pa\u00edses da Am\u00e9rica Latina e do Brasil se reuniram para discutir a cria\u00e7\u00e3o de uma ferramenta de mapeamento de iniciativas culturais e gest\u00e3o cultural. Desse encontro surgiram as bases para a cria\u00e7\u00e3o de Mapas Culturais, um software livre que permite o aprimoramento da gest\u00e3o cultural dos munic\u00edpios e estados, e que no estado leva o nome de **Cultura na Para\u00edba**.\n\n**Cultura na Para\u00edba** \u00e9 uma plataforma colaborativa que re\u00fane informa\u00e7\u00f5es sobre **agentes**, **espa\u00e7os**, **eventos** e **projetos culturais**, fornecendo ao cidad\u00e3o um mapa da produ\u00e7\u00e3o cultural da regi\u00e3o e ao poder p\u00fablico uma radiografia da \u00e1rea da cultura. A plataforma est\u00e1 alinhada ao Sistema Nacional de Informa\u00e7\u00e3o e Indicadores Culturais do Minist\u00e9rio da Cultura (SNIIC) e contribui para a realiza\u00e7\u00e3o de alguns dos objetivos dos Planos Nacional e Estadual de Cultura.\n\nVoc\u00ea encontra mais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do\u00a0[Instituto TIM](https://institutotim.org.br/project/mapas-culturais/ \"Instituto TIM - Mapas Culturais\").\n\n**Realiza\u00e7\u00e3o**\n\n![img](http://mapas.cultura.gov.br/files/subsite/11/instituto_tim.png)",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 4709,
      "spaces_count": 1458,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://pb.mapas.cultura.gov.br/api/site/info"
  },
  {
      "description": "O Mapa Cultural de Pernambuco \u00e9 uma plataforma livre, gratuita e colaborativa de mapeamento da Secretaria da Cultura do Estado do Pernambuco e da Funda\u00e7\u00e3o do Patrim\u00f4nio Hist\u00f3rico e Art\u00edstico de Pernambuco. O objetivo \u00e9 tra\u00e7armos, juntos, o cen\u00e1rio cultural pernambucano, considerando e permitindo o acesso \u00e0s informa\u00e7\u00f5es sobre eventos, programas, espa\u00e7os e agentes culturais. Pesquise livremente ou cadastre aqui a sua iniciativa.",
      "version": "v7.5.28",
      "timezone": "America/Recife",
      "agents_count": 53898,
      "spaces_count": 1955,
      "events_count": 1944,
      "projects_count": 1909,
      "opportunities_count": 327,
      "url": "https://www.mapacultural.pe.gov.br/api/site/info",
      "img": "https://www.mapacultural.pe.gov.br/assets/www.mapacultural.pe.gov.br/jpeg/logo-Mapa-PE.img.qdkdic.jpeg",
      "name": "Mapa Cultural de Pernambuco"
  },
  {
      "name": "Mapa Cultural Ilh\u00e9us/BA",
      "description": "# Sobre a plataforma Mapeamento Cultural\n\nO **Mapa Cultural** \u00e9 um espa\u00e7o para integrar e dar visibilidade para **projetos**, **artistas**, **espa\u00e7os**, **eventos** culturais e seus produtores. Ele \u00e9 a principal base de informa\u00e7\u00f5es e indicadores da [Secretaria Municipal de Cultura](http://www.ilheus.ba.gov.br/), agregando cadastros de diferentes programas e a\u00e7\u00f5es.\n\nA instala\u00e7\u00e3o agrega os dados das Bibliotecas P\u00fablicas, Espa\u00e7os Culturais, Pontos de Cultura, Rede de Museus e dos Agentes Culturais que possuem informa\u00e7\u00f5es integradas no [Mapa Cultural](http://mapas.cultura.gov.br/).\n\nA plataforma foi desenvolvida pelo Instituto Tim em parceria com o Minist\u00e9rio da Cultura e a partir de outubro de 2015 foi adotado pelo Sistema Nacional de Informa\u00e7\u00f5es e Indicadores Culturais (SNIIC).\n\n\nVoc\u00ea encontra mais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do\u00a0[Instituto TIM](https://institutotim.org.br/project/mapas-culturais/ \"Instituto TIM - Mapas Culturais\").\n\n**Realiza\u00e7\u00e3o**",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 221,
      "spaces_count": 91,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://ilheus.ba.mapas.cultura.gov.br/api/site/info",
  },
  {
      "name": "Mapa Cultural de Senhor do Bonfim",
      "description": "#Sobre o Mapa Cultural de Senhor do Bonfim\n\n**Nos Trilhos da Cultura** \u00e9 uma plataforma virtual que visa criar la\u00e7os entre **agentes**, produtores, fazedores, mestres de cultura, agitadores, espa\u00e7os culturais, e dar visibilidade \u00e0 empreendimentos, **espa\u00e7os** e **projetos** culturais.\n\n\u00c9 uma base de dados com informa\u00e7\u00f5es e produ\u00e7\u00e3o de indicadores que basear\u00e1 tomada de decis\u00f5es e constru\u00e7\u00e3o de pol\u00edticas p\u00fablicas de cultura no \u00e2mbito do munic\u00edpio de [Senhor do Bonfim, BA](https://www.senhordobonfim.ba.gov.br/).",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 193,
      "spaces_count": 10,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://senhordobonfim.ba.mapas.cultura.gov.br/api/site/info"
  },
  {
      "name": "Mapa Cultural de Chorozinho",
      "description": "O Mapa Cultural de Chorozinho \u00e9. a plataforma livre, gratuita e colaborativa de mapeamento da Secretaria da Cultura do Estado do Cear\u00e1 sobre cen\u00e1rio cultural cearense. Ficou mais f\u00e1cil se programar para conhecer as op\u00e7\u00f5es culturais que as cidades cearenses oferecem: shows musicais, espet\u00e1culos teatrais, sess\u00f5es de cinema, saraus, entre outras. Al\u00e9m de conferir a agenda de eventos, voc\u00ea tamb\u00e9m pode colaborar na gest\u00e3o da cultura do estado: basta criar seu perfil de agente cultural. A partir deste cadastro, fica mais f\u00e1cil participar dos editais e programas da Secretaria e tamb\u00e9m divulgar seus eventos, espa\u00e7os ou projetos.",
      "version": "v5.9.8",
      "timezone": "America/Fortaleza",
      "agents_count": 575,
      "spaces_count": 82,
      "events_count": 9735,
      "projects_count": 3967,
      "opportunities_count": 1879,
      "url": "https://mapacultural.chorozinho.ce.gov.br/api/site/info",
      "img": "https://mapacultural.chorozinho.ce.gov.br/files/subsite/5/file/653981/logo_chorozinho_cultura-10933460f6a4118a224d0a07ad36ab7c.png"
  },
  {
      "name": "Mapa Cultural BH",
      "description": "O Mapas Culturais \u00e9 uma plataforma colaborativa que re\u00fane informa\u00e7\u00f5es sobre agentes, espa\u00e7os, eventos, projetos culturais e oportunidades",
      "version": "v5.6.7",
      "timezone": "America/Fortaleza",
      "agents_count": 15438,
      "spaces_count": 2036,
      "events_count": 2267,
      "projects_count": 675,
      "opportunities_count": 124,
      "url": "http://mapaculturalbh.pbh.gov.br/api/site/info",
      "img": "https://mapaculturalbh.pbh.gov.br/assets/img/logo-site-4136163235-1600958318.png",
      "name": "Mapa Cultural BH"
  },
  {
      "description": " Plataforma livre, colaborativa e interativa de mapeamento do cen\u00e1rio cultural e instrumento de governan\u00e7a \n        digital no aprimoramento da gest\u00e3o p\u00fablica, dos mecanismos de participa\u00e7\u00e3o e da democratiza\u00e7\u00e3o do acesso \u00e0s pol\u00edticas culturais \n        promovidas pela Secretaria Municipal de Cultura e Turismo de Santa Luzia-MG. O Mapa cultural \u00e9 uma ferramenta de comunica\u00e7\u00e3o \n        que visibiliza os eventos do circuito de festivais de artes e do calend\u00e1rio cultural, os projetos desenvolvidos e os espa\u00e7os \n        promovidos pelos agentes e institui\u00e7\u00f5es culturais de Santa Luzia. \u00c9 tamb\u00e9m a plataforma de acesso e execu\u00e7\u00e3o dos editais realizados \n        pela Secretaria Municipal de Cultura e Turismo. Al\u00e9m de conferir a agenda de eventos, voc\u00ea tamb\u00e9m pode colaborar na gest\u00e3o da cultura \n        do estado: basta criar seu perfil de agente cultural. A partir do cadastro, fica mais f\u00e1cil participar dos editais e programas da \n        Secretaria e tamb\u00e9m divulgar seus eventos, espa\u00e7os ou projetos",
      "version": "v7.4.6",
      "timezone": "America/Sao_Paulo",
      "agents_count": 431,
      "spaces_count": 54,
      "events_count": 34,
      "projects_count": 15,
      "opportunities_count": 12,
      "url": "http://mapacultural.santaluzia.mg.gov.br/api/site/info",
      "img": "https://mapacultural.santaluzia.mg.gov.br/assets/img/logo-instituicao.img.1vr2il9.png",
      "name": "Mapa Cultural Santa Luzia"
  },
  {
      "name": "Cultura V\u00e1rzea Grande",
      "description": "#Sobre a plataforma Cultura v\u00e1rzea grande\n\nO **Cultura v\u00e1rzea grande** \u00e9 uma  plataforma livre, gratuita e colaborativa de mapeamento da [Secretaria Municipal de Educa\u00e7\u00e3o, Cultura, esporte e lazer de Varzea Grande](http://www.varzeagrande.mt.gov.br) sobre o cen\u00e1rio cultural varzeagrandensse.\n\nFicou mais f\u00e1cil se programar para conhecer as op\u00e7\u00f5es culturais que a cidade oferece: shows musicais, espet\u00e1culos teatrais, sess\u00f5es de cinema, saraus, entre outras. Al\u00e9m de conferir a agenda de **eventos**, voc\u00ea tamb\u00e9m pode colaborar na gest\u00e3o da cultura da cidade: basta criar seu perfil de **agente** cultural. A partir deste cadastro, fica mais f\u00e1cil participar  e divulgar  bens e produtos criativos de artistas locais seus  **eventos**, **espa\u00e7os** ou **projetos**.\n\nA plataforma foi desenvolvida pelo [Instituto TIM](https://institutotim.org.br/) em parceria com o [Minist\u00e9rio da Cultura](http://www.cultura.gov.br/) e a partir de outubro de 2015 foi adotado pelo [Sistema Nacional de Informa\u00e7\u00f5es e Indicadores Culturais (SNIIC)](http://sniic.cultura.gov.br/).\n\nVoc\u00ea encontra mais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do\u00a0[Instituto TIM](https://institutotim.org.br/project/mapas-culturais/ \"Instituto TIM - Mapas Culturais\").\n\n**Realiza\u00e7\u00e3o**",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 108,
      "spaces_count": 59,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://varzeagrande.mt.mapas.cultura.gov.br/api/site/info"
  },
  {
      "description": "A JP CULTURA \u00e9 uma plataforma colaborativa que re\u00fane informa\u00e7\u00f5es sobre agentes, espa\u00e7os, eventos, projetos culturais e oportunidades",
      "version": "v6.0.14",
      "timezone": "America/Fortaleza",
      "agents_count": 2754,
      "spaces_count": 145,
      "events_count": 29,
      "projects_count": 55,
      "opportunities_count": 28,
      "url": "http://jpcultura.joaopessoa.pb.gov.br/api/site/info",
      "img": "https://jpcultura.joaopessoa.pb.gov.br/assets/img/logo-Mapas-JP--img--3949863201-1694686300.png",
      "name": "JP CULTURA"
  },
  /*
  {
      "name": "Mapas Culturais - Laguna SC",
      "description": "O Mapas Culturais \u00e9 uma plataforma livre para mapeamento cultural.",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 173812,
      "spaces_count": 54668,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://laguna.sc.mapas.cultura.gov.br/api/site/info"
  },
  */
  {
      "name": "Mapa Cultural de Novo Hamburgo",
      "description": "#Sobre a plataforma Mapa Cultural de Novo Hamburgo\n\n**Mapas Culturais** \u00e9 um software livre para mapeamento colaborativo e gest\u00e3o da cultura que contribui para qualificar a gest\u00e3o p\u00fablica e para atualiza\u00e7\u00e3o frente \u00e0s novas Tecnologias da Informa\u00e7\u00e3o e Comunica\u00e7\u00e3o.\n\nO sistema \u00e9 alimentado de duas formas: pelo poder p\u00fablico, que insere na plataforma informa\u00e7\u00f5es sobre os **equipamentos culturais**, **programa\u00e7\u00f5es oficiais**, **editais**, e outros; e pela popula\u00e7\u00e3o em geral, que se cadastra como **agente de cultura** (individual ou coletivo) e pode divulgar suas pr\u00f3prias programa\u00e7\u00f5es.\n\nEm outubro de 2015, [Mapas Culturais](http://mapas.cultura.gov.br) foi adotado pelo [Sistema Nacional de Informa\u00e7\u00f5es e Indicadores Culturais (SNIIC)](http://sniic.cultura.gov.br/), o que permite a integra\u00e7\u00e3o dos sistemas.\n\nO [Minist\u00e9rio da Cultura](http://www.cultura.gov.br/), por meio da **Coordena\u00e7\u00e3o Geral de Monitoramento de Informa\u00e7\u00f5es Culturais**, oferece suporte a estados e munic\u00edpios que desejam implementar **Mapas Culturais**. Este apoio se d\u00e1 por meio da oferta de infraestrutura tecnol\u00f3gica e material de apoio e de forma\u00e7\u00e3o a  dist\u00e2ncia. \n\nA iniciativa \u00e9 fruto de uma parceria entre o [Instituto TIM](https://institutotim.org.br/project/mapas-culturais/) e o **MinC** e resultou na cria\u00e7\u00e3o de quatro plataformas a partir do software **Mapas Culturais**: a plataforma da [Rede Cultura Viva](http://culturaviva.gov.br/), que re\u00fane dados e endere\u00e7os dos **Pontos de Cultura**; o mapa [Museus BR](http://museus.cultura.gov.br/), maior plataforma de informa\u00e7\u00f5es sobre os museus do Brasil; o [Mapa das Bibliotecas](http://bibliotecas.cultura.gov.br/), mapeamento do **Sistema Nacional de Bibliotecas P\u00fablicas**; e o [Mapa da Cultura](http://mapas.cultura.gov.br), que integra os dados das tr\u00eas plataformas e do SNIIC.",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 834,
      "spaces_count": 190,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://mapacultural.novohamburgo.rs.gov.br/api/site/info"
  },
  {
      "name": "CulturAZ Santo Andr\u00e9",
      "description": "CulturaZ Santo Andr\u00e9",
      "version": "v7.5.30",
      "timezone": "Etc/GMT+3",
      "agents_count": 28265,
      "spaces_count": 637,
      "events_count": 5507,
      "projects_count": 909,
      "opportunities_count": 269,
      "url": "https://culturaz.santoandre.sp.gov.br/api/site/info",
      "img": "https://culturaz.santoandre.sp.gov.br/assets/img/logo-site.img.1ucx4nv.png"
  },
  {
      "name": "Mapa Cultural Osasco - SP",
      "description": "# Sobre a plataforma OsCULTURA\n\nO **Mapa da Cultura** \u00e9 um espa\u00e7o para integrar e dar visibilidade para **projetos**, **artistas**, **espa\u00e7os**, **eventos** culturais e seus produtores. Ele \u00e9 a principal base de informa\u00e7\u00f5es e indicadores do [Minist\u00e9rio da Cultura](http://cultura.gov.br), agregando cadastros de diferentes programas e a\u00e7\u00f5es.\n\nA instala\u00e7\u00e3o agrega os dados da [Secretaria da Cultura de Osasco](http://prefeitura.osasco.sp.gov.br/InternaSecretaria.aspx?ID=5), que possuem plataformas pr\u00f3prias, mas que tem as informa\u00e7\u00f5es integradas pelo **Mapa da Cultura**.\n\nA plataforma foi desenvolvida pelo **Instituto TIM** em parceria com o **Minist\u00e9rio da Cultura** e a partir de outubro de 2015 foi adotado pelo **Sistema Nacional de Informa\u00e7\u00f5es e Indicadores Culturais (SNIIC)**.\n\nVoc\u00ea encontra mais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do\u00a0[Instituto TIM](https://institutotim.org.br/project/mapas-culturais/ \"Instituto TIM - Mapas Culturais\").\n\n\n**Realiza\u00e7\u00e3o**",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 193,
      "spaces_count": 45,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://osasco.sp.mapas.cultura.gov.br/api/site/info"
  },
  {
      "name": "Mapa da Cultura Franco da Rocha/SP",
      "description": "# Sobre a plataforma Mapa da Cultura Franco da Rocha/SP\n\nO **Mapas Culturais** \u00e9 a plataforma livre, gratuita e colaborativa de mapeamento da [Prefeitura Municipal de Franco da Rocha](http://www.francodarocha.sp.gov.br/) sobre o cen\u00e1rio cultural da cidade.\n\n Ficou mais f\u00e1cil se programar para conhecer as op\u00e7\u00f5es culturais que a cidade oferece: shows musicais, oficinas culturais, espet\u00e1culos teatrais, rodas liter\u00e1rias,manifesta\u00e7\u00f5es de cultura popular, bens patrimoniais, museus, etc. \n\nAl\u00e9m de conferir a agenda de eventos e conhecer os movimentos culturais, voc\u00ea tamb\u00e9m pode colaborar na gest\u00e3o da cultura da cidade, basta criar seu perfil de **agente** cultural. A partir deste cadastro , fica mais f\u00e1cil participar de editais de fomento \u00e0 cultura da Prefeitura e tamb\u00e9m divulgar seus **eventos**, **espa\u00e7os** e **projetos**.\n\nVoc\u00ea encontra mais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do\u00a0[Instituto TIM](https://institutotim.org.br/project/mapas-culturais/ \"Instituto TIM - Mapas Culturais\").\n\n**Realiza\u00e7\u00e3o**",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 657,
      "spaces_count": 54,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://francodarocha.sp.mapas.cultura.gov.br/api/site/info",
  },
  {
      "name": "GruCultura",
      "description": "# Sobre a plataforma GruCultura\n \nA [Prefeitura de Guarulhos](http://www.guarulhos.sp.gov.br/ \"Prefeitura de Guarulhos\") agora disponibiliza uma ferramenta essencial para dar mais acesso aos espa\u00e7os culturais e aos eventos, al\u00e9m de fomentar a atividade art\u00edstica ao inserir e identificar os agentes culturais no mapa da cidade.\n\nO **GruCultura** \u00e9 uma plataforma de mapeamento, integra\u00e7\u00e3o e publicidade de projetos, pessoas, espa\u00e7os e eventos dos ambientes culturais guarulhenses. \u00c9 a principal ferramenta do **Sistema Municipal de Informa\u00e7\u00f5es e Indicadores Culturais (SMIIC)** e fonte permanente de dados que viabilizar\u00e3o a promo\u00e7\u00e3o de pol\u00edticas culturais efetivas.\n\nPara mais informa\u00e7\u00f5es sobre as atividades culturais de **Guarulhos** voc\u00ea pode acessar:\n[http://www.guarulhos.sp.gov.br/secretarias/cultura](http://www.guarulhos.sp.gov.br/secretarias/cultura)\n\nVoc\u00ea encontra mais informa\u00e7\u00f5es sobre a ferramenta Mapas Culturais no site do\u00a0[Instituto TIM](https://institutotim.org.br/project/mapas-culturais/ \"Instituto TIM - Mapas Culturais\").\n\n**Realiza\u00e7\u00e3o**",
      "version": "v5.1.42",
      "timezone": "America/Sao_Paulo",
      "agents_count": 1431,
      "spaces_count": 314,
      "events_count": 7146,
      "projects_count": 4300,
      "opportunities_count": 188,
      "url": "http://grucultura.guarulhos.sp.gov.br/api/site/info",
      "img": "https://mapa.cultura.gov.br/files/subsite/18/logotipo_grucultura-2.jpg"
  },
  {
    "description": "O Mapa Cultural Mauá é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
    "version": "v7.4.13",
    "timezone": "Etc/GMT+3",
    "agents_count": 1058,
    "spaces_count": 74,
    "events_count": 250,
    "projects_count": 47,
    "opportunities_count": 21,
    "url": "https://mapacultural.maua.sp.gov.br/api/site/info",
    "img": "https://mapacultural.maua.sp.gov.br/assets/img/mapa-cultural-maua.img.mst73e.png",
    "name": "Mapa Cultural Mauá"
  },
  {
    "description": "O Mapa Cultural AGIMOS é uma ferramenta de gestão cultural da Agência de Indústria Criativa e Mobilização Social da UFPEL que busca a estruturação de produções culturais e políticas públicas para o setor.",
    "version": "v7.3.50",
    "timezone": "America/Sao_Paulo",
    "agents_count": 433,
    "spaces_count": 89,
    "events_count": 129,
    "projects_count": 7,
    "opportunities_count": 12,
    "url": "https://mapacultural.agimos.org.br/api/site/info",
    "img": "https://mapacultural.agimos.org.br/assets/img/logo-UFPEL.img.18f4xve.png",
    "name": "Mapa Cultural AGIMOS"
  },
  {
    "name": "Mapa Cultural SGA",
    "description": "O Mapas Culturais é uma plataforma livre para mapeamento cultural.",
    "version": "v5.6.20",
    "timezone": "UTC",
    "agents_count": 225,
    "spaces_count": 16,
    "events_count": 6,
    "projects_count": 14,
    "opportunities_count": 6,
    "url": "https://mapacultural.saogoncalodoamarante.ce.gov.br/api/site/info",
    "img": "https://mapacultural.saogoncalodoamarante.ce.gov.br/assets/img/mapa_cultural_logo_sga-3636033924-1689615327.png",
  }, 
  {
    "description": "O Mapas Culturais é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
    "version": "v7.4.28",
    "timezone": "Etc/GMT+3",
    "agents_count": 2247,
    "spaces_count": 87,
    "events_count": 59,
    "projects_count": 53,
    "opportunities_count": 22,
    "url": "https://mapacultural.natal.rn.gov.br/api/site/info",
    "img": "https://mapacultural.natal.rn.gov.br/assets/img/logo-site.img.2ci7k9.png",
    "name": "Mapa Cultural Natal"
  },
  {
    "description": "O Mapas Culturais é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
    "version": "v7.5.22",
    "timezone": "Etc/GMT+3",
    "agents_count": 1448,
    "spaces_count": 26,
    "events_count": 28,
    "projects_count": 21,
    "opportunities_count": 6,
    "url": "https://mapacultural.ap.gov.br/api/site/info",
    "img": "https://mapacultural.ap.gov.br/assets/img/logo-site.img.1a3xgif.png",
    "name": "Mapa Cultural Amapá"
  },
  {

    "description": "A Plataforma de Cultura de Aparecida de Goiânia é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
    "version": "v7.5.27",
    "timezone": "Etc/GMT+3",
    "agents_count": 1687,
    "spaces_count": 21,
    "events_count": 14,
    "projects_count": 28,
    "opportunities_count": 20,
    "url": "https://portaldacultura.aparecida.go.gov.br/api/site/info",
    "img": "https://portaldacultura.aparecida.go.gov.br/assets/img/logoAparecida.img.1gg72.png",
    "name": "Mapa Cultural Aparecida"
  },
  {
    "description": "O Mapas Culturais é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
    "version": "v7.5.28",
    "timezone": "Etc/GMT+3",
    "agents_count": 140,
    "spaces_count": 1,
    "events_count": 2,
    "projects_count": 0,
    "opportunities_count": 4,
    "url": "https://mapacultural.parauapebas.pa.gov.br/api/site/info",
    "name": "Mapas Culturais"
  },
  {
    "name": "Mapa Cultural de Lagoa Santa",
    "description": "Plataforma livre, gratuita, colaborativa e interativa de mapeamento cultural desenvolvida para ser um instrumento transparente e colaborativo de gestão pública, permitindo aos gestores, agentes culturais e a todos os cidadãos conhecer, compartilhar e participar da produção e ações que integram a política cultural do Estado.\nO Mapa Cultural é uma ferramenta de comunicação  que busca visibilizar os eventos do calendário cultural, os projetos desenvolvidos e os espaços promovidos pelos agentes e instituições culturais de Lagoa Santa e, passa a ser também,  a plataforma de acesso e execução dos editais realizados pela Secretaria de Turismo e Cultura de Lagoa Santa.\nAlém de conferir a agenda de eventos, você também pode colaborar na gestão da cultura do estado: basta criar seu perfil de agente cultural. A partir do cadastro, fica mais fácil participar dos editais e programas da TCLS e também divulgar seus eventos, espaços ou projetos. Navegue, se informe, contribua e interaja com a gente!",
    "version": "v5.6.20",
    "timezone": "America/Sao_Paulo",
    "agents_count": 517,
    "spaces_count": 35,
    "events_count": 34,
    "projects_count": 24,
    "opportunities_count": 17,
    "url": "https://mapacultural.lagoasanta.mg.gov.br/api/site/info",
    "img": "https://mapacultural.lagoasanta.mg.gov.br/assets/img/logo-site-1994187265-1684366444.png",
    "name": "Mapa Cultural de Lagoa Santa"
  },
  {
    "description": "O Balaio Cultural é o mapemento das expressões artísticas da UFPR produzidas por estudantes, professores, técnicos e terceirizados. O objetivo é compreender as demandas dos artistas e agentes culturais e a partir disso oferecer suporte, promover a difusão cultural interna e externa e fomentar a ocupação dos espaços da Universidade com arte e cultura.",
    "version": "develop-minc",
    "timezone": "UTC",
    "agents_count": 5,
    "spaces_count": 0,
    "events_count": 0,
    "projects_count": 0,
    "opportunities_count": 1,
    "url": "https://mapadacultura.ufpr.br/api/site/info",
    "img": "https://mapadacultura.ufpr.br/files/agent/1/balaio-logo-2.png",
    "name": "Balaio Cultural"
  },
  {
    "description": "O Mapas Culturais é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
    "version": "v7.5.13",
    "timezone": "Etc/GMT+3",
    "agents_count": 599,
    "spaces_count": 92,
    "events_count": 221,
    "projects_count": 14,
    "opportunities_count": 20,
    "url": "https://mapacultural.cim-amfri.sc.gov.br/api/site/info",
    "img": "https://mapacultural.cim-amfri.sc.gov.br/assets/img/logo-site.img.nwyr5h.png",
    "name": "MAPA CULTURAL CIM-AMFRI / SC"
  },
  {
    "description": "O Mapas Culturais é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
    "version": "v7.5.27",
    "timezone": "Etc/GMT+3",
    "agents_count": 13,
    "spaces_count": 0,
    "events_count": 0,
    "projects_count": 0,
    "opportunities_count": 0,
    "url": "https://mapadacultura.ma.gov.br/api/site/info",
    "img": "https://mapadacultura.ma.gov.br/assets/img/logo-site.img.1vm5yjz.png",
    "name": "Mapa Cultural do Maranhão",
    },
    {
      "description": "O Mapas Culturais é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
      "version": "v7.5.27",
      "timezone": "Etc/GMT+3",
      "agents_count": 14,
      "spaces_count": 0,
      "events_count": 0,
      "projects_count": 0,
      "opportunities_count": 0,
      "url": "https://mapadacultura.secult.to.gov.br/api/site/info",
      "img": "https://mapadacultura.secult.to.gov.br/assets/img/logo-site.img.hjhthi.png",
      "name": "Mapa Cultural Tocantins",
    },
    {
      "description": "O Cultura Apucarana é uma plataforma colaborativa que reúne informações sobre agentes, espaços, eventos, projetos culturais e oportunidades",
      "version": "v7.3.57",
      "timezone": "Etc/GMT+3",
      "agents_count": 44,
      "spaces_count": 2,
      "events_count": 2,
      "projects_count": 1,
      "opportunities_count": 0,
      "url": "https://cultura.apucarana.pr.gov.br/api/site/info",
      "img": "https://cultura.apucarana.pr.gov.br/assets/img/favicon-180x180.img.11oa97x.png",
      "name": "Cultura Apucarana",
    },
    {
      "description": "Descrição do site",
      "version": "v4.6.3",
      "timezone": "America/Sao_Paulo",
      "agents_count": 4256,
      "spaces_count": 433,
      "events_count": 3818,
      "projects_count": 471,
      "opportunities_count": 44,
      "url": "https://londrinacultura.londrina.pr.gov.br/api/site/info",
      "img": "https://londrinacultura.londrina.pr.gov.br/assets/img/logo-ceara.png",
      "name": "Londrina Cultura",
    },
    {
      "name": "Mapa Cultural de Aracaju/SE - Mapas Culturais",
      "description": "O Mapas Culturais é uma plataforma livre para mapeamento cultural.",
      "version": "v5.5.6",
      "timezone": "America/Bahia",
      "agents_count": 3386,
      "spaces_count": 117,
      "events_count": 59,
      "projects_count": 88,
      "opportunities_count": 23,
      "url": "http://mapa.cultura.aracaju.se.gov.br/api/site/info",
      "img": "http://mapa.cultura.aracaju.se.gov.br/files/subsite/3/file/250/marca-da-org-2-d4c86696a50b99e5b4c787d2df163111.png",
      "name": "Mapa Cultural de Aracaju/SE - Mapas Culturais",
    },
    {
      "description": "O Mapas Culturais Sarandiense é uma ferramenta de gestão cultural, que garante a estruturação de Sistemas de Informações e Indicadores. A plataforma oferece soluções para o mapeamento colaborativo de agentes culturais, realização de todas as etapas de editais e fomentos, organização de uma agenda cultural e divulgação de espaços culturais do território.",
      "version": "v7.5.41",
      "timezone": "Etc/GMT+3",
      "agents_count": 13,
      "spaces_count": 2,
      "events_count": 1,
      "projects_count": 0,
      "opportunities_count": 0,
      "url": "https://cultura.sarandi.pr.gov.br/api/site/info",
      "img": "https://cultura.sarandi.pr.gov.br/assets/img/logoSecult.img.1sp4dp4.png",
      "name": "Mapas Culturais do Município de Sarandi/PR",
    },
    {
      "description": "O Mapas Culturais é uma plataforma livre para mapeamento cultural.",
      "version": "v7.6.0-minc25",
      "timezone": "Etc/GMT+3",
      "agents_count": 153517,
      "spaces_count": 0,
      "events_count": 0,
      "projects_count": 2666,
      "opportunities_count": 5,
      "url": "https://rededasartes.cultura.gov.br/api/site/info",
      "img": "https://rededasartes.cultura.gov.br/assets/rededasartes.cultura.gov.br/img/logo-site.img.1cmq6ay.png",
      "name": "Mapas Culturais",
    },
]

// DOM Elements
const cardsContainer = document.getElementById('cards-container');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const retryButton = document.getElementById('retry-button');
const totalSummaryElement = document.getElementById('total-summary');

// Event Listeners
retryButton.addEventListener('click', fetchData);

// Main function to initialize the application
function init() {
  fetchData();
}

// Fetch data from API or use mock data
async function fetchData() {
  showLoading();
  hideError();
  
  try {
    // In a real application, you would fetch data from an API
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
    
    // Using mock data for demonstration

    function calcSum(item) {
      return (
        item.agents_count +
        item.spaces_count +
        item.events_count +
        item.projects_count +
        item.opportunities_count
      );
    }

    mockData.sort((a, b) => {
      const somaA = calcSum(a);
      const somaB = calcSum(b);
      return somaB - somaA;
    });

    const data = mockData;

    // Calculate total summary
    const totalSummary = data.reduce((acc, item) => {
      acc.agents_count += item.agents_count;
      acc.spaces_count += item.spaces_count;
      acc.events_count += item.events_count;
      acc.projects_count += item.projects_count;
      acc.opportunities_count += item.opportunities_count;
      return acc;
    }, { agents_count: 0, spaces_count: 0, events_count: 0, projects_count: 0, opportunities_count: 0 });

    // Update header with total summary
   
    //totalSummaryElement.textContent = `Total: Agentes: ${formatNumber(totalSummary.agents)}, Espaços: ${totalSummary.spaces}, Eventos: ${totalSummary.events}, Projetos: ${totalSummary.projects}, Oportunidades: ${totalSummary.opportunities}`;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    renderCards(data, totalSummary);
    hideLoading();
  } catch (error) {
    console.error('Error fetching data:', error);
    showError();
    hideLoading();
  }
}

// Render all cards based on data
function renderCards(data, totalSummary) {
  cardsContainer.innerHTML = '';
  const first_card = createFirstCard(totalSummary, 9999)
  cardsContainer.appendChild(first_card);
  data.forEach((item, index) => {
    const card = createCard(item, index);
    cardsContainer.appendChild(card);
  });
}

// Create a single card element
function createCard(data, index) {
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('aria-labelledby', `card-title-${index}`);
  
  // Extract domain name for the card title
  const urlObj = new URL(data.url);
  const domain = urlObj.hostname;
  
  // Create card header
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  
  const cardTitle = document.createElement('h2');
  cardTitle.id = `card-title-${index}`;
  cardTitle.textContent = "Mapa Cultural 22"; // domain
  if (data.name) {
    cardTitle.textContent = data.name;
  }

  cardHeader.appendChild(cardTitle);
  
  const cardVersion = document.createElement('p');
  cardVersion.textContent = `Versão: ${data.version} | Timezone: ${data.timezone}`;
  cardHeader.appendChild(cardVersion);
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  const cardDescription = document.createElement('a'); 
  cardDescription.className = 'card-description';
  cardDescription.href = "http://" + domain; 
  cardDescription.textContent = domain; // Link text
  cardDescription.target = '_blank'; 
  cardBody.appendChild(cardDescription);

  const cardDescription2 = document.createElement('p');
  cardDescription2.className = 'card-description';
  cardDescription2.textContent = "" //data.description;
  cardBody.appendChild(cardDescription2);

  
  // Create stats grid
  const statsGrid = document.createElement('div');
  statsGrid.className = 'card-stats';
  
  // Add stat items
  const statItems = [
    { label: 'Agentes', value: data.agents_count },
    { label: 'Espaços', value: data.spaces_count },
    { label: 'Eventos', value: data.events_count },
    { label: 'Projetos', value: data.projects_count },
    { label: 'Oportunidades', value: data.opportunities_count }
  ];
  
  statItems.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    
    const statValue = document.createElement('div');
    statValue.className = 'stat-value';
    statValue.textContent = formatNumber(stat.value);
    
    const statLabel = document.createElement('div');
    statLabel.className = 'stat-label';
    statLabel.textContent = stat.label;
    
    statItem.appendChild(statValue);
    statItem.appendChild(statLabel);
    statsGrid.appendChild(statItem);
  });
  
  cardBody.appendChild(statsGrid);
  
  // Create image element with placeholder from Unsplash
  const cardImage = document.createElement('img');
  cardImage.className = 'card-image';
  if (data.img) {
    cardImage.src = data.img;
  }else{
    cardImage.src = `https://avatars.githubusercontent.com/u/25852730`;
  }

  //cardImage.alt = `Imagem representativa para ${domain}`;
  cardImage.loading = 'lazy';
  
  // Create chart container
  const chartContainer = document.createElement('div');
  chartContainer.className = 'card-chart';
  chartContainer.id = `chart-${index}`;
  cardBody.appendChild(chartContainer);
  
  // Assemble the card
  card.appendChild(cardHeader);
  card.appendChild(cardImage);
  card.appendChild(cardBody);
  
  // Render the chart after the card is added to the DOM
  setTimeout(() => {
    renderChart(data, `#chart-${index}`);
  }, 100);
  
  return card;
}


function createFirstCard(data, index) {
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('aria-labelledby', `card-title-${index}`);
  
  // Create card header
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  
  const cardTitle = document.createElement('h2');
  cardTitle.id = `card-title-${index}`;
  cardTitle.textContent = "Mapa Cultural (Total)"; // domain

  cardHeader.appendChild(cardTitle);  

  const cardVersion = document.createElement('p');
  cardVersion.textContent = `Somatório de agentes, espaços, eventos, projetos e oportunidades em todos os mapas encontrados`;
  cardHeader.appendChild(cardVersion);

  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
    
  // Create stats grid
  const statsGrid = document.createElement('div');
  statsGrid.className = 'card-stats';
  
  // Add stat items
  const statItems = [
    { label: 'Total de Agentes', value: formatNumber(data.agents_count) },
    { label: 'Total de Espaços', value: formatNumber(data.spaces_count) },
    { label: 'Total de Eventos', value: formatNumber(data.events_count) },
    { label: 'Total de Projetos', value: formatNumber(data.projects_count) },
    { label: 'Total de Oportunidades', value: formatNumber(data.opportunities_count) }
  ];
  
  statItems.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    
    const statValue = document.createElement('div');
    statValue.className = 'stat-value-secondary';
    statValue.textContent = formatNumber(stat.value);
    
    const statLabel = document.createElement('div');
    statLabel.className = 'stat-label';
    statLabel.textContent = stat.label;
    
    statItem.appendChild(statValue);
    statItem.appendChild(statLabel);
    statsGrid.appendChild(statItem);
  });
  
  cardBody.appendChild(statsGrid);

  const cardImage = document.createElement('img');
  cardImage.className = 'card-image';
  cardImage.src = `https://avatars.githubusercontent.com/u/138939154`;

  //cardImage.alt = `Imagem representativa para ${domain}`;
  cardImage.loading = 'lazy';

  // Create chart container
  const chartContainer = document.createElement('div');
  chartContainer.className = 'card-chart';
  chartContainer.id = `chart-${index}`;
  cardBody.appendChild(chartContainer);
  
  // Assemble the card
  card.appendChild(cardHeader);
  card.appendChild(cardImage);
  card.appendChild(cardBody);
  
  setTimeout(() => {
    renderChart(data, `#chart-${index}`);
  }, 100);
  
  return card;
}

// Render D3.js bar chart
function renderChart(data, selector) {
  // Prepare data for the chart
  const chartData = [
    { name: 'Agentes', value: data.agents_count },
    { name: 'Espaços', value: data.spaces_count },
    { name: 'Eventos', value: data.events_count },
    { name: 'Projetos', value: data.projects_count },
    { name: 'Oportunidades', value: data.opportunities_count }
  ];
  
  // Set dimensions and margins
  const margin = { top: 20, right: 20, bottom: 70, left: 70 };
  const width = 300 - margin.left - margin.right;
  const height = 230 - margin.top - margin.bottom;
  
  // Clear any existing SVG
  d3.select(selector).html('');
  
  // Create SVG
  const svg = d3.select(selector)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
  
  // Add title
  //svg.append('text')
  //  .attr('class', 'chart-title')
  //  .attr('x', width / 2)
  //  .attr('y', -10)
  //  .text('Distribuição de Dados');
  
  // Create scales
  const x = d3.scaleBand()
    .domain(chartData.map(d => d.name))
    .range([0, width])
    .padding(0.2);
  
  const y = d3.scaleLinear()
    .domain([0, d3.max(chartData, d => d.value) * 1.1]) // Add 10% padding
    .range([height, 0]);
  
  // Add X axis
  svg.append('g')
    .attr('class', 'axis x-axis')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '.15em')
    .attr('transform', 'rotate(-45)');
  
  // Add Y axis
  svg.append('g')
    .attr('class', 'axis y-axis')
    .call(d3.axisLeft(y).ticks(5));
  
  // Add X axis label
  /*
  svg.append('text')
    .attr('class', 'axis-label')
    .attr('text-anchor', 'middle')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom - 5)
    .text('Categorias');
  */
  // Add Y axis label
  svg.append('text')
    .attr('class', 'axis-label')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -margin.left + 15)
    .text('Quantidade');
  
  // Create and animate bars
  svg.selectAll('.bar')
    .data(chartData)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.name))
    .attr('width', x.bandwidth())
    .attr('y', height) // Start from the bottom
    .attr('height', 0) // Initial height is 0
    .transition() // Add transition
    .duration(800)
    .delay((d, i) => i * 100)
    .attr('y', d => y(d.value))
    .attr('height', d => height - y(d.value));
  
  // Add value labels on top of bars
  svg.selectAll('.bar-label')
    .data(chartData)
    .enter()
    .append('text')
    .attr('class', 'bar-label')
    .attr('x', d => x(d.name) + x.bandwidth() / 2)
    .attr('y', d => y(d.value) - 5)
    .attr('text-anchor', 'middle')
    .text(d => formatNumberCompact(d.value))
    .style('opacity', 0) // Start invisible
    .transition() // Add transition
    .duration(800)
    .delay((d, i) => i * 100 + 400)
    .style('opacity', 1); // Fade in
}

// Helper function to format numbers with thousands separator
function formatNumber(num) {
  return new Intl.NumberFormat('pt-BR').format(num);
}

// Helper function to format numbers in compact form
function formatNumberCompact(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
}

// UI state management functions
function showLoading() {
  loadingElement.style.display = 'flex';
}

function hideLoading() {
  loadingElement.style.display = 'none';
}

function showError() {
  errorElement.style.display = 'block';
}

function hideError() {
  errorElement.style.display = 'none';
}

// Make the application responsive
function handleResize() {
  // Re-render charts when window is resized
  const data = mockData;
  if (data && data.length > 0) {
    data.forEach((item, index) => {
      renderChart(item, `#chart-${index}`);
    });
  }
}

// Add resize event listener with debounce
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleResize, 250);
});

// Initialize the application
document.addEventListener('DOMContentLoaded', init);

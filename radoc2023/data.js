/*
Author: Thiago Borges de Oliveira
Licence: CC BY-NC-SA 4.0
This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
Date: 2021-11-05
Updated: 2023-08-24
*/

tab_orientacao = [
	{id: '', text: '', pontos: 0, pmax: -1},
	{id: 'V1.1', text: 'Aluno orientado em tese de doutorado defendida e aprovada', pontos: 20, pmax: -1},
	{id: 'V1.2', text: 'Aluno co-orientado em tese de doutorado defendida e aprovada', pontos: 7, pmax: -1},
	{id: 'V1.3', text: 'Aluno orientado em tese de doutorado em andamento', pontos: 10, pmax: -1},
	{id: 'V1.4', text: 'Aluno co-orientado em tese de doutorado em andamento', pontos: 4, pmax: -1},
	{id: 'V1.5', text: 'Aluno orientado em dissertação de mestrado defendida e aprovada', pontos: 15, pmax: -1},
	{id: 'V1.6', text: 'Aluno co-orientado em dissertação de mestrado defendida e aprovada', pontos: 5, pmax: -1},
	{id: 'V1.7', text: 'Aluno orientado em dissertação de mestrado em andamento', pontos: 8, pmax: -1},
	{id: 'V1.8', text: 'Aluno co-orientado em dissertação de mestrado em andamento', pontos: 3, pmax: -1},
	{id: 'V1.9', text: 'Aluno orientado em monografia de especialização aprovada', pontos: 8, pmax: 24},
	{id: 'V1.10', text: 'Aluno orientado em monografia de especialização em andamento', pontos: 4, pmax: 12},
	{id: 'V1.11', text: 'Aluno orientado em residência médica ou em residência multiprofissional em saúde', pontos: 5, pmax: -1},
	{id: 'V1.12', text: 'Aluno orientado em estágio curricular obrigatório', pontos: 3, pmax: -1},
	{id: 'V1.13', text: 'Aluno orientado em projeto de final de curso', pontos: 3, pmax: -1},
	{id: 'V1.14', text: 'Aluno de outra IFE orientado em tese de doutorado defendida e aprovada', pontos: 6, pmax: -1},
	{id: 'V1.15', text: 'Aluno de outra IFE co-orientado em tese de doutorado defendida e aprovada', pontos: 3, pmax: -1},
	{id: 'V1.16', text: 'Aluno de outra IFE orientado em tese de doutorado em andamento', pontos: 3, pmax: -1},
	{id: 'V1.17', text: 'Aluno de outra IFE co-orientado em tese de doutorado em andamento', pontos: 2, pmax: -1},
	{id: 'V1.18', text: 'Aluno de outra IFE orientado em dissertação de mestrado defendida e aprovada', pontos: 4, pmax: -1},
	{id: 'V1.19', text: 'Aluno de outra IFE co-orientado em dissertação de mestrado defendida e aprovada', pontos: 2, pmax: -1},
	{id: 'V1.20', text: 'Aluno de outra IFE orientado em dissertação de mestrado em andamento', pontos: 2, pmax: -1},
	{id: 'V1.21', text: 'Aluno de outra IFE co-orientado em dissertação de mestrado em andamento', pontos: 1, pmax: -1},
	{id: 'V1.22', text: 'Aluno orientado em programas institucionais de iniciação científica, tecnológica, extensão, ensino e similares (PIBIC / PIVIC / PIBITI / PIVITI / ITI / ITC / PROLICEN / PICME- OBMEP / PROBEC / PROVEC / PIBID)', pontos: 6, pmax: -1},
	{id: 'V1.23', text: 'Aluno orientado em programas institucionais de iniciação científica júnior, jovens talentos, apoio técnico e similares', pontos: 5, pmax: -1},
	{id: 'V1.24', text: 'Aluno orientado em programa especial de treinamento (PET)', pontos: 5, pmax: -1},
	{id: 'V1.25', text: 'Aluno com bolsa orientado em projetos de pesquisa /inovação / extensão / cultura / ensino', pontos: 4, pmax: -1},
	{id: 'V1.26', text: 'Aluno sem bolsa orientado em projetos de pesquisa, inovação, extensão, cultura e ensino.', pontos: 3, pmax: -1},
	{id: 'V1.27', text: 'Aluno orientado em programa de monitoria', pontos: 3, pmax: -1},
	{id: 'V1.28', text: 'Aluno orientado em estágio curricular não obrigatório ou estágio docência', pontos: 2, pmax: -1},
	{id: 'V1.29', text: 'Aluno orientado em prática como componente curricular (PCC)', pontos: 1, pmax: -1},
	{id: 'V1.30', text: 'Aluno com deficiência, transtornos globais do desenvolvimento e altas habilidades/superdotação orientado em programa de apoio pedagógico ou em trabalho final de curso', pontos: 20, pmax: 40},
	{id: 'V1.31', text: 'Pesquisador supervisionado em estágio de pós-doutoramento (PRODOC, PNPD, DCR, PDJ, PDS e similares)', pontos: 8, pmax: -1},
	{id: 'V1.32', text: 'Aluno orientado em atividade de Preceptoria', pontos: 1, pmax: -1},
	{id: 'V1.33', text: 'Aluno orientado em atividade de Tutoria', pontos: 1, pmax: -1},
	{id: 'V1.34', text: 'Aluno orientado em Programa de Intercâmbio Internacional', pontos: 1, pmax: -1},
	{id: 'V1.35', text: 'Aluno de baixo rendimento acompanhado/orientado por meio de um projeto de ensino aprovado em reunião do Conselho Diretor da Unidade Acadêmica ou em reunião do Colegiado da Unidade Acadêmica Especial', pontos: 4, pmax: 20, pmax: -1},
];

tab_producao = [
	{id: '', text: '', pontos: 0, pmax: -1},
	{id: 'II-1.1.1', text: 'Artigo completo ou texto literário publicado em periódico: Com classificação no Qualis*/CAPES A', pontos: 25},
	{id: 'II-1.1.2', text: 'Artigo completo ou texto literário publicado em periódico: Com classificação no Qualis*/CAPES B', pontos: 20},
	{id: 'II-1.1.3', text: 'Artigo completo ou texto literário publicado em periódico: Com classificação no Qualis*/CAPES C', pontos: 15},
	{id: 'II-1.1.4', text: 'Artigo completo ou texto literário publicado em periódico: Não sujeito à classificação no Qualis/CAPES', pontos: 10, pmax: 10},
	{id: 'II-1.2', text: 'Resumo de artigo em periódicos especializados nacional ou internacional com corpo editorial', pontos: 5},
	{id: 'II-1.3', text: 'Artigos ou textos literários em repositórios de publicação eletrônica ligados a editoras ou universidades', pontos: 5, pmax: 10},
	{id: 'II-1.4.1', text: 'Resumo expandido publicado em anais de congresso: Internacional', pontos: 8},
	{id: 'II-1.4.2', text: 'Resumo expandido publicado em anais de congresso: Nacional', pontos: 6},
	{id: 'II-1.4.3', text: 'Resumo expandido publicado em anais de congresso: Regional ou Local', pontos: 4},
	{id: 'II-1.5.1', text: 'Resumo simples publicado em anais de congresso: Internacional', pontos: 4},
	{id: 'II-1.5.2', text: 'Resumo simples publicado em anais de congresso: Nacional', pontos: 3},
	{id: 'II-1.5.3', text: 'Resumo simples publicado em anais de congresso: Regional ou Local', pontos: 2},
	{id: 'II-1.6', text: 'Trabalho completo publicado em anais de congresso científico', pontos: 10},
	{id: 'II-1.7', text: 'Livro publicado com selo de editora que possua corpo editorial', pontos: 40},
	{id: 'II-1.8', text: 'Livro publicado com selo de editora que não possua corpo editorial', pontos: 10},
	{id: 'II-1.9', text: 'Capítulo de livro publicado com selo de editora que possua corpo editorial', pontos: 10, pmax: 40},
	{id: 'II-1.10', text: 'Edição ou organização de livro (coletânea) publicado com selo de editora que possua corpo editorial', pontos: 12},
	{id: 'II-1.11', text: 'Capítulo traduzido de livro publicado com selo de editora que possua corpo editorial', pontos: 5, pmax: 20},
	{id: 'II-1.12', text: 'Tradução de livro publicado com selo de editora que possua corpo editorial', pontos: 20},
	{id: 'II-1.13', text: 'Tradução de artigos publicados em periódicos com classificação no Qualis', pontos: 10},
	{id: 'II-1.14', text: 'Resenhas, prefácios ou verbetes', pontos: 5},
	{id: 'II-1.15', text: 'Tradução de resenhas, prefácios ou verbetes', pontos: 2},
	{id: 'II-1.16', text: 'Livro didático desenvolvido para projetos institucionais/governamentais', pontos: 10},
	{id: 'II-1.17.1', text: 'Editor de Anais de Eventos: Internacional', pontos: 15},
	{id: 'II-1.17.2', text: 'Editor de Anais de Eventos: Nacional', pontos: 10},
	{id: 'II-1.17.3', text: 'Editor de Anais de Eventos: Regional ou Local', pontos: 5},
	{id: 'II-1.18', text: 'Dissertação de Mestrado defendida e aprovada (sendo o docente o autor da dissertação)', pontos: 20},
	{id: 'II-1.19', text: 'Tese de Doutorado defendida e aprovada (sendo o docente o autor da tese)', pontos: 40},
	{id: 'II-1.20', text: 'Bolsista de Produtividade do CNPq', pontos: 20},

	{id: 'II-2.1.1', text: 'Criação, produção e direção de filmes, vídeos, discos, audiovisuais, coreografias, peças teatrais, óperas ou musicais, ou musicais apresentados em eventos: Locais ou regionais', pontos: 10},
	{id: 'II-2.1.2', text: 'Criação, produção e direção de filmes, vídeos, discos, audiovisuais, coreografias, peças teatrais, óperas ou musicais, ou musicais apresentados em eventos: Nacionais', pontos: 15},
	{id: 'II-2.1.3', text: 'Criação, produção e direção de filmes, vídeos, discos, audiovisuais, coreografias, peças teatrais, óperas ou musicais, ou musicais apresentados em eventos: Internacionais', pontos: 20},
	{id: 'II-2.2', text: 'Criação e produção do projeto gráfico de livros: concepção gráfica (mancha gráfica, diagramação, escolha de fonte)', pontos: 10},
	{id: 'II-2.3', text: 'Criação de trilha sonora para cinema, televisão ou teatro', pontos: 15},
	{id: 'II-2.4', text: 'Criação e produção de projeto de iluminação cênica, figurinos, formas animadas e similares', pontos: 15},
	{id: 'II-2.5', text: 'Design de impressos por peça (limitados a 20 pontos)', pontos: 1},
	{id: 'II-2.6.1', text: 'Exposições e apresentações artísticas locais ou regionais: Participação individual, camerista, solista ou ator principal', pontos: 16},
	{id: 'II-2.6.2', text: 'Exposições e apresentações artísticas locais ou regionais: Participação coletiva ou coadjuvante', pontos: 5},
	{id: 'II-2.7.1', text: 'Exposições e apresentações artísticas nacionais: Participação individual, camerista, solista ou ator principal', pontos: 20},
	{id: 'II-2.7.2', text: 'Exposições e apresentações artísticas nacionais: Participação coletiva ou coadjuvante', pontos: 10},
	{id: 'II-2.8.1', text: 'Exposições e apresentações artísticas internacionais: Participação individual, camerista, solista ou ator principal', pontos: 20},
	{id: 'II-2.8.2', text: 'Exposições e apresentações artísticas internacionais: Participação coletiva ou coadjuvante', pontos: 15},
	{id: 'II-2.9.1', text: 'Composições musicais: Editadas', pontos: 20},
	{id: 'II-2.9.2', text: 'Composições musicais: Publicadas em revistas científicas', pontos: 20},
	{id: 'II-2.9.3', text: 'Composições musicais: Gravadas', pontos: 20},
	{id: 'II-2.9.4', text: 'Composições musicais: Executadas em apresentações públicas', pontos: 15},
	{id: 'II-2.10.1', text: 'Produção artística, arquitetônica ou de design premiada em evento: Local ou regional ', pontos: 5},
	{id: 'II-2.10.2', text: 'Produção artística, arquitetônica ou de design premiada em evento: Nacional', pontos: 10},
	{id: 'II-2.10.3', text: 'Produção artística, arquitetônica ou de design premiada em evento: Internacional', pontos: 15},
	{id: 'II-2.11', text: 'Arranjos musicais (canto, coral e orquestral) ', pontos: 5},
	{id: 'II-2.12', text: 'Apresentação artística ou cultural em rádio ou TV ', pontos: 5},
	{id: 'II-2.13', text: 'Sonoplastia (cinema, música, rádio, televisão, teatro) ', pontos: 3},
	{id: 'II-2.14', text: 'Fotos publicitárias, jornalísticas, portfólio ou dossiê jornalístico, ensaio jornalístico ou artístico, charge ou ilustração', pontos: 3, pmax: 15},

	{id: 'II-3.1', text: 'Desenvolvimento de programa de computador (software) com registro no INPI ou com disponibilização em ambientes de software livre', pontos: 20},
	{id: 'II-3.2', text: 'Desenvolvimento de software com divulgação em periódicos indexados e com corpo editorial ou em anais de congresso científico', pontos: 10},
	{id: 'II-3.3', text: 'Desenvolvimento de software para uso institucional', pontos: 5, pmax: 10},
	{id: 'II-3.4', text: 'Desenvolvimento e registro no INPI de topografia de circuito integrado', pontos: 20},
	{id: 'II-3.5', text: 'Desenvolvimento de produto, processo ou técnica com registro de patente no INPI ou modelo de utilidade', pontos: 20},
	{id: 'II-3.6', text: 'Desenvolvimento e registro no INPI de desenho industrial', pontos: 20},
	{id: 'II-3.7', text: 'Desenvolvimento e registro no INPI de processo de indicação geográfica', pontos: 20},
	{id: 'II-3.8', text: 'Desenvolvimento e registro no INPI de marcas', pontos: 5},
	{id: 'II-3.9', text: 'Membro de corpo editorial de periódicos com classificação Qualis ou de editora universitária/científica', pontos: 10},
	{id: 'II-3.10', text: 'Parecer ad hoc de avaliação para publicação de livros de editoras com corpo editorial', pontos: 8, pmax: 30},
	{id: 'II-3.11', text: 'Parecer ad hoc de avaliação de artigos para publicação em periódicos especializados com corpo editorial', pontos: 6, pmax: 30},
	{id: 'II-3.12.1', text: 'Parecer ad hoc referente a trabalhos a serem apresentados em eventos: Trabalho completo', pontos: 5},
	{id: 'II-3.12.2', text: 'Parecer ad hoc referente a trabalhos a serem apresentados em eventos: Resumo expandido', pontos: 3},
	{id: 'II-3.12.3', text: 'Parecer ad hoc referente a trabalhos a serem apresentados em eventos: Resumo', pontos: 1},
	{id: 'II-3.13', text: 'Revisão ad hoc de periódico científico com classificação Qualis ou de livro publicado com selo de editora que possua corpo editorial', pontos: 10, pmax: 20},
	{id: 'II-3.14', text: 'Coordenação de mesas redondas, simpósios ou sessões de comunicações', pontos: 2, pmax: 10},
	{id: 'II-3.15.1', text: 'Parecer com anotação de responsabilidade técnica (ART) ou registro de responsabilidade técnica (RRT)', pontos: 10},
	{id: 'II-3.15.2', text: 'Parecer sem anotação de responsabilidade técnica (ART) ou registro de responsabilidade técnica (RRT)', pontos: 5},
	{id: 'II-3.15.3', text: 'Projeto ou relatório técnico com anotação de responsabilidade técnica (ART) ou registro de responsabilidade técnica (RRT)', pontos: 20},
	{id: 'II-3.15.4', text: 'Projeto ou relatório técnico sem anotação de responsabilidade técnica (ART) ou registro de responsabilidade técnica (RRT)', pontos: 10},
	{id: 'II-3.16', text: 'Anais, manuais, catálogos, boletins, com ficha bibliográfica (organizador / redator) ', pontos: 5},
	{id: 'II-3.17', text: 'Produção e publicação de mapas, cartas ou similares', pontos: 10},
	{id: 'II-3.18', text: 'Desenvolvimento de maquete ', pontos: 5},
	{id: 'II-3.19.1', text: 'Manutenção de obra artística: Restauração de obra artística', pontos: 20},
	{id: 'II-3.19.2', text: 'Manutenção de obra artística: Conservação de obra artística', pontos: 10},
	{id: 'II-3.20', text: 'Curadoria de exposições ', pontos: 5},
	{id: 'II-3.21.1', text: 'Produção de cinema, vídeo, rádio, TV ou mídias digitais vinculados aos projetos de ensino, pesquisa e extensão e veiculados na mídia: Editor, roteirista, diretor e produtor', pontos: 20},
	{id: 'II-3.21.2', text: 'Produção de cinema, vídeo, rádio, TV ou mídias digitais vinculados aos projetos de ensino, pesquisa e extensão e veiculados na mídia: Participante', pontos: 3, pmax: 9},
	{id: 'II-3.22', text: 'Criação e manutenção de páginas em Rede sociais, websites e blogs, vinculados aos projetos de ensino, pesquisa e extensão, na área de atuação do professor', pontos: 4, pmax: 3},
	{id: 'II-3.23.1', text: 'Participação em entrevista, mesa redonda, comentário ou programa de rádio, TV, impressos e mídia digital, vinculados à área de atuação do professor: Regional/Local ', pontos: 2},
	{id: 'II-3.23.2', text: 'Participação em entrevista, mesa redonda, comentário ou programa de rádio, TV, impressos e mídia digital, vinculados à área de atuação do professor: Nacional ', pontos: 3},
	{id: 'II-3.23.3', text: 'Participação em entrevista, mesa redonda, comentário ou programa de rádio, TV, impressos e mídia digital, vinculados à área de atuação do professor: Internacional', pontos: 4},

	{id: 'II-4.1', text: 'Artigos de opinião veiculados em jornais e revistas (eletrônico ou impresso) ', pontos: 1},
	{id: 'II-4.2', text: 'Texto ou material didático para uso institucional (não fracionados e com ampla divulgação) ', pontos: 2},
	{id: 'II-4.3', text: 'Artigos de divulgação científica, tecnológica e artística veiculados em jornais e revistas (eletrônico ou impresso) ', pontos: 3},
	{id: 'II-4.4', text: 'Apresentação oral de trabalho em congresso científico', pontos: 3, pmax: 9},
	{id: 'II-4.5', text: 'Apresentação de pôsteres em congresso científico', pontos: 1, pmax: 3},
	{id: 'II-4.6', text: 'Organização de caderno de programação e resumos de eventos', pontos: 3, pmax: 9},
	{id: 'II-4.7', text: 'Trabalho premiado em evento científico nacional ou internacional ', pontos: 5},
	{id: 'II-4.8', text: 'Tese, dissertação ou trabalho de iniciação científica premiados por instituições de fomento (sendo o docente o autor ou orientador do produto) ', pontos: 8},
];

tab_projeto = [
	{id: '', text: '', pontos: 0, pmax: -1},

	{id: 'I-3.1', text: 'Coordenador de projeto de ensino com comprovação de financiamento (exceto bolsas)', pontos: 10},
	{id: 'I-3.2', text: 'Coordenador de projeto de ensino sem financiamento', pontos: 5, pmax: 10},

	{id: 'III-1.1', text: 'Coordenador de projeto conjuntos de pesquisa e cooperação científica (tipo PRODOC, PROCAD, PNPD, entre outros) e de cursos MINTER e DINTER aprovados por órgãos oficiais de fomento', pontos: 10},
	{id: 'III-1.2', text: 'Coordenador de projeto de pesquisa ou inovação aprovado com comprovação de financiamento (exceto para os que são exclusivamente destinado a bolsas)', pontos: 10},
	{id: 'III-1.3', text: 'Coordenador de projeto de pesquisa ou inovação aprovado sem financiamento', pontos: 5},

	{id: 'III-2.1', text: 'Coordenador de programa ou projeto de extensão aprovado com comprovação de financiamento (exceto para os que são exclusivamente destinado a bolsas)', pontos: 10},
	{id: 'III-2.2', text: 'Coordenador de programa ou projeto de extensão/cultura cadastrado na PROEC', pontos: 5, pmax: 15},
	{id: 'III-2.3', text: 'Coordenador de contratos e de convênios de cooperação institucional internacional', pontos: 5},
	{id: 'III-2.4', text: 'Coordenador de contratos e de convênios de cooperação institucional nacional', pontos: 3},
	{id: 'III-2.5', text: 'Participante de projeto de extensão/cultura cadastrado na PROEC', pontos: 3, pmax: 15},
	{id: 'III-9.9', text: 'Participante de projeto de pesquisa', pontos: 0},
];

tab_extensao = [
	{id: '', text: '', pontos: 0, pmax: -1},
	{id: 'III-2.6', text: 'Curso de extensão ministrado com 20 ou mais horas', pontos: 5, pmax: 15},
	{id: 'III-2.7', text: 'Curso de extensão ministrado com menos de 20 horas', pontos: 2, pmax: 10},
	{id: 'III-2.8.1', text: 'Palestrante, conferencista, participante ou coordenador de mesa redonda em evento científico, cultural ou artístico: Evento internacional', pontos: 10, pmax: 20},
	{id: 'III-2.8.2', text: 'Palestrante, conferencista, participante ou coordenador de mesa redonda em evento científico, cultural ou artístico: Evento nacional', pontos: 6, pmax: 12},
	{id: 'III-2.8.3', text: 'Palestrante, conferencista, participante ou coordenador de mesa redonda em evento científico, cultural ou artístico: Evento regional', pontos: 5, pmax: 10},
	{id: 'III-2.9.1', text: 'Promoção ou produção de eventos artísticos e científicos locais: Presidente', pontos: 5},
	{id: 'III-2.9.2', text: 'Promoção ou produção de eventos artísticos e científicos locais: Comissão organizadora', pontos: 3},
	{id: 'III-2.10.1', text: 'Promoção ou produção de eventos artísticos e científicos regionais: Presidente', pontos: 7},
	{id: 'III-2.10.2', text: 'Promoção ou produção de eventos artísticos e científicos regionais: Comissão organizadora', pontos: 4},
	{id: 'III-2.11.1', text: 'Promoção ou produção de eventos artísticos e científicos nacionais: Presidente', pontos: 10},
	{id: 'III-2.11.2', text: 'Promoção ou produção de eventos artísticos e científicos nacionais: Comissão organizadora', pontos: 6},
	{id: 'III-2.12.1', text: 'Promoção ou produção de eventos artísticos e científicos internacionais: Presidente', pontos: 15},
	{id: 'III-2.12.2', text: 'Promoção ou produção de eventos artísticos e científicos internacionais: Comissão organizadora', pontos: 8},
];

tab_admin = [
	{id: '', text: '', pontos: 0, pmax: -1},

	{id: 'IV-1.1', text: 'Reitor ou Vice-Reitor ou Pró-Reitor', pontos: 14},
	{id: 'IV-1.2', text: 'Diretor de Regional da UFG', pontos: 14},
	{id: 'IV-1.3', text: 'Vice-Diretor de Regional da UFG', pontos: 12},
	{id: 'IV-1.4', text: 'Coordenadores das Regionais paralelos aos Pró-Reitores da UFG', pontos: 12},
	{id: 'IV-1.5', text: 'Chefe de Gabinete da Reitoria', pontos: 10},
	{id: 'IV-1.6', text: 'Coordenador ou Assessor vinculado à Reitoria', pontos: 10},
	{id: 'IV-1.7', text: 'Assessor vinculado à Diretoria de Regional', pontos: 10},
	{id: 'IV-1.8', text: 'Diretor de Unidade Acadêmica ou Chefe de Unidade Acadêmica Especial ou do CEPAE', pontos: 10},
	{id: 'IV-1.9', text: 'Diretor Geral do Hospital das Clínicas', pontos: 10},
	{id: 'IV-1.10', text: 'Coordenador ou Assessor vinculado às Pró-Reitorias ou às Coordenações das Regionais da UFG', pontos: 8},
	{id: 'IV-1.11', text: 'Coordenador de Programa de Pós-Graduação stricto sensu', pontos: 8},
	{id: 'IV-1.12', text: 'Coordenador de Curso de Ensino Básico ou de Graduação', pontos: 8},
	{id: 'IV-1.13', text: 'Vice-Diretor de Unidade Acadêmica ou Subchefe de Unidade Acadêmica Especial ou do CEPAE', pontos: 8},
	{id: 'IV-1.14', text: 'Diretor do Hospital Veterinário', pontos: 8},
	{id: 'IV-1.15', text: 'Diretor de Órgão da Administração (CERCOMP, CGA, CEGRAF, CIAR, DDRH, CS, SIASS, Museu, Rádio, Biblioteca etc.)', pontos: 8},

	{id: 'IV-2.1', text: 'Coordenador de projeto institucional com financiamento ou de contratos e convênio com plano de trabalho aprovado', pontos: 5},
	{id: 'IV-2.2', text: 'Coordenador de curso de especialização, residência médica ou residência multiprofissional em saúde', pontos: 10, pmax: 10},
	{id: 'IV-2.3', text: 'Vice-Diretor do CIAR ou Subcoordenadores de Cursos de Graduação e de Pós-Graduação stricto sensu', pontos: 4},
	{id: 'IV-2.4', text: 'Membro representante de classe da carreira docente no CONSUNI', pontos: 10},
	{id: 'IV-2.5', text: 'Membro do Conselho de Curadores ou das Câmaras Superiores Setoriais ou do Plenário do CEPEC ou de Conselho de Fundações', pontos: 10},
	{id: 'IV-2.5.1', text: 'Membro do Conselho Gestor das Regionais ou das Câmaras Regionais Setoriais', pontos: 10},
	{id: 'IV-2.6.1', text: 'Atividades acadêmicas e administrativas designadas por portaria do Reitor, Pró-Reitor ou Diretor de Unidade Acadêmica, ou Chefe de Unidade Acadêmica Especial ou o Diretor do CEPAE, com carga horária menor ou igual a 30 horas', pontos: 2},
	{id: 'IV-2.6.2', text: 'Atividades acadêmicas e administrativas designadas por portaria do Reitor, Pró-Reitor ou Diretor de Unidade Acadêmica, ou Chefe de Unidade Acadêmica Especial ou o Diretor do CEPAE, com carga horária maior do que 30 horas e menor ou igual a 60 horas', pontos: 4},
	{id: 'IV-2.6.3', text: 'Atividades acadêmicas e administrativas designadas por portaria do Reitor, Pró-Reitor ou Diretor de Unidade Acadêmica, ou Chefe de Unidade Acadêmica Especial ou o Diretor do CEPAE, com carga horária maior do que 60 horas e menor ou igual a 90 horas', pontos: 6},
	{id: 'IV-2.6.4', text: 'Atividades acadêmicas e administrativas designadas por portaria do Reitor, Pró-Reitor ou Diretor de Unidade Acadêmica, ou Chefe de Unidade Acadêmica Especial ou o Diretor do CEPAE, com carga horária maior do que 90 horas e menor ou igual a 120 horas', pontos: 8},
	{id: 'IV-2.6.5', text: 'Atividades acadêmicas e administrativas designadas por portaria do Reitor, Pró-Reitor ou Diretor de Unidade Acadêmica, ou Chefe de Unidade Acadêmica Especial ou o Diretor do CEPAE, com carga horária maior do que 120 horas e menor ou igual a 150 horas', pontos: 10},
	{id: 'IV-2.6.6', text: 'Atividades acadêmicas e administrativas designadas por portaria do Reitor, Pró-Reitor ou Diretor de Unidade Acadêmica, ou Chefe de Unidade Acadêmica Especial ou o Diretor do CEPAE, com carga horária maior do que 150 horas', pontos: 12},

	{id: 'IV-3.1', text: 'Presidente da CPPD', pontos: 7},
	{id: 'IV-3.2', text: 'Presidente dos Comitês de Ética em Pesquisa (CEP) ou das Comissões de Ética no Uso de Animais (CEUA)', pontos: 6},
	{id: 'IV-3.3', text: 'Presidente da Comissão de Avaliação Institucional ou da Comissão Própria de Avaliação', pontos: 5},
	{id: 'IV-3.4', text: 'Membros da Coordenação Permanente do Centro de Seleção', pontos: 5},
	{id: 'IV-3.5', text: 'Diretores do Hospital das Clínicas', pontos: 5},
	{id: 'IV-3.6', text: 'Membros da CPPD, da Comissão de Avaliação Institucional, da Comissão Própria de Avaliação, da CAD', pontos: 5},
	{id: 'IV-3.7', text: 'Membros da CPAD ou da Comissão de Sindicância ou da Comissão de Processo Administrativo', pontos: 5},
	{id: 'IV-3.8', text: 'Membro do NDE', pontos: 3},
	{id: 'IV-3.9', text: 'Gestor de Convênios/Projetos Internacionais da Coordenadoria de Assuntos Internacionais', pontos: 5},
	{id: 'IV-3.10', text: 'Coordenador ou Presidente da Comissão responsável pelas atividades de Pesquisa/Ensino/Extensão/Estágio das Unidades Acadêmicas ou Unidades Acadêmicas Especiais', pontos: 3},
	{id: 'IV-3.11', text: 'Chefia de Departamento e respectivo vice ou atividade equivalente', pontos: 3},
	{id: 'IV-3.12', text: 'Chefe do Pronto Socorro ou da Maternidade ou do CEROF do Hospital das Clínicas da UFG e respectivo vice', pontos: 3},
	{id: 'IV-3.13', text: 'Membros dos Comitês de Ética em Pesquisa (CEP) ou das Comissões de Ética no Uso de Animais (CEUA)', pontos: 3},
	{id: 'IV-3.14', text: 'Membros do Comitê Interno do PIBIC e do PIBITI', pontos: 3},
	{id: 'IV-3.15', text: 'Orientador Técnico Titular de Empresa Júnior', pontos: 3},
	{id: 'IV-3.16', text: 'Orientador Técnico Colaborador de Empresa Júnior', pontos: 3},
	{id: 'IV-3.17', text: 'Coordenador de Monitoria', pontos: 3},
	{id: 'IV-3.18', text: 'Coordenador de Módulo de Metodologia Ativa', pontos: 3},
	{id: 'IV-3.19', text: 'Coordenador de Trabalho de Conclusão de Curso ou de Prática como Componente Curricular', pontos: 2},
	{id: 'IV-3.20.1', text: 'Editor de revistas, periódicos ou jornais com periodicidade regular, com classificação Qualis A', pontos: 5},
	{id: 'IV-3.20.2', text: 'Editor de revistas, periódicos ou jornais com periodicidade regular, com classificação Qualis B', pontos: 4},
	{id: 'IV-3.20.3', text: 'Editor de revistas, periódicos ou jornais com periodicidade regular, com classificação Qualis C', pontos: 3},
	{id: 'IV-3.20.4', text: 'Editor de revistas, periódicos ou jornais com periodicidade regular, sem classificação Qualis', pontos: 2},
	{id: 'IV-3.21', text: 'Membro de comitê de assessoramento de agencias oficiais de fomento (FAPs, Finep, Capes, CNPq)', pontos: 5},
	{id: 'IV-3.22', text: 'Membros de Comissões ou Conselhos ou Comitês de Órgãos Governamentais (INEP, CNE, outros)', pontos: 5},

	{id: 'IV-4.1', text: 'Representante titular em conselho de classe profissional com carga horária igual ou superior a 150 horas', pontos: 10},
	{id: 'IV-4.2', text: 'Presidente do Sindicato de Docentes da UFG', pontos: 10},
	{id: 'IV-4.3', text: 'Diretor do Sindicato de Docentes da UFG', pontos: 3},
	{id: 'IV-4.4', text: 'Representante sindical com carga horária igual ou superior a 150 horas', pontos: 10},
	{id: 'IV-4.5', text: 'Representante em entidade científica, artística e cultural com carga horária igual ou superior a 150 horas', pontos: 10},
	{id: 'IV-4.6', text: 'Representante em comissão de órgão governamental com carga horária igual ou superior a 150 horas', pontos: 10},
];


tab_academia = [
	{id: '', text: '', pontos: 0, pmax: -1},

	{id: 'V-3.1', text: 'Docente regularmente matriculado em curso de Pós-Graduação stricto sensu com relatórios de pós-graduação aprovados (pontuação por mês de curso)', pontos: 12},
	{id: 'V-3.2', text: 'Estágio Pós-Doutoral ou Estágio Sênior (pontuação por mês de estágio)', pontos: 12},
	{id: 'V-3.3', text: 'Docente em licença para capacitação (Artigo 87, Lei N.8112), com relatório final aprovado em reunião do Conselho Diretor da Unidade Acadêmica ou do Colegiado da Unidade Acadêmica Especial (pontuação por mês de licença)', pontos: 12},
	{id: 'V-3.4', text: 'Curso de aperfeiçoamento realizado com carga horária igual ou superior a 40 horas', pontos: 3},
	{id: 'V-3.5', text: 'Curso de aperfeiçoamento realizado com carga horária inferior a 40 horas', pontos: 1},
	{id: 'V-3.6', text: 'Participação em Congressos, Seminários, Encontros, Jornadas etc.', pontos: 2, pmax: 10},

	{id: 'V-2.1.1', text: 'Membro de banca de concurso para docente efetivo: Na instituição', pontos: 4},
	{id: 'V-2.1.2', text: 'Membro de banca de concurso para docente efetivo: Em outra instituição', pontos: 6},
	{id: 'V-2.2', text: 'Membro de banca de concurso para docente substituto', pontos: 2},
	{id: 'V-2.3.1', text: 'Membro de banca de defesa de dissertação de mestrado: Na instituição', pontos: 4},
	{id: 'V-2.3.2', text: 'Membro de banca de defesa de dissertação de mestrado: Em outra instituição', pontos: 6},
	{id: 'V-2.4.1', text: 'Membro de banca de defesa de tese de doutorado: Na instituição', pontos: 6},
	{id: 'V-2.4.2', text: 'Membro de banca de defesa de tese de doutorado: Em outra instituição', pontos: 8},
	{id: 'V-2.5.1', text: 'Membro de banca de qualificação de mestrado: Na instituição', pontos: 3},
	{id: 'V-2.5.2', text: 'Membro de banca de qualificação de mestrado: Em outra instituição', pontos: 4},
	{id: 'V-2.6.1', text: 'Membro de banca de qualificação de doutorado: Na instituição', pontos: 5},
	{id: 'V-2.6.2', text: 'Membro de banca de qualificação de doutorado: Em outra instituição', pontos: 6},
	{id: 'V-2.7.1', text: 'Membro de banca de avaliação de memorial ou de tese inédita para promoção à Classe E, com denominação de Professor Titular: Na instituição', pontos: 6},
	{id: 'V-2.7.2', text: 'Membro de banca de avaliação de memorial ou de tese inédita para promoção à Classe E, com denominação de Professor Titular: Em outra instituição', pontos: 8},
	{id: 'V-2.8', text: 'Membro de banca de defesa de monografia, projeto final de curso e outros tipos de bancas', pontos: 3, pmax: 12},
	{id: 'V-2.9.1', text: 'Membro de corpo de júri: Concursos internacionais', pontos: 8},
	{id: 'V-2.9.2', text: 'Membro de corpo de júri: Concursos nacionais', pontos: 6},
	{id: 'V-2.10', text: 'Cursos, palestras ou treinamento não curricular ministrados para docentes, funcionários ou alunos da UFG', pontos: 2},
	{id: 'V-2.11', text: 'Coordenador de projeto institucional de intercâmbio internacional', pontos: 10},

];


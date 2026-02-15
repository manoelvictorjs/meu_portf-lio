
/**
 * Certificados e cursos.
 * Adicione seus certificados aqui.
 */

export interface Certificate {
  /** Nome do certificado/curso */
  title: string;
  /** Emissor (ex: Alura, Udemy, Coursera) */
  issuer: string;
  /** Data de conclusão (ex: "2024" ou "Dez 2024") */
  date: string;
  /** URL do certificado (opcional) */
  url?: string;
  /** Caminho da imagem ou PDF do certificado em /public (opcional). Suporta .png, .jpg e .pdf */
  image?: string;
}

export const certificates: Certificate[] = [
  {
    title: "AMBIENTES COMPUTACIONAIS E CONECTIVIDADE",
    issuer: "Unisul",
    date: "Tubarão, 30 de abril de 2025",
    url: "https://cloudapp.animaeducacao.com.br/validador-documento/?code=c200bbacaecd4bd087119d5f4dfbbb65",
    image: "/certificados/ambientes-computacionais-e-conectividade.jpg",
  },
  {
    title: "ANÁLISE DE DADOS E BIG DATA",
    issuer: "Unisul",
    date: "Tubarão, 15 de outubro de 2025",
    url: "https://cloudapp.animaeducacao.com.br/validador-documento/?code=653ea743c51143de8ce6c9aa87e2fcc1",
    image: "/certificados/análise-de-dados-e-big-data.jpg",
  },
  {
    title: "PROGRAMAÇÃO DE SOLUÇÕES COMPUTACIONAIS",
    issuer: "Unisul",
    date: "Tubarão, 29 de abril de 2024",
    image: "/certificados/programação-de-soluções-computacionais_page.jpg",
  },
  {
    title: "Modelagem de software",
    issuer: "Unisul",
    date: "Tubarão, 6 de junho de 2024",
    image: "/certificados/Modelagem-de-software.jpg",
  },
];

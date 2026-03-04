import igorProfile from "@/assets/igor-profile.png";
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";
import banner4 from "@/assets/banner-4.png";
import banner5 from "@/assets/banner-5.png";
import igorFull from "@/assets/igor-full.png";

const links = [
  { img: banner1, url: "https://www.studio131.com.br/lancamento/", alt: "Inscreva-se e receba os próximos treinamentos" },
  { img: banner2, url: "https://www.studio131.com.br/studio131/", alt: "Conheça a nossa agência 131" },
  { img: banner3, url: "https://www.studio131.com.br/oplanoprofissional/", alt: "O Plano Profissional" },
  { img: banner4, url: "https://youtube.com/@igor-gagliardi?si=EM_S-kuYn4txDIu1", alt: "YouTube" },
  { img: banner5, url: "https://wa.me/5517992595117?text=Ol%C3%A1,%20STUDIO%20131%20-%20vim%20do%20site%20e%20quero%20um%20atendimento%20pr%C3%B3ximo.", alt: "WhatsApp" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl flex flex-col items-center">
        {/* Profile */}
        <div className="w-36 h-36 rounded-full overflow-hidden mb-6 ring-2 ring-border">
          <img src={igorProfile} alt="Igor Gagliardi" className="w-full h-full object-cover" />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-2">
          Igor Gagliardi
        </h1>
        <p className="text-muted-foreground text-sm font-body tracking-wide text-center mb-1">
          Estrategista de Marca & Marketing e Fotógrafo.
        </p>
        <p className="text-muted-foreground text-sm font-body text-center mb-10">
          <span className="font-semibold text-foreground">Fundador do Studio 131</span>{" "}
          onde construímos uma Jornada de Ascensão.
        </p>

        {/* Link Banners */}
        <div className="w-full flex flex-col gap-4 mb-16">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <img src={link.img} alt={link.alt} className="w-full h-auto" loading="lazy" />
            </a>
          ))}
        </div>

        {/* Bio Section */}
        <div className="w-full max-w-lg text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Prazer, eu sou Igor.
          </h2>
          <div className="space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground font-body">
            <p>
              Empreendo há <strong className="text-foreground">mais de 10 anos.</strong> Sou naturalmente{" "}
              <em>artista, comunicador e apaixonado por organização.</em>
            </p>
            <p>
              Minha trajetória começa na fotografia e ganha forma no projeto{" "}
              <strong className="text-foreground"><em>"Como Você Se Vê?"</em></strong>, que alcança
              reconhecimento regional e constrói uma marca registrada em seu segmento.
            </p>
            <p>
              <strong className="text-foreground">
                Esse projeto foi meu primeiro laboratório em marketing digital, branding e comunicação.
              </strong>{" "}
              Foi ali que entendi, na prática, como identidade e narrativa influenciam decisões — e esse
              olhar passou a ser justamente o que meus clientes buscavam ao precisar se posicionar
              profissionalmente.
            </p>
            <p>
              Dessa experiência nasce o <strong className="text-foreground">Studio 131</strong>, minha
              agência de conteúdo e mídia, que{" "}
              <strong className="text-foreground">
                cresceu mais de 5x nos últimos quatro anos ao unir criação e método.
              </strong>
            </p>
            <p>
              Sou reconhecido por integrar visão criativa e pensamento estratégico em negócios,
              posicionamento e marcas, atuando tanto com grandes marcas nacionais quanto com pequenos e
              médios empreendedores regionais.
            </p>
            <p>
              Esse desenvolvimento me levou a criar programas educacionais e consultorias que já impactaram
              mais de 160 profissionais, sempre com foco em comunicação, posicionamento e resultado.
            </p>
            <p className="font-display italic text-foreground text-base md:text-lg">
              A fotografia segue como meu eixo artístico.
            </p>
            <p className="font-display italic text-foreground text-base md:text-lg">
              A estratégia, como instrumento de crescimento.
            </p>
            <p>
              Aqui você não encontrará atalhos nem promessas fáceis, mas clareza, estrutura e construção de
              longo prazo.
            </p>
          </div>
        </div>

        {/* Full Photo */}
        <div className="w-full max-w-md">
          <img
            src={igorFull}
            alt="Igor Gagliardi"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

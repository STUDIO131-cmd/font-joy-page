import igorProfile from "@/assets/igor-profile.png";
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";
import banner4 from "@/assets/banner-4.png";
import banner5 from "@/assets/banner-5.png";
import igorFull from "@/assets/igor-full.png";
import assinatura from "@/assets/assinatura.png";

const links = [
{ img: banner1, url: "https://www.studio131.com.br/lancamento/", alt: "Inscreva-se e receba os próximos treinamentos" },
{ img: banner2, url: "https://www.studio131.com.br/studio131/", alt: "Conheça a nossa agência 131" },
{ img: banner3, url: "https://www.studio131.com.br/oplanoprofissional/", alt: "O Plano Profissional" },
{ img: banner4, url: "https://youtube.com/@igor-gagliardi?si=EM_S-kuYn4txDIu1", alt: "YouTube" },
{ img: banner5, url: "https://wa.me/5517992595117?text=Ol%C3%A1,%20STUDIO%20131%20-%20vim%20do%20site%20e%20quero%20um%20atendimento%20pr%C3%B3ximo.", alt: "WhatsApp" }];


const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12 relative overflow-hidden">
      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] grain-texture" />
      {/* Animated light leak */}
      <div className="fixed inset-0 pointer-events-none z-0 light-leak-animation" />

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center gap-4">
        {/* Profile + Name overlapping */}
        <div className="relative flex flex-col items-center z-10">
          <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-border">
            <img src={igorProfile} alt="Igor Gagliardi" className="w-full h-full object-cover border-solid border-4" />
          </div>
          <div className="relative -mt-6 z-10 inline-flex items-center px-8 py-3 rounded-xl bg-foreground/5 backdrop-blur-md border-foreground/10 overflow-hidden border-0">
            <div className="absolute inset-0 glass-shimmer" />
            <img
              src={assinatura}
              alt="Igor Gagliardi"
              className="relative h-7 md:h-8 w-auto brightness-0 invert drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] drop-shadow-[0_0_24px_rgba(220,220,220,0.2)]"
            />
          </div>
        </div>
        {/* Dark bar - all text together */}
        <div className="w-full relative rounded-2xl overflow-hidden -mt-8 mb-4 p-4 border border-foreground/[0.08]">
          <div className="absolute inset-0 dusty-film-bg" />
          {/* Glass-like diagonal light reflections */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-primary-foreground/[0.08] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-primary-foreground/[0.06] rounded-full blur-[70px] pointer-events-none" />
          <div className="absolute top-[30%] left-[20%] w-64 h-20 bg-primary-foreground/[0.04] rounded-full blur-[60px] pointer-events-none rotate-[-20deg]" />
          <div className="absolute top-[15%] right-[10%] w-32 h-32 bg-primary-foreground/[0.03] rounded-full blur-[50px] pointer-events-none" />
          {/* Diagonal glass shine overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[50%] -left-[10%] w-[40%] h-[200%] bg-gradient-to-br from-primary-foreground/[0.06] via-primary-foreground/[0.02] to-transparent rotate-[25deg]" />
          </div>
          <div className="relative bg-foreground rounded-2xl px-4 pt-12 pb-5 text-center">
            <p className="text-primary-foreground text-sm font-body tracking-wide whitespace-nowrap mx-auto mb-1">
              Estrategista de Marca & Marketing
            </p>
            <p className="text-primary-foreground/80 text-xs font-body tracking-wide mx-auto mb-4">
              Fotógrafo | Artista
            </p>
            <p className="text-primary-foreground/70 text-xs font-body tracking-wide max-w-[260px] mx-auto mb-3">
              Fundador do Studio 131 onde construímos uma Jornada de Ascensão.
            </p>
            <p className="text-primary-foreground/50 text-[10px] font-body tracking-wide max-w-[240px] mx-auto mb-2">
              Nos links abaixo compartilho portfólio e conteúdos.
            </p>
            <p className="text-primary-foreground/50 text-[10px] font-body tracking-wide max-w-[240px] mx-auto">
              Sinta-se em casa!
            </p>
          </div>
        </div>

        {/* Link Banners */}
        <div className="w-full relative rounded-2xl overflow-hidden mb-4">
          <div className="absolute inset-0 links-glass-bg" />
          <div className="relative bg-foreground/[0.02] backdrop-blur-sm border border-foreground/[0.08] rounded-2xl p-4 flex flex-col gap-4">
            {links.map((link, i) =>
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <img src={link.img} alt={link.alt} className="w-full h-auto rounded-xl" loading="lazy" />
            </a>
            )}
          </div>
        </div>

      </div>

      {/* Bio Section - wider container */}
      <div className="w-full max-w-6xl px-4 mt-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bio-glass-bg" />
          <div className="relative bg-foreground/[0.03] backdrop-blur-sm border border-foreground/[0.08] rounded-2xl overflow-hidden">
            <div className="w-full flex flex-col gap-8 p-6 md:p-10">
              {/* Polaroid - mobile only, shown first */}
              <div className="flex md:hidden justify-center order-1">
                <div className="relative bg-[hsl(35_30%_94%)] p-3 pb-10 rounded-sm shadow-xl rotate-1 max-w-[213px] polaroid-texture-container">
                  <div className="absolute inset-0 polaroid-texture rounded-sm pointer-events-none" />
                  <img src={igorFull} alt="Igor Gagliardi" className="relative w-full h-auto object-cover object-top rounded-sm" loading="lazy" />
                </div>
              </div>

              {/* Title */}
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1] order-2 md:order-1">
                Prazer, Igor Augusto Gagliardi
              </h2>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 order-3 md:order-2">
                {/* Bio text */}
                <div className="md:w-[55%] space-y-3 text-xs md:text-sm leading-relaxed text-muted-foreground font-body text-justify">
                  <p>Empreendedor há 10 anos.</p>
                  <p>Sou artista, comunicador e um amante da organização.</p>
                  <p>Minha carreira começa na fotografia e ganha forma no projeto "Como Você Se Vê?", que alcançou reconhecimento regional e construiu uma marca registrada no segmento.</p>
                  <p>Esse projeto foi meu primeiro laboratório em marketing.</p>
                  <p>Entendi na prática, como comunicação e influência guiam decisões.</p>
                  <p>Esse olhar passou a ser justamente o que meus clientes buscavam.</p>
                  <p>Dessa necessidade nasceu o Studio 131, minha agência de conteúdo e mídia.</p>
                  <p>Sou reconhecido por integrar visão criativa e pensamento estratégico em negócios.</p>
                  <p>Esse desenvolvimento me levou a criar programas educacionais e consultorias na The Journey — nossa frente de educação.</p>
                  <p>A fotografia segue como meu eixo artístico.</p>
                  <p>A estratégia, como instrumento de crescimento.</p>
                  <p>Aqui você não encontrará atalhos nem promessas fáceis, mas clareza, estrutura e construção de longo prazo. Não acredito em nada diferente disso!</p>
                </div>

                {/* Polaroid - desktop only */}
                <div className="hidden md:flex md:w-[45%] items-center justify-center">
                  <div className="relative bg-[hsl(35_30%_94%)] p-3 pb-10 rounded-sm shadow-xl rotate-1 w-fit polaroid-texture-container">
                    <div className="absolute inset-0 polaroid-texture rounded-sm pointer-events-none" />
                    <img src={igorFull} alt="Igor Gagliardi" className="relative w-full h-auto object-cover object-top rounded-sm" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default Index;
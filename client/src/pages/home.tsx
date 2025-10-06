import { Building, Dock, FileText, ShieldQuestion, User, Cloud, Upload, Video, Tag, Zap, Laptop, Rocket, Lightbulb, Heart, Bus, Code, Building2, Factory, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroCarousel from "@/components/hero-carousel";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ScrollReveal from "@/components/scroll-reveal";
import { useState, useEffect } from "react";

export default function Home() {
  const whatsappLink = "https://wa.me/5511964813239";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen font-sans text-gray-800 overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://f005.backblazeb2.com/file/VEICULOS/C%C3%B3pia+de+C%C3%B3pia+de+get+(2700+x+1700+px)+(3).png"
          alt="Digital security background" 
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/60"></div>
        <div className="absolute inset-0 shadow-2xl" style={{ boxShadow: 'inset 0 0 100px rgba(0, 31, 50, 0.8)' }}></div>
      </div>
      {/* Header */}
      <header className="sticky-header border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://f005.backblazeb2.com/file/VEICULOS/ChatGPT+Image+6+de+ago.+de+2025%2C+15_19_46.png"
                alt="ALF ID Logo" 
                className="h-12 w-auto bg-transparent"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}
              />
              <span className="text-2xl font-bold text-white">ALF ID</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-white hover:text-blue-300 transition-colors font-medium">Serviços</a>
              <a href="#processo" className="text-white hover:text-blue-300 transition-colors font-medium">Como Funciona</a>
              <a href="#pilares" className="text-white hover:text-blue-300 transition-colors font-medium">Nossos Pilares</a>
              <a href="#parceiros" className="text-white hover:text-blue-300 transition-colors font-medium">Parceiros</a>
              <a href="#contato" className="text-white hover:text-blue-300 transition-colors font-medium">Contato</a>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-primary/95 backdrop-blur-sm border-t border-white/10">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#servicos" 
                  className="text-white hover:text-blue-300 transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-1"
                  onClick={closeMobileMenu}
                >
                  Serviços
                </a>
                <a 
                  href="#processo" 
                  className="text-white hover:text-blue-300 transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-1"
                  onClick={closeMobileMenu}
                >
                  Como Funciona
                </a>
                <a 
                  href="#pilares" 
                  className="text-white hover:text-blue-300 transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-1"
                  onClick={closeMobileMenu}
                >
                  Nossos Pilares
                </a>
                <a 
                  href="#parceiros" 
                  className="text-white hover:text-blue-300 transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-1"
                  onClick={closeMobileMenu}
                >
                  Parceiros
                </a>
                <a 
                  href="#contato" 
                  className="text-white hover:text-blue-300 transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/10 transform hover:translate-x-1"
                  onClick={closeMobileMenu}
                >
                  Contato
                </a>
                <div className="pt-2 border-t border-white/20">
                  <Button asChild className="bg-accent text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-all w-full transform hover:scale-105">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                      <Phone className="mr-2 h-4 w-4" />
                      Fale Conosco
                    </a>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  ALF ID: Especialistas em <span className="text-accent">Certificados Digitais</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  A ALF ID se destaca como uma empresa especializada em certificados digitais, oferecendo soluções eficientes e seguras para pessoas físicas e jurídicas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-accent text-white px-8 py-4 text-base font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Fale Conosco Agora
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-primary text-primary px-8 py-4 text-base font-semibold hover:bg-primary hover:text-white transition-all">
                    <a href="#servicos">
                      Conheça Nossos Serviços
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Carousel */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative">
                <HeroCarousel />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Certificates Section */}
      <section id="servicos" className="relative z-10 py-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Certificados Disponíveis</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Oferecemos uma ampla gama de certificados digitais para atender todas as suas necessidades
              </p>
              <Button asChild className="bg-accent text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-all">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  Fale Conosco para Mais Informações
                </a>
              </Button>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-CNPJ A3 */}
            <ScrollReveal delay={0.1}>
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">E-CNPJ A3</h3>
                  <p className="text-gray-600 mb-2">DEPENDE DE CARTÃO OU TOKEN</p>
                  <p className="text-sm font-semibold text-accent mb-4">VALIDADE: 2 OU 3 ANOS</p>
                  <Button asChild size="sm" className="w-full bg-whatsapp text-white hover:bg-green-600 transition-all whatsapp-button">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Solicitar Cotação
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* E-CNPJ A1 */}
            <ScrollReveal delay={0.2}>
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">E-CNPJ A1</h3>
                  <p className="text-gray-600 mb-2">INSTALADO NA MÁQUINA</p>
                  <p className="text-sm font-semibold text-accent mb-4">VALIDADE: 1 ANO</p>
                  <Button asChild size="sm" className="w-full bg-whatsapp text-white hover:bg-green-600 transition-all whatsapp-button">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Solicitar Cotação
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* E-NFe A1 e A3 */}
            <ScrollReveal delay={0.3}>
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">E-NFe A1 e A3</h3>
                  <p className="text-gray-600 mb-2">A1 INSTALADO NA MÁQUINA (1 ANO)</p>
                  <p className="text-sm font-semibold text-accent mb-4">A3: CARTÃO/TOKEN (1 OU 3 ANOS)</p>
                  <Button asChild size="sm" className="w-full bg-whatsapp text-white hover:bg-green-600 transition-all whatsapp-button">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Solicitar Cotação
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* E-CPF A3 */}
            <ScrollReveal delay={0.4}>
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldQuestion className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">E-CPF A3</h3>
                  <p className="text-gray-600 mb-2">DEPENDE DE CARTÃO OU TOKEN</p>
                  <p className="text-sm font-semibold text-accent mb-4">VALIDADE: 2 OU 3 ANOS</p>
                  <Button asChild size="sm" className="w-full bg-whatsapp text-white hover:bg-green-600 transition-all whatsapp-button">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Solicitar Cotação
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* E-CPF A1 */}
            <ScrollReveal delay={0.5}>
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">E-CPF A1</h3>
                  <p className="text-gray-600 mb-2">INSTALADO NA MÁQUINA</p>
                  <p className="text-sm font-semibold text-accent mb-4">VALIDADE: 1 ANO</p>
                  <Button asChild size="sm" className="w-full bg-whatsapp text-white hover:bg-green-600 transition-all whatsapp-button">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Solicitar Cotação
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* E-CPF e E-CNPJ A3 (em nuvem) */}
            <ScrollReveal delay={0.6}>
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">E-CPF e E-CNPJ A3</h3>
                  <p className="text-gray-600 mb-2">EM NUVEM</p>
                  <p className="text-sm font-semibold text-accent mb-4">VALIDADE: 1, 2 OU 3 ANOS</p>
                  <Button asChild size="sm" className="w-full bg-whatsapp text-white hover:bg-green-600 transition-all whatsapp-button">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Solicitar Cotação
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section id="processo" className="section-dark relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Processo simples e seguro em apenas <span className="highlight-box inline-block">ALGUMAS ETAPAS</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="highlight-box mb-12">
                <p className="text-lg text-white leading-relaxed mb-8">
                  Após o envio dos documentos, realizamos uma <strong className="text-blue-300">videoconferência com um Validador</strong>, ou, se preferir, podemos fazer uma <strong className="text-blue-300">visita presencial</strong>. Essa etapa é fundamental para a validação dos documentos.
                </p>
                <p className="text-lg text-white leading-relaxed mb-6">
                  Por fim, o <strong className="text-blue-300">certificado digital é emitido e entregue</strong> ao cliente com toda a segurança necessária.
                </p>
                <div className="text-center">
                  <Button asChild className="bg-blue-400 text-white px-8 py-3 font-semibold hover:bg-blue-500 transition-all">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Tirar Dúvidas sobre o Processo
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
              
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.3}>
                <div className="text-center highlight-box">
                  <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Envio de Documentos</h3>
                  <p className="text-blue-200">Envie seus documentos de forma segura através de nossa plataforma</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="text-center highlight-box">
                  <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">2. Validação</h3>
                  <p className="text-blue-200">Videoconferência ou atendimento presencial para validação</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <div className="text-center highlight-box">
                  <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tag className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">3. Emissão</h3>
                  <p className="text-blue-200">Seu certificado é emitido e entregue com total segurança</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      {/* Differentials Section */}
      <section className="relative z-10 py-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Nossos Diferenciais</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Descubra por que somos a escolha ideal para seus certificados digitais
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal direction="left" delay={0.2}>
              <Card className="p-8 shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Atendimento Ágil e Personalizado</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Nosso atendimento é rápido e adaptado às necessidades de cada cliente, garantindo uma experiência única e eficiente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <Card className="p-8 shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Laptop className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">100% Online e Prático</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Operamos completamente online, permitindo que nossos clientes acessem nossos serviços de qualquer lugar, a qualquer momento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Company Pillars */}
      <section id="pilares" className="section-dark relative z-10 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Nossos <span className="highlight-box inline-block">Pilares</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <ScrollReveal delay={0.2}>
              <Card className="highlight-box p-8 shadow-lg text-center transform hover:scale-105 transition-all border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
                  <p className="text-blue-200 leading-relaxed">
                    Tornar os <strong className="text-white">fluxos de trabalho mais práticos e ágeis</strong> para nossos parceiros
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            {/* Vision */}
            <ScrollReveal delay={0.4}>
              <Card className="highlight-box p-8 shadow-lg text-center transform hover:scale-105 transition-all border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
                  <p className="text-blue-200 leading-relaxed">
                    <strong className="text-white">Inovar a prestação de serviço</strong> no ambiente de certificação digital
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            {/* Values */}
            <ScrollReveal delay={0.6}>
              <Card className="highlight-box p-8 shadow-lg text-center transform hover:scale-105 transition-all border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
                  <p className="text-blue-200 leading-relaxed">
                    <strong className="text-white">Integridade, confiabilidade e compromisso</strong> são os pilares de nossa atuação.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Specialties Section */}
      <section className="relative z-10 py-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-primary mb-8">Especialidades</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              <ScrollReveal delay={0.1}>
                <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <CardContent className="p-0 text-center">
                    <User className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h3 className="font-bold text-primary text-sm">Pessoas Físicas</h3>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <CardContent className="p-0 text-center">
                    <Bus className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h3 className="font-bold text-primary text-sm">Profissionais Liberais</h3>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <CardContent className="p-0 text-center">
                    <Code className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h3 className="font-bold text-primary text-sm">Autônomos</h3>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <CardContent className="p-0 text-center">
                    <Building2 className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h3 className="font-bold text-primary text-sm">Gestão de Condomínios</h3>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <CardContent className="p-0 text-center">
                    <Factory className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h3 className="font-bold text-primary text-sm">Empresas</h3>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.6}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Atendemos pessoas físicas, profissionais liberais, autônomos, especialistas em gestão de condomínios e empresas de todos os portes.
                </p>
                <Button asChild size="icon" className="bg-primary text-white p-4 hover:bg-primary/90 transition-all transform hover:scale-110 shadow-lg rounded-full w-16 h-16">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-8 w-8" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section id="parceiros" className="section-dark relative z-10 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Nossos <span className="highlight-box inline-block">Parceiros</span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Trabalhamos com os melhores parceiros para oferecer soluções completas em certificação digital
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            {/* First Row - Partners Logos */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <img 
                    src="https://f005.backblazeb2.com/file/VEICULOS/alfd/48c212c6385f4e7a8633b5d361cc3273.png"
                    alt="Parceiro ALF ID" 
                    className="w-full h-auto max-h-32 object-contain mx-auto"
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <img 
                    src="https://f005.backblazeb2.com/file/VEICULOS/alfd/og.jpg"
                    alt="Parceiro ALF ID" 
                    className="w-full h-auto max-h-32 object-contain mx-auto"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Contact CTA */}
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <Button asChild className="bg-accent text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    Conheça Nossas Parcerias
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contato" className="section-dark relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="highlight-box p-12 shadow-xl rounded-2xl">
                <h2 className="text-4xl font-bold text-white mb-4">
                  <span className="highlight-box inline-block px-4 py-2 rounded-lg">Entre em Contato</span>
                </h2>
                <h3 className="text-3xl font-bold text-white mb-8">Conosco</h3>
                <p className="text-xl text-blue-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Clique no botão abaixo e <strong className="text-white">fale agora com um atendente</strong> para tirar suas dúvidas e fazer sua cotação!
                </p>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-whatsapp text-white px-8 py-4 text-lg font-bold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg animate-pulse-soft rounded-xl">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-3 h-5 w-5" />
                      Fale agora no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-10 bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <span className="text-2xl font-bold">ALF ID</span>
              </div>
              <p className="text-gray-300 mb-4">Especialistas em Certificados Digitais</p>
              <p className="text-sm text-gray-400">© 2024 ALF ID. Todos os direitos reservados.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

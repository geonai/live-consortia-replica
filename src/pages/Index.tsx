import { Clock, Zap, TrendingUp, Shield, CheckCircle2, Users, Brain, Phone, Calendar, Sparkles, BarChart3, Target, DollarSign, Award, MapPin, Building2, History, Heart, Car, Home, Truck, FileText, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-900 dark:to-slate-800 border border-slate-600 dark:border-slate-700 shadow-sm">
              <img 
                src="/images/logo.png" 
                alt="Geon AI" 
                className="h-7"
              />
            </div>
            <span className="text-muted-foreground">×</span>
            <div className="dark:bg-gray-200 dark:border dark:border-gray-300 rounded-lg px-3 py-2.5">
              <img 
                src="/images/live-consorcios-logo.png" 
                alt="Live Consorcios" 
                className="h-7"
              />
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-600/10 via-yellow-600/5 to-amber-600/10 border border-amber-600/20 text-sm">
          <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold">
            Infraestrutura e Automação de IA para Consórcios
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Nosso Geon SDR <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">multiplica</span> sua receita de forma automatizada
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
          Especialista virtual em qualificação de leads e agendamento de visitas para <span className="text-foreground font-semibold">Live Consorcios</span>. Atende via chat e voz 24/7, com conhecimento profundo sobre compra e venda de consórcios de automóveis, imóveis e carga pesada.
        </p>
        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8" asChild>
          <a href="tel:+5511933436027">
            <Phone className="w-5 h-5 mr-2" />
            Ligue Agora e Conheça
          </a>
        </Button>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16">
          <Card className="p-6 bg-card/50 border-border/50 backdrop-blur">
            <Clock className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Atendimento Ininterrupto</div>
          </Card>
          <Card className="p-6 bg-card/50 border-border/50 backdrop-blur">
            <Zap className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <div className="text-3xl font-bold mb-2">10s</div>
            <div className="text-sm text-muted-foreground">Tempo Médio de Resposta</div>
          </Card>
          <Card className="p-6 bg-card/50 border-border/50 backdrop-blur">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <div className="text-3xl font-bold mb-2">+200%</div>
            <div className="text-sm text-muted-foreground">Leads Qualificados</div>
          </Card>
        </div>
      </section>

      {/* Live Consorcios Recognition Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 via-purple-950/5 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <div className="dark:bg-gray-200 dark:border dark:border-gray-300 rounded-lg px-8 py-5">
                  <img 
                    src="/images/live-consorcios-logo.png" 
                    alt="Live Consorcios" 
                    className="h-28"
                  />
                </div>
              </div>
              <p className="text-2xl md:text-3xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-bold mb-3">Tradição e Excelência em Consórcios</p>
              <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
                Reconhecemos a excelência e a trajetória de sucesso da Live Consorcios — uma empresa de Consultoria, Negócios e Serviços Financeiros da família "Augusto", com mais de 20 anos de experiência no segmento de consórcios.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center bg-card/50 border-amber-600/30">
                <Users className="w-10 h-10 mx-auto mb-3 text-amber-500" />
                <div className="text-3xl font-bold mb-1">15.000+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-amber-500/30">
                <History className="w-10 h-10 mx-auto mb-3 text-amber-500" />
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-amber-500/30">
                <DollarSign className="w-10 h-10 mx-auto mb-3 text-amber-500" />
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Pagamento à Vista</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-amber-500/30">
                <Award className="w-10 h-10 mx-auto mb-3 text-amber-500" />
                <div className="text-3xl font-bold mb-1">3</div>
                <div className="text-sm text-muted-foreground">Tipos de Consórcio</div>
              </Card>
            </div>

            {/* Services */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/50 border-border/50">
                <h3 className="font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent text-lg flex items-center gap-2">
                  <Car className="w-5 h-5 text-amber-500" />
                  Automóveis
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Compramos cartas de consórcios de automóveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Pagamento à vista via PIX ou transferência bancária</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Melhor valor do mercado</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <h3 className="font-bold mb-4 text-amber-400 text-lg flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Imóveis
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Compramos cartas de consórcios de imóveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Casas, terrenos ou apartamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Pagamento à vista via PIX ou transferência bancária</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <h3 className="font-bold mb-4 text-amber-400 text-lg flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Carga Pesada
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Compramos cartas de consórcios de caminhões</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Carretas, retroescavadeiras e outros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Pagamento à vista via PIX ou transferência bancária</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Company Values */}
            <Card className="p-8 bg-card/50 border-border/50 mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-amber-500" />
                <h3 className="text-xl font-bold">Soluções personalizadas para nossos clientes</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                A Live Consorcios é reconhecida por seu <span className="text-foreground font-semibold">compromisso com excelência</span> — oferecendo soluções personalizadas para os nossos clientes, com assessoria completa em todas as etapas. Contamos com profissionais experientes, que estão sempre à disposição, oferecendo um atendimento seguro para a concretização de ótimos negócios.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge and Solution Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Por que Live Consorcios precisa de um Geon SDR?
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
          Com mais de <span className="text-foreground font-semibold">20 anos de experiência</span>, <span className="text-foreground font-semibold">15.000+ clientes satisfeitos</span> e volume crescente de oportunidades, cada lead não qualificado imediatamente representa <span className="text-amber-400 font-semibold">perda de receita significativa</span>.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Challenge */}
          <Card className="p-8 bg-gradient-to-br from-red-950/30 to-red-900/10 border-red-500/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold">O Desafio</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sendo uma empresa consolidada no mercado de consórcios, a Live Consorcios recebe alto volume de consultas sobre compra e venda de cartas em múltiplos segmentos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-red-400 mt-0.5">•</span>
                <span><span className="text-foreground font-medium">Oportunidades perdidas</span> por não responder leads imediatamente</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-red-400 mt-0.5">•</span>
                <span><span className="text-foreground font-medium">Time comercial sobrecarregado</span> com consultas desqualificadas</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-red-400 mt-0.5">•</span>
                <span><span className="text-foreground font-medium">Oportunidades perdidas fora do horário</span> comercial</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-red-400 mt-0.5">•</span>
                <span><span className="text-foreground font-medium">Concorrentes ágeis</span> capturando clientes pela velocidade de resposta</span>
              </li>
            </ul>
          </Card>

          {/* Solution */}
          <Card className="p-8 bg-gradient-to-br from-amber-900/30 via-yellow-900/20 to-amber-900/30 border-amber-500/30">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold">A Solução Geon SDR</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Um especialista virtual que <span className="text-foreground font-semibold">nunca dorme</span>, qualifica com precisão e garante que seu time comercial foque apenas em oportunidades reais:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Qualificação por tipo de consórcio</span> e situação da carta</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Atendimento 24/7</span> capturando urgências imediatas</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Conhecimento profundo</span> sobre todos os serviços Live Consorcios</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Agendamento inteligente</span> de visitas qualificadas</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Escala ilimitada</span> sem aumentar custos operacionais</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Specialist Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Geon SDR, especialista na Live Consorcios
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Um especialista virtual que trabalha <span className="text-foreground font-semibold">24/7</span> para qualificar leads, agendar visitas e garantir que sua equipe comercial foque apenas em oportunidades reais de compra e venda de consórcios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <Card className="p-6 bg-card/50 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-3">Qualificação Inteligente</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Identifica tipo de consórcio (automóvel, imóvel, carga pesada)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Entende situação da carta (ativa, cancelada, contemplada)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Avalia urgência e necessidade</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-3">Chat e Voz</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Atendimento em múltiplos canais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Conversas naturais e humanizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Tom profissional e acolhedor</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-3">Agendamento Smart</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Sugere melhor horário para visitas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Coleta de localização do cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Confirmações automáticas</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-3">Insights & Relatórios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Dashboard de performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Taxa de qualificação e conversão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Principais demandas e perfis</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como funciona o Geon SDR?
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            Integração rápida com seus canais de atendimento para atender, qualificar e agendar visitas automaticamente.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2 text-lg">Cliente faz contato</h3>
              <p className="text-sm text-muted-foreground">
                Interessado envia mensagem ou liga perguntando sobre compra/venda de carta de consórcio.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2 text-lg">Geon SDR qualifica</h3>
              <p className="text-sm text-muted-foreground">
                Identifica tipo de consórcio, situação, valor, urgência e interesse real de compra/venda.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2 text-lg">Agenda visita qualificada</h3>
              <p className="text-sm text-muted-foreground">
                Propõe horário, registra localização e envia lead quente diretamente para seu time comercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-amber-900/20 to-yellow-900/10 border-amber-500/30">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 mx-auto mb-4 text-amber-500" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Retorno sobre Investimento
              </h2>
              <p className="text-muted-foreground text-lg">
                Uma única carta de consórcio pode valer <span className="text-foreground font-semibold">R$ 5.000 a R$ 50.000+</span>. Se o Geon SDR capturar <span className="text-amber-400 font-semibold">apenas 2-3 vendas adicionais por mês</span>, o retorno já justifica o investimento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-amber-500 mb-2">+60%</div>
                <p className="text-sm text-muted-foreground">Taxa de resposta em leads</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-amber-500 mb-2">-40%</div>
                <p className="text-sm text-muted-foreground">Redução de custo por lead</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-amber-500 mb-2">3x</div>
                <p className="text-sm text-muted-foreground">Mais vendas qualificadas</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-amber-500" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tecnologia Geon AI
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
                Infraestrutura proprietária de IA especializada em vendas, construída para empresas que buscam escalar operações comerciais sem perder qualidade de atendimento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-lg">IA Conversacional</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Modelos treinados especificamente para qualificação de leads no segmento de consórcios, com compreensão profunda de intenções e necessidades do cliente.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Reconhecimento de intenção em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Respostas contextualizadas e precisas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Aprendizado contínuo com interações</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-lg">Qualificação Precisa</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sistema de scoring que avalia múltiplos fatores para determinar o nível de qualificação de cada lead, garantindo que seu time comercial foque no que importa.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Análise de viabilidade financeira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Detecção de urgência e motivação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Priorização automática de oportunidades</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-lg">Integração Total</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Conexão direta com seus sistemas e canais de comunicação existentes, sem necessidade de mudanças operacionais drásticas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>WhatsApp Business, telefone e email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>CRM e calendário de agendamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Dashboard analytics em tempo real</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-lg">Segurança & LGPD</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Infraestrutura em nuvem com certificações de segurança, criptografia de ponta a ponta e conformidade total com LGPD.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Dados criptografados em repouso e trânsito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Conformidade LGPD e ISO 27001</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Backup automático e disaster recovery</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Cronograma de Implementação
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            Processo de ativação rápido e sem fricção, com acompanhamento completo da equipe Geon AI.
          </p>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-l-4 border-l-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 font-bold text-amber-500">
                  S1
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg">Semana 1 - Configuração</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Treinamento do Geon SDR com conhecimento especializado sobre Live Consorcios, produtos, processos e diferenciais.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Base de conhecimento</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Scripts de qualificação</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Perfil de voz</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-l-4 border-l-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 font-bold text-amber-500">
                  S2
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg">Semana 2 - Integração</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Conexão com canais de comunicação (WhatsApp, telefone) e sistemas de CRM/calendário para agendamentos automáticos.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Integrações</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Testes</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Ajustes finos</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-l-4 border-l-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 font-bold text-amber-500">
                  S3
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg">Semana 3 - Go Live</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ativação gradual do Geon SDR em modo de acompanhamento, com monitoramento contínuo e otimização de performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Piloto supervisionado</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Monitoramento</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Otimizações</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-amber-900/20 to-yellow-900/10 border-amber-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 font-bold text-amber-500">
                  S4+
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg">Semana 4+ - Operação Plena</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Geon SDR operando 24/7, qualificando leads, agendando visitas e otimizando continuamente com base em dados reais.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Autonomia total</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Suporte contínuo</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">Melhorias</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <DollarSign className="w-16 h-16 mx-auto mb-4 text-amber-500" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investimento & Modelo de Precificação
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed text-lg">
              Modelo de precificação justo e transparente, desenhado para escalar com seu negócio sem custos fixos elevados.
            </p>

            <Card className="p-8 md:p-12 bg-card/50 border-amber-500/30">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="font-bold mb-4 text-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    Investimento Inicial
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Setup e configuração do Geon SDR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Treinamento com conhecimento Live Consorcios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Integrações com canais e sistemas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>3 semanas de implementação assistida</span>
                    </li>
                  </ul>
                </div>

                <div className="text-left">
                  <h3 className="font-bold mb-4 text-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    Mensalidade Recorrente
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Atendimento 24/7 ilimitado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Qualificação e agendamento automatizados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Dashboard analytics em tempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Suporte técnico e otimizações contínuas</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-amber-900/20 to-yellow-900/10 rounded-lg border border-amber-500/20">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="text-foreground font-semibold">Valores personalizados</span> de acordo com volume de leads e complexidade de integração. <span className="text-amber-400 font-medium">Entre em contato para uma proposta comercial detalhada.</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Resultados Comprovados
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-amber-500">+250%</div>
                  <div className="text-xs text-muted-foreground">Aumento em leads qualificados</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Empresa de consórcios aumentou em 250% o volume de leads qualificados em 60 dias com Geon SDR.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-amber-500">85%</div>
                  <div className="text-xs text-muted-foreground">Redução tempo de resposta</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Time comercial economizou 85% do tempo gasto em qualificação manual, focando apenas em fechamento.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-amber-500">3.2x</div>
                  <div className="text-xs text-muted-foreground">ROI em 90 dias</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Retorno sobre investimento de 3.2x em apenas 90 dias de operação com Geon SDR especializado.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-amber-900/30 via-yellow-900/20 to-amber-900/30 border-amber-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Próximos Passos
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
                  Agende uma conversa com nosso time comercial para entender como o <span className="text-foreground font-semibold">Geon SDR</span> pode transformar a operação comercial da <span className="text-foreground font-semibold">Live Consorcios</span>.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 bg-card/50 border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-8 h-8 text-amber-500" />
                    <div>
                      <h3 className="font-bold">Ligue Agora</h3>
                      <p className="text-sm text-muted-foreground">Fale diretamente com nosso time</p>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold" asChild>
                    <a href="tel:+5511933436027">
                      <Phone className="w-5 h-5 mr-2" />
                      (11) 93343-6027
                    </a>
                  </Button>
                </Card>

                <Card className="p-6 bg-card/50 border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-8 h-8 text-amber-500" />
                    <div>
                      <h3 className="font-bold">Envie um Email</h3>
                      <p className="text-sm text-muted-foreground">Receba proposta detalhada</p>
                    </div>
                  </div>
                  <Button size="lg" variant="outline" className="w-full border-amber-500/30 hover:bg-amber-500/10" asChild>
                    <a href="mailto:comercial@geonai.com">
                      <Mail className="w-5 h-5 mr-2" />
                      comercial@geonai.com
                    </a>
                  </Button>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Demonstração ao vivo do Geon SDR disponível
                </p>
                <Button size="lg" variant="outline" className="border-amber-500/30 hover:bg-amber-500/10" asChild>
                  <a href="tel:+5511933436027">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Demo
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <div className="px-4 py-2.5 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-900 dark:to-slate-800 border border-slate-600 dark:border-slate-700 shadow-sm inline-block">
                  <img 
                    src="/images/logo.png" 
                    alt="Geon AI" 
                    className="h-6"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Infraestrutura de IA para vendas que escala operações comerciais sem perder qualidade de atendimento.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <a href="tel:+5511933436027" className="hover:text-foreground transition-colors">
                    (11) 93343-6027
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <a href="mailto:comercial@geonai.com" className="hover:text-foreground transition-colors">
                    comercial@geonai.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Live Consorcios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Mais de 20 anos de experiência</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>15.000+ clientes satisfeitos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Consórcios: Automóveis, Imóveis e Carga Pesada</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Geon AI. Proposta comercial confidencial para Live Consorcios.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

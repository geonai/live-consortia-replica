import { Clock, Zap, TrendingUp, Shield, CheckCircle2, Users, Brain, Phone, Calendar, Sparkles, BarChart3, Target, DollarSign, Award, MapPin, Building2, History, Heart, Car, Home, Truck, FileText, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'

export default function ProposalPage() {
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
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Classifica leads por prioridade</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="font-bold mb-3">Atendimento Multicanal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Chat (WhatsApp, site) 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Voz (telefone) com naturalidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Integração automática com CRM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Registro completo de interações</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="font-bold mb-3">Agendamento Inteligente</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Agenda visitas automaticamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Envia lembretes automáticos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Prepara briefing completo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Reagenda em caso de ausência</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="font-bold mb-3">Conhecimento Especializado</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Consórcios de automóveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Consórcios de imóveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Consórcios de carga pesada</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Integrations */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ecossistema de Integrações
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Conecte seus Geons às ferramentas que você já utiliza, garantindo total aproveitamento do investimento feito em soluções sistêmicas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {['Bancos de Dados', 'Agendas', 'CRMs', 'ERPs', 'Helpdesk', 'E-commerce', 'Pagamentos', 'Marketing', 'Planilhas', 'Comunicação', 'E-mail', 'Telefonia', 'Ferramentas de BI', 'Redes Sociais', 'APIs Customizadas'].map((integration) => (
            <div key={integration} className="px-4 py-2 rounded-lg bg-secondary/50 text-sm border border-border/50 hover:border-amber-500/40 hover:bg-amber-500/10 transition-colors">
              {integration}
            </div>
          ))}
        </div>
      </section>

      {/* Operational Availability */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Disponibilidade Operacional
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Enquanto um SDR humano trabalha <span className="text-foreground font-semibold">160 horas/mês</span>, nosso Geon está disponível <span className="text-amber-400 font-semibold">720 horas/mês</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-muted-foreground" />
              <h3 className="text-xl font-bold">SDR Humano</h3>
            </div>
            <div className="text-5xl font-bold mb-2">160h</div>
            <div className="text-sm text-muted-foreground mb-6">por mês</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Horário comercial (8h/dia)</li>
              <li>• Segunda a sexta</li>
              <li>• Férias e atestados</li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-amber-900/30 via-yellow-900/20 to-amber-900/30 border-amber-500/40">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <h3 className="text-xl font-bold">Geon SDR</h3>
            </div>
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">720h</div>
            <div className="text-sm text-muted-foreground mb-6">por mês</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span className="text-muted-foreground">24 horas por dia</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span className="text-muted-foreground">7 dias por semana</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span className="text-muted-foreground">Sem interrupções</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-secondary/20 border-border/50 max-w-4xl mx-auto mt-8">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-500" />
            Impacto para Live Consorcios:
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Leads de emergência atendidos imediatamente, mesmo à noite</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Zero oportunidades perdidas por indisponibilidade</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Cobertura total em feriados e finais de semana</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Atendimento simultâneo ilimitado de múltiplos leads</span>
            </div>
          </div>
        </Card>
      </section>

      {/* ROI Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu ROI com o Geon SDR
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A Inteligência Artificial garante <span className="text-foreground font-semibold">economia imediata</span> e <span className="text-foreground font-semibold">eficiência máxima</span>, atacando os principais custos operacionais do setor comercial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          <Card className="p-8 bg-card/50 border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-amber-500" />
              <h3 className="text-xl font-bold">Disponibilidade Operacional</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Horas ativas por mês: IA trabalha 4.5x mais</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">SDR Humano</span>
                  <span className="font-bold">160h</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground/40" style={{ width: '22%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">Geon IA</span>
                  <span className="font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">720h</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 bg-gradient-to-br from-amber-600 to-yellow-600 text-transparent bg-clip-text" />
              <h3 className="text-xl font-bold">Distribuição de Tarefas</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Foco no que gera valor: 80% automatizável</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2">80%</div>
                <div className="text-xs text-muted-foreground">Repetitivas</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/50 border border-border/50">
                <div className="text-4xl font-bold mb-2">20%</div>
                <div className="text-xs text-muted-foreground">Estratégicas</div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-amber-900/20 via-yellow-900/10 to-amber-900/20 border-amber-500/30 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Conclusão Estratégica</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign className="w-10 h-10 mx-auto mb-3 text-amber-500" />
              <h4 className="font-bold mb-2">Redução de Custos</h4>
              <p className="text-sm text-muted-foreground text-pretty">
                Economia vai além do salário: elimina encargos, benefícios e custos de turnover.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-amber-500" />
              <h4 className="font-bold mb-2">Produtividade Máxima</h4>
              <p className="text-sm text-muted-foreground text-pretty">
                720h/mês de disponibilidade capturam todas as oportunidades, 24/7.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 mx-auto mb-3 text-amber-500" />
              <h4 className="font-bold mb-2">Foco no Valor</h4>
              <p className="text-sm text-muted-foreground text-pretty">
                Time comercial livre para fechar negócios de grande porte.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 bg-gradient-to-br from-amber-900/30 via-yellow-900/20 to-amber-900/30 border-amber-500/40 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para multiplicar seus resultados?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Conheça como o Geon SDR pode transformar a operação comercial da Live Consorcios, qualificando leads 24/7 e liberando seu time para focar em fechamentos estratégicos.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-slate-900 font-semibold px-8 shadow-lg shadow-amber-400/30" asChild>
            <a href="tel:+5511933436027">
              <Phone className="w-5 h-5 mr-2" />
              Ligue e Teste Agora
            </a>
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="text-sm text-muted-foreground text-center">
              © 2025 Geon AI. Infraestrutura e Automação de IA para maximizar resultados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

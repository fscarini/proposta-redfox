import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Clock, Target, Zap } from 'lucide-react'

export default function Resultados() {
  const casos = [
    {
      empresa: "Charter Communications",
      setor: "Telecom - 2º maior provedor de cabo dos EUA",
      periodo: "6 meses",
      resultados: [
        { metrica: "Chats Mensais", antes: "200.000", depois: "166.000 automatizados", aumento: "83% por IA" },
        { metrica: "ROI", antes: "0%", depois: "300%", aumento: "+300%" },
        { metrica: "Resolução IA", antes: "0%", depois: "83%", aumento: "83% automático" },
        { metrica: "Eficiência", antes: "Manual", depois: "Automatizado", aumento: "Total" }
      ]
    },
    {
      empresa: "Bradesco (BIA)",
      setor: "Banco - Maior banco privado do Brasil",
      periodo: "12 meses",
      resultados: [
        { metrica: "Interações", antes: "1B/ano", depois: "2.3B/ano", aumento: "+130%" },
        { metrica: "Resolutividade", antes: "60%", depois: "90%", aumento: "+50%" },
        { metrica: "Disponibilidade", antes: "8h/dia", depois: "24h/dia", aumento: "200%" },
        { metrica: "Custos Op.", antes: "100%", depois: "34%", aumento: "-66%" }
      ]
    },
    {
      empresa: "Amtrak",
      setor: "Transporte Ferroviário - EUA",
      periodo: "12 meses",
      resultados: [
        { metrica: "Reservas", antes: "100%", depois: "125%", aumento: "+25%" },
        { metrica: "Receita/Reserva", antes: "100%", depois: "130%", aumento: "+30%" },
        { metrica: "ROI", antes: "0%", depois: "800%", aumento: "+800%" },
        { metrica: "Perguntas/Ano", antes: "2M", depois: "5M", aumento: "+150%" }
      ]
    }
  ]

  const metricas = [
    {
      icon: TrendingUp,
      valor: "800%",
      label: "ROI Máximo Comprovado",
      descricao: "Amtrak em 12 meses"
    },
    {
      icon: Users,
      valor: "2.3B",
      label: "Interações Anuais",
      descricao: "Bradesco BIA em 2023"
    },
    {
      icon: DollarSign,
      valor: "83%",
      label: "Automação Alcançada",
      descricao: "Charter Communications"
    },
    {
      icon: Clock,
      valor: "24/7",
      label: "Disponibilidade Total",
      descricao: "Sem pausas ou folgas"
    },
    {
      icon: Target,
      valor: "90%",
      label: "Taxa de Resolução",
      descricao: "Bradesco com GenAI"
    },
    {
      icon: Zap,
      valor: "1.3x",
      label: "Mais Crescimento",
      descricao: "Salesforce Report 2024"
    }
  ]

  return (
    <section id="resultados" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-400 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Cases Reais Comprovados
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Empresas reais que{' '}
            <span className="redfox-text-gradient">transformaram</span>{' '}
            seus resultados
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Dados oficiais de empresas líderes mundiais que implementaram agentes de IA 
            e obtiveram resultados extraordinários em vendas e atendimento.
          </motion.p>
        </div>

        {/* Métricas Gerais */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {metricas.map((metrica, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-green-600/10 border border-green-600/20 flex items-center justify-center mx-auto mb-4">
                <metrica.icon className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">
                {metrica.valor}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {metrica.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metrica.descricao}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cases Detalhados */}
        <div className="space-y-12">
          {casos.map((caso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{caso.empresa}</h3>
                <p className="text-muted-foreground">{caso.setor}</p>
                <p className="text-sm text-green-400 font-medium">Resultados em {caso.periodo}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caso.resultados.map((resultado, idx) => (
                  <div key={idx} className="text-center bg-card/50 border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-4">{resultado.metrica}</h4>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-muted-foreground">
                        Antes: <span className="text-red-400">{resultado.antes}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Depois: <span className="text-green-400 font-semibold">{resultado.depois}</span>
                      </div>
                    </div>

                    <div className="bg-green-600/10 border border-green-600/20 rounded-lg p-3">
                      <span className="text-lg font-bold text-green-400">{resultado.aumento}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dados Salesforce */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-600/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Salesforce State of Sales 2024:</span> Dados Globais
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">83%</div>
                <div className="text-sm text-muted-foreground">Equipes com IA viram crescimento de receita</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">66%</div>
                <div className="text-sm text-muted-foreground">Equipes sem IA viram crescimento</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1.3x</div>
                <div className="text-sm text-muted-foreground">Mais probabilidade de crescimento com IA</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Pesquisa com <strong>5.500 profissionais de vendas</strong> em <strong>27 países</strong>
            </p>
          </div>
        </motion.div>

        {/* Depoimentos Reais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 space-y-8"
        >
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/20 rounded-xl p-8 text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
              "Julie tem sido projetada para funcionar como nosso melhor representante de atendimento ao cliente. 
              Ela responde 5 milhões de perguntas por ano e gerou um ROI de 800%."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <div className="font-semibold text-foreground">Amtrak</div>
                <div className="text-sm text-muted-foreground">Maior empresa ferroviária dos EUA</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-green-600/10 border border-red-600/20 rounded-xl p-8 text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
              "A BIA acumulou 2.3 bilhões de interações em 2023, com 90% de resolutividade usando GenAI. 
              É nosso programa estratégico que lidera o mindset AI-first."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <div className="font-semibold text-foreground">Bradesco</div>
                <div className="text-sm text-muted-foreground">Maior banco privado do Brasil</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-redfox-gradient rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Red Fox pode ser o próximo case de sucesso brasileiro
            </h3>
            <p className="text-white/90 mb-6">
              Charter Communications (telecom como vocês) teve 300% de ROI em 6 meses. 
              <strong> Bradesco lidera o Brasil com 2.3 bilhões de interações.</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">Próximos 6 meses</div>
                <div className="text-white/80">Para ver resultados como Charter</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">300-800%</div>
                <div className="text-white/80">ROI comprovado no setor</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">83%</div>
                <div className="text-white/80">Chance de crescimento com IA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


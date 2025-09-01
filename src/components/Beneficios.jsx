import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Clock, Users, DollarSign, Target, Zap } from 'lucide-react'

export default function Beneficios() {
  const metricas = [
    {
      valor: "300%",
      label: "Aumento em Performance",
      descricao: "Multiplicação comprovada do faturamento em 90 dias",
      icon: BarChart3,
      cor: "text-green-400"
    },
    {
      valor: "24/7",
      label: "Disponibilidade",
      descricao: "Vendas acontecendo todos os dias, todas as horas",
      icon: Clock,
      cor: "text-blue-400"
    },
    {
      valor: "85%",
      label: "Taxa de Conversão",
      descricao: "De cada 100 leads, 85 se tornam clientes",
      icon: Target,
      cor: "text-purple-400"
    },
    {
      valor: "500+",
      label: "Ligações/Dia",
      descricao: "Prospecção ativa constante e qualificada",
      icon: Users,
      cor: "text-orange-400"
    },
    {
      valor: "R$ 0",
      label: "Custo de Folga",
      descricao: "Sem férias, feriados ou licenças médicas",
      icon: DollarSign,
      cor: "text-red-400"
    },
    {
      valor: "30 dias",
      label: "ROI Estimado",
      descricao: "Investimento se paga em menos de um mês",
      icon: Zap,
      cor: "text-yellow-400"
    }
  ]

  const vantagens = [
    {
      categoria: "Operacional",
      itens: [
        "Redução de 70% nos custos operacionais",
        "Eliminação de turnover da equipe comercial",
        "Padronização total do processo de vendas",
        "Relatórios em tempo real de performance"
      ]
    },
    {
      categoria: "Comercial",
      itens: [
        "Aumento de 300% na geração de leads",
        "Qualificação automática de 100% dos prospects",
        "Follow-up inteligente e personalizado",
        "Cross-sell e upsell automatizados"
      ]
    },
    {
      categoria: "Estratégico",
      itens: [
        "Escalabilidade infinita sem custos extras",
        "Dados precisos para tomada de decisão",
        "Vantagem competitiva sustentável",
        "Foco da equipe humana em vendas complexas"
      ]
    }
  ]

  return (
    <section id="beneficios" className="py-20">
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
              <BarChart3 className="w-4 h-4 mr-2" />
              Resultados Comprovados
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Números que{' '}
            <span className="redfox-text-gradient">falam por si só</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Resultados reais de empresas que implementaram agentes comerciais de IA. 
            A RedFox Telecom pode ser o próximo case de sucesso.
          </motion.p>
        </div>

        {/* Métricas Principais */}
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
              <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center mx-auto mb-4">
                <metrica.icon className={`w-6 h-6 ${metrica.cor}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold mb-2 ${metrica.cor}`}>
                {metrica.valor}
              </div>
              <div className="text-sm font-medium text-foreground mb-2">
                {metrica.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metrica.descricao}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vantagens Detalhadas */}
        <div className="grid md:grid-cols-3 gap-8">
          {vantagens.map((vantagem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                Benefícios <span className="redfox-text-gradient">{vantagem.categoria}s</span>
              </h3>
              <ul className="space-y-3">
                {vantagem.itens.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600/10 to-green-600/10 border border-green-600/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para <span className="text-green-400">multiplicar suas vendas</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Cada dia sem agentes de IA é dinheiro deixado na mesa. 
              <strong className="text-foreground"> Seus concorrentes já estão se movimentando.</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">R$ 50.000</div>
                <div className="text-sm text-muted-foreground">Vendas perdidas por mês</div>
              </div>
              <div className="text-2xl text-muted-foreground">→</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">R$ 200.000</div>
                <div className="text-sm text-muted-foreground">Potencial com agentes IA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


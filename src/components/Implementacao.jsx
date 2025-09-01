import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Zap } from 'lucide-react'

export default function Implementacao() {
  const etapas = [
    {
      numero: "01",
      titulo: "Análise & Planejamento",
      duracao: "1 mês",
      descricao: "Mapeamos seus processos comerciais atuais e definimos a estratégia de implementação",
      atividades: [
        "Auditoria do processo de vendas atual",
        "Definição de personas e scripts",
        "Configuração dos agentes especializados",
        "Integração com sistemas existentes"
      ]
    },
    {
      numero: "02",
      titulo: "Configuração & Treinamento",
      duracao: "2 mês",
      descricao: "Configuramos os agentes com o DNA da Red Fox e treinamos com dados reais",
      atividades: [
        "Treinamento com base de conhecimento Red Fox",
        "Configuração de integrações (CRM, WhatsApp, etc)",
        "Testes de qualidade e ajustes finos",
        "Treinamento da equipe interna"
      ]
    },
    {
      numero: "03",
      titulo: "Lançamento Gradual",
      duracao: "3 mês",
      descricao: "Implementação gradual com monitoramento intensivo para garantir performance",
      atividades: [
        "Lançamento piloto com 20% do tráfego",
        "Monitoramento em tempo real",
        "Ajustes baseados em feedback",
        "Expansão para 100% do tráfego"
      ]
    },
    {
      numero: "04",
      titulo: "Otimização Contínua",
      duracao: "Ongoing",
      descricao: "Monitoramento e otimização constante para maximizar resultados",
      atividades: [
        "Análise de performance semanal",
        "Otimização de scripts e fluxos",
        "Relatórios executivos mensais",
        "Suporte técnico 24/7"
      ]
    }
  ]

  return (
    <section id="implementacao" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Implementação
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Do zero ao{' '}
            <span className="text-blue-400">faturamento em até 3 mêses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Processo  otimizado para colocar seus agentes comerciais 
            vendendo no menor tempo possível, com o mínimo de interrupção.
          </motion.p>
        </div>

        <div className="space-y-8">
          {etapas.map((etapa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">{etapa.numero}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0">{etapa.titulo}</h3>
                    <div className="flex items-center text-sm text-blue-400 font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      {etapa.duracao}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{etapa.descricao}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {etapa.atividades.map((atividade, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{atividade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-600/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Garantia de Sucesso:</span> Resultados em 30 dias
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              aumento significativo nas vendas em 30 dias, 
              <strong className="text-foreground"> após implementação</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">3 Mêses</div>
                <div className="text-sm text-muted-foreground">Para implementação completa</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">30 dias</div>
                <div className="text-sm text-muted-foreground">Para ver resultados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">de satisfação</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


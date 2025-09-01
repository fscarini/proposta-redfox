import React from 'react'
import { motion } from 'framer-motion'
import { Users, Phone, Target, TrendingUp, MessageCircle, UserCheck, DollarSign, Headphones } from 'lucide-react'

export default function Agentes() {
  const agentes = [
    {
      nome: "BIA",
      cargo: "Recepcionista & Qualificadora",
      especialidade: "Primeira Impressão & Lead Scoring",
      icon: UserCheck,
      cor: "bg-blue-600/10 border-blue-600/20 text-blue-400",
      funcoes: [
        "Recebe todos os contatos 24/7 com tom Red Fox",
        "Qualifica leads automaticamente por perfil",
        "Direciona para o agente comercial certo",
        "Registra histórico completo do cliente"
      ],
      resultados: "95% de satisfação no primeiro contato"
    },
    {
      nome: "NEAH",
      cargo: "Vendedora Consultiva",
      especialidade: "Vendas & Negociação",
      icon: TrendingUp,
      cor: "bg-green-600/10 border-green-600/20 text-green-400",
      funcoes: [
        "Apresenta planos ideais baseado no perfil",
        "Negocia condições e fecha vendas",
        "Oferece upgrades e serviços adicionais",
        "Follow-up inteligente para conversão"
      ],
      resultados: "85% de taxa de conversão"
    },
    {
      nome: "GABRIEL",
      cargo: "Especialista em Retenção",
      especialidade: "Pós-venda & Upsell",
      icon: Target,
      cor: "bg-purple-600/10 border-purple-600/20 text-purple-400",
      funcoes: [
        "Monitora satisfação dos clientes",
        "Identifica oportunidades de upsell",
        "Previne cancelamentos proativamente",
        "Oferece soluções personalizadas"
      ],
      resultados: "40% de aumento em upsell"
    },
    {
      nome: "LIA",
      cargo: "Prospecção Ativa",
      especialidade: "Outbound & Lead Generation",
      icon: Phone,
      cor: "bg-red-600/10 border-red-600/20 text-red-400",
      funcoes: [
        "Faz ligações de prospecção ativa",
        "Qualifica prospects por região",
        "Agenda demonstrações e visitas",
        "Reativa leads dormentes"
      ],
      resultados: "500+ ligações qualificadas/dia"
    }
  ]

  return (
    <section id="agentes" className="py-20">
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
              <Users className="w-4 h-4 mr-2" />
              Equipe Comercial de IA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Conheça seus novos{' '}
            <span className="redfox-text-gradient">vendedores estrela</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Cada agente é especializado em uma etapa do funil comercial, trabalhando em perfeita sintonia 
            para maximizar suas vendas e satisfação dos clientes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {agentes.map((agente, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="agent-card rounded-xl p-6 card-hover"
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 rounded-xl ${agente.cor} flex items-center justify-center mr-4 flex-shrink-0`}>
                  <agente.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{agente.nome}</h3>
                  <p className="text-lg font-medium text-muted-foreground mb-1">{agente.cargo}</p>
                  <p className="text-sm text-green-400 font-medium">{agente.especialidade}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Principais Funções:</h4>
                  <ul className="space-y-2">
                    {agente.funcoes.map((funcao, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{funcao}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-600/5 border border-green-600/10 rounded-lg p-4">
                  <h5 className="font-semibold text-green-400 mb-2">Resultado Comprovado:</h5>
                  <p className="text-sm text-green-300">{agente.resultados}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600/10 to-green-600/10 border border-red-600/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="redfox-text-gradient">Resultado:</span> Uma máquina de vendas 24/7
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Enquanto sua concorrência dorme, seus agentes estão trabalhando. 
              <strong className="text-foreground"> Vendendo, qualificando e fidelizando clientes.</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilidade</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">0</div>
                <div className="text-sm text-muted-foreground">Dias de folga</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">∞</div>
                <div className="text-sm text-muted-foreground">Capacidade</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-muted-foreground">Consistência</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


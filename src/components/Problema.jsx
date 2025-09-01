import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, TrendingDown, Users, Phone, DollarSign } from 'lucide-react'

export default function Problema() {
  const problemas = [
    {
      icon: Clock,
      titulo: "Horário Limitado de Vendas",
      descricao: "Equipe comercial trabalha apenas em horário comercial, perdendo oportunidades 24/7",
      impacto: "60% dos leads chegam fora do horário"
    },
    {
      icon: TrendingDown,
      titulo: "Baixa Taxa de Conversão",
      descricao: "Leads não são qualificados adequadamente e follow-up é inconsistente",
      impacto: "Apenas 15% dos leads se convertem"
    },
    {
      icon: Users,
      titulo: "Sobrecarga da Equipe",
      descricao: "Vendedores gastam tempo com tarefas repetitivas em vez de focar em vendas complexas",
      impacto: "70% do tempo em tarefas operacionais"
    },
    {
      icon: Phone,
      titulo: "Atendimento Inconsistente",
      descricao: "Qualidade do atendimento varia entre seus atendentes, afetando a experiência do cliente",
      impacto: "Perda de 40% dos prospects"
    },
    {
      icon: DollarSign,
      titulo: "Alto Custo por Venda",
      descricao: "Manter uma equipe comercial grande é caro e nem sempre escalável",
      impacto: "CAC 300% acima do ideal"
    }
  ]

  return (
    <section id="problema" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-400 text-sm font-medium">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Desafios Comerciais Atuais
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Sua equipe está atendendo todas as demandas de forma{' '}
            <span className="text-orange-400">eficiente</span>{''}
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A RedFox Telecom, como muitas empresas de telecomunicações, enfrenta desafios únicos 
            que limitam o potencial de crescimento e satisfação dos clientes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemas.map((problema, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-orange-600/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center mr-4">
                  <problema.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold">{problema.titulo}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{problema.descricao}</p>
              
              <div className="bg-orange-600/5 border border-orange-600/10 rounded-lg p-3">
                <span className="text-sm font-medium text-orange-400">Impacto:</span>
                <p className="text-sm text-orange-300 mt-1">{problema.impacto}</p>
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
          <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-400">Resultado:</span> Oportunidades perdidas todos os dias
            </h3>
            <p className="text-lg text-muted-foreground">
              Enquanto dormimos, clientes estão procurando soluções. 
              <strong className="text-foreground"> Nós estamos perdendo vendas 10 horas por dia.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


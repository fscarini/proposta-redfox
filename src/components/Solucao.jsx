import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Clock, TrendingUp, Users, Target, DollarSign } from 'lucide-react'

export default function Solucao() {
  const beneficios = [
    {
      icon: Clock,
      titulo: "Vendas 24/7",
      descricao: "Seus agentes nunca dormem, nunca tiram folga e estão sempre prontos para vender",
      destaque: "16 horas extras de vendas por dia"
    },
    {
      icon: TrendingUp,
      titulo: "Conversão Inteligente",
      descricao: "IA treinada especificamente nos produtos Red Fox para maximizar cada oportunidade",
      destaque: "85% de taxa de conversão"
    },
    {
      icon: Users,
      titulo: "Qualificação Automática",
      descricao: "Cada lead é analisado e direcionado para o agente certo no momento certo",
      destaque: "100% dos leads qualificados"
    },
    {
      icon: Target,
      titulo: "Follow-up Perfeito",
      descricao: "Nunca mais perca um cliente por falta de acompanhamento adequado",
      destaque: "0% de leads esquecidos"
    },
    {
      icon: DollarSign,
      titulo: "ROI Comprovado",
      descricao: "Investimento que se paga em menos de 30 dias com o aumento das vendas",
      destaque: "300% de retorno em 90 dias"
    }
  ]

  return (
    <section id="solucao" className="py-20 bg-card/30">
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
              <Zap className="w-4 h-4 mr-2" />
              A Solução Definitiva
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Agentes de IA que{' '}
            <span className="text-green-400">vendem enquanto você dorme</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Imagine ter uma equipe comercial que nunca se cansa, nunca erra o script de vendas 
            e está sempre motivada para bater metas. Agora pare de imaginar.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-green-600/30 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-green-600/10 border border-green-600/20 flex items-center justify-center mb-4">
                <beneficio.icon className="w-6 h-6 text-green-400" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{beneficio.titulo}</h3>
              <p className="text-muted-foreground mb-4">{beneficio.descricao}</p>
              
              <div className="bg-green-600/5 border border-green-600/10 rounded-lg p-3">
                <span className="text-sm font-bold text-green-400">{beneficio.destaque}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparação Antes vs Depois */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-red-600/5 to-green-600/5 border border-green-600/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Transformação Comprovada</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Antes */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-400 transform rotate-180" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-red-400">ANTES</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Vendas apenas 8h/dia</li>
                <li>• 15% de conversão</li>
                <li>• Leads perdidos</li>
                <li>• Follow-up inconsistente</li>
                <li>• Alto custo por venda</li>
              </ul>
            </div>

            {/* Depois */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-600/10 border border-green-600/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-green-400">DEPOIS</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• <strong>Vendas 24/7</strong></li>
                <li>• <strong>85% de conversão</strong></li>
                <li>• <strong>0 leads perdidos</strong></li>
                <li>• <strong>Follow-up automático</strong></li>
                <li>• <strong>ROI de 300%</strong></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


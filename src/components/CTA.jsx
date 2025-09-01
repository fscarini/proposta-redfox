import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, Calendar, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  const urgencia = [
    "Cada dia sem agentes = R$ 5.000 em vendas perdidas",
    "Seus concorrentes já estão implementando IA",
    "Leads chegando 24h/dia e você perdendo 16h",
    "ROI de 300% comprovado em 90 dias"
  ]

  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 redfox-gradient"></div>
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* Elementos flutuantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Última Chance de Sair na Frente
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-black leading-tight mb-6"
          >
            Não deixe seus{' '}
            <span className="text-yellow-300">concorrentes</span>{' '}
            saírem na frente
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12"
          >
            Enquanto você pensa, seus concorrentes estão implementando agentes de IA 
            e <strong>roubando seus clientes 24 horas por dia.</strong>
          </motion.p>

          {/* Urgência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12"
          >
            {urgencia.map((item, index) => (
              <div key={index} className="flex items-center bg-white/10 rounded-lg p-4">
                <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-white/90 text-left">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Botões de Ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-white/90 font-bold text-lg px-8 py-4 glow-red"
            >
              <Phone className="w-6 h-6 mr-3" />
              Ligar Agora: (11) 2484-2656
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg px-8 py-4"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp Direto
            </Button>
          </motion.div>

          {/* Garantias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Implementação em 7 dias</h3>
              <p className="text-white/80">Seus agentes vendendo na próxima semana</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">ROI em 30 dias</h3>
              <p className="text-white/80">Investimento se paga no primeiro mês</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantia Total</h3>
              <p className="text-white/80">100% do dinheiro de volta em 30 dias</p>
            </div>
          </motion.div>

          {/* Contador de Urgência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-white/10 border border-white/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                ⏰ Cada minuto que passa são vendas perdidas
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Enquanto você lê isso, seus concorrentes estão fechando negócios com agentes de IA.
                <br />
                <strong className="text-yellow-300">Não seja o último a se mover.</strong>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">16h</div>
                  <div className="text-sm text-white/80">Perdidas por dia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">R$ 5k</div>
                  <div className="text-sm text-white/80">Perdidos por dia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">150k</div>
                  <div className="text-sm text-white/80">Perdidos por mês</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">1.8M</div>
                  <div className="text-sm text-white/80">Perdidos por ano</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Phone, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const stats = [
    { icon: TrendingUp, label: 'Aumento em Vendas', value: '+300%' },
    { icon: Phone, label: 'Ligações/dia', value: '500+' },
    { icon: Users, label: 'Leads Qualificados', value: '1000+' },
    { icon: Target, label: 'Taxa de Conversão', value: '85%' }
  ]

  return (
    <section className="pt-20 hero-bg relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 redfox-gradient rounded-full opacity-20 float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 redfox-gradient rounded-full opacity-15 float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 redfox-gradient rounded-full opacity-10 float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Agentes Comerciais de IA para Red Fox Telecom
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
          >
            Vendedores, atendentes e suporte de IA que{' '}
            <span className="redfox-text-gradient">multiplicam</span>{' '}
            suas vendas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Equipe completa de agentes comerciais especializados em <strong>prospecção ativa</strong>, <strong>qualificação de leads</strong>, 
            <strong>vendas consultivas</strong> e <strong>follow-up inteligente</strong>. Trabalham 24/7 para maximizar suas conversões.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="redfox-gradient hover:opacity-90 glow-red">
              <TrendingUp className="w-5 h-5 mr-2" />
              Ver Agentes Comerciais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              Demonstração ao Vivo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/20 mb-3">
                  <stat.icon className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


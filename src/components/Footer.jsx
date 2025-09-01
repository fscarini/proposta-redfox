import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, Shield } from 'lucide-react'

export default function Footer() {
  const contatos = [
    {
      icon: Phone,
      label: "Telefone",
      valor: "(11) 2484-2656",
      descricao: "Atendimento comercial"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      valor: "(11) 2484-2656",
      descricao: "Resposta imediata"
    },
    {
      icon: Mail,
      label: "Email",
      valor: "vendas@redfoxtelecom.com.br",
      descricao: "Propostas comerciais"
    },
    {
      icon: MapPin,
      label: "Localização",
      valor: "Guarulhos/SP",
      descricao: "Atendemos toda região"
    }
  ]

  const servicos = [
    "Internet Fibra Ótica",
    "Red Fox TV",
    "Red Fox Móvel 5G",
    "Suporte 24/7",
    "Portal do Cliente",
    "Programa Indique e Ganhe"
  ]

  const agentes = [
    "BIA - Recepcionista IA",
    "NEAH - Vendedora IA", 
    "GABRIEL - Suporte IA",
    "LIA - Financeiro IA"
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 redfox-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RF</span>
              </div>
              <span className="text-xl font-bold redfox-text-gradient">Red Fox Telecom</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Conectando Guarulhos e região com qualidade, inovação e agentes de IA 
              que revolucionam o atendimento e vendas.
            </p>
            <div className="flex items-center space-x-2 text-sm text-green-400">
              <Shield className="w-4 h-4" />
              <span>Agentes IA Certificados</span>
            </div>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato Direto</h3>
            <div className="space-y-4">
              {contatos.map((contato, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <contato.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{contato.valor}</div>
                    <div className="text-sm text-muted-foreground">{contato.descricao}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Serviços Red Fox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Serviços Red Fox</h3>
            <ul className="space-y-3">
              {servicos.map((servico, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {servico}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Agentes IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Agentes Comerciais</h3>
            <ul className="space-y-3">
              {agentes.map((agente, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {agente}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 bg-green-600/10 border border-green-600/20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm font-medium text-green-400">Disponibilidade</span>
              </div>
              <div className="text-sm text-muted-foreground">
                24 horas por dia, 7 dias por semana
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-left mb-4 md:mb-0"
            >
              <p className="text-muted-foreground">
                © 2025 Red Fox Telecom. Todos os direitos reservados.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Agentes de IA desenvolvidos com tecnologia de ponta para maximizar suas vendas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-6"
            >
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="https://portal.redfoxtelecom.com.br" className="text-red-400 hover:text-red-300 transition-colors font-medium">
                Portal do Cliente
              </a>
            </motion.div>
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-red-600/10 to-green-600/10 border border-red-600/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">
              Pronto para <span className="redfox-text-gradient">revolucionar suas vendas</span>?
            </h3>
            <p className="text-muted-foreground mb-4">
              Entre em contato agora e descubra como nossos agentes de IA podem multiplicar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-red-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">(11) 2484-2656</span>
              </div>
              <div className="text-muted-foreground">•</div>
              <div className="flex items-center text-green-400">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="font-medium">WhatsApp Direto</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}


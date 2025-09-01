import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      pergunta: "Como os agentes de IA conseguem vender melhor que humanos?",
      resposta: "Os agentes são treinados especificamente com os produtos Red Fox, nunca se cansam, nunca esquecem informações, seguem sempre o script perfeito de vendas e estão disponíveis 24/7. Eles também analisam o perfil do cliente em tempo real para oferecer a proposta mais adequada."
    },
    {
      pergunta: "Quanto tempo leva para implementar?",
      resposta: "A implementação completa leva de 5 a 7 dias úteis. Isso inclui configuração, treinamento dos agentes com dados da Red Fox, integração com sistemas existentes e testes. No 8º dia, seus agentes já estão vendendo."
    },
    {
      pergunta: "Os agentes substituem completamente minha equipe humana?",
      resposta: "Não! Os agentes cuidam das tarefas repetitivas (qualificação, follow-up, vendas simples) para que sua equipe humana possa focar em vendas complexas, relacionamento estratégico e casos que exigem toque humano. É uma parceria que multiplica resultados."
    },
    {
      pergunta: "Como funciona a integração com WhatsApp e telefone?",
      resposta: "Os agentes se integram nativamente com WhatsApp Business, sistemas de telefonia e CRM. Eles recebem mensagens, fazem ligações, agendam callbacks e registram tudo automaticamente no seu sistema de gestão."
    },
    {
      pergunta: "E se o cliente quiser falar com um humano?",
      resposta: "Os agentes são programados para identificar quando um caso precisa de intervenção humana e fazem a transferência automaticamente. Eles também preparam um resumo completo da conversa para que o atendente humano tenha todo o contexto."
    },
    {
      pergunta: "Qual é a taxa de conversão real dos agentes?",
      resposta: "Em média, nossos clientes veem taxas de conversão entre 75-85%, comparado com 10-20% de equipes humanas tradicionais. Isso acontece porque os agentes fazem follow-up perfeito, nunca perdem leads e sempre oferecem a proposta ideal."
    },
    {
      pergunta: "Como vocês garantem que os agentes conhecem os produtos Red Fox?",
      resposta: "Fazemos um treinamento intensivo com toda a base de conhecimento da Red Fox: planos, preços, cobertura, políticas, scripts de vendas e objeções comuns. Os agentes são atualizados automaticamente sempre que há mudanças nos produtos."
    },
    {
      pergunta: "Posso cancelar a qualquer momento?",
      resposta: "Sim, não há fidelidade. Você pode cancelar com 30 dias de antecedência. Mas oferecemos garantia de 30 dias: se não ver resultados, devolvemos 100% do investimento."
    },
    {
      pergunta: "Como funciona o suporte técnico?",
      resposta: "Oferecemos suporte 24/7 via WhatsApp e email. Temos uma equipe dedicada para monitorar performance, fazer ajustes e otimizações. Você também recebe relatórios semanais de performance e sugestões de melhorias."
    },
    {
      pergunta: "Os agentes conseguem lidar com objeções complexas?",
      resposta: "Sim! Eles são treinados com as principais objeções do mercado de telecom e têm respostas personalizadas para cada situação. Para casos muito específicos, eles transferem para a equipe humana com todo o contexto da conversa."
    }
  ]

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium">
              <HelpCircle className="w-4 h-4 mr-2" />
              Perguntas Frequentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Tire todas as suas{' '}
            <span className="text-blue-400">dúvidas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Respostas para as principais dúvidas sobre implementação e funcionamento 
            dos agentes comerciais de IA.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.pergunta}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.resposta}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-600/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão e mostrar 
              como os agentes podem transformar suas vendas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">(11) 2484-2656</div>
                <div className="text-sm text-muted-foreground">Ligação direta</div>
              </div>
              <div className="text-muted-foreground">ou</div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Resposta imediata</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Precificacao() {
  const planos = [
    /*{
      nome: "Máxima performance para grandes operações",
      preco: "R$ 29.997",
      periodo: "/mês",
      descricao: "",
      icon: Crown,
      cor: "border-purple-600/20 bg-purple-600/5",
      corTexto: "text-purple-400",
      recursos: [
        "4 Agentes Completos (BIA + NEAH + GABRIEL + LIA)",
        "Conversas ilimitadas",
        "Todos os canais integrados",
        "BI e Analytics avançado",
        "Suporte dedicado 24/7",
        "Otimização semanal",
        "Customizações ilimitadas",
        "Integração completa com sistemas",
        "Treinamento da equipe",
        "Consultoria estratégica"
      ],
      limitacoes: []
    }*/
  ]

  const beneficiosInclusos = [
    "Implementação completa em 3 mêses",
    "Treinamento especializado da equipe",
    "Suporte técnico contínuo",
    "Atualizações automáticas",
    "Relatórios de performance",
  ]

  return (
    <section id="precificacao" className="py-20 bg-card/30">
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
              <Star className="w-4 h-4 mr-2" />
              Investimento & ROI
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Planos que{' '}
            <span className="redfox-text-gradient">se pagam sozinhos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Investimento que se transforma em lucro. Cada plano é projetado para gerar 
            mais receita do que custa, garantindo ROI positivo desde o primeiro mês.
          </motion.p>
        </div>

        {/* Comparação de ROI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-red-600/10 to-green-600/10 border border-green-600/20 rounded-xl p-8 mb-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">ROI Comprovado em 30 dias</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">R$ 15.000</div>
              <div className="text-sm text-muted-foreground">Custo de 1 vendedor/mês</div>
            </div>
            <div className="text-2xl text-muted-foreground">VS</div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">R$ 5.997</div>
              <div className="text-sm text-muted-foreground">Agentes IA (plano Professional)</div>
            </div>
          </div>
          <p className="text-lg text-green-400 font-semibold mt-6">
            Economia de R$ 9.000/mês + 300% mais vendas
          </p>
        </motion.div>

        {/* Planos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-card border rounded-xl p-8 ${plano.cor} ${
                plano.popular ? 'ring-2 ring-green-600/50 scale-105' : ''
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-xl ${plano.cor} flex items-center justify-center mx-auto mb-4`}>
                  <plano.icon className={`w-8 h-8 ${plano.corTexto}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plano.descricao}</p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${plano.corTexto}`}>{plano.preco}</span>
                  <span className="text-muted-foreground ml-1">{plano.periodo}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-foreground">Incluído:</h4>
                <ul className="space-y-3">
                  {plano.recursos.map((recurso, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{recurso}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full ${plano.popular ? 'redfox-gradient' : 'border-2'} ${plano.corTexto.replace('text-', 'border-')}`}
                variant={plano.popular ? 'default' : 'outline'}
              >
                Começar Agora
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Benefícios Inclusos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Incluído em <span className="text-green-400">todos os planos</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiosInclusos.map((beneficio, index) => (
              <div key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{beneficio}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-600/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Garantia Total:</span> Risco Zero
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Se em 30 dias você não ver um aumento significativo nas vendas, 
              <strong className="text-foreground"> devolvemos 100% do seu investimento.</strong>
            </p>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">30 dias</div>
              <div className="text-muted-foreground">Garantia incondicional</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


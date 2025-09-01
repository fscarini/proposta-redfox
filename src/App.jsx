import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import Agentes from './components/Agentes'
import Beneficios from './components/Beneficios'
import Implementacao from './components/Implementacao'
import Resultados from './components/Resultados'
import Precificacao from './components/Precificacao'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Agentes />
        <Beneficios />
        <Implementacao />
        <Resultados />
        <Precificacao />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App


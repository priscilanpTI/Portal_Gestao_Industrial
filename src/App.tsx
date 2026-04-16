import { Play, BookOpen, GraduationCap, Users, Search, Menu, FileText, ArrowRight, Instagram, Linkedin, Mail, X } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const podcasts = [
    {
      title: "Inteligência Emocional no Ambiente de Trabalho",
      videoUrl: "https://www.youtube.com/embed/ZdMQHt7iUlo"
    },
    {
      title: "Definição de Responsabilidade e Desvio de Função",
      videoUrl: "https://www.youtube.com/embed/fLfNu8rqU14"
    },
    {
      title: "Diversidade e Inclusão nas Empresas",
      videoUrl: "https://www.youtube.com/embed/hNpMAgq0iMQ"
    },
    {
      title: "Modelo do Caráter Profissional",
      videoUrl: "https://www.youtube.com/embed/ORU4q2fOjDk"
    },
    {
      title: "Rotatividade e Retenção de Talentos",
      videoUrl: "https://www.youtube.com/embed/67ZxvG72yl0"
    }
  ]

  const articles = [
    {
      title: "Diversidade e inclusão: conceito, diferença e como promover?",
      date: "05 Jul 2025",
      readTime: "6 min",
      excerpt: "Entenda os pilares da diversidade e inclusão e como eles impactam positivamente as organizações modernas.",
      url: "https://www.cnnbrasil.com.br/nacional/diversidade-e-inclusao/#goog_rewarded"
    },
    {
      title: "Acúmulo e desvio de função: equilíbrio contratual e a vedação ao enriquecimento sem causa",
      date: "06 Fev 2026",
      readTime: "8 min",
      excerpt: "Uma análise jurídica sobre as implicações do desvio de função no contrato de trabalho industrial.",
      url: "https://www.conjur.com.br/2026-fev-06/acumulo-e-desvio-de-funcao-equilibrio-contratual-e-a-vedacao-ao-enriquecimento-sem-causa/"
    },
    {
      title: "Especialista explica como a inteligência emocional impacta no trabalho",
      date: "08 Nov 2023",
      readTime: "5 min",
      excerpt: "A importância de buscar entender nossas emoções para uma melhor performance profissional e gestão de equipes.",
      url: "https://g1.globo.com/pr/parana/economia/noticia/2023/11/08/especialista-explica-como-a-inteligencia-emocional-impacta-no-trabalho-a-gente-tem-que-buscar-entender-as-nossas-emocoes.ghtml"
    }
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-industrial-600" />
              <span className="font-bold text-xl tracking-tight text-industrial-900 uppercase">Gestão Industrial</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-industrial-600 transition-colors">O Curso</a>
              <a href="#" className="hover:text-industrial-600 transition-colors">Podcasts</a>
              <a href="#" className="hover:text-industrial-600 transition-colors">Artigos</a>
              <a href="#" className="hover:text-industrial-600 transition-colors">Carreira</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-slate-500" />
              </button>
              <button className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors">
                <Menu className="w-5 h-5 text-slate-500" />
              </button>
              <button className="hidden md:block bg-industrial-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-industrial-700 transition-colors">
                Área do Aluno
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-industrial-100 text-industrial-700 text-xs font-bold uppercase tracking-wider mb-4">
                  Destaque da Semana
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                  ‘Mudou a minha vida’: entenda a importância dos <span className="text-industrial-600">programas de diversidade</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-lg">
                  Confira a reportagem do G1 sobre como a diversidade está transformando o mercado de trabalho e a gestão industrial moderna.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://g1.globo.com/trabalho-e-carreira/noticia/2025/07/05/mudou-a-minha-vida-entenda-a-importancia-dos-programas-de-diversidade-no-mercado-de-trabalho.ghtml" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Ler no G1
                  </a>
                  <button className="border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
                    Ver Podcasts
                  </button>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-industrial-600 to-industrial-900 rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative group flex items-center justify-center p-12">
                  <div className="text-center">
                    <Users className="w-32 h-32 text-white opacity-20 mx-auto mb-6" />
                    <div className="text-white relative z-10">
                      <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80 text-industrial-100">Impacto Social</p>
                      <h3 className="text-3xl font-bold leading-tight">A força da diversidade na gestão</h3>
                    </div>
                  </div>
                  {/* Abstract shapes for visual interest */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-industrial-400/20 rounded-full -ml-24 -mb-24 blur-3xl"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-industrial-100 rounded-full -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Podcasts da Gestão</h2>
                <p className="text-slate-500">Aprenda ouvindo os maiores especialistas do setor.</p>
              </div>
              <button className="text-industrial-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Ver todos <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((pod, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 bg-industrial-50 rounded-lg flex items-center justify-center">
                         <Play className="w-5 h-5 text-industrial-600 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-8 group-hover:text-industrial-600 transition-colors min-h-[3.5rem] line-clamp-2">
                      {pod.title}
                    </h3>
                    <button 
                      onClick={() => setSelectedVideo(pod.videoUrl)}
                      className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                        <Play className="w-3 h-3 fill-current" />
                      </div>
                      Assistir Agora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe 
                src={selectedVideo} 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comunidade Ativa</h3>
                <p className="text-slate-500 text-sm">Conecte-se com centenas de alunos e profissionais da área industrial.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Material de Apoio</h3>
                <p className="text-slate-500 text-sm">Resumos, planilhas e guias práticos para as principais disciplinas.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Artigos Técnicos</h3>
                <p className="text-slate-500 text-sm">Conteúdo atualizado sobre normas, processos e gestão de produção.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Últimos Artigos</h2>
                <p className="text-slate-500">Mantenha-se atualizado com as novidades acadêmicas.</p>
              </div>
              <button className="text-industrial-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Ver blog <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((art, i) => (
                <a 
                  key={i} 
                  href={art.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col bg-white p-6 rounded-2xl border border-slate-200 group cursor-pointer hover:border-industrial-300 hover:shadow-lg transition-all"
                >
                  <div className="w-full aspect-video bg-slate-100 rounded-xl mb-6 overflow-hidden">
                     <div className="w-full h-full bg-gradient-to-br from-industrial-100 to-industrial-50 flex items-center justify-center">
                        <FileText className="w-12 h-12 text-industrial-300" />
                     </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase mb-3">
                      <span>{art.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>{art.readTime} de leitura</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-industrial-600 transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">{art.excerpt}</p>
                    <span className="text-sm font-bold text-industrial-600 flex items-center gap-1 mt-auto">
                      Ler artigo <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-industrial-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-industrial-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Receba novidades no seu e-mail</h2>
            <p className="text-industrial-200 mb-10 text-lg">Inscreva-se para receber avisos de novos episódios e artigos exclusivos sobre Gestão Industrial.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-industrial-500 min-w-[300px]"
              />
              <button className="bg-white text-industrial-900 px-10 py-4 rounded-full font-bold hover:bg-industrial-50 transition-colors">
                Inscrever
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-industrial-600" />
              <span className="font-bold text-xl tracking-tight text-industrial-900 uppercase">Gestão Industrial</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-industrial-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-industrial-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-industrial-600 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
            <p>&copy; 2026 Gestão Industrial. Todos os direitos reservados. Inspirado por Mundo Podcast.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

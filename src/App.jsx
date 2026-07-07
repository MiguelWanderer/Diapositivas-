import { useEffect, useMemo, useState } from 'react'
import slide01 from './assets/Wiki_ast/01-base.md?raw'
import slide02 from './assets/Wiki_ast/02-nodos.md?raw'
import slide03 from './assets/Wiki_ast/03-ast-vs-parse-tree.md?raw'
import slide04 from './assets/Wiki_ast/04-uso.md?raw'
import './App.css'

const slides = [
  {
    title: 'Base',
    subtitle: 'Qué es un AST y por qué importa',
    body: slide01,
  },
  {
    title: 'Nodos',
    subtitle: 'Las piezas que forman el árbol',
    body: slide02,
  },
  {
    title: 'Comparación',
    subtitle: 'AST vs parse tree',
    body: slide03,
  },
  {
    title: 'Aplicación',
    subtitle: 'Uso del AST en herramientas reales',
    body: slide04,
  },
]

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatInline(text) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const html = []
  let paragraph = []
  let listType = null
  let listItems = []
  let codeLanguage = ''
  let codeLines = []
  let inCodeBlock = false

  const flushParagraph = () => {
    if (!paragraph.length) return
    html.push(`<p>${formatInline(paragraph.join(' '))}</p>`)
    paragraph = []
  }

  const flushList = () => {
    if (!listType || !listItems.length) return
    const items = listItems.map((item) => `<li>${formatInline(item)}</li>`).join('')
    html.push(`<${listType}>${items}</${listType}>`)
    listType = null
    listItems = []
  }

  const flushCode = () => {
    if (!inCodeBlock) return
    const languageAttr = codeLanguage ? ` data-lang="${escapeHtml(codeLanguage)}"` : ''
    html.push(`<pre><code${languageAttr}>${escapeHtml(codeLines.join('\n'))}</code></pre>`)
    inCodeBlock = false
    codeLanguage = ''
    codeLines = []
  }

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        flushCode()
      } else {
        flushParagraph()
        flushList()
        inCodeBlock = true
        codeLanguage = trimmed.slice(3).trim()
      }
      continue
    }

    if (inCodeBlock) {
      codeLines.push(line)
      continue
    }

    if (!trimmed) {
      flushParagraph()
      flushList()
      continue
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/)
    if (headingMatch) {
      flushParagraph()
      flushList()
      const level = headingMatch[1].length + 1
      html.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`)
      continue
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.*)$/)
    if (unorderedMatch) {
      flushParagraph()
      if (listType && listType !== 'ul') flushList()
      listType = 'ul'
      listItems.push(unorderedMatch[1])
      continue
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/)
    if (orderedMatch) {
      flushParagraph()
      if (listType && listType !== 'ol') flushList()
      listType = 'ol'
      listItems.push(orderedMatch[1])
      continue
    }

    if (listType) {
      flushList()
    }

    paragraph.push(trimmed)
  }

  flushParagraph()
  flushList()
  flushCode()

  return html.join('')
}

function App() {
  const [activeSlide, setActiveSlide] = useState(() => {
    const hashValue = Number(window.location.hash.replace('#slide-', ''))
    if (Number.isInteger(hashValue) && hashValue >= 1 && hashValue <= slides.length) {
      return hashValue - 1
    }

    return 0
  })

  const totalSlides = slides.length

  const active = useMemo(() => slides[activeSlide], [activeSlide])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveSlide((current) => Math.min(current + 1, totalSlides - 1))
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveSlide((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [totalSlides])

  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${activeSlide + 1}`)
  }, [activeSlide])

  return (
    <main className="presentation-shell">
      <header className="presentation-topbar">
        <div>
          <p className="eyebrow">Wiki_ast</p>
          <h1>Diapositivas base sobre AST</h1>
        </div>
        <p className="hint">Usa las flechas izquierda y derecha para navegar.</p>
      </header>

      <section className="stage" aria-label="Presentación Wiki_ast">
        <div
          className="track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <article className="slide" id={`slide-${index + 1}`} key={slide.title}>
              <div className="slide-frame">
                <div className="slide-meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{slide.subtitle}</span>
                </div>
                <div
                  className="slide-content"
                  dangerouslySetInnerHTML={{ __html: markdownToHtml(slide.body) }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="presentation-footer">
        <div>
          <strong>
            {String(activeSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </strong>
          <span>{active.subtitle}</span>
        </div>
        <div className="controls">
          <button
            type="button"
            onClick={() => setActiveSlide((current) => Math.max(current - 1, 0))}
            disabled={activeSlide === 0}
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setActiveSlide((current) => Math.min(current + 1, totalSlides - 1))}
            disabled={activeSlide === totalSlides - 1}
          >
            Siguiente
          </button>
        </div>
      </footer>
    </main>
  )
}

export default App

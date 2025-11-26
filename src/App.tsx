import './App.css'
import { FlashCards } from './components/flash-cards';
export type Flashcard = {
  id: string;
  question: string;
  answer: string;
};

const flashcards: Flashcard[] = [
  {
    id: "1",
    question: "O que é o TypeScript?",
    answer: "TypeScript é um superset do JavaScript que adiciona tipagem estática opcional e novos recursos ao idioma.",
  },
  {
    id: "2",
    question: "Qual a diferença entre == e === no JavaScript?",
    answer: "== compara valores com coerção de tipo, enquanto === compara valores sem coerção, exigindo que tipos e valores sejam iguais.",
  },
  {
    id: "3",
    question: "O que é um componente no React?",
    answer: "Um componente é uma função ou classe que retorna elementos React e representa uma parte reutilizável da UI.",
  },
  {
    id: "4",
    question: "O que significa imutabilidade em programação funcional?",
    answer: "Imutabilidade significa que os dados não podem ser alterados após criados; qualquer mudança gera um novo valor.",
  },
  {
    id: "5",
    question: "Para que serve o Git?",
    answer: "Git é um sistema de controle de versão distribuído usado para rastrear mudanças no código e facilitar colaboração.",
  },
  {
    id: "6",
    question: "O que é uma Promise em JavaScript?",
    answer: "Uma Promise representa uma operação assíncrona que pode ser concluída com sucesso (resolve) ou falhar (reject).",
  },
  {
    id: "7",
    question: "O que é REST?",
    answer: "REST é um estilo arquitetural para projetar APIs baseadas em recursos acessados via HTTP.",
  },
];

function App() {
  return (
    <section className="app">
      <div className='container'>
        <h1 className="title">Flash Cards</h1>
        <FlashCards flashcards={flashcards} />
      </div>
    </section>
  )
}

export default App

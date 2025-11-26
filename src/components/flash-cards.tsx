import { useEffect, useRef, useState } from "react";

export type Flashcard = {
  id: string;
  question: string;
  answer: string;
};

export function FlashCards({ flashcards }: { flashcards: Flashcard[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const ARRAY_LENGTH = flashcards.length;

  const percentage = Math.floor(((currentIndex + 1) / ARRAY_LENGTH) * 100);

  function scrollToIndex(index: number) {
    if (!ref.current) return;
    const slide = ref.current.children[index] as HTMLElement;
    slide.scrollIntoView({ behavior: "smooth", inline: "start" })
  }

  function goPrev() {
    setShowAnswer(false)
    setCurrentIndex((state) => {
      if (state <= 0) return 0;
      return state - 1;
    })
  }

  function goNext() {
    setShowAnswer(false)
    setCurrentIndex((state) => {
      if (state >= ARRAY_LENGTH - 1) return ARRAY_LENGTH - 1;
      return state + 1
    })
  }

  useEffect(() => scrollToIndex(currentIndex), [currentIndex])

  return (
    <>
      <div className='progress'>
        <div className='bar' style={{ width: percentage + '%' }}>
          <span className="percentage">{percentage}%</span>
        </div>
      </div>

      <div className='flash__cards'>
        <div ref={ref} className='carousel'>
          {flashcards.map((question, index) => (
            <article key={question.id} className='question' data-index={index}>
              {showAnswer ? question.answer : question.question}
            </article>
          ))}
          <span className='page'>
            <small>{currentIndex + 1}</small>
            <small>/</small>
            <small>{ARRAY_LENGTH}</small>
          </span>
        </div>

        <div className='arrows'>
          <button className='slide__btn' onClick={goPrev} disabled={currentIndex <= 0}>Previous</button>
          <button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? 'Hide answer' : 'Show answer'}
          </button>
          <button className='slide__btn' onClick={goNext} disabled={currentIndex >= ARRAY_LENGTH - 1}>Next</button>
        </div>
      </div>
    </>
  )
}

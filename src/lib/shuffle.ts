export function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function shuffleQuestions<T extends { options?: string[] }>(questions: T[]): T[] {
  return shuffleArray(questions).map((question) => ({
    ...question,
    options: question.options ? shuffleArray(question.options) : question.options,
  }));
}

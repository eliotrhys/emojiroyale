export default interface Guess {
    guess: string;
    isCorrect: boolean;
    correctAnswer?: string;
    correctAnswerEmoji?: string;
}
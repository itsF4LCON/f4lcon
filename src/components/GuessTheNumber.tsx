
import { useState } from "react";
import { Gamepad2, RotateCcw } from "lucide-react";

const GuessTheNumber = () => {
  const [targetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const handleGuess = () => {
    const guessNum = parseInt(guess);
    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      setFeedback("Please enter a number between 1 and 100!");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guessNum === targetNumber) {
      setGameWon(true);
      setFeedback(`🎉 Correct! You won in ${newAttempts} attempts!`);
    } else if (guessNum < targetNumber) {
      setFeedback("📈 Too low! Try a higher number.");
    } else {
      setFeedback("📉 Too high! Try a lower number.");
    }

    setGuess("");
  };

  const resetGame = () => {
    window.location.reload(); // Simple reset by reloading
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !gameWon) {
      handleGuess();
    }
  };

  if (!showGame) {
    return (
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
          <Gamepad2 className="w-6 h-6" />
          Fun Game Zone
        </h3>
        <p className="text-gray-400 mb-6">
          Want to play a quick guessing game while you're here?
        </p>
        <button
          onClick={() => setShowGame(true)}
          className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 border border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Start Game 🎮
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <Gamepad2 className="w-6 h-6" />
          Guess My Number!
        </h3>
        <p className="text-gray-400">I'm thinking of a number between 1 and 100</p>
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <p className="text-gray-300 mb-2">Attempts: {attempts}</p>
          {feedback && (
            <p className={`text-lg font-semibold ${
              gameWon ? "text-green-400" : 
              feedback.includes("low") ? "text-blue-400" : 
              feedback.includes("high") ? "text-red-400" : "text-yellow-400"
            }`}>
              {feedback}
            </p>
          )}
        </div>

        {!gameWon && (
          <div className="flex gap-2">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your guess..."
              min="1"
              max="100"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
            />
            <button
              onClick={handleGuess}
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 border border-white text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Guess!
            </button>
          </div>
        )}

        <div className="flex justify-center gap-4">
          <button
            onClick={resetGame}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            <RotateCcw className="w-4 h-4" />
            New Game
          </button>
          <button
            onClick={() => setShowGame(false)}
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            Close Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuessTheNumber;

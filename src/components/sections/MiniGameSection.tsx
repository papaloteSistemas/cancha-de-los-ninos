import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Ticket } from "lucide-react";

type Direction = "left" | "center" | "right";

const MiniGameSection = () => {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState<{ text: string; isGoal: boolean } | null>(null);
  const [ballPos, setBallPos] = useState<{ bottom: string; left: string }>({ bottom: "-60px", left: "45%" });
  const [keeperPos, setKeeperPos] = useState("42%");
  const [animating, setAnimating] = useState(false);
  const [ballTransition, setBallTransition] = useState(true);

  const shoot = useCallback(
    (playerDirection: Direction) => {
      if (animating) return;
      setAnimating(true);

      const directions: Direction[] = ["left", "center", "right"];
      const keeperDirection = directions[Math.floor(Math.random() * 3)];

      const keeperPositions = { left: "10%", center: "42%", right: "75%" };
      setKeeperPos(keeperPositions[keeperDirection]);

      const ballLeftPositions = { left: "15%", center: "45%", right: "75%" };
      setBallPos({ bottom: "80px", left: ballLeftPositions[playerDirection] });

      setAttempts((a) => a + 1);

      setTimeout(() => {
        const isGoal = playerDirection !== keeperDirection;
        if (isGoal) setScore((s) => s + 1);
        setMessage({
          text: isGoal ? "¡GOOOOOL! ⚽🎉" : "¡EL PORTERO LA PARÓ! 🛑",
          isGoal,
        });

        setTimeout(() => {
          setBallTransition(false);
          setBallPos({ bottom: "-60px", left: "45%" });
          setKeeperPos("42%");
          setTimeout(() => {
            setBallTransition(true);
            setAnimating(false);
          }, 50);
        }, 1500);
      }, 500);
    },
    [animating],
  );

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setMessage(null);
    setBallTransition(false);
    setBallPos({ bottom: "-60px", left: "45%" });
    setKeeperPos("42%");
    setAnimating(false);
    setTimeout(() => setBallTransition(true), 50);
  };

  return (
    <section id="mini-juego" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(145_72%_46%/0.06)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1 rounded-full bg-star-gold/10 text-star-gold text-sm font-bold font-body mb-4 border border-star-gold/20">
            🎮 Mini-Juego
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 text-glow-gold">¡Super Penaltis!</h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Elige a dónde disparar. Si el portero adivina… ¡atajada! ¿Podrás anotar?
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-star-gold" />
            <span className="font-display text-2xl font-bold text-star-gold">{score}</span>
            <span className="text-muted-foreground font-body">goles</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-foreground">{attempts}</span>
            <span className="text-muted-foreground font-body">intentos</span>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl border-2 border-primary/30 bg-field-green/20 p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`v${i}`}
                  className="absolute top-0 bottom-0 border-l border-foreground/20"
                  style={{ left: `${(i + 1) * 11}%` }}
                />
              ))}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`h${i}`}
                  className="absolute left-0 right-0 border-t border-foreground/20"
                  style={{ top: `${(i + 1) * 25}%` }}
                />
              ))}
            </div>

            <div
              className="relative mx-auto mb-5 border-4 border-foreground/60 rounded-t-lg"
              style={{ width: "80%", height: "150px", borderBottom: "none", background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="absolute text-5xl select-none"
                style={{
                  bottom: 0,
                  left: keeperPos,
                  transition: "all 0.3s ease",
                }}
              >
                🧤
              </div>

              <div
                className="absolute text-4xl select-none"
                style={{
                  bottom: ballPos.bottom,
                  left: ballPos.left,
                  transition: ballTransition ? "all 0.5s ease" : "none",
                }}
              >
                ⚽
              </div>
            </div>

            <div className="mt-20 relative z-10">
              <p className="font-display text-lg mb-4 text-foreground">¿A dónde disparas? ⚽</p>
              <div className="grid grid-cols-3 gap-3">
                {([
                  { dir: "left" as Direction, label: "Izquierda", icon: "⬅️" },
                  { dir: "center" as Direction, label: "Centro", icon: "⬆️" },
                  { dir: "right" as Direction, label: "Derecha", icon: "➡️" },
                ]).map(({ dir, label, icon }) => (
                  <button
                    key={dir}
                    onClick={() => shoot(dir)}
                    disabled={animating}
                    className="py-6 rounded-xl border border-primary/20 bg-muted/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-200 font-display font-bold text-foreground disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {icon}
                    <br />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {message && (
                <motion.div
                  key={message.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={`mt-6 text-2xl font-display font-bold ${message.isGoal ? "text-primary text-glow-green" : "text-destructive"}`}
                >
                  {message.text}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <Button variant="outline" onClick={resetGame}>
              <RotateCcw className="w-4 h-4" />
              Reiniciar Juego
            </Button>
            <Button variant="hero" size="lg">
              <Ticket className="w-5 h-5" />
              ¡Quiero ir al museo!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniGameSection;

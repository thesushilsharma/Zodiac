"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Lightbulb, Rocket, Wand } from 'lucide-react';

// All possible 3x3 magic squares (rotations and reflections included)
const MAGIC_SQUARES = [
  [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
  [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
  [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
  [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
  [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
  [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
  [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
  [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
];

const LoShuGrid = () => {
  const [grid, setGrid] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [isMagic, setIsMagic] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [celebrate, setCelebrate] = useState<boolean>(false);

  useEffect(() => {
    if (isMagic) {
      setCelebrate(true);
      const timer = setTimeout(() => setCelebrate(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isMagic]);

  const handleInputChange = (row: number, col: number, value: string) => {
    const num = parseInt(value) || 0;
    const newGrid = [...grid];
    newGrid[row][col] = num;
    setGrid(newGrid);
    setIsMagic(false);
    setShowHint(false);
  };

  const checkMagicSquare = () => {
    // Check if all numbers are unique and between 1-9
    const allNumbers = grid.flat();
    const uniqueNumbers = new Set(allNumbers.filter(n => n > 0));
    if (uniqueNumbers.size !== allNumbers.filter(n => n > 0).length || 
        allNumbers.some(n => n < 0 || n > 9)) {
      setIsMagic(false);
      return false;
    }

    // Check rows
    const rowSums = grid.map(row => row.reduce((a, b) => a + b, 0));
    
    // Check columns
    const colSums = [0, 0, 0].map((_, i) => 
      grid.reduce((sum, row) => sum + row[i], 0)
    );
    
    // Check diagonals
    const diag1 = grid[0][0] + grid[1][1] + grid[2][2];
    const diag2 = grid[0][2] + grid[1][1] + grid[2][0];
    
    // All sums should be 15 for a Lo Shu Magic Square
    const allSums = [...rowSums, ...colSums, diag1, diag2];
    const isMagic = allSums.every(sum => sum === 15);
    
    setIsMagic(isMagic);
    return isMagic;
  };

  const resetGrid = () => {
    setGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
    setIsMagic(false);
    setShowHint(false);
  };

  const generateRandomMagicSquare = () => {
    const randomIndex = Math.floor(Math.random() * MAGIC_SQUARES.length);
    setGrid(MAGIC_SQUARES[randomIndex]);
    setIsMagic(true);
    setShowHint(false);
  };

  const provideHint = () => {
    // Find first empty cell
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] === 0) {
          // Find a magic square that matches our current numbers
          for (const magic of MAGIC_SQUARES) {
            let matches = true;
            for (let r = 0; r < 3; r++) {
              for (let c = 0; c < 3; c++) {
                if (grid[r][c] !== 0 && grid[r][c] !== magic[r][c]) {
                  matches = false;
                  break;
                }
              }
              if (!matches) break;
            }
            if (matches) {
              const newGrid = [...grid];
              newGrid[row][col] = magic[row][col];
              setGrid(newGrid);
              setShowHint(true);
              return;
            }
          }
        }
      }
    }
    setShowHint(false);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-md">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Lo Shu Magic Square
              <Rocket className="w-5 h-5" />
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {grid.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                  <motion.div
                    key={`${rowIndex}-${colIndex}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Input
                      type="number"
                      min="1"
                      max="9"
                      value={cell || ''}
                      onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                      className="text-center h-16 text-lg font-medium"
                    />
                  </motion.div>
                ))
              ))}
            </div>

            <div className="flex gap-2 mb-4">
              <Button 
                onClick={checkMagicSquare}
                className="flex-1"
              >
                Check Magic Square
              </Button>
              <Button 
                variant="outline" 
                onClick={resetGrid}
                className="flex-1"
              >
                Reset
              </Button>
            </div>

            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    onClick={provideHint}
                    className="flex-1"
                  >
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Hint
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Get a hint for the next correct number</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    onClick={generateRandomMagicSquare}
                    className="flex-1"
                  >
                    <Wand className="mr-2 h-4 w-4" />
                    Random
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Generate a random magic square</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <AnimatePresence>
              {isMagic && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert className="mt-4 bg-green-50">
                    <AlertDescription className="text-center">
                      Congratulations! This is a Lo Shu Magic Square!
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {showHint && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Alert className="mt-4 bg-blue-50">
                    <AlertDescription className="text-center">
                      Here's a hint to help you complete the magic square!
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            {celebrate && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      y: [0, -100],
                      x: [0, (Math.random() - 0.5) * 100]
                    }}
                    transition={{ 
                      duration: 2,
                      ease: "easeOut",
                      delay: i * 0.1
                    }}
                    className="text-2xl absolute"
                    style={{
                      color: ['#f87171', '#60a5fa', '#34d399', '#fbbf24'][Math.floor(Math.random() * 4)]
                    }}
                  >
                    {['✨', '⭐', '🎉', '🌟'][Math.floor(Math.random() * 4)]}
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
          
          <CardFooter className="text-sm text-muted-foreground">
            <p>A Lo Shu Magic Square is a 3x3 grid where numbers 1-9 are arranged so that each row, column, and diagonal sums to 15, with no repeated numbers.</p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoShuGrid;
main :: IO ()
main = do
    putStrLn "Haskell Loop:"
    mapM_ (\i -> putStrLn ("Loop iteration " ++ show i)) [1..5]
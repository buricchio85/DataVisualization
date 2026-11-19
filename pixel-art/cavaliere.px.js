// Cavaliere medievale a cavallo con spada e scudo, disegnato con pxl (github.com/crsolver/claude-pxl)
pal({
  k: "#1a1423",
  S: "#4a5672", s: "#8b9bb4", h: "#c0cbdc", w: "#ffffff",    // acciaio
  R: "#9e2835", r: "#e43b44",                                // tabarro, piuma
  Y: "#b86f1e", y: "#feae34",                                // oro
  D: "#1c2f5e", U: "#2a4a8c", u: "#4f7fd6",                  // blu (scudo, gualdrappa)
  B: "#5a3023", b: "#a0623c",                                // cuoio
  m: "#2b1d1a", H: "#5e3424", c: "#8a4f33", C: "#b47450",    // cavallo (criniera, manto)
})
ramps("kSshw", "kRr", "kYy", "kDUu", "kBb", "kmHcC")

sprite("_scudo", { mx: "c" }, `
  .ssss
  suuuy
  suuuy
  syyyy
  sUuuy
  sUuuy
  .sUuy
  ..sUy
  ...sy
  ....s`)

sprite("cavaliere", { w: 58, h: 64, outline: "k" },
  layer("tutto", { y: 14 },
    // --- cavallo ---
    line(38, 34, 40, 45, "H", 2), line(16, 34, 14, 45, "H", 2),          // zampe lontane
    rect(39, 45, 3, 2, "m"), rect(13, 45, 3, 2, "m"),
    line(12, 27, 6, 40, "m", 2), line(11, 28, 4, 37, "m"),               // coda
    ellipse(24, 30, 13, 6, "c"),                                         // corpo
    poly([31, 26, 39, 13, 44, 11, 47, 15, 42, 27, 38, 35], "c"),         // collo
    poly([41, 12, 46, 9, 53, 17, 53, 21, 48, 21, 43, 17], "c"),          // testa
    poly([43, 11, 44, 6, 46, 10], "c"),                                  // orecchio
    line(48, 16, 52, 19, "C"), px(47, 13, "k"), px(52, 20, "m"),
    line(42, 9, 35, 24, "m", 2),                                         // criniera
    line(34, 34, 35, 45, "c", 2), line(19, 34, 19, 45, "c", 2),          // zampe vicine
    rect(34, 45, 3, 2, "m"), rect(18, 45, 3, 2, "m"),
    // gualdrappa
    poly([11, 25, 36, 25, 38, 39, 10, 39], "u"),
    shade([10, 33, 29, 6]),
    rect(22, 28, 3, 9, "y"), rect(19, 31, 9, 3, "y"),                     // croce
    hline(10, 25, 27, "y"), hline(10, 38, 29, "y"),
    (c) => { for (let x = 10; x < 38; x += 4) { c.poly([x, 39, x + 4, 39, x + 2, 41], "U"); c.px(x + 2, 40, "y") } },
    // briglie
    line(24, 20, 49, 18, "b"), line(49, 18, 49, 21, "b"),
    // sella
    rect(16, 23, 13, 2, "B"), vline(16, 20, 4, "B"),
    // --- cavaliere ---
    line(26, 15, 30, 10, "s", 2),                                        // braccio della spada (lato lontano)
    vline(29, -11, 17, "w"), vline(30, -11, 17, "s"), px(29, -12, "w"),  // lama
    hline(27, 6, 6, "y"), vline(30, 7, 2, "B"), px(30, 9, "y"),          // elsa
    circ(30, 8, 1, "S"),                                                 // guanto
    poly([19, 13, 27, 13, 29, 24, 18, 24], "r"),                         // tabarro
    hline(18, 21, 11, "B"), px(24, 21, "y"),                             // cintura
    rect(21, 11, 6, 2, "S"),                                             // gorgiera
    rect(20, 4, 8, 8, "s"), hline(21, 3, 6, "s"), vline(21, 4, 7, "h"),  // elmo
    hline(24, 7, 4, "k"), px(26, 9, "k"), px(26, 10, "k"),
    vline(20, 5, 7, "S"),
    line(22, 3, 17, 0, "r", 2), px(16, 0, "R"),                          // piuma
    line(23, 23, 29, 25, "s", 3), line(29, 25, 29, 32, "s", 2),          // gamba
    vline(30, 26, 6, "S"), rect(28, 33, 4, 1, "S"), hline(27, 34, 6, "y"),
    stamp("_scudo", 14, 13),                                             // scudo (braccio vicino)
  ),
)

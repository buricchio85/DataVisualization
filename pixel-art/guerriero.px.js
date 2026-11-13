// Guerriero medievale con spada e scudo, disegnato con pxl (github.com/crsolver/claude-pxl)
pal({
  k: "#1a1423",                                              // contorno
  S: "#4a5672", s: "#8b9bb4", h: "#c0cbdc", w: "#ffffff",    // acciaio
  R: "#9e2835", r: "#e43b44",                                // tabarro, piuma
  Y: "#b86f1e", y: "#feae34",                                // oro
  D: "#1c2f5e", U: "#2a4a8c", u: "#4f7fd6",                               // scudo
  B: "#5a3023", b: "#a0623c",                                // cuoio
})
ramps("kSshw", "kRr", "kYy", "kDUu", "kBb")

// Corpo simmetrico: si scrive la meta' sinistra.
sprite("_corpo", { mx: true }, `
  ....SSss
  ..SSsssh
  .Sssshhy
  .Ssshhhy
  .Skkkkky
  .Ssssshy
  .SsskSsy
  ..Sssssy
  ..SSSsss
  ....kSSS
  .hssrrrr
  hsssrrrr
  SssSrrry
  SSS.rryy
  ....rrry
  ....RrrR
  ....bbby
  ....rrrr
  ....rrrR
  ....RrR.
  ....sss.
  ....Sss.
  ....hss.
  ....Sss.
  ...BBbb.
  ..BBBbb.`)

sprite("_spada", `
  ..w..
  .whs.
  .whs.
  .whs.
  .whs.
  .whs.
  .whs.
  .whs.
  .whs.
  .whs.
  .whs.
  .whs.
  yyyyy
  .YyY.
  ..b..
  ..B..
  ..b..
  ..y..`)

sprite("_scudo", { mx: "c" }, `
  .sssss
  suuuuy
  suuuuy
  suuuuy
  syyyyy
  sUuuuy
  sUuuuy
  sUuuuy
  .sUuuy
  .sUUuy
  ..sUuy
  ...sUy
  ....sy
  .....s`)

sprite("guerriero", { w: 30, h: 31, outline: "k" },
  // piuma
  grid(13, 0, `
    ..rrrr..
    .rrRrrrr
    .rrrRRRr
    ..rr...R`),
  stamp("_corpo", 7, 4),
  // braccio della spada
  grid(4, 17, `
    ..sS
    .ss.
    hs..`),
  stamp("_spada", 2, 3),
  grid(3, 17, `
    .S.
    hss
    sSS`),                     // guanto sull'impugnatura
  stamp("_scudo", 18, 14),
  shade([24, 14, 6, 15]),      // lato in ombra dello scudo
)


let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Marlen González')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();


let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});
typewriterFrase
    .pauseFor(2500)
    .typeString('En busca de equilibrio y crecimiento constante para crear un futuro independiente y lleno de propósito.')
    .pauseFor(300)
    .deleteAll()
    .typeString('YO')
    .pauseFor(1000)
    .start();
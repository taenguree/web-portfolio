'use strict';

new TypeIt('.home__title--strong', {
    // loop : true,
    speed: 150,
    afterComplete: function (instance) {
        instance.destroy();
    }
})
    .move(-9)
    .type('Thinking ')
    // .pause(1000)
    // // .move(null, { to: 'END' })
    // // .delete()
    // // .type('Front-end Engineer')
    // // .pause(1000)
    // // .move(-9)
    // // .delete(9)
    // // .type('Back-end')
    // // .pause(1000)
    // // .delete(8)
    // // .type('Full-stack')
    // // .pause(1000)
    // // .move(9)
    // // .delete()
    // // .type('Thinking Develper')
    .go();
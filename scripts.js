// script.js
function calculate ()
{
    const startDate = document.getElementById( 'startDate' ).value;
    const amount = parseFloat( document.getElementById( 'amount' ).value );
    const resultDiv = document.getElementById( 'result' );

    if ( !startDate || isNaN( amount ) )
    {
        resultDiv.textContent = 'Veuillez entrer une date de début valide et un montant.';
        return;
    }

    const start = new Date( startDate );
    const now = new Date();
    const diffTime = Math.abs( now - start );

    // Calculer le nombre de jours écoulés
    const diffDays = Math.floor( diffTime / ( 1000 * 60 * 60 * 24 ) );
    const diffWeeks = Math.floor( diffTime / ( 1000 * 60 * 60 * 24 * 7 ) );

    // Calculer le nombre d'années, de mois et de jours écoulés
    const diffYears = now.getFullYear() - start.getFullYear();
    const diffMonths = ( now.getMonth() + 1 ) + ( diffYears * 12 ) - ( start.getMonth() + 1 );

    const yearAmount = diffYears * amount;
    const monthAmount = diffMonths * amount;
    const dayAmount = diffDays * amount;
    const weeksAmount = diffWeeks * amount;

    resultDiv.innerHTML = `
        Jours (${diffDays }): ${ dayAmount }.<br/>
        Semaines (${ diffWeeks }): ${ weeksAmount }.<br/>
        Mois (${ diffMonths }): ${ monthAmount }.<br/>
        Année (${ diffYears }): ${ yearAmount }.
    `;
}

document.addEventListener( 'DOMContentLoaded', () =>
{
    const startDate = document.getElementById( 'startDate' ).value;
    var now = new Date();
    var dateToday = `${ now.getDay() > 10 ? now.getDay() : '0' + now.getDay() }/${ now.getMonth() > 10 ? now.getMonth() : '0' + now.getMonth() }/${ now.getFullYear() }`;
    const today = now.toISOString().split( 'T' )[ 0 ];
    document.getElementById( 'startDate' ).setAttribute( 'max', today );

    
    console.log( "dateToday: ", dateToday );
    console.log( `Date: ${ now.getDay() }/${ now.getMonth() }/${ now.getFullYear() }` );
    console.log( 'Heures: ', now.getHours() );
    console.log( 'Minutes: ', now.getMinutes() );
    console.log( 'Secondes: ', now.getSeconds() );
} )
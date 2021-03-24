


class Agendamento {
    realizarAgendamento(){
    cy.get('.col-sm-12 > h2:nth-child(1)').should('have.html', 'Make Appointment')
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
    cy.get('[name=visit_date]').type('17/03/2021')
    cy.get('textarea#txt_comment.form-control').click({ force: true }).type('Ú a jovem aeee')
    cy.get('#btn-book-appointment').click()        
    cy.get('#summary > div > div > div.col-xs-12.text-center > h2').contains('Appointment Confirmation')

    }
    
}

export default new Agendamento();
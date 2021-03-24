

class Login {
    acessarPagina(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/')

    }

    realizarLogin(){
        cy.get('#btn-make-appointment').click()
        
        // Pegar o valor do usuário e senha e colocar na variável, caso mude algum dia.
        cy.get('.form-control[aria-describedby="demo_username_label"]').then(($value) => {
            const userName = $value.attr('value')
            cy.get('#txt-username').type(userName)    
            //cy.log(userName)
        })        
        
        cy.get('.form-control[aria-describedby="demo_password_label"]').then(($value) => {
            const password = $value.attr('value')
            cy.get('#txt-password').type(password)
            //cy.log(password)
        })  

        cy.get('button[type="submit"]').click()
    }


}

export default new Login();


// class Agendamento {
//     realizarAgendamento(){
//     cy.get('.col-sm-12 > h2:nth-child(1)').should('have.html', 'Make Appointment')
//     cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
//     cy.get('[name=visit_date]').type('17/03/2021')
//     cy.get('textarea#txt_comment.form-control').click({ force: true }).type('Ú a jovem aeee')
//     cy.get('#btn-book-appointment').click()        
//     cy.get('#summary > div > div > div.col-xs-12.text-center > h2').contains('Appointment Confirmation')

//     }
    
// }

// export default new Agendamento();
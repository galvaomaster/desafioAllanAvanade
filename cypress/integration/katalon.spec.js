///<reference types="cypress" />

import Login from '../support/pages/login'
import agendar from '../support/pages/agendar'


context('Acessar Katalon', () => {

    beforeEach(() => {
        Login.acessarPagina();
        
    }) 
    
    it('Realizar Login',() => {
   
        Login.realizarLogin();
        
    })
     it('Realizar o Agendamento', () => {
        Login.realizarLogin();
        agendar.realizarAgendamento();
       
        
    })
    
    
})
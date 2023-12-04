window.addEventListener('DOMContentLoaded', function() {

    this.document.getElementById('validaData').addEventListener('click', function() {
        var dataNasc = document.getElementById('dataNasc').value;
        const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4}|\d{2})$/;


        if (!regexData.test(dataNasc)) {
            alert('Data Inválida');
        } else {
            alert('Data Válida');
        }
    });

    this.document.getElementById('validaCpf').addEventListener('click', function() {

        var cpf = document.getElementById('cpf').value;
        const regexCpf = /^(\d{3}\.){2}\d{3}\-\d{2}$/;

        if (!regexCpf.test(cpf)) {
            alert('CPF Inválido');
        } else {
            alert('CPF Válido');
        }
    });

    this.document.getElementById('validaMatricula').addEventListener('click', function() {
            
            var matricula = document.getElementById('matricula').value;
            const regexMatricula = /^(iftm|IFTM)-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/;

    
            if (!regexMatricula.test(matricula)) {
                alert('Matrícula Inválida');
            } else {
                alert('Matrícula Válida');
            }
        });

        document.getElementById('validaDisciplina').addEventListener('click', function() {
            var disciplina = document.getElementById('disciplina').value;
            const regexDisciplina = /^[a-zA-Z]{2}-[0-9]{2}.[0-9]{3}-(iftm|IFTM)$/;
        
            if (!regexDisciplina.test(disciplina)) {
                alert('Disciplina Inválida');
            } else {
                alert('Disciplina Válida');
            }
        });

        document.getElementById('validaDisciplina2').addEventListener('click', function() {
            var disciplina = document.getElementById('disciplina2').value;
            const regexDisciplina = /^[A-Z]{2}-[0-9]{2}.[0-9]{3}-(iftm|IFTM)$/;
        
            if (!regexDisciplina.test(disciplina)) {
                alert('Disciplina Inválida');
            } else {
                alert('Disciplina Válida');
            }
        });

        document.getElementById('validaDisciplina3').addEventListener('click', function() {
            var disciplina = document.getElementById('disciplina3').value;
            const regexDisciplina = /^(mt|MT)-[0-9]{2}.[0-9]{3}-(iftm|IFTM)$/;

            if (!regexDisciplina.test(disciplina)) {
                alert('Disciplina Inválida');
            } else {
                alert('Disciplina Válida');
            }
        });

        this.document.getElementById('validaCampus').addEventListener('click', function() {
            var campus = document.getElementById('campus').value;
            const regexCampus = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/;

            if (!regexCampus.test(campus)) {
                alert('Campus Inválido');
            } else {
                alert('Campus Válido');
            }
        });

        this.document.getElementById('validaTelefone').addEventListener('click', function() {
            var telefone = document.getElementById('telefone').value;
            const regexTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
        
            if (!regexTelefone.test(telefone)) {
                alert('Telefone Inválido');
            } else {
                alert('Telefone Válido');
            }
        });

        this.document.getElementById('validaTelefone2').addEventListener('click', function() {
            var telefone = document.getElementById('telefone2').value;
            const regexTelefone = /^\(\d{2,3}\)\s?\d{1}\s?\d{4}-\d{4}$/;

            if (!regexTelefone.test(telefone)) {
                alert('Telefone Inválido');
            } else {
                alert('Telefone Válido');
            }
        });

        this.document.getElementById('validaAltura').addEventListener('click', function() {
            var altura = document.getElementById('altura').value;
            const regexAltura = /^(1\.[3-9]|[1-1]\.\d|2\.[0-5])$/; 

            if (!regexAltura.test(altura)) {
                alert('Altura Inválida');
            } else {
                alert('Altura Válida');
            }
        });

        this.document.getElementById('validaFaturamento').addEventListener('click', function() {
            var faturamento = document.getElementById('faturamento').value;
            const regexFaturamento = /^(R\$\d{1,3}(?:\.\d{3})*(?:\,\d{1,2})?|R\$999\.999\.999\.999,99)$/;


            if (!regexFaturamento.test(faturamento)) {
                alert('Faturamento Inválido');
            } else {
                alert('Faturamento Válido');
            }
        });
        
        this.document.getElementById('validaCronometro').addEventListener('click', function() {
            var cronometro = document.getElementById('cronometro').value;
            const regexCronometro = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-9]{2}$/;


            if (!regexCronometro.test(cronometro)) {
                alert('Cronômetro Inválido');
            } else {
                alert('Cronômetro Válido');
            }
        });
});
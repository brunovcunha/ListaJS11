window.addEventListener('DOMContentLoaded', function() {

    this.document.getElementById('validaData').addEventListener('click', function() {
        let dataNasc = document.getElementById('dataNasc').value;
        const regexData = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;

        if (!regexData.test(dataNasc)) {
            alert('Data Inválida');
        } else {
            alert('Data Válida');
        }
    });

    this.document.getElementById('validaCpf').addEventListener('click', function() {
        let cpf = document.getElementById('cpf').value;
        const regexCpf = /^(\d{3}\.){2}\d{3}-\d{2}$/;

        if (!regexCpf.test(cpf)) {
            alert('CPF Inválido');
        } else {
            alert('CPF Válido');
        }
    });

    this.document.getElementById('validaMatricula').addEventListener('click', function() {
        let matricula = document.getElementById('matricula').value;
        const regexMatricula = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;

        if (!regexMatricula.test(matricula)) {
            alert('Matrícula Inválida');
        } else {
            alert('Matrícula Válida');
        }
    });

    document.getElementById('validaDisciplina').addEventListener('click', function() {
        let disciplina = document.getElementById('disciplina').value;
        const regexDisciplina = /^\w{2}-\d{2}\.\d{3}-(iftm)$/i;

        if (!regexDisciplina.test(disciplina)) {
            alert('Disciplina Inválida');
        } else {
            alert('Disciplina Válida');
        }
    });

    document.getElementById('validaDisciplina2').addEventListener('click', function() {
        let disciplina = document.getElementById('disciplina2').value;
        const regexDisciplina2 = /^[A-Z]{2}-\d{2}\.\d{3}-(IFTM|iftm)$/;

        if (!regexDisciplina2.test(disciplina)) {
            alert('Disciplina Inválida');
        } else {
            alert('Disciplina Válida');
        }
    });

    document.getElementById('validaDisciplina3').addEventListener('click', function() {
        let disciplina = document.getElementById('disciplina3').value;
        const regexDisciplina3 = /^(MT|mt)-\d{2}\.\d{3}-(IFTM|iftm)$/;

        if (!regexDisciplina3.test(disciplina)) {
            alert('Disciplina Inválida');
        } else {
            alert('Disciplina Válida');
        }
    });

    this.document.getElementById('validaCampus').addEventListener('click', function() {
        let campus = document.getElementById('campus').value;
        const regexCampus = /^IFTM campus Uberlândia( Centro)?$/;

        if (!regexCampus.test(campus)) {
            alert('Campus Inválido');
        } else {
            alert('Campus Válido');
        }
    });

    this.document.getElementById('validaTelefone').addEventListener('click', function() {
        let telefone = document.getElementById('telefone').value;
        const regexTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

        if (!regexTelefone.test(telefone)) {
            alert('Telefone Inválido');
        } else {
            alert('Telefone Válido');
        }
    });

    this.document.getElementById('validaTelefone2').addEventListener('click', function() {
        let telefone = document.getElementById('telefone2').value;
        const regexTelefone2 = /^\(\d{2,3}\)\s?\d\s?\d{4}-\d{4}$/;

        if (!regexTelefone2.test(telefone)) {
            alert('Telefone Inválido');
        } else {
            alert('Telefone Válido');
        }
    });

    this.document.getElementById('validaAltura').addEventListener('click', function() {
        let altura = document.getElementById('altura').value;
        const regexAltura = /^(1\.\d|2\.[0-5])$/;

        if (!regexAltura.test(altura)) {
            alert('Altura Inválida');
        } else {
            alert('Altura Válida');
        }
    });

    this.document.getElementById('validaFaturamento').addEventListener('click', function() {
        const faturamento = document.getElementById('faturamento').value;
        const regexFaturamento = /^R\$\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?$/;

        if (!regexFaturamento.test(faturamento)) {
            alert('Faturamento Inválido');
        } else {
            alert('Faturamento Válido');
        }
    });

    this.document.getElementById('validaCronometro').addEventListener('click', function() {
        const cronometro = document.getElementById('cronometro').value;
        const regexCronometro = /^(0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;

        if (!regexCronometro.test(cronometro)) {
            alert('Cronômetro Inválido');
        } else {
            alert('Cronômetro Válido');
        }
    });

});

function downloadPDF() {
    const element=document.querySelector(".container-lg");
    const opt={
        margin: 0,
        filename: 'Hoja_de_vida_jeferson_rios.pdf',
        image: {type: 'jpeg', quality:1},
        html2canvas:{scale:2,scrolly:0},
        jsPDF:{unit:'mm',format:'letter',orientation:'portrait'},
        /* pagebreak:{mode:['avoid-all','css','legacy']} */
    };
    html2pdf().set(opt).from(element).save();
    
}
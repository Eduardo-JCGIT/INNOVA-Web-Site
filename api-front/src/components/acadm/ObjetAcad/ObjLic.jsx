import psiimg from '../../../img/of_acad/licenciaturas/card_lic/PSI_card.png'
import PED from '../../../img/of_acad/licenciaturas/card_lic/PED_card.png'
import DER from '../../../img/of_acad/licenciaturas/card_lic/DER_card.png'
import CON from '../../../img/of_acad/licenciaturas/card_lic/CON_card.png'
import SIS from '../../../img/of_acad/licenciaturas/card_lic/SIS_card.png'
import ADM from '../../../img/of_acad/licenciaturas/card_lic/ADM_card.png'
import NEI from '../../../img/of_acad/licenciaturas/card_lic/NEI_card.png'
import LIN from '../../../img/of_acad/licenciaturas/card_lic/LIN_card.png'
import ADT from '../../../img/of_acad/licenciaturas/card_lic/ADT_card.png'
import MER from '../../../img/of_acad/licenciaturas/card_lic/MER_card.png'
import COM from '../../../img/of_acad/licenciaturas/card_lic/COM_card.png'
import CED from '../../../img/of_acad/licenciaturas/card_lic/CED_card.png'
import AGO from '../../../img/of_acad/licenciaturas/card_lic/AGO_card.png'
import INF from '../../../img/of_acad/licenciaturas/card_lic/INF_card.png'
import CDE from '../../../img/of_acad/licenciaturas/card_lic/CDE_card.png'




    const ObjLic = [
    //Psicología
    {
        idlic: 1,
        licenciatura: 'PSICOLOGÍA',
        numrvoe: 20160580,
        cuatrimestres: 9,
        mode: 'ONLINE',
        inf: 'Ciencia que estudia la mente y el comportamiento humano.',
        imglic: psiimg,
        pdfof: "https://drive.google.com/file/d/1zUshcL1nqlOJDpZ6gCi1BXlkeaYbZz0k/view"
    },
    //Pedagogía
    {
        idlic: 2,
        licenciatura: 'PEDAGOGÍA',
        numrvoe: 20150438,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Disciplina que se encarga del estudio de los procesos de enseñanza y aprendizaje.',
        imglic: PED,
        pdfof: 'https://drive.google.com/file/d/1055cw-47ptpGo0F6RAPbxYtl8rsFfKTg/view'
    },
    //Derecho
    {
        idlic: 3,
        licenciatura: 'DERECHO',
        numrvoe: 20140254,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Regula la conducta humana mediante normas para garantizar el orden y la justicia.',
        imglic: DER,
        pdfof: 'https://drive.google.com/file/d/1H6XyoI-5JFJHv4EjJg-QOP8d-Po9gHnL/view'
    },
    //CONTABILIDAD
    {
        idlic: 4,
        licenciatura: 'CONTABILIDAD',
        numrvoe: 20140252,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Registra y analiza operaciones financieras para informar decisiones económicas.',
        imglic: CON,
        pdfof: 'https://drive.google.com/file/d/1elk-uMoBxf-QaKaEmQ5a3_Gdhyd-CXOV/view'
    },
    //SISTEMAS COMPUTACIONALES
    {
        idlic: 5,
        licenciatura: 'SISTEMAS COMPUTACIONALES',
        numrvoe: 20150437,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Conjunto de funciones interrelacionadas, hardware, software y recursos humanos.',
        imglic: SIS,
        pdfof: 'https://drive.google.com/file/d/19bDqSYpV8EkAOhOig3xnMVwzubnKZ8uz/view'
    },
    //ADMINISTRACION DE EMPRESAS
    {
        idlic: 6,
        licenciatura: 'ADMINISTRACIÓN DE EMPRESAS',
        numrvoe: 20150437,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Organiza y dirige recursos para alcanzar objetivos estratégicos y operativos eficientemente.',
        imglic: ADM,
        pdfof: 'https://drive.google.com/file/d/1qzi-7XjmHdvv7BeZXqTtMFc0gqLvD0sP/view'
    },
    //NEGOCIOS INTERNACIONALES
    {
        idlic: 7,
        licenciatura: 'NEGOCIOS INTERNACIONALES',
        numrvoe: 20130383,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Analiza el comercio internacional y estrategias para crecer en mercados globales.',
        imglic: NEI,
        pdfof: 'https://drive.google.com/file/d/1Yv4Rs215BK_ix8Wer1vxZcsfk2VbfhqB/view'
    },
    //LENGUA INGLESA
    {
        idlic: 8,
        licenciatura: 'LENGUA INGLESA',
        numrvoe: 20130379,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Dominio del inglés para interactuar y comprender información en un contexto.',
        imglic: LIN,
        pdfof: 'https://drive.google.com/file/d/17viwNuWchGhEPc1wi9qpZL0dkZkgal2T/view'
    },
    // ADMINISTRACION DE EMPRESAS TURISTICAS
    {
        idlic: 9,
        licenciatura: 'ADMINISTRACIÓN DE EMPRESAS TURISTICAS',
        numrvoe: 20130377,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Gestiona recursos y operaciones en el sector turístico para ofrecer servicios de calidad',
        imglic: ADT,
        pdfof: 'https://drive.google.com/file/d/1qzi-7XjmHdvv7BeZXqTtMFc0gqLvD0sP/view'
    },
    //MERCADOCTENIA
    {
        idlic: 10,
        licenciatura: 'MERCADOTECNIA',
        numrvoe: 20130381,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Promover productos y servicios, analizando el mercado y entendiendo las necesidades del consumidor.',
        imglic: MER,
        pdfof: 'https://drive.google.com/file/d/1snec7TvtSWN3_7xQong52AjUzsxfw_JV/view'
    },
    //CIENCIAS DE LA COMUNICACIÓN
    {
        idlic: 11,
        licenciatura: 'CIENCIAS DE LA COMUNICACIÓN',
        numrvoe: 20140256,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Gestiona procesos de comunicación y crea mensajes efectivos para diversos medios.',
        imglic: COM,
        pdfof: 'https://drive.google.com/file/d/13y9ILMskGtTO8RGY09aFUqYkZfCL580o/view'
    },
    //CIENCIAS DE LA EDUCACIÓN
    {
        idlic: 12,
        licenciatura: 'CIENCIAS DE LA EDUCACIÓN',
        numrvoe: 20140255,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Optimiza métodos de enseñanza hacia el aprendizaje y el desarrollo educativo.',
        imglic: CED,
        pdfof: 'https://drive.google.com/file/d/1xBHkOR_ltIleknueGXZDDElFDjM9MBSJ/view'
    },
    //GOBIERNO Y ADMINISTRACIÓN PUBLICA
    {
        idlic: 13,
        licenciatura: 'GOBIERNO Y ADMINISTRACIÓN PÚBLICA',
        numrvoe: 20211310,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Administra políticas y servicios públicos para garantizar el buen funcionamiento de las instituciones.',
        imglic: AGO,
        pdfof: 'https://drive.google.com/file/d/16YpOGgbEhkdctqP39AEu_J3c4l3Eox0h/view'
    },
    //INFORMATICA 
    {
        idlic: 14,
        licenciatura: 'INFORMÁTICA',
        numrvoe: 20130378,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Crea y aplica tecnología para el manejo de información en diferentes sistemas.',
        imglic: INF,
        pdfof: 'https://drive.google.com/file/d/1lAX53gpwVX_YrwaCLsx5TXFF7bar_Jsa/view'
    },
    //CIENCIAS DEL DEPORTE
    {
        idlic: 15,
        licenciatura: 'CIENCIAS DEL DEPORTE',
        numrvoe: 20232696,
        cuatrimestres: 9,
        mode:'ONLINE',
        inf: 'Analiza el rendimiento físico y la salud para mejorar el entrenamiento y prevenir lesiones.',
        imglic: CDE,
        pdfof: 'https://drive.google.com/file/d/13CbLPB0qFVsxtjiwD6tI7Nz9jj2Y-389/view'
    },


];





export default ObjLic;
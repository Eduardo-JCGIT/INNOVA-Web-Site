/*Imagen principal */
import mich_tagle from "../../img/innova_team_img/mich_tagle.png";
import iran_luna from "../../img/innova_team_img/iran_luna.png";
import armando_pech from "../../img/innova_team_img/armando_pech.png";
import josue_can from "../../img/innova_team_img/josue_can.png";
import eduardo_jim from "../../img/innova_team_img/eduardo_jim.png";
import adri_patt from "../../img/innova_team_img/adri_patt.png";
import carlitos_navarro from "../../img/innova_team_img/carlitos_navarro.png";
import citlali_chavez from "../../img/innova_team_img/citlali_chavez.png";
/*Iamgen al dar click */
import carlitos_navarro2 from "../../img/innova_team_img/carlitos_navarro_card.jpg";
import josue_can2 from "../../img/innova_team_img/josue_can_card.jpg";
import eduardo_jim2 from "../../img/innova_team_img/eduardo_jim_card.jpg";
import adri_patt2 from "../../img/innova_team_img/adri_patt_card.jpg";
import mich_tagle2 from "../../img/innova_team_img/mich_tagle_card.jpg";
import citlali_chavez2 from "../../img/innova_team_img/citlali_chavez_card.jpg";
import armando_pech2 from "../../img/innova_team_img/armando_pech_card.png.jpg";
import iran_luna2 from "../../img/innova_team_img/iran_luna_card.png.jpg";

const ObjTeam = [
  //Representante Carlos
  {
    idteam: 2,
    name: "Mtro. Carlos Navarro",
    area: "Director General de Universidad Innova",
    imgteam: carlitos_navarro,
    imgteam2: carlitos_navarro2,
    hi: "¡Hola a todos! soy Carlos Navarro",
    journaling: "En mi departamento, supervisamos y coordinamos las áreas académicas y administrativas, asegurando el buen funcionamiento de la universidad y brindando a los estudiantes el apoyo y recursos necesarios para su éxito académico y profesional.",
    degree: "Maestría en Dirección de Centros Educativos",
    email: "direccion01.innova@gmail.com - soporte01.innova@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Finanzas Adriana
  {
    idteam: 3,
    name: "Ing. Adriana Berenice",
    area: "Coordinadora de Administración y Finanzas",
    imgteam: adri_patt,
    imgteam2: adri_patt2,
    hi: "¡Hola! Soy Adriana Paat",
    journaling: "Mi objetivo es garantizar la eficiencia administrativa y financiera de la institución, para que ustedes, nuestros estudiantes, disfruten de una experiencia académica óptima, ofreciendo apoyo en matrículas, pagos, procesos administrativos, becas y servicios estudiantiles.",
    degree: "Ingeniera en Administración",
    email: "finanzas1.innova@gmail.com",
    phone: "+52 1 999 275 9300",
  },

  //Mtro. Josué Gibran
  {
    idteam: 4,
    name: "Mtro. Josué Gibran",
    area: "Control escolar",
    imgteam: josue_can,
    imgteam2: josue_can2,
    hi: "¡Hola a todos! Mi nombre es Josué Can ",
    journaling: "Soy encargado de todos tus trámites escolares, en verificar que vaya todo en orden referente a tus temas académicos y estar presente ante cualquier inquietud que llegaces a tener en temas escolares.",
    degree: "Maestro en ciencias de la educación ",
    email: "escolar.innova@gmail.com | titulaciones.innova@gmail.com | servicio.innovacampeche@gmail.com",
    phone: "+52 1 999 643 4550",
  },

  //Ing. Eduardo Jiménez
  {
    idteam: 5,
    name: "Ing. Eduardo Jiménez",
    area: "Desarrollador Web",
    imgteam: eduardo_jim,
    imgteam2: eduardo_jim2,
    hi: "¡Mucho gusto! Me llamo Eduardo Jiménez",
    journaling: "Como desarrollador web en la Universidad INNOVA en Campeche, me encargo de diseñar, desarrollar y mantener el sitio web institucional y sus aplicaciones asociadas. ",
    degree: "Ingeniero en Programación",
    email: "tec.innova@colegiopaidoscampeche.edu.mx",
    phone: "+52 999 737 2165",
  },

  //Ing. Citlali del Rosario
  {
    idteam: 6,
    name: "Ing. Citlali Chávez",
    area: "Departamento de Marketing",
    imgteam: citlali_chavez,
    imgteam2: citlali_chavez2,
    hi: "¡Hola desde INNOVA! Me llamo Citlali",
    journaling: "Gestiono la difusión de información clave para nuestra comunidad educativa. Coordino estrategias de contenido y marketing para fortalecer la imagen de la universidad y mejorar la relación con los alumnos y el público en general, asegurando una comunicación efectiva y creativa que inspire y conecte a nuestra comunidad.",
    degree: "Ingeniera en Programación",
    email: "soy.innovacamp@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Mtro. Rafael Armando
  {
    idteam: 7,
    name: "Mtro. Rafael Armando",
    area: "Coordinación Académica ",
    imgteam: armando_pech,
    imgteam2: armando_pech2,
    hi: "¡Hola que tal! Soy Armando Gonzalez",
    journaling: "Me encargo de asegurar la calidad de los programas educativos de la universidad. Coordino y evalúo los planes de estudio, apoyo a los docentes en la enseñanza y promuevo el seguimiento académico de los estudiantes, con el objetivo de mejorar la experiencia educativa y alcanzar las competencias necesarias.",
    degree: "Maestría en Tecnologías de Información",
    email: "maestros.innovacampeche@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Lic. Irán Esperanza
  {
    idteam: 8,
    name: "Lic. Irán Esperanza",
    area: "Coaching educativo",
    imgteam: iran_luna,
    imgteam2: iran_luna2,
    hi: "¡Hola a todos! Me llamo Irán",
    journaling: "Proporciono apoyo y orientación a estudiantes para ayudarles a alcanzar sus objetivos académicos y personales. Mi trabajo incluye la identificación de fortalezas y áreas de mejora, el desarrollo de estrategias de aprendizaje personalizadas.",
    degree: "Licenciada en Psicología",
    email: "gcoaching01.innova@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Lic. Michel Moreno
  {
    idteam: 9,
    name: "Lic. Michel Moreno",
    area: "Gestor Educativo",
    imgteam: mich_tagle,
    imgteam2: mich_tagle2,
    hi: "¡Que tal! Mi nombre es Michel Tagle",
    journaling:" Brindo apoyo tanto de manera presencial como telefónica a los alumnos, profesores y prospectos interesados en formar parte de la Universidad. Asimismo, gestiono los procesos de inscripción y realizo el seguimiento correspondiente a los alumnos ya inscritos.",
    degree: "Licenciada en Pedagogía",
    department: "Admisiones y Gestora Académica",
    email: "gestor.edu.innova@gmail.com",
    phone: "+52 999 737 2165",
  },
];

export default ObjTeam;

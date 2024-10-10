/*Imagen principal */
import mich_tagle from "../../img/innova_team_img/mich_tagle.png";
import iran_luna from "../../img/innova_team_img/iran_luna.png";
import armando_pech from "../../img/innova_team_img/armando_pech.png";
import josue_can from "../../img/innova_team_img/josue_can.png";
import eduardo_jim from "../../img/innova_team_img/eduardo_jim.png";
import adri_patt from "../../img/innova_team_img/adri_patt.png";
import carlitos_navarro from "../../img/innova_team_img/carlitos_navarro.png";
/*Iamgen al dar click */
import carlitos_navarro2 from "../../img/innova_team_img/carlitos_navarro_card.jpg";
import josue_can2 from "../../img/innova_team_img/josue_can_card.jpg";
import eduardo_jim2 from "../../img/innova_team_img/eduardo_jim_card.jpg";
import adri_patt2 from "../../img/innova_team_img/adri_patt_card.jpg";
import mich_tagle2 from "../../img/innova_team_img/mich_tagle_card.jpg";

const ObjTeam = [
  //Director Carlos
  {
    idteam: 1,
    name: "Lic. Carlos Navarro ",
    area: "Director General",
    imgteam: mich_tagle,
    hi: "¡Hola a todos! Me llamo Carlos Navarro",
    journaling: "En mi día a día, superviso y coordino todas las operaciones de la Universidad INNOVA en Campeche. Me encargo de establecer y mantener estrategias para el crecimiento institucional.",
    degree: "Licenciado en Derecho",
    email: "direccion01.innova@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Representante Carlos
  {
    idteam: 2,
    name: "Lic. Carlos Enrique",
    area: "Representante de rectoría",
    imgteam: carlitos_navarro,
    imgteam2: carlitos_navarro2,
    hi: "¡Hola a todos! Me llamo Carlos Enrique",
    journaling: "Como representante de rectoría en la Universidad INNOVA en Campeche, me ocupo de coordinar y supervisar las actividades académicas y administrativas, asegurando la correcta implementación de las políticas rectorales.",
    degree: "Maestría en ciencias de la Educación",
    email: "direccion01.innova@gmail.com - soporte01.innova@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Finanzas Adriana
  {
    idteam: 3,
    name: "Ing. Adriana Berenice",
    area: "Finanzas y recursos humanos",
    imgteam: adri_patt,
    imgteam2: adri_patt2,
    hi: "¡Hola a todos! Me llamo Adriana Patt",
    journaling: "En mi día a día, administro las cuentas de los estudiantes, gestionando pagos de matrículas y becas. También envío recordatorios de pagos pendientes y proporciono informes financieros claros y precisos.",
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
    hi: "¡Hola a todos! Me llamo Josué Gibran",
    journaling: "Administro los procesos relacionados con la inscripción y registro de estudiantes, así como las titulaciones y la coordinación de los programas de servicio social.",
    degree: "Licenciado en Sistemas Computacionales",
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
    hi: "¡Hola a todos! Me llamo Eduardo Jiménez",
    journaling: "Como desarrollador web en la Universidad INNOVA en Campeche, me encargo de diseñar, desarrollar y mantener el sitio web institucional y sus aplicaciones asociadas. ",
    degree: "Ingeniero en Programación",
    email: "tec.innova@colegiopaidoscampeche.edu.mx",
    phone: "+52 999 737 2165",
  },

  //Ing. Citlali del Rosario
  {
    idteam: 6,
    name: "Ing. Citlali del Rosario",
    area: "Community manager",
    imgteam: mich_tagle,
    hi: "¡Hola a todos! Me llamo Citlali",
    journaling: "Gestiono y coordino las estrategias de comunicación en redes sociales y plataformas digitales. Incluye la creación y publicación de contenido relevante y atractivo, la interacción con la comunidad universitaria y la respuesta a consultas y comentarios.",
    degree: "Ingeniera en Programación",
    email: "soy.innovacamp@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Mtro. Rafael Armando
  {
    idteam: 7,
    name: "Mtro. Rafael Armando",
    area: "Coordinador de docentes",
    imgteam: armando_pech,
    hi: "¡Hola a todos! Me llamo Rafael Armando",
    journaling: "Superviso y gestiono el cuerpo docente para asegurar la calidad académica y el cumplimiento de los estándares institucionales. Mi labor incluye la asignación de horarios, la coordinación de actividades académicas y la resolución de problemas relacionados con el personal docente.",
    degree: "Ingeniera en Informática",
    email: "maestros.innovacampeche@gmail.com",
    phone: "+52 999 737 2165",
  },

  //Lic. Irán Esperanza
  {
    idteam: 8,
    name: "Lic. Irán Esperanza",
    area: "Coaching educativo",
    imgteam: iran_luna,
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
    hi: "¡Hola a todos! Me llamo Michel Moreno",
    journaling:"En mi día a día, administro las cuentas de los estudiantes, gestionando pagos de matrículas y becas. También envío recordatorios de pagos pendientes y proporciono informes financieros claros y precisos.",
    degree: "Ingeniera en Administración",
    department: "Gestor Educativo",
    email: "gestor.edu.innova@gmail.com",
    phone: "+52 999 737 2165",
  },
];

export default ObjTeam;

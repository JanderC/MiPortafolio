import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
  Modal,
} from "react-bootstrap";
import {
  Code,
  Server,
  Tools,
  Github,
  Linkedin,
  FileText,
  Envelope,
  Wordpress,
} from "react-bootstrap-icons";
import WordPress from "../src/WordPress/WordPress";
import backgroundImage from "./img/banner.png";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    { name: "Node.js", icon: <Code /> },
    { name: ".NET Core", icon: <Server /> },
    { name: "SQL Server", icon: <Tools /> },
    { name: "Docker", icon: <Tools /> },
  ];

  const projects = [
    {
      name: "Inventario API",
      description: "Sistema de gestión de inventarios",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "#",
      // Add more detailed project information
      fullDescription:
        "Desarrollé una API completa para la gestión de inventarios utilizando Node.js y Express. El sistema permite realizar operaciones CRUD, seguimiento de productos, y generación de informes detallados.",
      keyFeatures: [
        "Gestión completa de inventario",
        "Autenticación de usuarios",
        "Generación de reportes",
        "Integración con base de datos MongoDB",
      ],
      githubLink: "#",
    },
    {
      name: "Microservicios .NET",
      description: "Arquitectura de microservicios",
      technologies: [".NET Core", "SQL Server"],
      link: "#",
      fullDescription:
        "Implementé una arquitectura de microservicios escalable utilizando .NET Core, con comunicación entre servicios y base de datos SQL Server.",
      keyFeatures: [
        "Diseño de microservicios",
        "Comunicación entre servicios",
        "Despliegue en contenedores Docker",
        "Patrón de arquitectura limpia",
      ],
      githubLink: "#",
    },
    {
      name: "Bots Automatizados",
      description: "Desarrollador de bots automatizados con api de META",
      technologies: ["Meta for Developers", "Bailys"],
      link: "#",
      fullDescription:
        "Creé bots de automatización para plataformas de mensajería utilizando las APIs de Meta y la librería Bailys para interacción avanzada.",
      keyFeatures: [
        "Integración con API de Meta",
        "Automatización de mensajes",
        "Respuestas inteligentes",
        "Manejo de múltiples canales",
      ],
      githubLink: "#",
    },
    {
      name: "Api de Mensajeria",
      description: "Servicios SSH con GraphQl Y Rest",
      technologies: ["Whatsapp", "SMS"],
      link: "#",
      fullDescription:
        "Desarrollé una API de mensajería multifuncional que soporta comunicación via Whatsapp y SMS, utilizando protocolos GraphQL y REST.",
      keyFeatures: [
        "Soporte para Whatsapp y SMS",
        "Endpoints GraphQL y REST",
        "Seguridad de comunicaciones",
        "Escalabilidad del servicio",
      ],
      githubLink: "#",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contacto desde Portafolio");
    const mailtoLink = `mailto:janderalexisc@gmail.com?subject=${subject}`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contacto desde Portafolio");
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`
    );
    window.location.href = `mailto:janderalexisc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">Sobre Mí</Nav.Link>
              <Nav.Link href="#skills">Habilidades</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav.Link href="#wordpress">WordPress</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid
        id="home"
        className="text-center py-5 vh-100 d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.6)",
          fontWeight: "bold",
        }}
      >
        <div className="text-white">
          <h1 className="display-3" style={{ fontWeight: "bold" }}>
            Jander Carrillo
          </h1>
          <h1 className="display-3">Desarrollador Backend</h1>
          <p className="lead">
            Ingeniero en Sistemas Especialista en Node.js y .NET
          </p>
          <Button variant="primary" href="#projects" size="lg">
            Ver Proyectos
          </Button>
        </div>
      </Container>

      <Container id="about" className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col md={8} className="text-center">
            <h2>Sobre Mí</h2>
            <p className="lead">
              Ingeniero en Sistemas en Mención en Programación Diplomatizado En
              Gestion del Talento Humano
            </p>
            <p className="lead">
              Desarrollador backend con pasión por crear soluciones escalables y
              eficientes utilizando tecnologías modernas.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="skills" className="py-5 bg-light">
        <h2 className="text-center mb-4">Habilidades</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={2} className="text-center mb-3">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="mb-3">{skill.icon}</div>
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container id="projects" className="py-5">
        <h2 className="text-center mb-4">Proyectos</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} md={5} className="mb-4 mx-2">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} bg="secondary" className="me-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline-primary"
                    onClick={() => openProjectModal(project)}
                  >
                    Ver Detalles
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Project Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedProject.fullDescription}</p>
              <h5>Tecnologías</h5>
              <div className="mb-3">
                {selectedProject.technologies.map((tech, i) => (
                  <Badge key={i} bg="secondary" className="me-2">
                    {tech}
                  </Badge>
                ))}
              </div>
              <h5>Características Principales</h5>
              <ul>
                {selectedProject.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                href={selectedProject.githubLink}
                target="_blank"
              >
                Ver en GitHub
              </Button>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
      <WordPress />
      <Container id="contact" className="py-5 bg-dark text-white">
        <h2 className="text-center mb-4">Contacto</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center mb-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleEmailClick}
                className="mb-4"
              >
                <Envelope className="me-2" />
                Contactar por Email Directamente
              </Button>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Tu Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Enviar Mensaje
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <footer className="bg-secondary text-white text-center py-3">
        <Container>
          <div className="mb-2">
            <a href="#" className="text-white me-3">
              <Github />
            </a>
            <a href="#" className="text-white me-3">
              <Linkedin />
            </a>
            <a href="#" className="text-white">
              <FileText />
            </a>
          </div>
          <p className="mb-0">
            © 2025 ing Jander Carrillo. Todos los derechos reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;

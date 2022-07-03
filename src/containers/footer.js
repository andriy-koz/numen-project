import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Nosotros</Footer.Title>
            {/* Seria bueno mapear las listas */}
            <Footer.Link href="#">Historia</Footer.Link>
            <Footer.Link href="#">Clientes</Footer.Link>
            <Footer.Link href="#">Testimonios</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Servicios</Footer.Title>
            <Footer.Link href="#">Lorem ipsum</Footer.Link>
            <Footer.Link href="#">Lorem ipsum</Footer.Link>
            <Footer.Link href="#">Lorem ipsum</Footer.Link>
            <Footer.Link href="#">Lorem ipsum</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contacto</Footer.Title>
            <Footer.Link href="#">Argentina</Footer.Link>
            <Footer.Link href="#">Europa</Footer.Link>
            <Footer.Link href="#">Estados Unidos</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
            <Footer.Link>2022 © Todos los Derechos Reservados</Footer.Link>
          </Footer.Column>
          <Footer.Column />
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}

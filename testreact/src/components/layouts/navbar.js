import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

function BasicExample() {
return (
<Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        {/* 타이틀 */}
    <Navbar.Brand href="#home">마루바람</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="maruwind-navbar">
        
        {/* dropdown 1 */}
        <NavDropdown title="소개" id="introduce-dropdown">
            <NavDropdown.Item href="#action/3.1">홈페이지 소개</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">공지사항</NavDropdown.Item>
        </NavDropdown>

        {/* dropdown 2 */}
        <NavDropdown title="외부행사" id="campaign-dropdown">
            <NavDropdown.Item href="#action/3.1">캠페인</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">공모전</NavDropdown.Item>
        </NavDropdown>

        {/* 링크 1 */}
        <Nav.Link href="#보류">뉴스/보도자료</Nav.Link>

        {/* 링크 2 */}
        <Nav.Link href="#보류">SNS챌린지</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
);
}

export default BasicExample;
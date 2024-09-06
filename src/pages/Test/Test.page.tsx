import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";

export default function Test() {
    return (
        <Container>
            <audio controls>
                <source src={'http://103.156.188.31:8000/stream'} />
            </audio>
        </Container>
    )
}
import Container from "../components/container";
import TasksSummary from "../core-components/tasks-summary";

export default function PageHome() {
  return(
    <Container as="article">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
    </Container>
  ); 
}
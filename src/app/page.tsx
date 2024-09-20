import ComponentCard from "@/components/ComponentCard";
import { DataTable } from "@/view/Table";

export default function Home() {
  const infoCard = {
    title: "Titulo",
    description: "Descricao",
    content: "Conteudo",
    date: "13/11/24",
  };
  return (
    <div className="container mx-auto max-w-7xl px-4 py-4">
      <main className="flex flex-col gap-3">
        <h1>OLA MUNDO</h1>
        <ComponentCard {...infoCard} />
        <DataTable />
      </main>
    </div>
  );
}

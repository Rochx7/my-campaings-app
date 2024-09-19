import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DataTable } from "@/view/Table";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main>
        <h1>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </h1>
        <DataTable />
      </main>
    </div>
  );
}

import { PublishForm } from "./publish-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function PublishPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">
            Publish a New Script
          </CardTitle>
          <CardDescription>
            Share your creation with the Roblox community. Fill out the details
            below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PublishForm />
        </CardContent>
      </Card>
    </div>
  );
}

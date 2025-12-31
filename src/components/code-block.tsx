import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">Script Code</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-code-background text-code-foreground font-code rounded-md relative text-sm">
            <pre className="p-4 overflow-x-auto">
              <code>{code}</code>
            </pre>
            <CopyButton textToCopy={code} />
        </div>
      </CardContent>
    </Card>
  );
}

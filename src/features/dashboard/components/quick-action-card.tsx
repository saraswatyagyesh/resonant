import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { QuickAction } from "@/features/dashboard/data/quick-actions";
import { cn } from "@/lib/utils";

type QuickActionCardProps = QuickAction;

export function QuickActionCard({ title, description, gradient, href, }: QuickActionCardProps ) {

    return(
        <div className="flex gap-4 rounded-xl border bg-card p-3">
            {/* VISUAL PLACEHOLDER WITH GRADIENT */}
            <div className={cn( "relative h-31 w-41 shrink-0 overflow-hidden rounded-xl bg-linear-to-br", gradient,)}>
                
                {/* DECORATIVE ELEMENTS */}
                <div className="absolute inset-0 flex items-center">
                    <div className="size-12 rounded-full bg-white/30" />
                </div>
            </div>
                <div className="absolute inset-2 rounded-lg ring-2 ring-inset ring-white/20">
                </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-betweeen py-1">
                <div className="space-y-1">
                    <h3 className="text-sm font-medium">{title}</h3>
                    <p className="text-xs text-muted-foreground">{description}</p>
                </div>
                <Button variant="outline" size="xs" className="w-fit" asChild>
                    <Link href={href}>
                            Try now
                        <ArrowRight className="size-3" />
                    </Link>
                </Button>
            </div>
        </div>
    );
};
import * as React from "react";
import { cn } from "@/lib/utils";
const AspectRatio = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { ratio?: number }>(({ className, ratio = 1, ...props }, ref) => (<div ref={ref} className={cn("relative", className)} style={{ paddingBottom: `${(1/ratio)*100}%` }} {...props}><div className="absolute inset-0">{props.children}</div></div>));
AspectRatio.displayName = "AspectRatio";
export { AspectRatio };

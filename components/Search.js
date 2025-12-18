"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export function Search({ ...props }) {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    React.useEffect(() => {
        // Fetch search index on load
        fetch("/search-index.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Failed to load search index", err));
    }, []);

    // Filter logic
    const filteredData = React.useMemo(() => {
        if (!query) return [];
        const lowerQuery = query.toLowerCase();

        return data.filter((item) => {
            // Simple check: title matches
            const titleMatch = item.title.toLowerCase().includes(lowerQuery);
            // Or content matches
            const contentMatch = item.content.toLowerCase().includes(lowerQuery);
            return titleMatch || contentMatch;
        }).slice(0, 10); // Limit results
    }, [query, data]);

    const runCommand = React.useCallback((command) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={cn(
                    "relative flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1",
                )}
                {...props}
            >
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </button>
            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                className="fixed top-[15%] left-1/2 -translate-x-1/2 translate-y-0 bg-navbar text-white rounded-xl shadow-2xl max-w-[600px] w-[90vw]"
            >
                <CommandInput
                    placeholder="Search doc..."
                    value={query}
                    onValueChange={setQuery}
                    className="text-white placeholder:text-white/50 border-none focus:ring-0"
                />
                <CommandList className="text-white">
                    {/* <CommandEmpty className="text-blue-100">No results found.</CommandEmpty> */}
                    <CommandGroup heading="Results" className="text-white/80 [&_[cmdk-learning-heading]]:text-white/80">
                        {filteredData.map((item) => (
                            <CommandItem
                                key={item.slug}
                                value={item.title}
                                onSelect={() => {
                                    runCommand(() => router.push(`/blogpost/${item.slug}`));
                                }}
                                className="aria-selected:bg-background aria-selected:text-white"
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium text-white">{item.title}</span>
                                    <span className="text-xs text-white/50 truncate max-w-[500px]">
                                        {item.subject ? `${item.subject} • ` : ''}
                                        {item.content.substring(0, 40) + "..."}
                                    </span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}

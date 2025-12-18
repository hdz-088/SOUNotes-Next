"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
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
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    className={cn(
                        "relative flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1",
                    )}
                    {...props}
                >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </button>
            </PopoverTrigger>
            <PopoverContent className="ml-4 mr-6 w-[94vw] sm:w-[300px] p-0" align="center">
                <Command className="rounded-lg border shadow-md bg-navbar">
                    <CommandInput
                        placeholder="Search doc..."
                        value={query}
                        onValueChange={setQuery}
                        autoFocus
                    />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Results">
                            {filteredData.map((item) => (
                                <CommandItem
                                    key={item.slug}
                                    value={item.title}
                                    onSelect={() => {
                                        runCommand(() => router.push(`/blogpost/${item.slug}`));
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <span>{item.title}</span>
                                        <span className="text-xs text-muted-foreground truncate max-w-[250px]">
                                            {item.subject ? `${item.subject} • ` : ''}
                                            {item.content.substring(0, 40) + "..."}
                                        </span>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

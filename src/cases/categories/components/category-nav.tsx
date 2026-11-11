import { cn } from "@/lib/utils"
import { useCategories } from "../hooks/use-category"
import { Link, useSearchParams } from "react-router-dom"
import { Utensils } from "lucide-react"

export function CategoryNav() {
    const [searchParams] = useSearchParams()
    const selectedCategoryId = searchParams.get('categoryId')

    const { data: categories = [] } = useCategories()

    return (
        <nav className="w-full">
            <ul className="overflow-hidden rounded-xl border border-border/70 bg-transparent">
                {categories.map((category) => (
                    <li key={category.id} className="relative">
                        <Link
                            to={`/products?categoryId=${category.id}`}
                            className={cn(
                                'relative flex w-full items-center gap-3 px-5 py-5',
                                'font-menu text-lg font-semibold uppercase tracking-tight',
                                'rounded-xl border border-transparent',
                                'transition-colors duration-200',
                                'hover:z-10 hover:text-[#B86A2C]',
                                selectedCategoryId === category.id
                                    ? ['border-[#B86A2C]', 'bg-primary/5', 'text-[#B86A2C]']
                                    : ['text-foreground', 'border-b-border/60']
                            )}
                        >
                            {category.icon ? (
                                <img src={category.icon}
                                className="size-10"/>
                            ) : (
                                <Utensils className="size-10 text-brand" />
                            )}
                            <span className="leading-tight">{category.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
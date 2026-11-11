
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/product.service";

export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: ProductService.listAll
    });
}

export function useProduct(id: string) {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => ProductService.findOne(id),
        enabled: !!id
    });
}

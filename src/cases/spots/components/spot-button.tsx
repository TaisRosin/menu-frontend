
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { SpotDialog } from "./spot-dialog";
import { useState } from "react";
import type { SpotDTO } from "../dtos/spot.dto";

export function SpotButton() {

    const [dialogOpen, setDialogOpen] = useState(false);

    const [selectedSpot, setSelectedSpot] = useState<SpotDTO | null>(() => {
        const spotStorage = localStorage.getItem('spot');
        return spotStorage ? JSON.parse(spotStorage) : null;
    });

    function handleSelect(spot: SpotDTO) {
        localStorage.setItem('spot', JSON.stringify(spot));
        setSelectedSpot(spot);
        setDialogOpen(false);
    }

    return (
        <div className="flex items-center justify-center">
            <Button
                variant="ghost"
                className="
                    flex h-auto min-w-30 cursor-pointer
                    flex-col items-center justify-center
                    gap-1 rounded-2xl px-6 py-4
                    bg-transparent text-brand
                    transition-colors duration-200
                    hover:bg-primary hover:text-brand-foreground
                "
                onClick={() => setDialogOpen(true)}
            >
                <MapPin className="size-6" />
                {selectedSpot ? selectedSpot.name : 'Selecionar Mesa'}
            </Button>

            <SpotDialog
                open={dialogOpen}
                onSelect={handleSelect}
                selectedSpotId={selectedSpot?.id}
            />
        </div>
    );
}

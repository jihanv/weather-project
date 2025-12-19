import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type MapTypeDropdownProps = {
    layer: string,
    setLayer: React.Dispatch<React.SetStateAction<string>>
}
const layers = [
    {
        layer: "clouds_new",
        name: "Clouds",
    },
    {
        layer: "precipitation_new",
        name: "Precipitation",
    },
    {
        layer: "pressure_new",
        name: "Pressure",
    },
    {
        layer: "wind_new",
        name: "Wind",
    },
    {
        layer: "temp_new",
        name: "Temperature",
    },
];
export default function MapTypeDropdown({ layer, setLayer }: MapTypeDropdownProps) {
    return (
        <>
            <Select value={layer} onValueChange={(value) => setLayer(value)}>
                <SelectTrigger className="w-full xs:w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-1001">
                    {layers.map((layer) => {
                        return (
                            <SelectItem key={layer.layer} value={layer.layer}>{layer.name}</SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </>
    )
}
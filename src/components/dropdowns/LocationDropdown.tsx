import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const locations = [
    "Bangkok",
    "Tokyo",
    "Seoul",
    "Dubai",
    "Manila",
    "London",
    "New York",
    "Paris",
    "Berlin",
    "Madrid",
    "Rome",
    "Lisbon"
]
export default function LocationDropdown() {
    return (
        <>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Cities" />
                </SelectTrigger>
                <SelectContent className="z-1001">
                    {locations.map((city) => {
                        return (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </>
    )
}
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type LocationDropdownProps = {
    location: string,
    setLocation: React.Dispatch<React.SetStateAction<string>>
}
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
export default function LocationDropdown({ location, setLocation }: LocationDropdownProps) {
    return (
        <>
            <Select value={location} onValueChange={(value) => setLocation(value)}>
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
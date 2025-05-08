import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { BarChart, Clock, Mic, Music } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Karaoke',
        href: '/karaoke',
    },
];
interface Song {
    id: string
    title: string
    artist: string
    cover: string
    duration: string
    highestNote: string
    difficulty: "Easy" | "Medium" | "Hard" | "Expert"
    videoId: string
}
export default function Karaoke() {
    const songs: Song[] = [
        {
            id: "dd616930-d8a4-4632-8ece-2de67b68becb",
            title: "Twice Song",
            artist: "Twice",
            cover: "https://ikaraoke.assets.ivessamuel.tech/0184d76b913f34c9ca72faefb99e20d1.jpeg",
            duration: "2:05",
            highestNote: "F4",
            difficulty: "Easy",
            videoId: "8UyDyboPsUk",
        },
        {
            id: 'apt',
            title: "APT",
            artist: "ROSÉ & Bruno Mars",
            cover: "https://ikaraoke.assets.ivessamuel.tech/apt.png",
            duration: "2:48",
            highestNote: "F4",
            difficulty: "Medium",
            videoId: "pxfEkNc2fWQ",
        }
    ]

    // State for sorting and potentially filtering
    const [selectedSong, setSelectedSong] = useState<string | null>(null)

    // Get difficulty color
    const getDifficultyColor = (difficulty: Song["difficulty"]) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-500"
            case "Medium":
                return "bg-yellow-500"
            case "Hard":
                return "bg-orange-500"
            case "Expert":
                return "bg-red-500"
            default:
                return "bg-gray-500"
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <header className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <Music className="w-8 h-8 text-pink-500 mr-2" />
                            <h1 className="text-3xl font-bold text-white">Song Selection</h1>
                        </div>
                        <div className="w-20"></div> {/* Empty div for balance */}
                    </header>

                    <div className="bg-black/60 rounded-lg border border-purple-500/50 overflow-hidden">
                        {/* Header Row */}
                        <div className="grid grid-cols-12 gap-4 p-4 text-white font-medium border-b border-purple-500/30">
                            <div className="col-span-5 md:col-span-6 flex items-center gap-2">
                                <Music className="w-4 h-4 text-pink-500" />
                                <span>Song</span>
                            </div>
                            <div className="col-span-3 md:col-span-2 flex items-center gap-1">
                                <Clock className="w-4 h-4 text-pink-500" />
                                <span className="hidden md:inline">Duration</span>
                            </div>
                            <div className="col-span-2 md:col-span-2 flex items-center gap-1">
                                <Mic className="w-4 h-4 text-pink-500" />
                                <span className="hidden md:inline">Highest</span>
                            </div>
                            <div className="col-span-2 md:col-span-2 flex items-center gap-1">
                                <BarChart className="w-4 h-4 text-pink-500" />
                                <span className="hidden md:inline">Difficulty</span>
                            </div>
                        </div>

                        {/* Song List */}
                        {songs.map((song) => (
                            <div
                                key={song.id}
                                className={`grid grid-cols-12 gap-4 p-4 text-white hover:bg-purple-900/30 transition-colors cursor-pointer ${
                                    selectedSong === song.id ? "bg-purple-900/40" : ""
                                }`}
                                onClick={() => setSelectedSong(song.id)}
                            >
                                <div className="col-span-5 md:col-span-6 flex items-center gap-3">
                                    <div className="w-12 h-12 relative rounded-md overflow-hidden flex-shrink-0">
                                        <img src={song.cover || "/placeholder.svg"} alt={song.title}  className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-medium line-clamp-1">{song.title}</div>
                                        <div className="text-sm text-white/70">{song.artist}</div>
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-2 flex items-center">{song.duration}</div>
                                <div className="col-span-2 md:col-span-2 flex items-center">
                                    <Badge variant="outline" className="border-pink-500/50 text-pink-500">
                                        {song.highestNote}
                                    </Badge>
                                </div>
                                <div className="col-span-2 md:col-span-2 flex items-center">
                                    <Badge className={`${getDifficultyColor(song.difficulty)} text-white`}>{song.difficulty}</Badge>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center mt-8">
                        <Link href={selectedSong ? `${route('karaoke.playing', selectedSong)}` : "#"}>
                            <Button size="lg" disabled={!selectedSong} className="bg-pink-500 hover:bg-pink-600 text-white">
                                {selectedSong ? "Start Singing" : "Select a Song"}
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}

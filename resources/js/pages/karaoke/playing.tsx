import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    ChevronLeft,
    Mic,
    MicOff,
    Music,
    Pause,
    Play,
    SkipBack,
    SkipForward,
    Trophy,
    Volume2,
    VolumeX
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

interface Song {
    id: string;
    title: string;
    artist: string;
    cover: string;
    duration: string;
    highestNote: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
    videoId: string;
    audioUrl: string; // Added audio URL field
    lyrics: {
        time: number;
        text: string;
        targetFreq: number;
    }[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Karaoke',
        href: '/karaoke',
    },
    {
        title: 'Playing',
        href: '/karaoke/playing',
    },
];
const parsePageId = (path) => path.substring(path.lastIndexOf('/') + 1);
const SONGS_DB: Record<string, Song> = {
    'apt': {
        id: 'apt',
        title: 'APT',
        artist: 'ROSÉ & Bruno Mars',
        cover: 'https://ikaraoke.assets.ivessamuel.tech/0184d76b913f34c9ca72faefb99e20d1.jpeg',
        duration: '2:48',
        highestNote: 'F4',
        difficulty: 'Medium',
        videoId: 'ekr2nIex040',
        audioUrl: 'https://ikaraoke.assets.ivessamuel.tech/apt [music].mp3', // Replace with actual MP3 URL
        lyrics: [
            {
                "time": 0.76,
                "text": "Chaeyeongiya joaneun",
                targetFreq: 100
            },
            {
                "time": 1.96,
                "text": "Raendeom geim",
                targetFreq: 100
            },
            {
                "time": 3.36,
                "text": "Raendeom geim",
                targetFreq: 100
            },
            {
                "time": 4.83,
                "text": "Game start",
                targetFreq: 100
            },
            {
                "time": 6.75,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 8.1,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 9.7,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 11.41,
                "text": "Uh, uh-huh, uh-huh",
                targetFreq: 100
            },
            {
                "time": 12.9,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 14.49,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 16.08,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 17.83,
                "text": "Uh, uh-huh, uh-huh",
                targetFreq: 100
            },
            {
                "time": 19.4,
                "text": "Kissy face, kissy face",
                targetFreq: 100
            },
            {
                "time": 20.89,
                "text": "Sent to your phone, but",
                targetFreq: 100
            },
            {
                "time": 22.64,
                "text": "I'm tryna kiss your lips for real (Uh-huh, uh-huh)",
                targetFreq: 100
            },
            {
                "time": 25.74,
                "text": "Red hearts, red hearts",
                targetFreq: 100
            },
            {
                "time": 27.33,
                "text": "That's what I'm on, yeah",
                targetFreq: 100
            },
            {
                "time": 29.29,
                "text": "Come give me somethin' I can feel, oh-oh-oh",
                targetFreq: 100
            },
            {
                "time": 32.14,
                "text": "Don't you want me like I want you, baby?",
                targetFreq: 100
            },
            {
                "time": 35.33,
                "text": "Don't you need me like I need you now?",
                targetFreq: 100
            },
            {
                "time": 38.54,
                "text": "Sleep tomorrow, but tonight, go crazy",
                targetFreq: 100
            },
            {
                "time": 41.77,
                "text": "All you gotta do is just meet me at the",
                targetFreq: 100
            },
            {
                "time": 45.09,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 46.66,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 48.21,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 49.95,
                "text": "Uh, uh-huh, uh-huh",
                targetFreq: 100
            },
            {
                "time": 51.55,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 53.11,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 54.67,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 56.57,
                "text": "Uh, uh-huh, uh-huh",
                targetFreq: 100
            },
            {
                "time": 57.98,
                "text": "It's whatever (Whatever), it's whatever (Whatever)",
                targetFreq: 100
            },
            {
                "time": 60.26,
                "text": "It's whatever (Whatever) you like (Woo)",
                targetFreq: 100
            },
            {
                "time": 61.3,
                "text": "Turn this apateu into a club (Uh-huh, uh-huh)",
                targetFreq: 100
            },
            {
                "time": 64.33,
                "text": "I'm talkin' drink, dance, smoke, freak, party all night (Come on)",
                targetFreq: 100
            },
            {
                "time": 67.67,
                "text": "Geonbae, geonbae, girl, what's up? Oh-oh-oh",
                targetFreq: 100
            },
            {
                "time": 70.69,
                "text": "Don't you want me like I want you, baby?",
                targetFreq: 100
            },
            {
                "time": 73.93,
                "text": "Don't you need me like I need you now?",
                targetFreq: 100
            },
            {
                "time": 77.1,
                "text": "Sleep tomorrow, but tonight, go crazy",
                targetFreq: 100
            },
            {
                "time": 80.28,
                "text": "All you gotta do is just meet me at the",
                targetFreq: 100
            },
            {
                "time": 83.66,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 85.28,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 86.9,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 88.57,
                "text": "Uh, uh-huh, uh-huh",
                targetFreq: 100
            },
            {
                "time": 90.11,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 91.68,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 93.29,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 94.9,
                "text": "Uh, uh-huh, uh-huh",
                targetFreq: 100
            },
            {
                "time": 96.6,
                "text": "Hey, so now you know the game",
                targetFreq: 100
            },
            {
                "time": 99.6,
                "text": "Are you ready? 'Cause I'm comin' to get ya, get ya, get ya",
                targetFreq: 100
            },
            {
                "time": 103.54,
                "text": "Hold on, hold on",
                targetFreq: 100
            },
            {
                "time": 105.29,
                "text": "I'm on my way",
                targetFreq: 100
            },
            {
                "time": 109.37,
                "text": "Yeah, yeah, yeah-yeah, yeah",
                targetFreq: 100
            },
            {
                "time": 111.87,
                "text": "I'm on my way",
                targetFreq: 100
            },
            {
                "time": 115.9,
                "text": "Hold on, hold on",
                targetFreq: 100
            },
            {
                "time": 118.26,
                "text": "I'm on my way",
                targetFreq: 100
            },
            {
                "time": 122.32,
                "text": "Yeah, yeah, yeah-yeah, yeah",
                targetFreq: 100
            },
            {
                "time": 124.57,
                "text": "I'm on my way",
                targetFreq: 100
            },
            {
                "time": 129.02,
                "text": "Don't you want me like I want you, baby?",
                targetFreq: 100
            },
            {
                "time": 131.96,
                "text": "Don't you need me like I need you now?",
                targetFreq: 100
            },
            {
                "time": 135.12,
                "text": "Sleep tomorrow, but tonight, go crazy",
                targetFreq: 100
            },
            {
                "time": 138.34,
                "text": "All you gotta do is just meet me at the",
                targetFreq: 100
            },
            {
                "time": 141.56,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 143.26,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 144.89,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 147.24,
                "text": "Just meet me at the (Uh-huh, uh-huh)",
                targetFreq: 100
            },
            {
                "time": 148.3,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 149.8,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 151.36,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 153.21,
                "text": "Just meet me at the (Uh-huh, uh-huh)",
                targetFreq: 100
            },
            {
                "time": 154.79,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 156.22,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 157.74,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 159.33,
                "text": "Just meet me at the (Uh-huh, uh-huh)",
                targetFreq: 100
            },
            {
                "time": 161.06,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 162.69,
                "text": "Apateu, apateu",
                targetFreq: 100
            },
            {
                "time": 164.22,
                "text": "Apateu, apateu",
                targetFreq: 100
            }
        ]
    },
    'dd616930-d8a4-4632-8ece-2de67b68becb': {
        id: 'dd616930-d8a4-4632-8ece-2de67b68becb',
        title: 'Twice Song',
        artist: 'Twice',
        cover: 'https://ikaraoke.assets.ivessamuel.tech/0184d76b913f34c9ca72faefb99e20d1.jpeg',
        duration: '2:05',
        highestNote: 'F4',
        difficulty: 'Easy',
        videoId: '8UyDyboPsUk',
        audioUrl: 'https://ikaraoke.assets.ivessamuel.tech/twice-song.mp3', // Replace with actual MP3 URL
        lyrics: [
            {
                time: 4.86,
                text: '{All}Nayeonie,Jeongyeon,Momo,Sana,Jihyo,Mina Dahyunie,Chaeyoung,Tzuyu...Uri baro TWICE~',
                targetFreq: 127.5,
            },
            {
                time: 10.67,
                text: '[All] Nayeonie,Jeongyeon,Momo,Sana,Jihyo,Mina Dahyunie,Chaeyoung,Tzuyu...Uri baro TWICE~TWICE~',
                targetFreq: 88.5,
            },
            {
                time: 17.35,
                text: '{Nayeon}Naineun madeoni!',
                targetFreq: 127.5,
            },
            {
                time: 18.92,
                text: 'Aegyo bomyeon makdungi!',
                targetFreq: 127.5,
            },
            {
                time: 20.57,
                text: 'Gwiyeoeun Kkaengineun',
                targetFreq: 127.5,
            },
            {
                time: 22.05,
                text: 'Eodieodi Inayeon?!',
                targetFreq: 127.5,
            },
            {
                time: 23.8,
                text: '{Jeongyeon}Danbalbyeong Yubalja',
                targetFreq: 127.5,
            },
            {
                time: 25.28,
                text: 'Geol Keureoshi Jeongyeon',
                targetFreq: 127.5,
            },
            {
                time: 26.89,
                text: 'Jeongyeonege ppajimyeon',
                targetFreq: 127.5,
            },
            {
                time: 28.51,
                text: 'Chulgu eobjeongyeon~',
                targetFreq: 127.5,
            },
            {
                time: 30.44,
                text: '{Momo}Mimoyongmo ildeungi',
                targetFreq: 127.5,
            },
            {
                time: 31.87,
                text: 'Daensingmeoshin Momo',
                targetFreq: 127.5,
            },
            {
                time: 33.39,
                text: 'Ireonge Momo',
                targetFreq: 127.5,
            },
            {
                time: 34.89,
                text: 'Haengbokiji Momo',
                targetFreq: 127.5,
            },
            {
                time: 36.64,
                text: '{Sana}Sana eobshin Sana mana',
                targetFreq: 127.5,
            },
            {
                time: 38.52,
                text: 'Shy Shy Shy~',
                targetFreq: 127.5,
            },
            {
                time: 39.92,
                text: 'Oppaya,Eonniya',
                targetFreq: 127.5,
            },
            {
                time: 41.36,
                text: 'Sana eobshi mon Sana!',
                targetFreq: 127.5,
            },
            {
                time: 43.17,
                text: '{All}OOH-AHH OOH-AHH',
                targetFreq: 127.5,
            },
            {
                time: 44.53,
                text: 'Hage mandeureo~',
                targetFreq: 127.5,
            },
            {
                time: 46.21,
                text: 'OOH-AHH OOH-AHH',
                targetFreq: 127.5,
            },
            {
                time: 47.68,
                text: 'Cheer up! Baby~',
                targetFreq: 127.5,
            },
            {
                time: 49.82,
                text: '{All}Nayeonie,Jeongyeon,Momo,Sana,Jihyo,Mina Dahyunie,Chaeyoung,Tzuyu...Uri baro TWICE~',
                targetFreq: 127.5,
            },
            {
                time: 56.17,
                text: '{All}Nayeonie,Jeongyeon,Momo,Sana,Jihyo,Mina Dahyunie,Chaeyoung,Tzuyu...Uri baro TWICE~TWICE~',
                targetFreq: 127.5,
            },
            {
                time: 62.75,
                text: '{Dahyun}Dubu!Dubu!dubdub',
                targetFreq: 127.5,
            },
            {
                time: 64.62,
                text: 'Dubu!Dubu! Dahyun~',
                targetFreq: 127.5,
            },
            {
                time: 66.01,
                text: 'Dubu!Dubu!dubdub',
                targetFreq: 127.5,
            },
            {
                time: 68.26,
                text: 'Dubu!Dahyunie~~',
                targetFreq: 127.5,
            },
            {
                time: 69.41,
                text: '{Jihyo}Shilmul yeoshin yeppeujihyo',
                targetFreq: 127.5,
            },
            {
                time: 70.93,
                text: 'Kkul boiseu nogjihyo',
                targetFreq: 127.5,
            },
            {
                time: 72.3,
                text: 'KNOCK!KNOCK!',
                targetFreq: 127.5,
            },
            {
                time: 73.35,
                text: 'KNOCK!KNOCK!',
                targetFreq: 127.5,
            },
            {
                time: 74.05,
                text: 'KNOCK JIHYO!!!!!!',
                targetFreq: 127.5,
            },
            {
                time: 75.57,
                text: '{Mina}Ballerina Mina~',
                targetFreq: 127.5,
            },
            {
                time: 77.1,
                text: 'Neomna bitna Mina~',
                targetFreq: 127.5,
            },
            {
                time: 78.64,
                text: 'Minamina Minari',
                targetFreq: 127.5,
            },
            {
                time: 80.41,
                text: 'Neomna yeppeun Miina!',
                targetFreq: 127.5,
            },
            {
                time: 82.01,
                text: '{Chaeyoung}Eonnie~Oppa~',
                targetFreq: 127.5,
            },
            {
                time: 83.6,
                text: 'Dongsaeng Maeum~',
                targetFreq: 99.5,
            },
            {
                time: 85.14,
                text: 'Chaeyoungiga chaegayeong~',
                targetFreq: 127.5,
            },
            {
                time: 88.19,
                text: '{Tzuyu}Shimkungjueui Tzuyu!',
                targetFreq: 127.5,
            },
            {
                time: 90.21,
                text: 'Kiwisamkeum Tzuyu!',
                targetFreq: 127.5,
            },
            {
                time: 91.67,
                text: 'Shimkungjeui Tzuyu!',
                targetFreq: 127.5,
            },
            {
                time: 93.24,
                text: 'Kiwisamkeum Tzuyu!',
                targetFreq: 127.5,
            },
            {
                time: 94.99,
                text: '{All}OOH-AHH OOH-AHH',
                targetFreq: 127.5,
            },
            {
                time: 96.5,
                text: 'Hage mandeureo~',
                targetFreq: 127.5,
            },
            {
                time: 98.14,
                text: 'OOH-AHH OOH-AHH',
                targetFreq: 127.5,
            },
            {
                time: 99.6,
                text: 'Cheer up! Baby~',
                targetFreq: 127.5,
            },
            {
                time: 101.46,
                text: '{All}Nayeonie,Jeongyeon,Momo,Sana,Jihyo,Mina Dahyunie,Chaeyoung,Tzuyu...Uri baro TWICE~',
                targetFreq: 127.5,
            },
            {
                time: 107.78,
                text: '{All}Nayeonie,Jeongyeon,Momo,Sana,Jihyo,Mina Dahyunie,Chaeyoung,Tzuyu...Uri baro TWICE~TWICE~',
                targetFreq: 127.5,
            },
            {
                time: 117.54,
                text: '{All}KNOCK!KNOCK!',
                targetFreq: 127.5,
            },
        ],
    },
};

export default function karaokePlaying() {
    const songId = parsePageId(window.location.pathname);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(80); // Default volume level
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
    const [micEnabled, setMicEnabled] = useState(false);
    const [score, setScore] = useState(0);
    const [currentVolumeLevel, setCurrentVolumeLevel] = useState(0);
    const [streak, setStreak] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [showScoreAnimation, setShowScoreAnimation] = useState(false);
    const [lastScoreAdded, setLastScoreAdded] = useState(0);
    const [userFrequency, setUserFrequency] = useState(0);
    const [targetFrequency, setTargetFrequency] = useState(0);
    const [pitchMatchPercentage, setPitchMatchPercentage] = useState(0);
    const [song, setSong] = useState<Song | null>(null);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);

    //const videoRef = useRef<HTMLIFrameElement>(null)

    const playerRef = useRef<never>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const micStreamRef = useRef<MediaStream | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        if (typeof songId === 'string' && SONGS_DB[songId]) {
            setSong(SONGS_DB[songId]);
        }
    }, [songId]);

    useEffect(() => {
        if (!song) return;

        // Load YouTube API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Initialize YouTube player when API is ready
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '100%',
                width: '100%',
                videoId: song.videoId,
                playerVars: {
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    rel: 0,
                    modestbranding: 1,
                    mute: 1, // Mute the YouTube video by default
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                },
            });
        };

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }

            // Clean up audio resources
            if (micStreamRef.current) {
                micStreamRef.current.getTracks().forEach((track) => track.stop());
            }

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            if (audioContextRef.current) {
                audioContextRef.current.close();
            }

            // Stop audio playback
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [song]);

    // Initialize audio player
    useEffect(() => {
        if (!song || !audioRef.current) return;

        // Set up audio element
        const audio = audioRef.current;
        audio.volume = volume / 100;

        // Set up audio event listeners
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });

        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
        });

        audio.addEventListener('ended', () => {
            setIsPlaying(false);
        });

        return () => {
            audio.removeEventListener('loadedmetadata', () => {});
            audio.removeEventListener('timeupdate', () => {});
            audio.removeEventListener('ended', () => {});
        };
    }, [song, volume]);

    useEffect(() => {
        if (!song) return;

        // Update current lyric based on time
        const updateLyricIndex = () => {
            for (let i = song.lyrics.length - 1; i >= 0; i--) {
                if (currentTime >= song.lyrics[i].time) {
                    setCurrentLyricIndex(i);
                    // Update target frequency based on current lyric
                    setTargetFrequency(song.lyrics[i].targetFreq);
                    break;
                }
            }
        };
        updateLyricIndex();
    }, [currentTime, song]);

    // Setup microphone and audio analysis
    const setupMicrophone = async () => {
        try {
            // Request microphone access
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            micStreamRef.current = stream;

            // Create audio context and analyzer
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContextRef.current = audioContext;

            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 2048; // Larger FFT size for better frequency resolution
            analyserRef.current = analyser;

            // Connect microphone to analyzer
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);

            // Start analyzing audio
            startAudioAnalysis();

            setMicEnabled(true);
            toast('Microphone enabled', {
                description: 'Your voice will now be analyzed and scored as you sing!',
            });
        } catch (error) {
            console.error('Error accessing microphone:', error);
            toast('Microphone access denied', {
                description: 'Please allow microphone access to use the scoring feature'
            });
        }
    };

    const startAudioAnalysis = () => {
        if (!analyserRef.current || !audioContextRef.current) return;

        const analyser = analyserRef.current;
        const audioContext = audioContextRef.current;

        // For volume analysis
        const volumeDataArray = new Uint8Array(analyser.frequencyBinCount);

        // For frequency analysis
        const frequencyDataArray = new Float32Array(analyser.frequencyBinCount);

        const analyzeAudio = () => {
            if (!analyserRef.current) return;

            // Get volume data
            analyser.getByteFrequencyData(volumeDataArray);

            // Get frequency data
            analyser.getFloatTimeDomainData(frequencyDataArray);

            // Calculate volume level (0-100)
            let sum = 0;
            for (let i = 0; i < volumeDataArray.length; i++) {
                sum += volumeDataArray[i];
            }
            const average = sum / volumeDataArray.length;
            const volumeLevel = Math.min(100, Math.round((average / 256) * 100));
            setCurrentVolumeLevel(volumeLevel);
            console.log(`Volume Level: ${volumeLevel}`);
            // Calculate dominant frequency using autocorrelation
            const dominantFrequency = detectPitch(frequencyDataArray, audioContext.sampleRate);
            if (dominantFrequency > 0 && volumeLevel > 4) {
                console.log(`Dominant Frequency: ${dominantFrequency} Hz`);
                setUserFrequency(Math.round(dominantFrequency));

                // Calculate how close the user's pitch is to the target
                const maxDistance = 100; // Hz
                const distance = Math.abs(dominantFrequency - targetFrequency);
                const match = Math.max(0, 100 - (distance / maxDistance) * 100);
                setPitchMatchPercentage(Math.round(match));
                console.log(`Pitch Match Percentage: ${match}%`);
                // Score calculation based on volume, timing, and pitch match
                if (isPlaying) {
                    // User is singing with sufficient volume
                    const basePoints = 1;
                    const pitchBonus = match / 25; // 0-4 points based on pitch match

                    // Increase streak when singing
                    setStreak((prev) => {
                        const newStreak = prev + 1;

                        // Update multiplier based on streak
                        if (newStreak % 50 === 0) {
                            setMultiplier((prev) => Math.min(4, prev + 0.5));
                        }

                        return newStreak;
                    });

                    // Calculate points with multiplier and pitch bonus
                    const pointsToAdd = Math.round((basePoints + pitchBonus) * multiplier);

                    // Add points to score
                    setScore((prev) => prev + pointsToAdd);
                    setLastScoreAdded(pointsToAdd);

                    // Show score animation
                    if (!showScoreAnimation) {
                        setShowScoreAnimation(true);
                        setTimeout(() => setShowScoreAnimation(false), 500);
                    }
                }
            } else {
                // If not singing or volume too low, set frequency to 0
                setUserFrequency(0);
                setPitchMatchPercentage(0);

                // Reset streak if not singing
                if (streak > 0 && volumeLevel <= 1) {
                    setStreak(0);

                    // Reset multiplier if streak is broken
                    if (multiplier > 1) {
                        setMultiplier(1);
                    }
                }
            }

            animationFrameRef.current = requestAnimationFrame(analyzeAudio);
        };

        animationFrameRef.current = requestAnimationFrame(analyzeAudio);
    };

    // Pitch detection using autocorrelation
    const detectPitch = (buffer: Float32Array, sampleRate: number): number => {
        // Implement autocorrelation for pitch detection
        const SIZE = buffer.length;
        const MAX_SAMPLES = Math.floor(SIZE / 2);
        const MIN_FREQ = 85; // Hz, around E2
        const MAX_FREQ = 1000; // Hz, around B5

        let bestOffset = -1;
        let bestCorrelation = 0;
        let rms = 0;

        // Calculate RMS (volume)
        for (let i = 0; i < SIZE; i++) {
            const val = buffer[i];
            rms += val * val;
        }
        rms = Math.sqrt(rms / SIZE);

        // Not enough signal
        if (rms < 0.01) return 0;

        // Find the best correlation
        for (let offset = Math.floor(sampleRate / MAX_FREQ); offset <= Math.floor(sampleRate / MIN_FREQ); offset++) {
            let correlation = 0;

            for (let i = 0; i < MAX_SAMPLES; i++) {
                correlation += Math.abs(buffer[i] - buffer[i + offset]);
            }

            correlation = 1 - correlation / MAX_SAMPLES;

            if (correlation > bestCorrelation) {
                bestCorrelation = correlation;
                bestOffset = offset;
            }
        }

        // Threshold for a good correlation
        if (bestCorrelation > 0.5) {
            return sampleRate / bestOffset;
        }

        return 0;
    };

    const toggleMicrophone = () => {
        if (micEnabled) {
            // Disable microphone
            if (micStreamRef.current) {
                micStreamRef.current.getTracks().forEach((track) => track.stop());
                micStreamRef.current = null;
            }

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }

            if (audioContextRef.current) {
                audioContextRef.current.close().then(() => {
                    audioContextRef.current = null;
                });
                audioContextRef.current = null;
            }

            analyserRef.current = null;
            setMicEnabled(false);
            setCurrentVolumeLevel(0);
            setUserFrequency(0);
            setPitchMatchPercentage(0);

            toast('Microphone disabled', {
                description: 'Scoring has been paused.',
            });
        } else {
            // Enable microphone
            setupMicrophone().then(() => {
                toast('Microphone enabled', {
                    description: 'Your voice will now be analyzed and scored as you sing!',
                });
            });
        }
    };

    const onPlayerReady = () => {
        // YouTube player is ready, but we'll use the audio element for actual playback
        if (playerRef.current) {
            // Make sure YouTube video is muted
            playerRef.current.mute();
        }
    };

    const onPlayerStateChange = () => {
        // We'll handle play state through our audio element, not YouTube
    };

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            if (playerRef.current) {
                playerRef.current.pauseVideo();
            }
        } else {
            audioRef.current.play();
            if (playerRef.current) {
                playerRef.current.playVideo();
            }
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!audioRef.current) return;

        if (isMuted) {
            audioRef.current.volume = volume / 100;
        } else {
            audioRef.current.volume = 0;
        }
        setIsMuted(!isMuted);
        setShowVolumeSlider(true);

        // Hide volume slider after 3 seconds
        setTimeout(() => {
            setShowVolumeSlider(false);
        }, 3000);
    };

    const handleVolumeChange = (value: number[]) => {
        if (!audioRef.current) return;

        const newVolume = value[0];
        setVolume(newVolume);
        audioRef.current.volume = newVolume / 100;

        if (newVolume === 0) {
            setIsMuted(true);
        } else if (isMuted) {
            setIsMuted(false);
        }
    };

    const handleSeek = (value: number[]) => {
        if (!audioRef.current) return;

        const seekTime = (value[0] / 100) * duration;
        audioRef.current.currentTime = seekTime;

        if (playerRef.current) {
            playerRef.current.seekTo(seekTime);
        }

        setCurrentTime(seekTime);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const skipForward = () => {
        if (!audioRef.current) return;

        const newTime = Math.min(currentTime + 10, duration);
        audioRef.current.currentTime = newTime;

        if (playerRef.current) {
            playerRef.current.seekTo(newTime);
        }

        setCurrentTime(newTime);
    };

    const skipBackward = () => {
        if (!audioRef.current) return;

        const newTime = Math.max(currentTime - 10, 0);
        audioRef.current.currentTime = newTime;

        if (playerRef.current) {
            playerRef.current.seekTo(newTime);
        }

        setCurrentTime(newTime);
    };

    // Convert frequency to note name
    const getNoteName = (frequency: number): string => {
        if (frequency <= 0) return '-';

        const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const a4 = 440;
        const a4Index = 69; // MIDI note number for A4

        // Calculate the number of half steps away from A4
        const halfSteps = Math.round(12 * Math.log2(frequency / a4));
        const midiNote = a4Index + halfSteps;

        // Calculate the octave and note index
        const octave = Math.floor((midiNote - 12) / 12);
        const noteIndex = (midiNote - 12) % 12;

        return noteNames[noteIndex] + octave;
    };

    if (!song) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-900 to-black">
                <div className="text-2xl text-white">Loading...</div>
            </div>
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Playing" />
            <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-900 to-black">
                {/* Hidden audio element for playing the song */}
                <audio ref={audioRef} src={song.audioUrl} preload="auto" />

                <div className="flex-grow p-4 md:p-8">
                    <div>
                        <header className="mb-4 flex items-center justify-between">

                            <div className="flex items-center">
                                <Music className="mr-2 h-8 w-8 text-pink-500" />
                                <div className="text-center text-white">
                                    <h1 className="text-xl font-bold">{song.title}</h1>
                                    <p className="text-sm text-white/70">{song.artist}</p>
                                </div>
                            </div>

                            {/* Score Display */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 rounded-lg border border-purple-500/50 bg-black/60 p-2">
                                    <Trophy className="h-5 w-5 text-yellow-400" />
                                    <span className="text-xl font-bold text-white">{score.toLocaleString()}</span>

                                    {/* Score Animation */}
                                    {showScoreAnimation && <span className="animate-bounce text-sm font-bold text-green-400">+{lastScoreAdded}</span>}
                                </div>

                                {/* Multiplier */}
                                {multiplier > 1 && (
                                    <div className="rounded-lg border border-purple-500/50 bg-black/60 p-2">
                                        <span className="text-sm font-bold text-yellow-400">{multiplier}x</span>
                                    </div>
                                )}

                                {/* Mic Toggle Button */}
                                <Button
                                    variant={micEnabled ? 'default' : 'outline'}
                                    size="icon"
                                    onClick={toggleMicrophone}
                                    className={`rounded-full ${micEnabled ? 'bg-pink-500 hover:bg-pink-600' : 'border-purple-500/50 text-white'}`}
                                >
                                    {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                                </Button>
                            </div>
                        </header>
                        <div className="bg-black/60 rounded-lg p-4 border border-purple-500/50 mb-4">
                            <div className="space-y-3 py-2">
                                {/* Previous line */}
                                {currentLyricIndex > 0 && (
                                    <div
                                        className="text-center text-lg text-white/70">{song.lyrics[currentLyricIndex - 1].text}</div>
                                )}

                                {/* Current line */}
                                <div
                                    className={`text-center text-2xl font-bold ${
                                        micEnabled && currentVolumeLevel > 15
                                            ? pitchMatchPercentage > 70
                                                ? "text-green-400 scale-105"
                                                : pitchMatchPercentage > 40
                                                    ? "text-yellow-400 scale-105"
                                                    : "text-pink-500 scale-105"
                                            : "text-pink-500"
                                    } transition-all duration-200 drop-shadow-lg`}
                                >
                                    {song.lyrics[currentLyricIndex].text}
                                </div>

                                {/* Next line */}
                                {currentLyricIndex < song.lyrics.length - 1 && (
                                    <div
                                        className="text-center text-lg text-white/70">{song.lyrics[currentLyricIndex + 1].text}</div>
                                )}
                            </div>
                        </div>
                        <div className="relative">
                            <Card className="bg-black/60 border-purple-500/50 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="aspect-video relative bg-black">
                                        <div id="youtube-player" className="w-full h-full"></div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="bg-black/60 rounded-lg p-4 border border-purple-500/50 mt-4">
                            <div className="flex flex-col gap-4">
                                {/* Progress Bar */}
                                <div className="w-full">
                                    <Slider
                                        value={[currentTime ? (currentTime / duration) * 100 : 0]}
                                        onValueChange={handleSeek}
                                        className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-purple-900 [&_[role=slider]]:bg-pink-500 [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-pink-500"
                                    />
                                    <div className="flex justify-between mt-1">
                                        <div className="text-sm text-white">{formatTime(currentTime)}</div>
                                        <div className="text-sm text-white">{formatTime(duration)}</div>
                                    </div>
                                </div>

                                {/* Control Buttons */}
                                <div className="flex items-center justify-center gap-4">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={skipBackward}
                                        className="text-white hover:bg-purple-900/50"
                                    >
                                        <SkipBack className="w-6 h-6"/>
                                    </Button>

                                    <Button
                                        variant="default"
                                        size="icon"
                                        onClick={togglePlay}
                                        className="w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-600"
                                    >
                                        {isPlaying ? <Pause className="w-6 h-6"/> : <Play className="w-6 h-6"/>}
                                    </Button>

                                    <Button variant="ghost" size="icon" onClick={skipForward}
                                            className="text-white hover:bg-purple-900/50">
                                        <SkipForward className="w-6 h-6"/>
                                    </Button>

                                    <div className="relative">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={toggleMute}
                                            className="text-white hover:bg-purple-900/50"
                                        >
                                            {isMuted ? <VolumeX className="w-6 h-6"/> : <Volume2 className="w-6 h-6"/>}
                                        </Button>

                                        {/* Volume Slider (shows when volume button is clicked) */}
                                        {showVolumeSlider && (
                                            <div
                                                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-black/80 rounded-lg border border-purple-500/50 w-32">
                                                <Slider
                                                    value={[volume]}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    onValueChange={handleVolumeChange}
                                                    className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-purple-900 [&_[role=slider]]:bg-pink-500 [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-pink-500"
                                                />
                                                <div className="text-xs text-white text-center mt-1">{volume}%</div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Music, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black p-4 md:p-8">
                <div className="max-w-6xl mx-auto">
                    <header className="flex items-center justify-center mb-12">
                        <Settings className="w-10 h-10 text-pink-500 mr-3" />
                        <h1 className="text-4xl font-bold text-white">VoiceVerse</h1>
                    </header>

                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Sing Your Heart Out!</h2>
                        <p className="text-lg text-white/80 max-w-2xl mb-8">
                            Welcome to VoiceVerse where you can sing along to your favorite songs, get real-time feedback on your
                            pitch, and compete for the highest score!
                        </p>
                        <div className="flex flex-row items-center text-center mb-12">
                            {auth.user ? (
                                <Button
                                    onClick={() => {
                                        window.location.href = route('dashboard');
                                    }}
                                    variant="outline" className="w-30 cursor-pointer"
                                >
                                    Dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => {
                                            window.location.href = route('login');
                                        }}
                                        variant="outline" className="w-30 cursor-pointer"
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            window.location.href = route('register');
                                        }}
                                        variant="outline" className="w-30 ml-10 cursor-pointer"
                                    >
                                        Register
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <Card className="bg-black/40 border-purple-500/50">
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center">
                                        <Music className="w-8 h-8 text-pink-500" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-2">Real-time Feedback</h3>
                                <p className="text-white/70 text-center">
                                    Get instant feedback on your pitch and timing as you sing along
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-black/40 border-purple-500/50">
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-8 h-8 text-purple-500"
                                        >
                                            <path d="M12 8L6 14L8 16L12 12L16 16L18 14L12 8Z" />
                                            <circle cx="12" cy="4" r="2" />
                                            <path d="M16 10L18 12L21 9" />
                                            <path d="M8 10L6 12L3 9" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-2">Pitch Visualization</h3>
                                <p className="text-white/70 text-center">
                                    See exactly how your voice matches the target notes in real-time
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-black/40 border-purple-500/50">
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-8 h-8 text-indigo-500"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-2">Score Points</h3>
                                <p className="text-white/70 text-center">
                                    Earn points for accuracy and build up streaks for higher multipliers
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

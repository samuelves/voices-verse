import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    BarChart,
    CheckCircle,
    Mic,
    Music,
    Play,
    Settings,
    Smartphone,
    Star,
    Trophy,
    Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const peepoGifs = ['pepe-singing.gif', 'dj-party.gif', 'pepe-sing-peepo-sing.gif']
    const randomGif = peepoGifs[Math.floor(Math.random() * peepoGifs.length)];
    const { t } = useLaravelReactI18n();
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-purple-900 via-violet-800 to-black">
                <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm fixed w-full z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <a href="/" className="flex items-center">
                                    <Music className="h-8 w-8 text-pink-500" />
                                    <span className="ml-2 text-2xl font-bold text-white">{t('app_name')}</span>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-8">
                                <a href="#features" className="text-white/80 hover:text-white transition-colors">
                                    {t('features')}
                                </a>
                                <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
                                    {t('how_it_works')}
                                </a>
                                <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
                                    {t('pricing')}
                                </a>
                                <a href="/leaderboard" className="text-white/80 hover:text-white transition-colors">
                                    {t('leaderboard')}
                                </a>
                                <a href="/login">
                                    <Button variant="outline" className="border-pink-500/50 text-white hover:bg-pink-500/20">
                                        {t('login')}
                                    </Button>
                                </a>
                                <a href="/register">
                                    <Button className="bg-pink-500 hover:bg-pink-600 text-white">{t('sign_up_free')}</Button>
                                </a>
                            </div>
                            <div className="flex items-center md:hidden">
                                <Button variant="ghost" size="icon" className="text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="lg:w-1/2 lg:pr-12">
                                <Badge className="mb-4 bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 transition-colors">
                                    {t('t_u_o_k_e')}
                                </Badge>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    {t('s_y_h_o')} <span className="text-pink-500">{t('a_a')}</span>
                                </h1>
                                <p className="text-xl text-white/80 mb-8 max-w-2xl">
                                    {t('the_prime_platform')}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/register">
                                        <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white w-full sm:w-auto">
                                            Get Started Free
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </a>
                                    <a href="#how-it-works">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                                        >
                                            <Play className="mr-2 h-5 w-5" />
                                            See How It Works
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="lg:w-1/2 mt-12 lg:mt-0">
                                <div className="relative">
                                    <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-500/30 rounded-full filter blur-3xl opacity-70"></div>
                                    <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-70"></div>
                                    <div className="relative bg-gradient-to-br from-black/40 to-purple-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                        <div className="aspect-video relative">
                                            <img
                                                src={randomGif}
                                                alt="VoicesVerse Demo"
                                                width={800}
                                                height={600}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 transition-colors">Features</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Shine</h2>
                            <p className="text-xl text-white/70 max-w-3xl mx-auto">
                                VoicesVerse combines cutting-edge technology with a passion for music to deliver the ultimate karaoke
                                experience.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden hover:border-pink-500/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                        <Mic className="h-6 w-6 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Real-time Feedback</h3>
                                    <p className="text-white/70">
                                        Get instant pitch and timing feedback as you sing, helping you improve with every note.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Feature 2 */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden hover:border-pink-500/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                        <Music className="h-6 w-6 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Massive Song Library</h3>
                                    <p className="text-white/70">
                                        Access thousands of songs across all genres, with new additions every week.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Feature 3 */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden hover:border-pink-500/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                        <Trophy className="h-6 w-6 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Competitions & Ranking</h3>
                                    <p className="text-white/70">
                                        Compete in weekly contests, climb the leaderboard, and earn exclusive rewards.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Feature 4 */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden hover:border-pink-500/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                        <Users className="h-6 w-6 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Social Community</h3>
                                    <p className="text-white/70">
                                        Connect with fellow singers, share performances, and collaborate on duets.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Feature 5 */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden hover:border-pink-500/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                        <BarChart className="h-6 w-6 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Performance Analytics</h3>
                                    <p className="text-white/70">
                                        Track your progress over time with detailed stats and personalized improvement tips.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Feature 6 */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden hover:border-pink-500/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                        <Smartphone className="h-6 w-6 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Sing Anywhere</h3>
                                    <p className="text-white/70">
                                        Enjoy VoicesVerse on any device - desktop, tablet, or mobile - no downloads required.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 transition-colors">
                                How It Works
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Singing in Three Simple Steps</h2>
                            <p className="text-xl text-white/70 max-w-3xl mx-auto">
                                VoicesVerse makes it easy to jump right in and start performing your favorite songs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <div className="relative">
                                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-pink-500/20 to-transparent opacity-30 rounded-3xl"></div>
                                <div className="bg-black/40 border border-white/10 rounded-3xl p-8 h-full">
                                    <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center mb-6 text-white font-bold text-xl">
                                        1
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Create Your Account</h3>
                                    <p className="text-white/70 mb-6">
                                        Sign up for free in seconds using your email or Google account. No credit card required to get
                                        started.
                                    </p>
                                    <img
                                        src="/placeholder.svg?height=200&width=300&text=Sign+Up"
                                        alt="Sign Up"
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative mt-10 md:mt-20">
                                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/20 to-transparent opacity-30 rounded-3xl"></div>
                                <div className="bg-black/40 border border-white/10 rounded-3xl p-8 h-full">
                                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-6 text-white font-bold text-xl">
                                        2
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Choose Your Song</h3>
                                    <p className="text-white/70 mb-6">
                                        Browse our extensive library and select a song that matches your style and vocal range.
                                    </p>
                                    <img
                                        src="/placeholder.svg?height=200&width=300&text=Song+Selection"
                                        alt="Song Selection"
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative mt-10 md:mt-40">
                                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-violet-500/20 to-transparent opacity-30 rounded-3xl"></div>
                                <div className="bg-black/40 border border-white/10 rounded-3xl p-8 h-full">
                                    <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center mb-6 text-white font-bold text-xl">
                                        3
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Sing & Share</h3>
                                    <p className="text-white/70 mb-6">
                                        Perform your song with real-time feedback, save your performance, and share it with the community.
                                    </p>
                                    <img
                                        src="/placeholder.svg?height=200&width=300&text=Perform"
                                        alt="Perform"
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 transition-colors">Pricing</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Perfect Plan</h2>
                            <p className="text-xl text-white/70 max-w-3xl mx-auto">
                                Flexible options to match your singing ambitions, with no hidden fees.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Free Plan */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden">
                                <CardContent className="p-8">
                                    <h3 className="text-xl font-bold text-white mb-2">Free</h3>
                                    <p className="text-white/70 mb-6">Perfect for casual singers</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">$0</span>
                                        <span className="text-white/70">/month</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Access to 100+ songs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Basic pitch feedback</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Community access</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">5 recordings per month</span>
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-white text-purple-900 hover:bg-white/90">Get Started</Button>
                                </CardContent>
                            </Card>

                            {/* Premium Plan */}
                            <Card className="bg-gradient-to-b from-pink-500/20 to-purple-500/20 border-pink-500/50 overflow-hidden relative transform md:scale-105 md:-translate-y-2 shadow-xl">
                                <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                                    Most Popular
                                </div>
                                <CardContent className="p-8">
                                    <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                                    <p className="text-white/70 mb-6">For dedicated vocalists</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">$9.99</span>
                                        <span className="text-white/70">/month</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Access to 5,000+ songs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Advanced pitch & timing feedback</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Performance analytics</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Unlimited recordings</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Ad-free experience</span>
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Start 7-Day Free Trial</Button>
                                </CardContent>
                            </Card>

                            {/* Pro Plan */}
                            <Card className="bg-black/40 border-purple-500/30 overflow-hidden">
                                <CardContent className="p-8">
                                    <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                                    <p className="text-white/70 mb-6">For serious performers</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">$19.99</span>
                                        <span className="text-white/70">/month</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Everything in Premium</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Professional vocal effects</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Priority in competitions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">1-on-1 coaching session monthly</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">Exclusive Pro-only events</span>
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-white/10 text-white hover:bg-white/20 border border-white/20">
                                        Start 7-Day Free Trial
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl opacity-70 blur-3xl"></div>
                    </div>
                    <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-12 relative z-10">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Voice?</h2>
                            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                                Join thousands of singers worldwide on VoicesVerse today. No equipment needed - just your voice and
                                passion for music.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="/signup">
                                    <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white w-full sm:w-auto">
                                        Get Started Free
                                    </Button>
                                </a>
                                <a href="/songs">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                                    >
                                        Browse Songs
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-black/80 border-t border-white/10 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            <div className="col-span-2">
                                <div className="flex items-center mb-4">
                                    <Music className="h-8 w-8 text-pink-500" />
                                    <span className="ml-2 text-2xl font-bold text-white">VoicesVerse</span>
                                </div>
                                <p className="text-white/60 mb-4 max-w-xs">
                                    The premier online karaoke platform for singers of all levels. Sing, compete, and connect with a global
                                    community.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-4">Product</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#features" className="text-white/60 hover:text-white transition-colors">
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pricing" className="text-white/60 hover:text-white transition-colors">
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Songs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Competitions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Community
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-4">Support</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Tutorials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            System Status
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Press
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                                            Partners
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-white/60 text-sm mb-4 md:mb-0">
                                &copy; {new Date().getFullYear()} VoicesVerse. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Contributors } from './components/Contributors';
import { Footer } from './components/Footer';
import { AtmosphereBackground } from './components/AtmosphereBackground';
import { Section, SectionTitle } from './components/Section';
import { SplashScreen } from './components/SplashScreen';
import { CautionScreen } from './components/CautionScreen';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [stage, setStage] = useState<'initial' | 'caution' | 'splash' | 'main'>('initial');

  useEffect(() => {
    // Check if flow has been complete in this session
    const hasFinishedFlow = sessionStorage.getItem('tsm_flow_complete');
    if (hasFinishedFlow) {
      setStage('main');
    } else {
      setStage('caution');
    }
  }, []);

  const handleCautionAccept = () => {
    setStage('splash');
  };

  const handleSplashComplete = () => {
    sessionStorage.setItem('tsm_flow_complete', 'true');
    setStage('main');
  };

  const handleLogoClick = () => {
    sessionStorage.removeItem('tsm_flow_complete');
    setStage('caution');
  };

  return (
    <div className="min-h-screen selection:bg-sky-500/30 selection:text-sky-200 bg-[#030712]">
      <AnimatePresence mode="wait">
        {stage === 'caution' && (
          <CautionScreen key="caution" onAccept={handleCautionAccept} />
        )}
        {stage === 'splash' && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
      
      {/* Background always present but might be covered by splash/caution */}
      <AtmosphereBackground />
      
      {/* Only show main content when ready, or allow it to be under the overlays if they are absolute */}
      <div className={stage === 'main' ? 'opacity-100' : 'opacity-0 pointer-events-none'}>
        <Navbar onLogoClick={handleLogoClick} />
        
        <main>
          <Hero />
          
          <Section id="about" className="bg-white/[0.01] border-y border-white/5">
            <SectionTitle
              title="The Vision"
              subtitle="TSM was created with the ultimate goal of being the only mod you will ever need while playing Sky."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  Our vision is to enhance the gaming experience by integrating a comprehensive range
                  of functionalities, all accessible through an intuitive mod menu interface.
                </p>
                <p>
                  TSM is designed as a complete toolkit that gives players maximum freedom to enjoy
                  the best aspects of Sky while minimizing tedious elements like grinding.
                </p>
              </div>
              <div className="relative p-12 glass rounded-[3rem] text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent -z-10" />
                <h4 className="text-3xl font-serif text-white mb-6 italic">"Complete Player Freedom"</h4>
                <p className="text-slate-500 text-sm uppercase tracking-[0.3em] font-bold">The Core Philosophy</p>
              </div>
            </div>

            <div className="mt-20 pt-20 border-t border-white/10">
              <SectionTitle
                title="Project Overview"
                subtitle="A public collection of mods for Sky: Children of the Light, organized into specialized categories."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Canvas</h3>
                    <p className="text-sm leading-relaxed">A lightweight wrapper around the Sky app that facilitates the creation and use of plug-ins. Modular architecture allows loading existing plug-ins or writing your own.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">GameGuardian</h3>
                    <p className="text-sm leading-relaxed">A tool that enables the modification of game data on Android devices by editing the device's Random Access Memory (RAM).</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">LUA Scripts</h3>
                    <p className="text-sm leading-relaxed">A variety of LUA scripts offering diverse modifications and enhancements for the game experience.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Virtual Spaces</h3>
                    <p className="text-sm leading-relaxed">Environments allowing for the execution of modified apps on Android devices without the need for root access.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-serif text-white mb-6">Our Goal</h3>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                To democratize game customization, allowing all players to discover and enjoy new ways of experiencing games beyond the standard gameplay.
              </p>
            </div>

            <div className="mt-20 pt-20 border-t border-white/10">
              <SectionTitle
                title="Getting Started with ThatSkyApp"
                subtitle="Follow these essential steps to safely install and configure ThatSkyApp.exe"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9c74866fcfb14f7fbf68c14610585366%2F759ab4470b824c27a137cc2c86ec23e0?format=webp&width=800&height=1200"
                alt="ThatSkyApp setup instructions"
                className="hidden w-full max-w-3xl mx-auto mb-12 rounded-2xl"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white font-bold text-sm">1</div>
                    <h4 className="text-lg font-semibold text-white">Choose Safe Install Location</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">Keep the mod outside the game's root folder. Use a separate folder that contains TSM.dll and the TSM Resources folder.</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white font-bold text-sm">2</div>
                    <h4 className="text-lg font-semibold text-white">Setup Menu Keybinds</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">Use the mod settings to configure menu visibility and cursor behavior to your preference.</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white font-bold text-sm">3</div>
                    <h4 className="text-lg font-semibold text-white">Prepare Your System</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">Install VC Redist and remove conflicting software like TikTok Live Studio before injecting.</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-20 border-t border-white/10">
              <SectionTitle
                title="Canvas Guide"
                subtitle="Learn about Canvas, Sky Modloader, and the available libraries."
              />

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What is Canvas?</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Canvas, also known as Sky Modloader, is a lightweight wrapper around the Sky app made by @artdeell and @lukas0x1. It takes up only ~15 MB of storage and hooks into Sky at runtime, acting as a "bridge" that provides an interface for developers to build plug-ins on. It's completely modular, so you can load existing plug-ins or write your own.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    The main advantage of Canvas over traditional mods is that it doesn't require elevated privileges or any specific programming skills. However, Canvas requires libraries to be fully operational.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Available Libraries (Libs)</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Userlibs, or simply Libs, are fan-made helper programs for Canvas that unleash its true power. Some include Auto CRing, melting, spell modification, and more.
                  </p>
                  <div className="space-y-4">
                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-white mb-2">libTSM</h4>
                      <p className="text-sm text-slate-400">Android port of That Sky Mod by @XeTrinityz, providing a unified mod menu for Sky: Children of the Light. Designed for use with Canvas on Android; regularly updated to match the latest Sky versions.</p>
                    </div>
                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-white mb-2">libAuthPuller</h4>
                      <p className="text-sm text-slate-400">Misc/dev library that extracts Sky account identifiers (Sky ID/session ID) at runtime for development, debugging, and automation testing. Dev-only: use in controlled environments with explicit consent.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-red-400 mb-4">Discontinued Libraries - Do Not Use</h3>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li><strong className="text-white">AutoWax / libaw4c</strong> - Development stopped</li>
                    <li><strong className="text-white">libdukun</strong> - Merged into liblangit</li>
                    <li><strong className="text-white">libLangit / Dukun Langit</strong> - Discontinued as Canvas library. Now closed, paywalled, obfuscated, and reliant on private servers. Users report bans and telemetry. Not recommended.</li>
                    <li><strong className="text-white">libsMite</strong> - No further updates</li>
                    <li><strong className="text-white">reHell / libgxost</strong> - No longer maintained</li>
                    <li><strong className="text-white">libHellboy</strong> - No longer maintained</li>
                    <li><strong className="text-white">libRomanDev</strong> - Now restricted access</li>
                    <li><strong className="text-white">libRomanBeta</strong> - Defunct after TGC closed beta builds</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Is Canvas Safe?</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Canvas, at its core, is generally safe from a programming standpoint, with its source code being available to the public. This contributes to transparency and allows others to view, use, and modify its source code.
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Canvas does permit modifications to take complete charge of your Sky instance, which includes access to your account information. Exercising discretion and considering user reviews prior to usage is strongly recommended.
                  </p>
                  <p className="text-yellow-400/80 leading-relaxed bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                    <strong>Important:</strong> Certain modifications present features viewed as 'risky', such as spam honk, teleportation by coordinates, and auto melt. These can attract attention and potentially result in reporting to TGC. Any actions related to cheating, hacking or exploiting are expressly forbidden by TGC's EULA/ToS. Accounts identified as participating in these activities may be subject to permanent closure.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">System Requirements</h3>
                  <ul className="text-slate-400 space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-400 mt-1">•</span>
                      <span>A mobile phone capable of running Sky</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-400 mt-1">•</span>
                      <span>Android version 8.0 (Oreo) or higher</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-400 mt-1">•</span>
                      <span>Root is not necessary, but understanding of sideloading and technical troubleshooting is helpful</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-400 mt-1">•</span>
                      <span>Apple iOS and emulators are not supported</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <Features />
          
          <Contributors />
        </main>

        <Footer />
      </div>
    </div>
  );
}

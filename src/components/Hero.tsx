/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Trophy, BookOpen, Layers, ShieldCheck, Zap, Orbit, Sparkles, Pin, Eye, Info, X } from 'lucide-react';

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

interface Hotspot {
  id: string;
  title: string;
  subject: string;
  description: string;
  top: string;
  left: string;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // HUD stats to overlay on the Spline viewport, mimicking Tesla's advanced telemetry
  const hudStats = [
    { label: 'COGNITIVE CPU', value: 'NVIDIA DRIVE Orin' },
    { label: 'DEGREES OF FREEDOM', value: '42 Active Joints' },
    { label: 'ACTUATOR TORQUE', value: '150 Nm peak' },
    { label: 'DURABILITY', value: 'Mil-Spec Alloy' }
  ];

  // Premium Robot Annotations
  const hotspots: Hotspot[] = [
    {
      id: 'brain',
      title: '기가 인지 뉴로모픽 브레인',
      subject: 'COGNITIVE CORE',
      description: '인간의 커뮤니케이션 감각을 학습한 800 TFLOPS 연산 칩셋. 김하쿠 전용 모델 임베딩 가속.',
      top: '18%',
      left: '49%'
    },
    {
      id: 'vision',
      title: '전방위 입체 비전 센서',
      subject: 'STEREO VISION',
      description: 'HDR 깊이 측정 스테레오 카메라 및 공간 분해능을 증폭하는 소형 LiDAR 어레이 탑재.',
      top: '23%',
      left: '46%'
    },
    {
      id: 'hand',
      title: '114포인트 촉약 제어 손',
      subject: 'TACTILE ACTUATOR',
      description: '각 손가락 마디마디 압격 분산 센서를 배치하여 물체의 연강 압축을 감지 및 정밀 파지.',
      top: '46%',
      left: '26%'
    },
    {
      id: 'joints',
      title: '고정밀 하모닉 드라이브',
      subject: 'ROTARY JOINT',
      description: '부드러운 유기적 선회 반경과 회전 모멘트 부하를 완화하는 전신 42유엔 전동 시스템.',
      top: '54%',
      left: '36%'
    },
    {
      id: 'power',
      title: '옵티머스 리퀴드 메탈 셀',
      subject: 'POWERCELL ARCH',
      description: '안전성 마진을 극대화한 독자 규격 액체 전해질 배터리 전지. 최대 8시간 실무 교육.',
      top: '44%',
      left: '54%'
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-white pt-24 pb-16 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
      
      {/* Absolute Decorative Purple Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-100/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-slate-100/40 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 z-10 flex-grow flex flex-col items-center">
        
        {/* Title Content */}
        <div className="text-center max-w-3xl mt-6 mb-8 animate-fadeIn">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-purple-700 uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>KIMI HAKU • COGNITIVE GIGA EDUCATION</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-bold text-slate-950 tracking-tight leading-[1.1] mb-5"
          >
            김하쿠를 사랑하는 아기구미 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-slate-950">
              기가 로봇 교육의 시작
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            차세대 테슬라 옵티머스 철학을 담은 최첨단 로보틱스 교육 플랫폼. <br className="hidden sm:inline" />
            NexBot 자율 지능 로봇과 기가 스케일 인지 교육이 만드는 완벽한 미래 기술을 경험하세요.
          </motion.p>
        </div>

        {/* 3D Spline Interactive Asset Area */}
        <div 
          className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9] min-h-[460px] sm:min-h-[520px] bg-slate-50 rounded-3xl border border-slate-100 shadow-[0_15px_40px_-20px_rgba(15,23,42,0.1)] overflow-hidden flex flex-col items-center justify-center transition-all duration-300"
          id="spline-hero-container"
        >
          {/* Subtle Frame Corner Markers */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-slate-300 pointer-events-none rounded-tl-sm" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-slate-300 pointer-events-none rounded-tr-sm" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-slate-300 pointer-events-none rounded-bl-sm" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-slate-300 pointer-events-none rounded-br-sm" />

          {/* Interactive Core Overlay Tooltips */}
          <div className="absolute top-4 left-6 z-20 flex items-center space-x-1.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-[10px] font-mono text-slate-300">
            <Orbit className="w-3 h-3 text-purple-400 rotate-spin duration-300" />
            <span className="font-semibold uppercase tracking-wider">3D INTERACTIVE VIEWPORT</span>
          </div>

          <div className="absolute top-4 right-6 z-20 flex items-center space-x-3">
            {/* Toggle Annotations Controls */}
            <button
              onClick={() => setShowAnnotations(!showAnnotations)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                showAnnotations 
                  ? 'bg-purple-600 text-white border border-purple-500 shadow-sm' 
                  : 'bg-white/80 backdrop-blur-md text-slate-500 border border-slate-200 hover:text-slate-800'
              }`}
            >
              <Pin className="w-3.5 h-3.5" />
              <span>어노테이션 라벨: {showAnnotations ? 'ON' : 'OFF'}</span>
            </button>
            
            <div className="hidden sm:flex items-center space-x-1 bg-white/70 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-slate-200 text-[9px] font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>MODEL LIVED ON</span>
            </div>
          </div>

          {/* Loading Skeleton */}
          {!iframeLoaded && (
            <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center space-y-4 z-10">
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 border-t-purple-600 animate-spin" />
              <p className="text-xs font-mono font-medium text-slate-400 tracking-wider uppercase">Loading Interactive NexBot v1.0...</p>
            </div>
          )}

          {/* Spline Interactive Iframe */}
          <iframe 
            src="https://my.spline.design/nexbotrobotcharacterconcept-spOG3kj76ru9DEdKFmhH3UQw/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            referrerPolicy="no-referrer"
            title="Spline NexBot 3D Robot Concept"
            id="spline-robot-view"
            className="w-full h-full"
            onLoad={() => setIframeLoaded(true)}
          />

          {/* Interactive Custom Annotations - Pulsing hotspots overlays */}
          {iframeLoaded && showAnnotations && (
            <div className="absolute inset-0 pointer-events-none z-20">
              {hotspots.map((spot) => {
                const isActive = activeHotspot === spot.id;
                return (
                  <div
                    key={spot.id}
                    className="absolute"
                    style={{ top: spot.top, left: spot.left }}
                  >
                    {/* Pulsing trigger dot */}
                    <button
                      onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                      onMouseEnter={() => setActiveHotspot(spot.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      className="relative block w-5 h-5 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group focus:outline-none cursor-pointer"
                    >
                      <span className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping group-hover:bg-purple-500/40" />
                      <span className={`absolute inset-1 rounded-full border border-white transition-all duration-350 shadow-md ${
                        isActive ? 'bg-purple-600 scale-120' : 'bg-slate-900 group-hover:bg-purple-500'
                      }`} />
                      <span className="absolute w-1.5 h-1.5 rounded-full bg-white inset-0 m-auto" />
                    </button>

                    {/* Popover Hovercard info */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/95 backdrop-blur-md text-white p-4 rounded-xl border border-slate-800 shadow-2xl w-56 font-sans pointer-events-auto z-30"
                        >
                          <div className="flex items-center justify-between border-b border-slate-800 pb-1 mb-1.5">
                            <span className="text-[9px] font-mono text-purple-400 font-bold uppercase tracking-widest">{spot.subject}</span>
                            <Info className="w-3.5 h-3.5 text-slate-500" />
                          </div>
                          <h4 className="text-xs font-bold text-white tracking-tight">{spot.title}</h4>
                          <p className="text-[10px] text-slate-400 leading-normal mt-1 font-normal">{spot.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* HUD Status Floating telemetry Panel (Left Overlay) */}
          <div className="absolute left-6 bottom-6 hidden md:flex flex-col space-y-2.5 z-20 pointer-events-none font-mono">
            <div className="bg-slate-950/90 text-white p-4 rounded-2xl border border-slate-800 shadow-xl max-w-[200px]">
              <div className="flex items-center space-x-1.5 border-b border-slate-800 pb-1.5 mb-2">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">NexBot Status</span>
              </div>
              <div className="space-y-1.5">
                {hudStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[8px] text-slate-500 font-bold uppercase">{stat.label}</span>
                    <span className="text-[10px] text-slate-200 font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Navigation Floating Overlays (On top of Interactive Space) */}
          <div className="absolute left-1/2 bottom-5 -translate-x-1/2 z-20 w-[90%] sm:w-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-full justify-center">
              
              <button
                onClick={() => onScrollTo('inquiry')}
                className="flex items-center justify-center space-x-2 bg-slate-950 text-white hover:bg-purple-600 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                id="hero-inquiry-anchor"
              >
                <MessageSquare className="w-3.5 h-3.5 text-purple-300" />
                <span>교육 문의</span>
              </button>

              <button
                onClick={() => onScrollTo('accomplishments')}
                className="flex items-center justify-center space-x-2 bg-white text-slate-800 border border-slate-200 hover:border-purple-600 hover:text-purple-600 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer"
                id="hero-milestones-anchor"
              >
                <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                <span>교육 실적</span>
              </button>

              <button
                onClick={() => onScrollTo('specs')}
                className="flex items-center justify-center space-x-2 bg-white text-slate-800 border border-slate-200 hover:border-purple-600 hover:text-purple-600 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer"
                id="hero-specs-anchor"
              >
                <Layers className="w-3.5 h-3.5 text-purple-600" />
                <span>기기 스펙</span>
              </button>

              <button
                onClick={() => onScrollTo('curriculum')}
                className="flex items-center justify-center space-x-2 bg-white text-slate-800 border border-slate-200 hover:border-purple-600 hover:text-purple-600 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer"
                id="hero-courses-anchor"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                <span>교육 과정</span>
              </button>

            </div>
          </div>
        </div>

        {/* Feature quick ribbon */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl" id="hero-quick-ribbon">
          {[
            { icon: ShieldCheck, title: '테슬라 개념 이식', text: '정교한 액추에이터 및 관절 기하학' },
            { icon: Zap, title: '인지 행동 강화학습', text: '인공신경망 기반 지능 제어 패러다임' },
            { icon: Orbit, title: '디지털 트윈 시뮬레이션', text: 'MuJoCo 기반 초고속 피드백 훈련' },
            { icon: Sparkles, title: '1:1 기기 밀착 연동', text: 'Giga 교육 아기구미 특화 실무 코칭' }
          ].map((item, idx) => (
            <div key={idx} className="flex space-x-3 items-start p-3 bg-white border border-slate-100 rounded-xl">
              <div className="p-2 rounded-lg bg-slate-50 text-purple-600 shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


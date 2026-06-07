/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, Github, Globe, Heart, Shield, Terminal } from 'lucide-react';

interface FooterProps {
  onScrollTo: (elementId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer id="footer" className="bg-slate-950 text-white border-t border-slate-900 relative">
      {/* Visual Accent Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-slate-900" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-900 pb-12 mb-12">
          
          {/* Logo Brand Descriptor */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <Cpu className="w-4 h-4 text-slate-950" />
              </div>
              <div>
                <span className="font-display font-bold text-base tracking-tight text-white block">GIGA EDUCATION</span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-purple-400 font-bold block">
                  김하쿠를 사랑하는 아기구미
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              테슬라 휴머노이드 관절 제어를 교육 공학에 이식하는 전위적인 아카데믹 스쿨. 
              최고 수준의 개발 시뮬레이터 및 실물 NexBot 트랙 연계를 통해, 진정한 기가 인지 지능의 시대를 주조합니다.
            </p>
          </div>

          {/* Quick Links Group */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              교육 아웃라인
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onScrollTo('about')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  김하쿠 브랜드 철학
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('specs')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  NexBot v1.0 혁신 스펙
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('curriculum')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  72주 GIGA 로드맵
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('accomplishments')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  국제 경연 & 실적 로그
                </button>
              </li>
            </ul>
          </div>

          {/* Infrastructure status */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              실무 협진 주체정보
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 flex items-center space-x-2.5">
                <Heart className="w-4 h-4 text-purple-500 animate-pulse" />
                <div className="leading-tight">
                  <p className="font-mono text-[9px] text-slate-500 uppercase font-bold">Main Supervisor</p>
                  <p className="font-semibold text-slate-300 text-xs">김하쿠를 사랑하는 아기구미 연합</p>
                </div>
              </div>

              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 flex items-center space-x-2.5">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <div className="leading-tight">
                  <p className="font-mono text-[9px] text-slate-500 uppercase font-bold">Simulator Core</p>
                  <p className="font-semibold text-slate-300 text-xs">MuJoCo Physics, ROS2 Humble</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copy and legally sound footer bar footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500" id="copyright-bar">
          <p>© 2026 GIGA Robot Education (김하쿠를 사랑하는 아기구미). All Rights Reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 text-slate-500" />
              <span>개인정보 처리방침</span>
            </span>
            <span className="text-slate-700">|</span>
            <span>이용약관</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
